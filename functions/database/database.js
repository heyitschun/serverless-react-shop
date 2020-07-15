// We are not making any API calls to a real database.
// These are just mock products.
const faker = require("faker");


module.exports.findOne = (key, value, arr) => {
  let result = arr.find(x => x.id === value);
  return result
}

module.exports.products = [
  {
    id: "1",
    name: "DEIRDRA Coat",
    category: "clothing",
    title: "Super comfortable coat for the fall.",
    description: faker.lorem.paragraph(),
    price: 390,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/alexandru-zdrobau-1-unsplash.jpg",
    credits: "Alexandru Zdrobau"
  },
  {
    id: "2",
    name: "SHIELA Coat",
    category: "clothing",
    title: "Playful but elegent light blue coat.",
    description: faker.lorem.paragraph(),
    price: 859,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/alexi-romano-1-unsplash.jpg",
    credits: "Alexi Romano"
  },
  {
    id: "3",
    name: "KEELTY Hoodie",
    category: "clothing",
    title: "Who doesn't love a gray hoodie?",
    description: faker.lorem.paragraph(),
    price: 229,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/christopher-campbell-1-unsplash.jpg",
    credits: "Christopher Campbell"
  },
  {
    id: "4",
    name: "CONNLEY Set",
    category: "clothing",
    title: "Tattoos not included.",
    description: faker.lorem.paragraph(),
    price: 239,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/brunel-johnson-1-unsplash.jpg",
    credits: "Brunel Johnson"
  },
  {
    id: "5",
    name: "KIERA Tracksuit",
    category: "clothing",
    title: "Yellow tracksuit. Nobody's gonna see you in this.",
    description: faker.lorem.paragraph(),
    price: 399,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/dom-hill-1-unsplash.jpg",
    credits: "Dom Hill"
  },
  {
    id: "6",
    name: "ETHNA Top",
    category: "clothing",
    title: "Cool navy blue top.",
    description: faker.lorem.paragraph(),
    price: 420,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/napat-seang-1-unsplash.jpg",
    credits: "Napat Saeng"
  },
  {
    id: "7",
    name: "ASHLING Dress",
    category: "clothing",
    title: "It's a pink dress with flowers on it.",
    description: faker.lorem.paragraph(),
    price: 219,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/flaunter-1-unsplash.jpg",
    credits: "Flaunter"
  },
  {
    id: "8",
    name: "MURROUGH Jacket",
    category: "clothing",
    title: "A stylish brown leather jacket is for all seasons.",
    description: faker.lorem.paragraph(),
    price: 459,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/dami-adebayo-1-unsplash.jpg",
    credits: "Dami Adebayo"
  },
  {
    id: "9",
    name: "CIARA T-shirt",
    category: "clothing",
    title: "Basic striped t-shirt.",
    description: faker.lorem.paragraph(),
    price: 99,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/daniel-monteiro-1-unsplash.jpg",
    credits: "Daniel Monteiro"
  },
  {
    id: "10",
    name: "NIALL Bag",
    category: "accessories",
    title: "Sturder brown leather bag.",
    description: faker.lorem.paragraph(),
    price: 619,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/jan-de-keijzer-1-unsplash.jpg",
    credits: "Jan de Keijzer"
  },
  {
    id: "11",
    name: "NORENE Dress",
    category: "clothing",
    title: "Perfect dress for the summer.",
    description: faker.lorem.paragraph(),
    price: 229,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/tamara-bellis-1-unsplash.jpg",
    credits: "Tamara Bellis"
  },
  {
    id: "12",
    name: "JENNY Denim Jacket",
    category: "clothing",
    title: "Because can you ever have enough denim jackets?",
    description: faker.lorem.paragraph(),
    price: 229,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/matheus-ferrero-1-unsplash.jpg",
    credits: "Matheus Ferrero"
  },
  {
    id: "13",
    name: "PEIGI Dress",
    category: "clothing",
    title: "Bright red dress.",
    description: faker.lorem.paragraph(),
    price: 519,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/melody-jacob-1-unsplash.jpg",
    credits: "Melody Jacob"
  },
  {
    id: "14",
    name: "MAEVE Sweatshirt",
    category: "clothing",
    title: "Tomayto, tomahto. Whatever. This sweatshirt is an eye-catcher.",
    description: faker.lorem.paragraph(),
    price: 199,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/brooke-cagle-1-unsplash.jpg",
    credits: "Brooke Cagle"
  },
  {
    id: "15",
    name: "KAOLIN T-shirt",
    category: "clothing",
    title: "Basic t-shirt with chest pocket.",
    description: faker.lorem.paragraph(),
    price: 159,
    inStock: true,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/jonathan-borba-1-unsplash.jpg",
    credits: "Jonathan Borba"
  },
  {
    id: "16",
    name: "NUALA Sunglasses",
    category: "accessories",
    title: "Uniquely designed sunglasses.",
    description: faker.lorem.paragraph(),
    price: 520,
    inStock: 12,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/sebastian-coman-travel-1-unsplash.jpg",
    credits: "Sebastian Coman Travel"
  },
  {
    id: "17",
    name: "ROSHEEN Dress",
    category: "clothing",
    title: "Red dress, white dots.",
    description: faker.lorem.paragraph(),
    price: 230,
    inStock: false,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/tamara-bellis-3-unsplash.jpg",
    credits: "Tamara Bellis"
  },
  {
    id: "18",
    name: "FAYLINN Ring",
    category: "accessories",
    title: "Handmade rose gold ring.",
    description: faker.lorem.paragraph(),
    price: 119,
    inStock: false,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/brooke-cagle-2-unsplash.jpg",
    credits: "Brooke Cagle"
  },
  {
    id: "19",
    name: "NEVINA Accessories Set",
    category: "accessories",
    title: "Complete set of matching accessories.",
    description: faker.lorem.paragraph(),
    price: 309,
    inStock: false,
    image: "https://heyitschun-assets.s3.amazonaws.com/mock-store/product-images/s-o-c-i-a-l-c-u-t-1unsplash.jpg",
    credits: "SOCIAL.CUT"
  },
]

module.exports.inspirations = [
  {
    src: "https://heyitschun-assets.s3.amazonaws.com/mock-store/other/alvin-balemesa-1-unsplash.jpg",
    credits: "Alvin Balemesa"
  },
  {
    src: "https://heyitschun-assets.s3.amazonaws.com/mock-store/other/bin-thi-u-1-unsplash.jpg",
    credits: "Bin Thieu"
  },
  {
    src: "https://heyitschun-assets.s3.amazonaws.com/mock-store/other/callum-shaw-1-unsplash.jpg",
    credits: "Callum Shaw"
  },
  {
    src: "https://heyitschun-assets.s3.amazonaws.com/mock-store/other/jernej-graj-1-unsplash.jpg",
    credits: "Jerney Graj"
  },
  {
    src: "https://heyitschun-assets.s3.amazonaws.com/mock-store/other/kiana-bosman-1-unsplash.jpg",
    credits: "Kiana Bosman"
  },
  {
    src: "https://heyitschun-assets.s3.amazonaws.com/mock-store/other/noah-buscher-1-unsplash.jpg",
    credits: "Noah Buscher"
  },
  {
    src: "https://heyitschun-assets.s3.amazonaws.com/mock-store/other/yarden-1-unsplash.jpg",
    credits: "Yarden"
  },
  {
    src: "https://heyitschun-assets.s3.amazonaws.com/mock-store/other/frankie-cordoba-1-unsplash.jpg",
    credits: "Frankie Cordoba"
  }
]