import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ChevronRight, MapPin, Shield, Truck, Users, Award, PhoneCall } from 'lucide-react';

const HomePage = () => {
    return (
        <Layout>
            {/* Hero Section - Enhanced with gradient overlay and better spacing */}
            <section className="relative bg-blue-700 text-white py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <img
                        src="/better-dumpsters-today11/images/logo-white1.jpg"
                        alt="Better Dumpsters Today Logo"
                        className="mx-auto mb-16 max-w-[400px] shadow-2xl rounded-lg"
                    />
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                        Your Trusted Waste Management Partner
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
                        Professional dumpster rentals, excavation, and hauling services tailored to your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact"
                              className="bg-white text-blue-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 
                        transform transition-all hover:-translate-y-1 hover:shadow-lg">
                            Get a Free Quote
                        </Link>
                        <Link to="/services"
                              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg 
                        hover:bg-white hover:text-blue-700 transform transition-all hover:-translate-y-1 hover:shadow-lg">
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Overview - Enhanced with modern card design */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-20 relative">
            <span className="relative z-10">Our Services
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-blue-700 rounded-full"></div>
            </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <ServiceCard
                            title="Dumpster Rentals"
                            icon={<Truck className="w-12 h-12 mb-6 text-blue-700" />}
                            description="Flexible dumpster sizes for residential and commercial projects."
                        />
                        <ServiceCard
                            title="Excavation Services"
                            icon={<Shield className="w-12 h-12 mb-6 text-blue-700" />}
                            description="Professional land clearing and site preparation."
                        />
                        <ServiceCard
                            title="Dump Trucking"
                            icon={<Award className="w-12 h-12 mb-6 text-blue-700" />}
                            description="Efficient waste removal and transportation services."
                        />
                    </div>
                </div>
            </section>

            {/* Equipment Showcase - Enhanced with hover effects */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-20 relative">
            <span className="relative z-10">Our Equipment
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-blue-700 rounded-full"></div>
            </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <EquipmentCard
                            image="/better-dumpsters-today11/images/dumpster2.jpg"
                            title="Dumpsters"
                            description="Multiple sizes available from 20 to 40 yards"
                        />
                        <EquipmentCard
                            image="/better-dumpsters-today11/images/img_3371.jpg"
                            title="Excavators"
                            description="CAT equipment for professional excavation work"
                        />
                        <EquipmentCard
                            image="/better-dumpsters-today11/images/img_3372.jpg"
                            title="Dump Trucks"
                            description="Heavy-duty trucks for efficient hauling"
                        />
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/services"
                            className="inline-flex items-center text-blue-700 hover:text-blue-900 font-bold text-lg group"
                        >
                            View Full Equipment List and Pricing
                            <ChevronRight className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Service Area - Enhanced with modern design */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-20 relative">
            <span className="relative z-10">Our Service Area
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-blue-700 rounded-full"></div>
            </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="bg-white p-8 rounded-2xl shadow-xl">
                                <h3 className="text-2xl font-bold mb-6">Service Coverage</h3>
                                <p className="text-gray-600 mb-6 text-lg">We proudly serve Glen Dale, MD and surrounding areas within a 30-mile radius, including:</p>
                                <div className="grid grid-cols-2 gap-4">
                                    {locations.map((location, index) => (
                                        <div key={index} className="flex items-center space-x-2 text-gray-700">
                                            <MapPin className="w-5 h-5 text-blue-700" />
                                            <span>{location}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/better-dumpsters-today11/images/img_3372.jpg"
                                alt="Service Area Coverage"
                                className="rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipment Fleet & Guidelines - Enhanced with modern cards */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-3xl font-bold mb-8 relative inline-block">
                                Modern Fleet
                                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-700 rounded-full"></div>
                            </h3>
                            <div className="bg-gray-50 p-8 rounded-2xl shadow-xl">
                                <p className="text-gray-700 text-lg mb-6">Our 2024 equipment fleet includes:</p>
                                <ul className="space-y-4">
                                    {fleetItems.map((item, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <Truck className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold mb-8 relative inline-block">
                                Material Guidelines
                                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-700 rounded-full"></div>
                            </h3>
                            <div className="bg-gray-50 p-8 rounded-2xl shadow-xl">
                                <p className="text-gray-700 text-lg mb-6">We accept various materials with specific guidelines:</p>
                                <ul className="space-y-4">
                                    {materialItems.map((item, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <Shield className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                    <p className="text-blue-800 font-medium">Note: Special handling fees may apply for certain materials. Contact us for details.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action - Enhanced with gradient and hover effect */}
            <section className="relative py-24 bg-gradient-to-r from-blue-800 to-blue-600 text-white overflow-hidden">
                <div className="absolute inset-0 bg-blue-900 opacity-10 pattern-dots"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">Contact us today for a free quote on your project</p>
                    <a
                        href="tel:240-960-6005"
                        className="inline-flex items-center bg-white text-blue-700 px-10 py-4 rounded-lg font-bold text-lg
                     hover:bg-opacity-90 transform transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                        <PhoneCall className="w-6 h-6 mr-3" />
                        Call 240-960-6005
                    </a>
                </div>
            </section>
        </Layout>
    );
};

// Enhanced Service Card Component
const ServiceCard = ({ title, icon, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="text-center">
            {icon}
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <Link to="/services" className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold group">
                Learn More <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    </div>
);

// Enhanced Equipment Card Component
const EquipmentCard = ({ image, title, description }) => (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

// Data Arrays
const locations = ['Bowie', 'Laurel', 'College Park', 'Greenbelt', 'Upper Marlboro', 'And more...'];
const fleetItems = [
    'State-of-the-art CAT excavators',
    'Professional-grade dump trucks',
    'Multiple dumpster sizes (20-40 yards)',
    'Well-maintained Bobcat equipment'
];
const materialItems = [
    'Construction debris',
    'Clean concrete and asphalt',
    'Residential waste',
    'Yard debris'
];

export default HomePage;