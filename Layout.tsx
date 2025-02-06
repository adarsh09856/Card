import React, { useState } from 'react';
import { CreditCard, Menu, X, Home, Wallet, Building2, Car, Phone, HelpCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Credit Card', path: '#' },
    { label: 'Personal Loan', path: '#' },
    { label: 'Business Loan', path: '#' },
    { label: 'Home Loan', path: '#' },
    { label: 'Car Loan', path: '#' }
  ];

  const bottomNavItems = [
    { icon: <Home className="h-6 w-6" />, label: 'Home', path: '/' },
    { icon: <CreditCard className="h-6 w-6" />, label: 'Cards', path: '#' },
    { icon: <Wallet className="h-6 w-6" />, label: 'Loans', path: '#' },
    { icon: <Phone className="h-6 w-6" />, label: 'Contact', path: '#' },
    { icon: <HelpCircle className="h-6 w-6" />, label: 'Help', path: '#' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative pb-24">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"
          style={{
            backgroundBlendMode: 'overlay',
            mixBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
      </div>

      {/* Header */}
      <header className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <CreditCard className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Increase Limit
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-gray-300 hover:text-blue-400 transition-colors ${
                    location.pathname === item.path ? 'text-blue-400 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-6 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="block py-2 text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-around items-center h-16">
            {bottomNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path 
                    ? 'text-blue-400' 
                    : 'text-gray-400 hover:text-blue-400'
                }`}
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Popup */}
      {showPopup && (
        <div className="fixed bottom-16 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 z-50 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <p className="text-sm md:text-base text-gray-300">
              Get instant approval on credit card limit increase!
            </p>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.location.href = '/apply'}
                className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full text-sm hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Apply Now
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-400 hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}