import React from 'react'
import { Button } from './ui/button'

export default function CheckoutForm() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 mt-48 mb-20 space-y-8">
      
      {/* Order Summary */}
      <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <div className="text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
          <p><span className="font-medium">Order ID:</span> #ORD123456789</p>
          <p><span className="font-medium">Product:</span> Wireless Headphones</p>
          <p><span className="font-medium">Quantity:</span> 2</p>
          <p><span className="font-medium">Amount:</span> $199.98</p>
        </div>
        <Button variant="outline" className="mt-4">
          Edit Order
        </Button>
      </div>

      {/* Payment Options */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <Button className="w-full sm:w-1/2 bg-neutral-900 text-white hover:bg-neutral-800">
          Cash on Delivery
        </Button>
        <Button variant="outline" className="w-full sm:w-1/2">
          Pay with Card
        </Button>
      </div>
    </section>
  )
}
