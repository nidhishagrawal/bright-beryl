export interface Product {
  id: number
  name: string
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets'
  price: number
  originalPrice?: number
  description: string
  material: string
  gemstone?: string
  images: string[]
  featured?: boolean
  newLaunch?: boolean
  bestSeller?: boolean
  pureSilver?: boolean
  inStock: boolean
  rating: number
  reviews: number
}

export const products: Product[] = [
  {
    id: 1,
    name: "Eternal Diamond Solitaire Ring",
    category: "rings",
    price: 8500,
    originalPrice: 10000,
    description: "A stunning 18K white gold solitaire ring featuring a brilliant 1.5 carat diamond. The classic six-prong setting allows maximum light to enter the stone, creating breathtaking sparkle.",
    material: "18K White Gold",
    gemstone: "1.5ct Diamond",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"
    ],
    featured: true,
    newLaunch: true,
    bestSeller: true,
    inStock: true,
    rating: 4.9,
    reviews: 128
  },
  {
    id: 2,
    name: "Sapphire Halo Engagement Ring",
    category: "rings",
    price: 9500,
    description: "An exquisite engagement ring featuring a 2-carat royal blue sapphire surrounded by a halo of brilliant diamonds in platinum setting.",
    material: "Platinum",
    gemstone: "2ct Sapphire, Diamonds",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800"
    ],
    featured: true,
    newLaunch: true,
    inStock: true,
    rating: 5.0,
    reviews: 94
  },
  {
    id: 3,
    name: "Pearl & Diamond Drop Earrings",
    category: "earrings",
    price: 85000,
    originalPrice: 110000,
    description: "Elegant drop earrings featuring lustrous South Sea pearls accented with brilliant-cut diamonds in 18K yellow gold.",
    material: "18K Yellow Gold",
    gemstone: "South Sea Pearls, Diamonds",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"
    ],
    featured: true,
    bestSeller: true,
    inStock: true,
    rating: 4.8,
    reviews: 67
  },
  {
    id: 4,
    name: "Emerald Cut Tennis Necklace",
    category: "necklaces",
    price: 16500,
    description: "A magnificent tennis necklace featuring emerald-cut diamonds totaling 10 carats, set in 18K white gold. A true statement piece.",
    material: "18K White Gold",
    gemstone: "10ct Diamonds",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800"
    ],
    featured: true,
    bestSeller: true,
    inStock: true,
    rating: 5.0,
    reviews: 156
  },
  {
    id: 5,
    name: "Ruby Heart Pendant",
    category: "necklaces",
    price: 12500,
    description: "A romantic heart-shaped pendant featuring a vibrant ruby surrounded by diamonds on an 18K rose gold chain.",
    material: "18K Rose Gold",
    gemstone: "Ruby, Diamonds",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800"
    ],
    featured: true,
    newLaunch: true,
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 6,
    name: "Diamond Stud Earrings",
    category: "earrings",
    price: 145000,
    originalPrice: 180000,
    description: "Classic diamond stud earrings featuring 1.5 carats total weight of brilliant-cut diamonds in platinum four-prong settings.",
    material: "Platinum",
    gemstone: "1.5ct Diamonds",
    images: [
      "https://images.unsplash.com/photo-1596944946731-8b93cf9c0d8e?w=800",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"
    ],
    featured: true,
    bestSeller: true,
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 7,
    name: "Vintage Rose Gold Bracelet",
    category: "bracelets",
    price: 95000,
    description: "An intricate vintage-inspired bracelet in 18K rose gold featuring delicate filigree work and small diamonds.",
    material: "18K Rose Gold",
    gemstone: "Diamonds",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800"
    ],
    pureSilver: true,
    inStock: true,
    rating: 4.6,
    reviews: 45
  },
  {
    id: 8,
    name: "Infinity Diamond Band",
    category: "rings",
    price: 6500,
    description: "A beautiful eternity band featuring an infinity design with brilliant diamonds set in 18K white gold.",
    material: "18K White Gold",
    gemstone: "Diamonds",
    images: [
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"
    ],
    pureSilver: true,
    inStock: true,
    rating: 4.8,
    reviews: 112
  },
  {
    id: 9,
    name: "Aquamarine Pendant Necklace",
    category: "necklaces",
    price: 8500,
    description: "A serene aquamarine cushion-cut stone set in 14K white gold with a delicate diamond halo.",
    material: "14K White Gold",
    gemstone: "Aquamarine, Diamonds",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800"
    ],
    pureSilver: true,
    inStock: true,
    rating: 4.7,
    reviews: 78
  },
  {
    id: 10,
    name: "Chandelier Diamond Earrings",
    category: "earrings",
    price: 285000,
    description: "Spectacular chandelier earrings featuring cascading diamonds in an elegant design, set in 18K white gold.",
    material: "18K White Gold",
    gemstone: "Diamonds",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
      "https://images.unsplash.com/photo-1596944946731-8b93cf9c0d8e?w=800"
    ],
    inStock: true,
    rating: 5.0,
    reviews: 67
  },
  {
    id: 11,
    name: "Tanzanite Cocktail Ring",
    category: "rings",
    price: 7500,
    description: "A bold cocktail ring featuring a stunning 5-carat tanzanite surrounded by diamonds in white gold.",
    material: "18K White Gold",
    gemstone: "5ct Tanzanite, Diamonds",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800"
    ],
    inStock: false,
    rating: 4.9,
    reviews: 34
  },
  {
    id: 12,
    name: "Diamond Tennis Bracelet",
    category: "bracelets",
    price: 350000,
    description: "A classic tennis bracelet featuring 5 carats of brilliant-cut diamonds in platinum setting.",
    material: "Platinum",
    gemstone: "5ct Diamonds",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800"
    ],
    inStock: true,
    rating: 5.0,
    reviews: 145
  },
  {
    id: 13,
    name: "Diamond Tennis Bracelet",
    category: "bracelets",
    price: 350000,
    description: "A classic tennis bracelet featuring 5 carats of brilliant-cut diamonds in platinum setting.",
    material: "Platinum",
    gemstone: "5ct Diamonds",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800"
    ],
    inStock: true,
    rating: 5.0,
    reviews: 145
  },
  {
    id: 14,
    name: "Diamond Tennis Bracelet",
    category: "bracelets",
    price: 350000,
    description: "A classic tennis bracelet featuring 5 carats of brilliant-cut diamonds in platinum setting.",
    material: "Platinum",
    gemstone: "5ct Diamonds",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800"
    ],
    inStock: true,
    rating: 5.0,
    reviews: 145
  },
  {
    id: 15,
    name: "Diamond Tennis Bracelet",
    category: "bracelets",
    price: 350000,
    description: "A classic tennis bracelet featuring 5 carats of brilliant-cut diamonds in platinum setting.",
    material: "Platinum",
    gemstone: "5ct Diamonds",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800"
    ],
    inStock: true,
    rating: 5.0,
    reviews: 145
  }
]

