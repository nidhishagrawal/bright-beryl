'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/app/data/products'
import { useCart } from '@/app/context/CartContext'
import { Star, Heart, Truck, Shield, RotateCcw, Check } from 'lucide-react'
import ProductCard from '@/app/components/ProductCard'

export default function ProductPage() {
  const params = useParams()
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [addedToCart, setAddedToCart] = useState(false)

  const product = products.find(p => p.id === Number(params.id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link href="/shop" className="text-primary-600 hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize || undefined,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Product Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-4">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden bg-gray-50 border-2 transition-all ${
                      selectedImage === index ? 'border-primary-600' : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="mb-6">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h1 className="font-serif text-4xl font-bold mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-gold-500 text-gold-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
                      Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <Check className="w-5 h-5" />
                    <span className="font-medium">In Stock - Ready to Ship</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="font-medium">Out of Stock</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-lg mb-4">Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Material:</span>
                  <span className="font-medium">{product.material}</span>
                </div>
                {product.gemstone && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gemstone:</span>
                    <span className="font-medium">{product.gemstone}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium capitalize">{product.category}</span>
                </div>
              </div>
            </div>

            {/* Size Selection (for rings) */}
            {product.category === 'rings' && (
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-3">Select Size</h3>
                <div className="grid grid-cols-6 gap-2">
                  {['5', '6', '7', '8', '9', '10'].map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 border-2 rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <Link href="#" className="text-sm text-primary-600 hover:underline mt-2 inline-block">
                  Size Guide
                </Link>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || (product.category === 'rings' && !selectedSize)}
                className="flex-1 px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all hover:shadow-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </button>
              <button className="px-6 py-4 border-2 border-gray-200 rounded-full hover:border-primary-600 transition-all">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Truck className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Free Shipping</h4>
                  <p className="text-xs text-gray-600">On orders over ₹40,000</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Warranty</h4>
                  <p className="text-xs text-gray-600">Lifetime warranty</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <RotateCcw className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Returns</h4>
                  <p className="text-xs text-gray-600">30-day returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

