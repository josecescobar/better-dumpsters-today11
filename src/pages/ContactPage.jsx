import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Phone, Mail, MapPin, CreditCard, CalendarDays, Clock, AlertCircle } from 'lucide-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const ContactPage = () => {
    const [formType, setFormType] = useState('contact'); // 'contact' or 'creditCard'

    return (
        <Layout>
            {/* Header Section */}
            <section className="relative bg-blue-700 text-white py-16">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-center">Contact & Scheduling</h1>
                </div>
            </section>

            {/* Form Selection */}
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => setFormType('contact')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                formType === 'contact'
                                    ? 'bg-blue-700 text-white'
                                    : 'bg-white text-blue-700 hover:bg-blue-50'
                            }`}
                        >
                            Contact Form
                        </button>
                        <button
                            onClick={() => setFormType('creditCard')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                                formType === 'creditCard'
                                    ? 'bg-blue-700 text-white'
                                    : 'bg-white text-blue-700 hover:bg-blue-50'
                            }`}
                        >
                            Payment
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Form and Info Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Dynamic Form Section */}
                        <div className="bg-white p-8 rounded-xl shadow-xl">
                            {formType === 'contact' ? (
                                <>
                                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                                    <ContactForm />
                                </>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold mb-6">Make a Payment</h2>
                                    <PaymentForm />
                                </>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div>
                            <div className="bg-gray-50 p-8 rounded-xl shadow-xl mb-8">
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <Phone className="w-6 h-6 text-blue-700 mr-4" />
                                        <div>
                                            <p className="font-semibold">Phone</p>
                                            <a href="tel:240-960-6005" className="text-blue-700 hover:text-blue-900">
                                                240-960-6005
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="w-6 h-6 text-blue-700 mr-4" />
                                        <div>
                                            <p className="font-semibold">Email</p>
                                            <a href="mailto:betterdumpsterstoday@gmail.com" className="text-blue-700 hover:text-blue-900">
                                                betterdumpsterstoday@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-6 h-6 text-blue-700 mr-4" />
                                        <div>
                                            <p className="font-semibold">Location</p>
                                            <p>Glen Dale, MD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Service Hours */}
                            <div className="bg-gray-50 p-8 rounded-xl shadow-xl">
                                <h2 className="text-2xl font-bold mb-6">Service Hours</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold">Monday - Friday</span>
                                        <span>7:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold">Saturday</span>
                                        <span>8:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex items-center justify-between">
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
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-6">Find Us Here</h2>
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
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

// Contact Form Component
const ContactForm = () => (
    <form className="space-y-6">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
            />
        </div>

        <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
            />
        </div>

        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
            />
        </div>

        <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
            <select
                id="service"
                name="service"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
            >
                <option value="">Select a service</option>
                <option value="dumpster">Dumpster Services</option>
                <option value="excavation">Excavation & Land Clearing</option>
                <option value="hauling">Dump Trucking & Hauling</option>
                <option value="concrete">Concrete Services</option>
            </select>
        </div>

        <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
            <input
                type="date"
                id="date"
                name="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
        </div>

        <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
            <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
        </div>

        <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition"
        >
            Submit Request
        </button>
    </form>
);

// Payment Form Component
const PaymentForm = () => {
    const [amount, setAmount] = useState('0');

    return (
        <div className="space-y-6">
            <div>
                <label htmlFor="amount" className="block text-lg font-medium text-gray-700 mb-2">
                    Amount to Pay
                </label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="0"
                    step="0.01"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                />
            </div>

            <PayPalScriptProvider
                options={{
                    "client-id": "AWrazNPFBycRxK4xBw8zccePJmUbk66_3vz3vjbZzZOZD4NlYGRb4ywrpak8sQU1gnmp3LQYupAXwKRO",
                    currency: "USD"
                }}
            >
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                description: "Better Dumpsters Today Services",
                                amount: {
                                    value: amount
                                },
                            }],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            alert(`Payment successful! Transaction ID: ${details.id}`);
                            setAmount('0');
                        });
                    }}
                    onError={(err) => {
                        alert('Payment Error: Please try again or contact support');
                        console.error('PayPal Error:', err);
                    }}
                    style={{
                        layout: 'vertical',
                        color: 'blue',
                        shape: 'rect',
                        label: 'pay'
                    }}
                />
            </PayPalScriptProvider>

            <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 flex items-start">
                    <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    Payments are processed securely through PayPal. You can use your PayPal account or credit card.
                </p>
            </div>
        </div>
    );
};

export default ContactPage;