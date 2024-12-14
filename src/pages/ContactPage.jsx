import React from 'react';
import Layout from '../components/Layout';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
    return (
        <Layout>
            {/* Header Section */}
            <section className="bg-blue-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-center">Contact & Scheduling</h1>
                </div>
            </section>

            {/* Contact Form and Info Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                                        Service Type
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    >
                                        <option value="">Select a service</option>
                                        <option value="dumpster">Dumpster Services</option>
                                        <option value="excavation">Excavation & Land Clearing</option>
                                        <option value="hauling">Dump Trucking & Hauling</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Additional Information
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-700 text-white py-3 px-4 rounded-md hover:bg-blue-800 transition"
                                >
                                    Schedule Now
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Phone className="w-6 h-6 text-blue-700 mr-3" />
                                        <div>
                                            <p className="font-semibold">Phone</p>
                                            <a href="tel:240-960-6005" className="text-blue-700 hover:text-blue-900">
                                                240-960-6005
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="w-6 h-6 text-blue-700 mr-3" />
                                        <div>
                                            <p className="font-semibold">Email</p>
                                            <a href="mailto:info@betterdumpsters.com" className="text-blue-700 hover:text-blue-900">
                                                info@betterdumpsters.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-6 h-6 text-blue-700 mr-3" />
                                        <div>
                                            <p className="font-semibold">Location</p>
                                            <p>Glen Dale, MD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Service Hours */}
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold mb-6">Service Hours</h2>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Monday - Friday</span>
                                        <span>7:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Saturday</span>
                                        <span>8:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-6">Find Us Here</h2>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24834.305881210346!2d-76.8389227243164!3d38.98392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7eb9c590c31ed%3A0xe6b74e35e4907d41!2sGlen%20Dale%2C%20MD%2020769!5e0!3m2!1sen!2sus!4v1702502161545!5m2!1sen!2sus"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                                className="w-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ContactPage;