import React from 'react';
import Layout from '../components/Layout';
import { ChevronRight } from 'lucide-react';

const HomePage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-[#1e40af] text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <img
                        src="/src/assets/images/logo-white1.jpg"
                        alt="Better Dumpsters Today Logo"
                        className="mx-auto mb-12 max-w-[400px]"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Your Trusted Waste Management Partner
                    </h1>
                    <p className="text-xl mb-12">
                        Professional dumpster rentals, excavation, and hauling services tailored to your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="#quote-form"
                           className="bg-[#1e3a8a] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1e4620] transition">
                            Get a Free Quote
                        </a>
                        <a href="/services"
                           className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#1e40af] transition">
                            Explore Services
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Dumpster Rentals"
                            description="Flexible dumpster sizes for residential and commercial projects."
                        />
                        <ServiceCard
                            title="Excavation Services"
                            description="Professional land clearing and site preparation."
                        />
                        <ServiceCard
                            title="Dump Trucking"
                            description="Efficient waste removal and transportation services."
                        />
                    </div>
                </div>
            </section>

            {/* Equipment Showcase Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Equipment</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/src/assets/images/dumpster2.jpg"
                                alt="Roll-off Dumpster"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">Dumpsters</h3>
                                <p className="text-gray-600">Multiple sizes available from 20 to 40 yards</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/src/assets/images/IMG_3371.jpg"
                                alt="CAT Excavator"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">Excavators</h3>
                                <p className="text-gray-600">CAT equipment for professional excavation work</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/src/assets/images/IMG_3372.jpg"
                                alt="Dump Truck"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">Dump Trucks</h3>
                                <p className="text-gray-600">Heavy-duty trucks for efficient hauling</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <a
                            href="/services"
                            className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold"
                        >
                            View Full Equipment List and Pricing
                            <ChevronRight className="w-5 h-5 ml-1" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl mb-8">Contact us today for a free quote on your project</p>
                    <a
                        href="tel:240-960-6005"
                        className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                    >
                        Call 240-960-6005
                    </a>
                </div>
            </section>
        </Layout>
    );
};

// Service Card Component
const ServiceCard = ({ title, description }) => (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="/services" className="text-blue-600 hover:text-blue-800 flex items-center">
            Learn More <ChevronRight className="w-5 h-5 ml-1" />
        </a>
    </div>
);

export default HomePage;