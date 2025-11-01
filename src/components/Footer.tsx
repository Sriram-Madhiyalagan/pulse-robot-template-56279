import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-dark-900 border-t border-gray-800 py-12">
      <div className="container px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <img 
              src="/logo.svg" 
              alt="Synthetic Dev Logo" 
              className="h-8 mb-4 mx-auto md:mx-0" 
            />
            <p className="text-gray-500 max-w-xs">
              The context layer for AI development. Stop explaining, start shipping.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 text-center">
            <div>
              <h4 className="text-white font-semibold mb-3">Product</h4>
              <div className="space-y-2">
                <a href="#problem" className="block text-gray-400 hover:text-pulse-400 transition-colors">
                  Problem
                </a>
                <a href="#early-access" className="block text-gray-400 hover:text-pulse-400 transition-colors">
                  Early Access
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-pulse-400 transition-colors">
                  About
                </a>
                <a href="#" className="block text-gray-400 hover:text-pulse-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Synthetic Dev. Built with{" "}
            <span className="text-pulse-400">
              context
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
