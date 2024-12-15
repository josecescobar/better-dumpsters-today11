import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Truck, Shield, Users, Award, MapPin, PhoneCall } from 'lucide-react';

const AboutPage = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative bg-blue-700 text-white py-16">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-center">About Better Dumpsters Today</h1>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Better Dumpsters Today is your premier provider of waste management and excavation services in Glen Dale, MD.
                                With a commitment to reliability and customer satisfaction, we've built our reputation on delivering exceptional
                                service to both residential and commercial clients.
                            </p>
                            <p className="text-gray-600">
                                Our modern fleet of 2024 equipment and experienced team ensure that every project
                                is handled with the utmost professionalism and efficiency.
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="/better-dumpsters-today11/images/dumpster2.jpg"
                                alt="Better Dumpsters Today Equipment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-xl text-center">
                            <Shield className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Reliability</h3>
                            <p className="text-gray-600">
                                We pride ourselves on being there when you need us, delivering on time, every time.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-xl text-center">
                            <Users className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
                            <p className="text-gray-600">
                                Your satisfaction is our priority. We go above and beyond to meet your needs.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-xl text-center">
                            <Award className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Professional Service</h3>
                            <p className="text-gray-600">
                                Modern equipment and experienced operators ensure top-quality results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Equipment */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Equipment</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-xl">
                            <img
                                src="/better-dumpsters-today11/images/img_3371.jpg"
                                alt="CAT Equipment"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">Modern Fleet</h3>
                            <p className="text-gray-600">
                                Our 2024 equipment ensures reliable and efficient service for all projects.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-xl">
                            <img
                                src="/better-dumpsters-today11/images/img_3370.jpg"
                                alt="Equipment"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">Professional Grade</h3>
                            <p className="text-gray-600">
                                Top-quality equipment maintained to the highest standards.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-xl">
                            <img
                                src="/better-dumpsters-today11/images/img_3372.jpg"
                                alt="Dump Truck"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">Diverse Fleet</h3>
                            <p className="text-gray-600">
                                Multiple equipment options to handle any job size.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Area */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Service Area</h2>
                            <p className="text-gray-600 mb-6">
                                Based in Glen Dale, MD, we proudly serve customers within a 30-mile radius, including:
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {serviceAreas.map((area, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <MapPin className="w-5 h-5 text-blue-700" />
                                        <span>{area}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-xl">
                            <h3 className="text-2xl font-bold mb-6">Contact Us Today</h3>
                            <p className="text-gray-600 mb-6">
                                Ready to experience professional waste management and excavation services?
                                Get in touch with us for a free quote.
                            </p>
                            <div className="space-y-4">
                                <a
                                    href="tel:240-960-6005"
                                    className="flex items-center text-blue-700 hover:text-blue-900"
                                >
                                    <PhoneCall className="w-5 h-5 mr-2" />
                                    240-960-6005
                                </a>
                                <Link
                                    to="/contact"
                                    className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                                >
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

// Data
const serviceAreas = [
    'Bowie',
    'Laurel',
    'College Park',
    'Greenbelt',
    'Upper Marlboro',
    'And more...'
];

export default AboutPage;