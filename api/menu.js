/**
 * GET /api/menu
 *
 * Machine-readable feed of every Grabbit Express venue, for the ordering
 * bot / AI agent to consume — image URLs, menu links, WhatsApp deep links,
 * and descriptive metadata for each venue.
 *
 * Query params:
 *   ?format=markdown | ?format=md   -> returns text/markdown instead of JSON
 *   ?category=<id>                  -> filter to one CATEGORIES id (e.g. "indian")
 *   ?id=<venueId>                   -> return a single venue by id
 */

const { RESTAURANTS_DATA, CATEGORIES, GRABBIT_WHATSAPP_NUMBER } = require("../menu-data.js");

function toAbsoluteUrl(path, baseUrl) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path, baseUrl).toString();
}

function menuUrlFor(venue, baseUrl) {
  // Every venue gets a real, shareable, non-popup page at /menu/:id
  // (see api/menu-page.js) — safe to link directly from a WhatsApp agent.
  return new URL(`menu/${venue.id}`, baseUrl).toString();
}

function imageEntryFor(img, baseUrl) {
  const src = typeof img === "string" ? img : img.src;
  const caption = typeof img === "string" ? null : (img.caption || null);
  return { url: toAbsoluteUrl(src, baseUrl), caption };
}

function orderWhatsappUrlFor(venue) {
  const text = `Hi Grabbit Express. I would love to order [ ] from ${venue.name} (${venue.location}). Thank you!`;
  return `https://wa.me/${GRABBIT_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function buildVenue(venue, baseUrl) {
  return {
    id: venue.id,
    title: venue.name,
    description: venue.description,
    tagline: venue.tagline,
    category: venue.category,
    categoryLabel: venue.categoryLabel,
    location: venue.location,
    rating: venue.rating,
    etaMinutes: venue.eta,
    badge: venue.badge,
    imageUrl: toAbsoluteUrl(venue.coverImage, baseUrl),
    images: (venue.images || []).map((img) => imageEntryFor(img, baseUrl)),
    menuType: venue.type,
    menuUrl: menuUrlFor(venue, baseUrl),
    liveMenuUrl: venue.link || null,
    orderWhatsappUrl: orderWhatsappUrlFor(venue),
    orderPhone: venue.phone,
    siteUrl: baseUrl,
  };
}

function toMarkdown(venues, business) {
  const lines = [`# ${business.name} — Venue Directory`, "", `_${business.area}_`, ""];
  for (const v of venues) {
    lines.push(`## ${v.title}`);
    lines.push("");
    if (v.imageUrl) lines.push(`![${v.title}](${v.imageUrl})`, "");
    lines.push(`**Category:** ${v.categoryLabel}  `);
    lines.push(`**Location:** ${v.location}  `);
    lines.push(`**Rating:** ${v.rating} · **ETA:** ${v.etaMinutes}`);
    lines.push("");
    if (v.description) lines.push(v.description, "");
    if (v.menuUrl) lines.push(`- Menu: ${v.menuUrl}`);
    if (v.liveMenuUrl) lines.push(`- Live Menu: ${v.liveMenuUrl}`);
    if (v.images.length) {
      lines.push(`- Photos: ${v.images.map((img) => img.caption ? `${img.url} (${img.caption})` : img.url).join(", ")}`);
    }
    lines.push(`- Order via WhatsApp: ${v.orderWhatsappUrl}`);
    lines.push(`- Phone: ${v.orderPhone}`);
    lines.push("", "---", "");
  }
  return lines.join("\n");
}

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  const proto = req.headers["x-forwarded-proto"] || "https";
  const baseUrl = `${proto}://${req.headers.host}/`;

  const { format, category, id } = req.query || {};

  let venues = RESTAURANTS_DATA.map((v) => buildVenue(v, baseUrl));

  if (category) venues = venues.filter((v) => v.category === category);
  if (id) venues = venues.filter((v) => v.id === id);

  const business = {
    name: "Grabbit Express",
    area: "Pamplemousses & Mahogany Shopping Promenade, Mauritius",
    whatsapp: `+${GRABBIT_WHATSAPP_NUMBER}`,
    updatedAt: new Date().toISOString(),
  };

  if (format === "markdown" || format === "md") {
    res.setHeader("Content-Type", "text/markdown; charset=utf-8");
    res.status(200).send(toMarkdown(venues, business));
    return;
  }

  if (id && venues.length === 0) {
    res.status(404).json({ error: `No venue with id "${id}"` });
    return;
  }

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).json({
    business,
    categories: CATEGORIES,
    count: venues.length,
    venues: id ? venues[0] : venues,
  });
};
