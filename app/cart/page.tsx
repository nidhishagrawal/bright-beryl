'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../context/CartContext'
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center py-20 px-4">
          <ShoppingBag className="w-20 h-20 text-gray-400 mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Start adding beautiful jewelry to your collection</p>
          <Link 
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium"
          >
            Continue Shopping
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    )
  }

  const shipping = totalPrice > 40000 ? 0 : 500
  const tax = totalPrice * 0.18
  const total = totalPrice + shipping + tax

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {cart.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 p-6 border-b border-gray-100 last:border-b-0">
                  {/* Image */}
                  <div className="relative w-32 h-32 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        {item.size && (
                          <p className="text-sm text-gray-600">Size: {item.size}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-xl font-bold text-gray-900 mb-4">
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">Quantity:</span>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-1 border-x border-gray-300 min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              href="/shop"
              className="inline-flex items-center gap-2 mt-6 text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="font-serif text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN')}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>GST (18%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>₹{total.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                  </div>
                </div>
              </div>

              {shipping > 0 && (
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-primary-800">
                    Add <strong>₹{(40000 - totalPrice).toLocaleString('en-IN')}</strong> more to get free shipping!
                  </p>
                </div>
              )}

              <button className="w-full px-6 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all hover:shadow-lg font-medium mb-3">
                Proceed to Checkout
              </button>

              <button className="w-full px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-full hover:border-primary-600 transition-all font-medium">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

