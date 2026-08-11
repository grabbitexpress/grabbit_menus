/**
 * GRABBIT EXPRESS - Pamplemousses Menu Directory Data
 * 
 * Instructions for updating menus:
 * - For external links only (no photos): set type: "link", and update the `link` property.
 * - For Intermart (or PDF files): set type: "pdf", and update the `pdfUrl` property.
 * - For Restaurants with Picture Menus: set type: "images", and update the `images` array with image paths.
 *   Each entry in `images` can be a plain string path, or an object { src, caption } to show a
 *   caption under the photo in the gallery (and on swipe) so customers know what dish it is.
 * - To also offer an external live menu alongside photos (e.g. KFC), keep type: "images" and add
 *   a top-level `link` property — a second "Live Menu" button appears on the card automatically.
 */

const RESTAURANTS_DATA = [
  {
    id: "kfc-mahogany",
    name: "KFC Mahogany",
    category: "fast-food",
    categoryLabel: "Fast Food",
    location: "Mahogany Shopping Promenade, Pamplemousses",
    type: "images",
    images: [
      { src: "assets/photos/kfc-mahogany/1.png", caption: "Crispy Chicken Zinger Burger" },
      { src: "assets/photos/kfc-mahogany/2.png", caption: "Chicken & Fries Bucket" },
      { src: "assets/photos/kfc-mahogany/3.png", caption: "2pc Chicken Meal with Fries & Drink" },
      { src: "assets/photos/kfc-mahogany/4.png", caption: "Crispy Chicken Fillet Wrap" },
      { src: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80", caption: "Crispy Chicken Strips & Dip" },
      { src: "https://images.unsplash.com/photo-1566918214014-a3b3e0132267?auto=format&fit=crop&w=1200&q=80", caption: "Golden Fried Chicken" },
      { src: "https://images.unsplash.com/photo-1629257657047-9b40cd435eb0?auto=format&fit=crop&w=1200&q=80", caption: "Ice-Cold Soft Drink" }
    ],
    link: "https://kfc.mu/menu",
    rating: 4.8,
    eta: "15-25 min",
    tagline: "Finger Lickin' Good Chicken, Buckets, Wraps & Zinger Burgers",
    coverImage: "assets/photos/kfc-mahogany/2.png",
    phone: "+23055198540",
    badge: "Photo & Live Menu",
    description: "Order your favorite KFC meals through Grabbit Express. Browse the photo menu or open the live online menu."
  },
  {
    id: "intermart",
    name: "Intermart Express",
    category: "groceries",
    categoryLabel: "Supermarket & Groceries",
    location: "Mahogany Shopping Promenade, Pamplemousses",
    type: "pdf",
    pdfUrl: "assets/menus/INTERMART.pdf",
    rating: 4.9,
    eta: "20-35 min",
    tagline: "Fresh produce, daily essentials, snacks & imported goods",
    coverImage: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80",
    phone: "+23055198540",
    badge: "PDF Catalog",
    description: "Browse the weekly Intermart promotional catalog & grocery list. Send us your items and we grab them for you!"
  },
  {
    id: "pan-asian",
    name: "Pan Asian",
    category: "asian",
    categoryLabel: "Asian & Noodle Bar",
    location: "Mahogany Promenade, Pamplemousses",
    type: "images",
    images: [
      // Once assets/photos/pan-asian/1.jpg (Noodles Menu board) exists, add it back here as the first entry.
      { src: "https://images.unsplash.com/photo-1621515554656-3da68ba128b1?auto=format&fit=crop&w=1200&q=80", caption: "Fried Noodles" },
      // Once assets/photos/pan-asian/2.jpg (Momo Menu board) exists, add it back here.
      { src: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1200&q=80", caption: "Chicken Momo Dumplings" },
      // Once assets/photos/pan-asian/3.jpg (Chicken/Lamb/Prawns Meal board) exists, add it back here.
      { src: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1200&q=80", caption: "Schezwan Fried Rice with Fried Egg" },
      { src: "https://images.unsplash.com/photo-1707056503922-91c9ebaf0774?auto=format&fit=crop&w=1200&q=80", caption: "Wok-Fried Chicken & Vegetables" }
    ],
    rating: 4.7,
    eta: "20-30 min",
    tagline: "Schezwan Noodles, Chicken Momos & Wok Meals with Fried Egg",
    coverImage: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Steaming Schezwan, Cantonese & Vietnamese noodle bowls, hand-folded chicken, lamb & veggie momos, and hearty wok meals served over rice or noodles with a fried egg on top."
  },
  {
    id: "sushi-park",
    name: "Sushi Park",
    category: "asian",
    categoryLabel: "Asian & Sushi",
    location: "Mahogany Promenade, Pamplemousses",
    type: "images",
    images: [
      "assets/photos/sushi-park/1.png",
      "assets/photos/sushi-park/2.png",
      "assets/photos/sushi-park/3.webp",
      "assets/photos/sushi-park/4.webp",
      "assets/photos/sushi-park/5.webp"
    ],
    rating: 4.9,
    eta: "25-35 min",
    tagline: "Fresh Salmon Nigiri, Dragon Rolls, Tempura & Sashimi Platters",
    coverImage: "assets/photos/sushi-park/1.png",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Premium handcrafted Japanese sushi, sashimi boxes, and maki rolls delivered fresh to your door."
  },
  {
    id: "pappagallo-pizza",
    name: "Pappagallo Pizza",
    category: "pizza-burgers",
    categoryLabel: "Pizza & Italian",
    location: "Pamplemousses",
    type: "images",
    images: [
      "assets/photos/pappagallo-pizza/1.jpg",
      "assets/photos/pappagallo-pizza/2.jpg",
      "assets/photos/pappagallo-pizza/3.jpg",
      "assets/photos/pappagallo-pizza/4.jpg"
    ],
    rating: 4.8,
    eta: "20-30 min",
    tagline: "Wood-Fired Neapolitan Pizza, Fresh Pasta & Garlic Bread",
    coverImage: "assets/photos/pappagallo-pizza/1.jpg",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Crispy crusts, rich mozzarella, artisanal marinara sauce, and savory Italian specialties."
  },
  {
    id: "burgery",
    name: "Burgery",
    category: "pizza-burgers",
    categoryLabel: "Gourmet Burgers",
    location: "Mahogany Promenade, Pamplemousses",
    type: "images",
    images: [
      { src: "assets/photos/burgery/2.webp", caption: "Premium Limited Edition — Wagyu & Angus Burgers" },
      { src: "assets/photos/burgery/1.webp", caption: "Burger Menu — Flavours & Prices" },
      { src: "assets/photos/burgery/4.webp", caption: "Pasta La Vista — Tagliatelle, Penne & Spaghetti" },
      { src: "assets/photos/burgery/3.webp", caption: "Drinks Menu — Mocktails & Mojitos" },
      { src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=1200&q=80", caption: "Smash Cheeseburger" },
      { src: "https://images.unsplash.com/photo-1598679253544-2c97992403ea?auto=format&fit=crop&w=1200&q=80", caption: "Crispy Fries" },
      { src: "https://images.unsplash.com/photo-1653085315536-1379bc836161?auto=format&fit=crop&w=1200&q=80", caption: "Thick Milkshake" }
    ],
    rating: 4.8,
    eta: "15-25 min",
    tagline: "Smash Burgers, Pasta La Vista, Truffle Fries & Thick Milkshakes",
    coverImage: "assets/photos/burgery/2.webp",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Juicy 100% Angus & Wagyu beef patties smashed to perfection, creamy Pasta La Vista, loaded truffle fries, and thick craft milkshakes."
  },
  {
    id: "takos",
    name: "Tacos",
    category: "fast-food",
    categoryLabel: "Mexican & Tacos",
    location: "Pamplemousses",
    type: "images",
    images: [
      { src: "https://images.unsplash.com/photo-1731090389603-d63060ee08a6?auto=format&fit=crop&w=1200&q=80", caption: "Loaded Burrito" },
      { src: "https://images.unsplash.com/photo-1609530127564-bee93ebe1c9e?auto=format&fit=crop&w=1200&q=80", caption: "Cheesy Loaded Fries" },
      { src: "https://images.unsplash.com/photo-1671572579845-52270341950f?auto=format&fit=crop&w=1200&q=80", caption: "Loaded Wrap" }
    ],
    rating: 4.6,
    eta: "15-25 min",
    tagline: "Loaded Burritos, Cheesy Quesadillas, Tacos & Nachos",
    coverImage: "https://images.unsplash.com/photo-1731090389603-d63060ee08a6?auto=format&fit=crop&w=800&q=80",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Bold Mexican flavors — birria tacos, loaded burritos, guacamole, and crispy churros."
  },
  {
    id: "eaters",
    name: "Eaters",
    category: "fast-food",
    categoryLabel: "Diner & Street Food",
    location: "Pamplemousses",
    type: "images",
    images: [
      "assets/photos/eaters/boulettes.jpg",
      "assets/photos/eaters/noodles_fried.jpg",
      "assets/photos/eaters/noodles_boiled.jpg"
    ],
    rating: 4.6,
    eta: "20-30 min",
    tagline: "Boulette Soup, Fried & Boiled Noodles, Mauritian Street Food",
    coverImage: "assets/photos/eaters/boulettes.jpg",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Mauritian street-food favorite — steaming boulette dumpling soup, mine frite (fried noodles) and mine bouilli (boiled noodles), made fresh to order."
  },
  {
    id: "mahek",
    name: "Mahek",
    category: "indian",
    categoryLabel: "Indian & Tandoor",
    location: "Pamplemousses",
    type: "images",
    images: [
      { src: "https://images.unsplash.com/photo-1705174427925-744646e72117?auto=format&fit=crop&w=1200&q=80", caption: "Butter Chicken" },
      { src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1200&q=80", caption: "Fragrant Dum Biryani" },
      { src: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?auto=format&fit=crop&w=1200&q=80", caption: "Garlic Naan" }
    ],
    rating: 4.8,
    eta: "25-35 min",
    tagline: "Rich Butter Chicken, Garlic Naan & Fragrant Dum Biryanis",
    coverImage: "https://images.unsplash.com/photo-1705174427925-744646e72117?auto=format&fit=crop&w=800&q=80",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Classic North and South Indian specialties prepared with aromatic spices and clay tandoor ovens."
  },
  {
    id: "aromas-of-india",
    name: "Aromas of India",
    category: "indian",
    categoryLabel: "Indian Cuisine",
    location: "Mahogany Promenade, Pamplemousses",
    type: "images",
    images: [
      "assets/photos/aromas-of-india/1.jpg",
      "assets/photos/aromas-of-india/2.jpg"
    ],
    rating: 4.9,
    eta: "25-35 min",
    tagline: "Authentic Indian Curries, Paneer Tikka, Samosas & Thalis",
    coverImage: "assets/photos/aromas-of-india/1.jpg",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Royal Indian recipes, vegetarian options, crispy tikka starters, and rich curry sauces."
  },
  {
    id: "manjoo",
    name: "Manjoo",
    category: "retail",
    categoryLabel: "Home Décor & Household",
    location: "Pamplemousses",
    type: "images",
    images: [
      "assets/photos/manjoo/8.jpg",
      "assets/photos/manjoo/5.jpg",
      "assets/photos/manjoo/6.jpg",
      "assets/photos/manjoo/7.jpg",
      "assets/photos/manjoo/3.jpg",
      "assets/photos/manjoo/1.jpg",
      "assets/photos/manjoo/2.jpg",
      "assets/photos/manjoo/4.jpg"
    ],
    rating: 4.7,
    eta: "20-30 min",
    tagline: "Decor, Fragrances, Table & Kitchen Essentials for the Home",
    coverImage: "assets/photos/manjoo/8.jpg",
    phone: "+23055198540",
    badge: "Photo Catalog",
    description: "Mauritius' trusted home décor & household store since 1919 — tablecloths, food containers, clocks, pencil holders, artificial flowers, fragrance sprays & decor, plus curtains, rugs, bedding & kitchenware. Send us your list and we grab it for you!"
  },
  {
    id: "artisan-coffee",
    name: "Artisan Coffee",
    category: "cafe",
    categoryLabel: "Cafe & Bakery",
    location: "Mahogany Promenade, Pamplemousses",
    type: "images",
    images: [
      "assets/photos/artisan-coffee/1.png",
      "assets/photos/artisan-coffee/2.png",
      "assets/photos/artisan-coffee/3.png",
      "assets/photos/artisan-coffee/4.png",
      "assets/photos/artisan-coffee/5.png",
      "assets/photos/artisan-coffee/6.jpg"
    ],
    rating: 4.9,
    eta: "10-20 min",
    tagline: "Specialty Espresso, Fresh Croissants, Pastries & Iced Matcha",
    coverImage: "assets/photos/artisan-coffee/1.png",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Freshly roasted coffee beans, artisanal French croissants, cakes, and refreshing iced brews."
  }
];

const CATEGORIES = [
  { id: "all", label: "All Venues", icon: "fa-border-all" },
  { id: "fast-food", label: "Fast Food & Tacos", icon: "fa-burger" },
  { id: "pizza-burgers", label: "Pizza & Burgers", icon: "fa-pizza-slice" },
  { id: "asian", label: "Asian & Sushi", icon: "fa-bowl-rice" },
  { id: "indian", label: "Indian & Tandoor", icon: "fa-pepper-hot" },
  { id: "cafe", label: "Cafe & Bakery", icon: "fa-mug-hot" },
  { id: "groceries", label: "Groceries", icon: "fa-cart-shopping" },
  { id: "retail", label: "Retail & Shops", icon: "fa-store" }
];

const GRABBIT_WHATSAPP_NUMBER = "23055198540";

const WHATSAPP_INTRO = `Hey there! Welcome to Grabbit Express, Mauritius' first 100% electric on-demand delivery service. What would you like to order? We're happy to grab it for you!`;

// Node/serverless consumers (e.g. api/menu.js) can `require()` this file;
// browsers loading it via <script> ignore this block since `module` is undefined there.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { RESTAURANTS_DATA, CATEGORIES, GRABBIT_WHATSAPP_NUMBER, WHATSAPP_INTRO };
}
