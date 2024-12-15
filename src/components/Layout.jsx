import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="sticky top-0 bg-white shadow-md z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex-shrink-0">
                            <Link to="/">
                                <img
                                    src="/better-dumpsters-today11/images/logo-clear-2.jpg"
                                    alt="Better Dumpsters Today Logo"
                                    className="h-16 w-auto"
                                />
                            </Link>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                                Home
                            </Link>
                            <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                                Services & Pricing
                            </Link>
                            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                                About Us
                            </Link>
                            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                                Contact
                            </Link>
                        </nav>

                        <div className="hidden md:flex items-center">
                            <a href="tel:240-960-6005" className="flex items-center text-blue-700 hover:text-blue-500">
                                <Phone className="w-5 h-5 mr-2" />
                                <span className="font-semibold">240-960-6005</span>
                            </a>
                        </div>

                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                to="/"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/services"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services & Pricing
                            </Link>
                            <Link
                                to="/about"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/contact"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <a
                                href="tel:240-960-6005"
                                className="block px-3 py-2 text-base font-medium text-blue-700 hover:text-blue-600"
                            >
                                <Phone className="w-5 h-5 inline mr-2" />
                                240-960-6005
                            </a>
                        </div>
                    </div>
                )}
            </header>

            {/* Main content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                            <div className="space-y-2">
                                <a href="tel:240-960-6005" className="hover:text-blue-400">
                                    240-960-6005
                                </a>
                                <br />
                                <a href="mailto:info@betterdumpsters.com" className="hover:text-blue-400">
                                    info@betterdumpsters.com
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
                                <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
                                <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Service Hours</h3>
                            <div className="space-y-2">
                                <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                                <p>Saturday: 8:00 AM - 2:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                        © 2024 Better Dumpsters Today. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;