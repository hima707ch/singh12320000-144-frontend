import React from 'react';
import images from '../assets/images';

export default function Footer() {
  return (
    <footer id="Footer_1" className="bg-gray-900 text-white">
      <div id="Footer_2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div id="Footer_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div id="Footer_4" className="lg:col-span-1">
            <h3 id="Footer_5" className="text-2xl font-bold mb-4">DreamHome</h3>
            <p id="Footer_6" className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect home. We make real estate dreams come true with personalized service and expert guidance.
            </p>
            <div id="Footer_7" className="flex space-x-4">
              <a id="Footer_8" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a id="Footer_9" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a id="Footer_10" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div id="Footer_11">
            <h4 id="Footer_12" className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul id="Footer_13" className="space-y-2">
              <li><a id="Footer_14" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a id="Footer_15" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Properties</a></li>
              <li><a id="Footer_16" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a id="Footer_17" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a id="Footer_18" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div id="Footer_19">
            <h4 id="Footer_20" className="text-lg font-semibold mb-4">Services</h4>
            <ul id="Footer_21" className="space-y-2">
              <li><a id="Footer_22" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Buy Property</a></li>
              <li><a id="Footer_23" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sell Property</a></li>
              <li><a id="Footer_24" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Rent Property</a></li>
              <li><a id="Footer_25" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Property Management</a></li>
              <li><a id="Footer_26" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Investment Advice</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="Footer_27">
            <h4 id="Footer_28" className="text-lg font-semibold mb-4">Contact Info</h4>
            <div id="Footer_29" className="space-y-3">
              <div id="Footer_30" className="flex items-center space-x-3">
                <svg id="Footer_31" className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span id="Footer_32" className="text-gray-400">123 Real Estate Ave, City, State 12345</span>
              </div>
              <div id="Footer_33" className="flex items-center space-x-3">
                <svg id="Footer_34" className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span id="Footer_35" className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div id="Footer_36" className="flex items-center space-x-3">
                <svg id="Footer_37" className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span id="Footer_38" className="text-gray-400">info@dreamhome.com</span>
              </div>
            </div>
          </div>
        </div>

        <div id="Footer_39" className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p id="Footer_40" className="text-gray-400">
            © 2024 DreamHome Real Estate. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}