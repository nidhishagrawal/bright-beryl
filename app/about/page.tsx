import { Award, Heart, Sparkles, Users } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Crafting timeless elegance and celebrating life's precious moments since 2010
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At Bright & Byrl, we believe that jewelry is more than just an accessory—it's a celebration of life's 
              most precious moments. Each piece we create is crafted with meticulous attention to detail, using only 
              the finest materials and ethically sourced gemstones.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our master artisans combine traditional craftsmanship with contemporary design to create jewelry that 
              transcends trends and becomes timeless heirlooms passed down through generations.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <Award className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We pursue perfection in every detail, from design to craftsmanship, ensuring each piece meets 
                our exacting standards.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <Heart className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Ethics</h3>
              <p className="text-gray-600">
                We are committed to ethical sourcing and sustainable practices, ensuring our jewelry is created 
                with respect for people and planet.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <Sparkles className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We blend traditional techniques with modern innovation to create designs that are both 
                timeless and contemporary.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <Users className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in building lasting relationships with our customers, partners, and the communities 
                we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Masterful Craftsmanship</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Every piece of jewelry that bears the Bright & Byrl name is the result of countless hours of 
                skilled craftsmanship. Our master jewelers bring decades of experience and an unwavering 
                commitment to quality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                From the initial sketch to the final polish, each step in our process is carefully executed to 
                ensure that every detail is perfect. We use only the finest materials—18K gold, platinum, and 
                ethically sourced diamonds and gemstones.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2"></span>
                  <span className="text-gray-600">Hand-selected gemstones for exceptional quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2"></span>
                  <span className="text-gray-600">Precision setting by master craftsmen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2"></span>
                  <span className="text-gray-600">Rigorous quality control at every stage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2"></span>
                  <span className="text-gray-600">Lifetime warranty on all pieces</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-primary-100 to-gold-100 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif text-5xl font-bold mb-2">15+</div>
              <div className="text-white/90">Years of Excellence</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold mb-2">50K+</div>
              <div className="text-white/90">Happy Customers</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold mb-2">100%</div>
              <div className="text-white/90">Ethically Sourced</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our exquisite collection and find the perfect piece that tells your unique story
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all hover:shadow-lg font-medium"
          >
            Explore Our Collection
          </Link>
        </div>
      </section>
    </div>
  )
}

