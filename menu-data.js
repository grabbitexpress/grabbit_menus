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
    logo: "assets/logos/kfc.png",
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
      { src: "https://images.unsplash.com/photo-1629257657047-9b40cd435eb0?auto=format&fit=crop&w=1200&q=80", caption: "Ice-Cold Soft Drink" },
      { src: "https://images.unsplash.com/photo-1703219342329-fce8488cf443?auto=format&fit=crop&w=1200&q=80", caption: "Crispy Chicken Sandwich" },
      { src: "https://images.unsplash.com/photo-1633436375153-d7045cb93e38?auto=format&fit=crop&w=1200&q=80", caption: "Mashed Potato & Gravy" },
      { src: "https://images.unsplash.com/photo-1537784969314-05a37106f68e?auto=format&fit=crop&w=1200&q=80", caption: "Fresh Coleslaw" }
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
    logo: "assets/logos/intermart.jpg",
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
      { src: "https://images.unsplash.com/photo-1707056503922-91c9ebaf0774?auto=format&fit=crop&w=1200&q=80", caption: "Wok-Fried Chicken & Vegetables" },
      { src: "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?auto=format&fit=crop&w=1200&q=80", caption: "Steamed Dim Sum" },
      { src: "https://images.unsplash.com/photo-1707546944460-dda9069b9c1e?auto=format&fit=crop&w=1200&q=80", caption: "Pad Thai" },
      { src: "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?auto=format&fit=crop&w=1200&q=80", caption: "Crispy Spring Rolls" },
      { src: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?auto=format&fit=crop&w=1200&q=80", caption: "Thai Curry" },
      { src: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1200&q=80", caption: "Ramen Noodle Bowl" },
      { src: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=1200&q=80", caption: "Asian Noodle Bowl" }
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
    logo: "assets/logos/sushi-park.jpg",
    category: "asian",
    categoryLabel: "Asian & Sushi",
    location: "Mahogany Promenade, Pamplemousses",
    type: "images",
    images: [
      "assets/photos/sushi-park/1.png",
      "assets/photos/sushi-park/2.png",
      "assets/photos/sushi-park/3.webp",
      "assets/photos/sushi-park/4.webp",
      "assets/photos/sushi-park/5.webp",
      { src: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80", caption: "Assorted Sushi Selection" },
      { src: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1200&q=80", caption: "Fresh Salmon & Avocado Sushi" },
      { src: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=1200&q=80", caption: "Sushi Platter" },
      { src: "https://images.unsplash.com/photo-1709984110217-57d7d18e5299?auto=format&fit=crop&w=1200&q=80", caption: "Salmon & Avocado Roll Tray" },
      { src: "https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=1200&q=80", caption: "Sashimi Board" }
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
      "assets/photos/pappagallo-pizza/4.jpg",
      { src: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=1200&q=80", caption: "Fresh Basil Pizza" },
      { src: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=1200&q=80", caption: "Pepperoni Pizza Slice" },
      { src: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=1200&q=80", caption: "Cheese & Tomato Pizza" },
      { src: "https://images.unsplash.com/photo-1692737580547-b45bb4a02356?auto=format&fit=crop&w=1200&q=80", caption: "Wood-Fired Pepperoni Pizza" },
      { src: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=1200&q=80", caption: "Garlic Bread" },
      { src: "https://images.unsplash.com/photo-1724116379273-ba32b70d112c?auto=format&fit=crop&w=1200&q=80", caption: "Tiramisu" }
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
    logo: "assets/logos/burgery.jpg",
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
      { src: "https://images.unsplash.com/photo-1653085315536-1379bc836161?auto=format&fit=crop&w=1200&q=80", caption: "Thick Milkshake" },
      { src: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=1200&q=80", caption: "Crispy Onion Rings" },
      { src: "https://images.unsplash.com/photo-1637273484026-11d51fb64024?auto=format&fit=crop&w=1200&q=80", caption: "Crispy Chicken Wings" },
      { src: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=1200&q=80", caption: "Crispy Fried Chicken" }
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
    logo: "assets/logos/tacos.jpg",
    category: "fast-food",
    categoryLabel: "Mexican & Tacos",
    location: "Pamplemousses",
    type: "images",
    images: [
      { src: "https://images.unsplash.com/photo-1731090389603-d63060ee08a6?auto=format&fit=crop&w=1200&q=80", caption: "Loaded Burrito" },
      { src: "https://images.unsplash.com/photo-1609530127564-bee93ebe1c9e?auto=format&fit=crop&w=1200&q=80", caption: "Cheesy Loaded Fries" },
      { src: "https://images.unsplash.com/photo-1671572579845-52270341950f?auto=format&fit=crop&w=1200&q=80", caption: "Loaded Wrap" },
      { src: "https://images.unsplash.com/photo-1648437595587-e6a8b0cdf1f9?auto=format&fit=crop&w=1200&q=80", caption: "Street Tacos" },
      { src: "https://images.unsplash.com/photo-1719957770167-bb66133ba808?auto=format&fit=crop&w=1200&q=80", caption: "Quesadilla" },
      { src: "https://images.unsplash.com/photo-1570466199120-80bba1eabad7?auto=format&fit=crop&w=1200&q=80", caption: "Loaded Nachos" },
      { src: "https://images.unsplash.com/photo-1680992071073-cb1696ba8d3e?auto=format&fit=crop&w=1200&q=80", caption: "Guacamole & Tortilla Chips" },
      { src: "https://images.unsplash.com/photo-1767489386700-cb3dbcbab13d?auto=format&fit=crop&w=1200&q=80", caption: "Churros" },
      { src: "https://images.unsplash.com/photo-1634233822146-5cd9c24fdab0?auto=format&fit=crop&w=1200&q=80", caption: "Chips & Salsa" },
      { src: "https://images.unsplash.com/photo-1602881916963-5daf2d97c06e?auto=format&fit=crop&w=1200&q=80", caption: "Corn & Tomato Salsa" }
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
      "assets/photos/eaters/noodles_boiled.jpg",
      { src: "https://images.unsplash.com/photo-1763994685090-c0927ff195d1?auto=format&fit=crop&w=1200&q=80", caption: "Dumpling Soup" },
      { src: "https://images.unsplash.com/photo-1631709497146-a239ef373cf1?auto=format&fit=crop&w=1200&q=80", caption: "Noodle Soup" },
      { src: "https://images.unsplash.com/photo-1731460202531-bf8389d565f7?auto=format&fit=crop&w=1200&q=80", caption: "Noodle Soup" },
      { src: "https://images.unsplash.com/photo-1584003397078-45ef96d6174d?auto=format&fit=crop&w=1200&q=80", caption: "Noodle Soup" },
      { src: "https://images.unsplash.com/photo-1605311525808-ea0daef137b7?auto=format&fit=crop&w=1200&q=80", caption: "Noodle Soup" },
      { src: "https://images.unsplash.com/photo-1638502338747-f7f368214cce?auto=format&fit=crop&w=1200&q=80", caption: "Steamed Dumplings" }
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
      { src: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?auto=format&fit=crop&w=1200&q=80", caption: "Garlic Naan" },
      { src: "https://images.unsplash.com/photo-1727280376746-b89107a5b0df?auto=format&fit=crop&w=1200&q=80", caption: "Tandoori Chicken" },
      { src: "https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?auto=format&fit=crop&w=1200&q=80", caption: "Chicken Curry" },
      { src: "https://images.unsplash.com/photo-1767114915936-745dd372f1d8?auto=format&fit=crop&w=1200&q=80", caption: "Palak Paneer" },
      { src: "https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?auto=format&fit=crop&w=1200&q=80", caption: "Gulab Jamun" },
      { src: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=1200&q=80", caption: "Mango Lassi" },
      { src: "https://images.unsplash.com/photo-1736680056444-02b10f16a245?auto=format&fit=crop&w=1200&q=80", caption: "Dal Makhani" }
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
    logo: "assets/logos/aromas-of-india.jpg",
    category: "indian",
    categoryLabel: "Indian Cuisine",
    location: "Mahogany Promenade, Pamplemousses",
    type: "images",
    images: [
      { src: "assets/photos/aromas-of-india/1.jpg", caption: "Aromas of India Restaurant" },
      { src: "assets/photos/aromas-of-india/2.jpg", caption: "Paneer Tikka Biryani" },
      { src: "https://images.unsplash.com/photo-1767469576715-a4eb8bcfa204?auto=format&fit=crop&w=1200&q=80", caption: "Crispy Samosas" },
      { src: "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?auto=format&fit=crop&w=1200&q=80", caption: "Paneer Tikka Skewers" },
      { src: "https://images.unsplash.com/photo-1742281257687-092746ad6021?auto=format&fit=crop&w=1200&q=80", caption: "Traditional Indian Thali" },
      { src: "https://images.unsplash.com/photo-1633030318854-b076ff72770f?auto=format&fit=crop&w=1200&q=80", caption: "Fresh Naan Bread" },
      { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80", caption: "Chicken Curry" },
      { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80", caption: "Chicken Curry with Roti" },
      { src: "https://images.unsplash.com/photo-1765360024320-b2ab819c6f75?auto=format&fit=crop&w=1200&q=80", caption: "Crispy Chicken Pakoras" }
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
    logo: "assets/logos/manjoo.jpg",
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
    logo: "assets/logos/artisan-coffee.png",
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
      "assets/photos/artisan-coffee/6.jpg",
      { src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80", caption: "Handcrafted Latte Art" },
      { src: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=1200&q=80", caption: "Fresh Croissants" },
      { src: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=1200&q=80", caption: "Iced Coffee" },
      { src: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80", caption: "Cake Slice" }
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

const WHATSAPP_INTRO = `Hi Grabbit Express. I would love to place an order. Thank you!`;

// Node/serverless consumers (e.g. api/menu.js) can `require()` this file;
// browsers loading it via <script> ignore this block since `module` is undefined there.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { RESTAURANTS_DATA, CATEGORIES, GRABBIT_WHATSAPP_NUMBER, WHATSAPP_INTRO };
}
