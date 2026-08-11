/**
 * GET /menu/:id  (rewritten to /api/menu-page?id=:id, see vercel.json)
 *
 * Server-rendered, standalone menu page for a single venue — a real,
 * shareable URL (no click-to-open popup) suitable for linking directly
 * from a WhatsApp ordering agent. Includes Open Graph tags so the link
 * unfurls with a photo + description when shared in chat.
 */

const { RESTAURANTS_DATA, GRABBIT_WHATSAPP_NUMBER } = require("../menu-data.js");

function escapeHtml(str) {
  return String(str || "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function toAbsoluteUrl(path, baseUrl) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path, baseUrl).toString();
}

function getImageSrc(img) {
  return typeof img === "string" ? img : img.src;
}

function getImageCaption(img) {
  return typeof img === "string" ? "" : (img.caption || "");
}

function notFoundPage(id) {
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8" />
<title>Venue not found — Grabbit Express</title>
<meta name="robots" content="noindex" />
<link rel="stylesheet" href="/styles.css" /></head>
<body style="display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:40px;">
<div>
<h1 style="font-family:var(--font-display);margin-bottom:12px;">Venue not found</h1>
<p style="color:var(--text-muted);margin-bottom:24px;">No venue with id "${escapeHtml(id)}".</p>
<a href="/" class="btn-main" style="display:inline-flex;">Back to all venues</a>
</div>
</body></html>`;
}

function renderMenuBody(venue, baseUrl) {
  if (venue.type === "images" && (venue.images || []).length) {
    const items = venue.images.map((img) => {
      const src = toAbsoluteUrl(getImageSrc(img), baseUrl);
      const caption = getImageCaption(img);
      return `
        <figure class="menu-page-photo">
          <img src="${escapeHtml(src)}" alt="${escapeHtml(caption || venue.name)}" loading="lazy" />
          ${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}
        </figure>`;
    }).join("");
    return `<div class="menu-page-gallery">${items}</div>`;
  }

  if (venue.type === "pdf" && venue.pdfUrl) {
    const pdfUrl = toAbsoluteUrl(venue.pdfUrl, baseUrl);
    return `
      <div class="menu-page-pdf">
        <iframe src="${escapeHtml(pdfUrl)}" title="${escapeHtml(venue.name)} menu PDF"></iframe>
        <a href="${escapeHtml(pdfUrl)}" download class="btn-ghost menu-page-download">
          <i class="fa-solid fa-download"></i> Download PDF
        </a>
      </div>`;
  }

  return "";
}

module.exports = (req, res) => {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const baseUrl = `${proto}://${req.headers.host}/`;

  const id = (req.query || {}).id;
  const venue = RESTAURANTS_DATA.find((v) => v.id === id);

  if (!venue) {
    res.status(404).setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(notFoundPage(id));
    return;
  }

  const coverImage = toAbsoluteUrl(venue.coverImage, baseUrl);
  const pageUrl = `${baseUrl}menu/${venue.id}`;
  const waMsg = encodeURIComponent(
    `Hi Grabbit Express. I would love to order [ ] from ${venue.name} (${venue.location}). Thank you!`
  );
  const orderWhatsappUrl = `https://wa.me/${GRABBIT_WHATSAPP_NUMBER}?text=${waMsg}`;

  const liveMenuButton = venue.link
    ? `<a href="${escapeHtml(venue.link)}" target="_blank" class="btn-ghost menu-page-live">
         <i class="fa-solid fa-arrow-up-right-from-square"></i> View Live Menu
       </a>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(venue.name)} Menu — Grabbit Express</title>
  <meta name="description" content="${escapeHtml(venue.description)}" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="${escapeHtml(venue.name)} — ${escapeHtml(venue.tagline)}" />
  <meta property="og:description" content="${escapeHtml(venue.description)}" />
  ${coverImage ? `<meta property="og:image" content="${escapeHtml(coverImage)}" />` : ""}
  <meta property="og:url" content="${escapeHtml(pageUrl)}" />
  <meta name="twitter:card" content="summary_large_image" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Syne:wght@600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <header class="navbar">
    <a href="/" class="nav-brand" style="text-decoration:none;">
      <img src="/assets/logo.png" alt="Grabbit Express Logo" class="brand-logo" />
      <div class="brand-text">
        <div class="brand-title">Grabbit<span>.</span></div>
        <span class="brand-tag">Pamplemousses Menu Hub</span>
      </div>
    </a>
    <div class="nav-actions">
      <a href="/" class="btn-ghost"><i class="fa-solid fa-arrow-left"></i><span>All Venues</span></a>
    </div>
  </header>

  <main class="menu-page">
    <div class="menu-page-head">
      <div class="menu-page-cat">${escapeHtml(venue.categoryLabel)}</div>
      <h1 class="menu-page-title">${escapeHtml(venue.name)}</h1>
      <p class="menu-page-tagline">${escapeHtml(venue.tagline)}</p>
      <div class="menu-page-meta">
        <span><i class="fa-solid fa-star"></i> ${escapeHtml(venue.rating)}</span>
        <span><i class="fa-regular fa-clock"></i> ${escapeHtml(venue.eta)}</span>
        <span><i class="fa-solid fa-location-dot"></i> ${escapeHtml(venue.location)}</span>
      </div>
      <p class="menu-page-desc">${escapeHtml(venue.description)}</p>

      <div class="menu-page-actions">
        <a href="${escapeHtml(orderWhatsappUrl)}" target="_blank" class="btn-main">
          <i class="fa-brands fa-whatsapp"></i><span>Order on WhatsApp</span>
        </a>
        ${liveMenuButton}
      </div>
    </div>

    ${renderMenuBody(venue, baseUrl)}
  </main>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand"><img src="/assets/logo.png" alt="Grabbit Express" class="footer-logo" /></div>
      <a href="mailto:support@grabbit-express.com" class="footer-email">
        <i class="fa-solid fa-envelope"></i><span>Questions or enquiries? support@grabbit-express.com</span>
      </a>
      <div class="footer-copy">&copy; 2026 Grabbit Express • Pamplemousses Menu Directory</div>
    </div>
  </footer>
</body>
</html>`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=300, s-maxage=300");
  res.status(200).send(html);
};
