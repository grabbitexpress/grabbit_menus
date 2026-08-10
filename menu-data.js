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
    coverImage: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?auto=format&fit=crop&w=800&q=80",
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
    pdfUrl: "assets/menus/intermart-catalog.pdf",
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
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    eta: "25-35 min",
    tagline: "Fresh Salmon Nigiri, Dragon Rolls, Tempura & Sashimi Platters",
    coverImage: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    eta: "20-30 min",
    tagline: "Wood-Fired Neapolitan Pizza, Fresh Pasta & Garlic Bread",
    coverImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    eta: "15-25 min",
    tagline: "Smash Burgers, Truffle Fries, Crispy Chicken & Thick Milkshakes",
    coverImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.6,
    eta: "15-25 min",
    tagline: "Loaded Burritos, Cheesy Quesadillas, Tacos & Nachos",
    coverImage: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    eta: "25-35 min",
    tagline: "Authentic Indian Curries, Paneer Tikka, Samosas & Thalis",
    coverImage: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Royal Indian recipes, vegetarian options, crispy tikka starters, and rich curry sauces."
  },
  {
    id: "manjo",
    name: "Manjo",
    category: "fast-food",
    categoryLabel: "Local & Fusion",
    location: "Pamplemousses",
    type: "images",
    images: [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    eta: "15-25 min",
    tagline: "Mauritian Street Eats, Fried Noodle Bowls & Fresh Salad Wraps",
    coverImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    phone: "+23055198540",
    badge: "Photo Menu",
    description: "Delicious local fusion meals, fresh healthy bowls, and island comfort dishes."
  },
  {
    id: "artisan-coffee",
    name: "Artisan Coffee",
    category: "cafe",
    categoryLabel: "Cafe & Bakery",
    location: "Mahogany Promenade, Pamplemousses",
    type: "images",
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    eta: "10-20 min",
    tagline: "Specialty Espresso, Fresh Croissants, Pastries & Iced Matcha",
    coverImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
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
  { id: "retail", label: "Electronics & Tech", icon: "fa-plug" }
];
