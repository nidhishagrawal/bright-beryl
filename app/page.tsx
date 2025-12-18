import Link from 'next/link'
import { ArrowRight, Sparkles, Award, Shield, Truck } from 'lucide-react'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

export default function Home() {
  const featuredProducts = products.slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-gold-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNWViZTUiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-gold-600" />
              <span className="text-sm font-medium text-gray-700">New Collection 2024</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Timeless Elegance,<br />
              <span className="text-primary-600">Crafted Perfection</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover our exquisite collection of handcrafted jewelry, where each piece tells a unique story
            </p>
            
            <div className="flex gap-4 justify-center">
              <Link 
                href="/shop"
                className="px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all hover:shadow-lg flex items-center gap-2 font-medium"
              >
                Shop Collection
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/about"
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full hover:border-primary-600 transition-all font-medium"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">Handcrafted with finest materials</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600 text-sm">Protected against defects</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over ₹40,000</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Certified Authentic</h3>
              <p className="text-gray-600 text-sm">100% genuine gemstones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold & Diamond Website Banner */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-gold-500 to-amber-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Exclusive Collection</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                  Discover Our Premium Gold & Diamond Collection
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Experience luxury with our exclusive range of gold and diamond jewelry. Exquisite designs, certified authenticity, and timeless elegance.
                </p>
                <a
                  href="https://your-gold-diamond-website.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gold-700 rounded-full hover:bg-gray-50 transition-all hover:shadow-lg font-bold text-lg"
                >
                  Visit Gold & Diamond Store
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
              
              <div className="relative h-64 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-24 h-24 text-white/80 mx-auto mb-4" />
                    <p className="text-white text-2xl font-bold">Premium Collection</p>
                    <p className="text-white/80">18K Gold • Certified Diamonds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Featured Collection</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our carefully curated selection of extraordinary pieces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all hover:shadow-lg font-medium"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Find the perfect piece for every occasion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/shop?category=rings" className="group relative overflow-hidden rounded-2xl h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-serif text-3xl font-bold mb-2">Rings</h3>
                  <p className="text-white/90">Engagement & Wedding</p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop?category=necklaces" className="group relative overflow-hidden rounded-2xl h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500 to-gold-700 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-serif text-3xl font-bold mb-2">Necklaces</h3>
                  <p className="text-white/90">Pendants & Chains</p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop?category=earrings" className="group relative overflow-hidden rounded-2xl h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-serif text-3xl font-bold mb-2">Earrings</h3>
                  <p className="text-white/90">Studs & Drops</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Be the first to know about new collections, exclusive offers, and jewelry care tips
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-all font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

