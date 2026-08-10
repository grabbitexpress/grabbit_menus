/**
 * GRABBIT EXPRESS - Pamplemousses Menu Directory Data
 * 
 * Instructions for updating menus:
 * - For KFC Mahogany (or external links): set type: "link", and update the `link` property.
 * - For Intermart (or PDF files): set type: "pdf", and update the `pdfUrl` property.
 * - For Restaurants with Picture Menus: set type: "images", and update the `images` array with image paths.
 */

const RESTAURANTS_DATA = [
  {
    id: "kfc-mahogany",
    name: "KFC Mahogany",
    category: "fast-food",
    categoryLabel: "Fast Food",
    location: "Mahogany Shopping Promenade, Pamplemousses",
    type: "link",
    link: "https://kfc.mu/menu",
    rating: 4.8,
    eta: "15-25 min",
    tagline: "Finger Lickin' Good Chicken, Buckets, Wraps & Zinger Burgers",
    coverImage: "assets/photos/kfc-mahogany/2.png",
    phone: "+23055198540",
    badge: "Official Link",
    description: "Order your favorite KFC meals through Grabbit Express. Click to view the live online menu."
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
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    eta: "20-30 min",
    tagline: "Authentic Wok Noodle Bowls, Dim Sum & Thai Curries",
    coverImage: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Flavors from across Asia — pad thai, ramen, steamed dumplings, and sizzling Szechuan dishes."
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
      "assets/photos/burgery/2.webp",
      "assets/photos/burgery/1.webp"
    ],
    rating: 4.8,
    eta: "15-25 min",
    tagline: "Smash Burgers, Truffle Fries, Crispy Chicken & Thick Milkshakes",
    coverImage: "assets/photos/burgery/2.webp",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Juicy 100% Angus beef patties smashed to perfection, loaded fries, and craft milkshakes."
  },
  {
    id: "takos",
    name: "Takos",
    category: "fast-food",
    categoryLabel: "Mexican & Tacos",
    location: "Pamplemousses",
    type: "images",
    images: [
      "assets/photos/takos/1.jpg",
      "assets/photos/takos/2.jpg",
      "assets/photos/takos/3.jpg"
    ],
    rating: 4.6,
    eta: "15-25 min",
    tagline: "Loaded Burritos, Cheesy Quesadillas, Tacos & Nachos",
    coverImage: "assets/photos/takos/1.jpg",
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
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.6,
    eta: "20-30 min",
    tagline: "Grilled Paninis, Loaded Subs, Bowls & Comfort Bites",
    coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Casual dining favorite serving hearty sandwiches, grilled wraps, and quick bites."
  },
  {
    id: "mahek",
    name: "Mahek",
    category: "indian",
    categoryLabel: "Indian & Tandoor",
    location: "Pamplemousses",
    type: "images",
    images: [
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    eta: "25-35 min",
    tagline: "Rich Butter Chicken, Garlic Naan & Fragrant Dum Biryanis",
    coverImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
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
      "assets/photos/aromas-of-india/3.jpg",
      "assets/photos/aromas-of-india/4.jpg",
      "assets/photos/aromas-of-india/5.jpg",
      "assets/photos/aromas-of-india/2.jpg",
      "assets/photos/aromas-of-india/6.jpg"
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
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    eta: "20-30 min",
    tagline: "Curtains, Rugs, Bedding, Kitchen & Household Accessories",
    coverImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    phone: "+23055198540",
    badge: "Photo Catalog",
    description: "Mauritius' trusted home décor & household store since 1919 — curtains, rugs, bedding, kitchen & bathroom accessories. Send us your list and we grab it for you!"
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
  },
  {
    id: "electronics-shop",
    name: "Electronics Shop",
    category: "retail",
    categoryLabel: "Tech & Accessories",
    location: "Mahogany Promenade, Pamplemousses",
    type: "images",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    eta: "20-30 min",
    tagline: "Chargers, Power Banks, Earbuds, Cables & Tech Accessories",
    coverImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    phone: "+23055198540",
    badge: "Photo Catalog",
    description: "Need phone chargers, adapters, headphones or mobile gear urgently? We pick up and deliver same-day."
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
