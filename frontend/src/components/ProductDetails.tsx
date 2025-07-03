import React from 'react'
import { Button } from './ui/button'

export default function ProductDetails() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 mt-48 mb-20">
      <div className="flex flex-row lg:flex-row gap-10">

        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1618221342264-0563b8557e89?auto=format&fit=crop&w=600&q=80"
            alt="Wireless Headphones"
            className="rounded-xl object-cover w-full max-h-[500px]"
          />
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl lg:text-3xl font-semibold">Wireless Noise Cancelling Headphones</h2>

          <p className="text-neutral-600 dark:text-neutral-300">
            Experience superior sound quality with active noise cancellation. Designed for comfort, portability, and immersive audio.
          </p>

          {/* Specifications */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Specifications</h3>
            <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300">
              <li>Bluetooth 5.3</li>
              <li>Battery life: 40 hours</li>
              <li>Charging: USB-C Fast Charge</li>
              <li>Weight: 240g</li>
              <li>Active Noise Cancellation</li>
              <li>Built-in microphone</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="w-full sm:w-auto bg-black text-white hover:bg-neutral-800">
              Buy Now
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-300 italic">
            “Amazing sound and battery life. These headphones are perfect for travel and work!” – Sarah J.
          </p>
        </div>
      </section>
    </main>
  )
}
