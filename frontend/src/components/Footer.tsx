import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 px-6 py-8 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Section 1 - About */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Get to Know Us</h4>
          <ul className="space-y-2">
            <li>
              <button className="hover:underline">About</button>
            </li>
            <li>
              <button className="hover:underline">Careers</button>
            </li>
            <li>
              <button className="hover:underline">Blog</button>
            </li>
          </ul>
        </div>

        {/* Section 2 - Connect */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect with Us</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>

        {/* Section 3 - Support / Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-neutral-300 dark:border-neutral-700 mt-10 pt-6 text-sm text-center">
        © {new Date().getFullYear()} Basy Shops. All rights reserved.
      </div>
    </footer>
  )
}
