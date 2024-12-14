import React from 'react';
import Layout from '../components/Layout';
import { Truck, Construction, Wrench } from 'lucide-react';

const ServicesPage = () => {
    return (
        <Layout>
            {/* Services Header */}
            <section className="bg-blue-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-center">Our Services & Pricing</h1>
                </div>
            </section>

            {/* Dumpster Services */}
            <section className="py-16 bg-white" id="dumpster-services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Dumpster Services</h2>
                        <p className="text-gray-600">Professional dumpster rentals for any project size</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {dumpsterSizes.map((dumpster) => (
                            <div key={dumpster.size} className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-2">{dumpster.size}-Yard Dumpster</h3>
                                <p className="text-3xl font-bold text-blue-700 mb-2">${dumpster.price}</p>
                                <p className="text-gray-600 mb-2">{dumpster.tons} Tons Included</p>
                                <ul className="text-sm text-gray-600">
                                    {dumpster.features.map((feature, index) => (
                                        <li key={index} className="mb-1">• {feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Excavation Services */}
            <section className="py-16 bg-gray-50" id="excavation-services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Excavation & Land Clearing</h2>
                        <p className="text-gray-600">Professional excavation services with top-tier equipment</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {excavationEquipment.map((equipment) => (
                            <div key={equipment.name} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">{equipment.name}</h3>
                                        <p className="text-gray-600">{equipment.description}</p>
                                    </div>
                                    <img
                                        src={equipment.image}
                                        alt={equipment.name}
                                        className="w-32 h-32 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <RateCard title="Daily Rate" rate={equipment.dailyRate} />
                                    <RateCard title="Weekly Rate" rate={equipment.weeklyRate} />
                                    <RateCard title="With Operator" rate={equipment.operatorRate} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hauling Services */}
            <section className="py-16 bg-white" id="hauling-services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Dump Trucking & Hauling</h2>
                        <p className="text-gray-600">Efficient hauling services for all your needs</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Hourly Rates</h3>
                            <table className="w-full">
                                <tbody>
                                <tr className="border-b">
                                    <td className="py-3">Base Rate</td>
                                    <td className="py-3 font-bold text-right">$90/hr</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-3">Travel Time</td>
                                    <td className="py-3 font-bold text-right">1 Hr Minimum</td>
                                </tr>
                                <tr>
                                    <td className="py-3">Minimum Service</td>
                                    <td className="py-3 font-bold text-right">4 Hours</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <img
                                src="/src/assets/images/IMG_3372.jpg"
                                alt="Dump Truck"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">Equipment Features</h3>
                            <ul className="text-gray-600">
                                <li className="mb-1">• Heavy-duty dump trucks</li>
                                <li className="mb-1">• Multiple truck sizes available</li>
                                <li className="mb-1">• Professional operators</li>
                                <li className="mb-1">• Available for long-term contracts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-700 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl mb-8">Contact us today for a custom quote</p>
                    <a
                        href="tel:301-213-7300"
                        className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                    >
                        Call 301-213-7300
                    </a>
                </div>
            </section>
        </Layout>
    );
};

// Utility Components
const RateCard = ({ title, rate }) => (
    <div className="bg-gray-50 p-3 rounded">
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-lg font-bold text-blue-700">${rate}</p>
    </div>
);

// Data
const dumpsterSizes = [
    {
        size: "40",
        price: "900",
        tons: "5",
        features: ["Ideal for large projects", "Perfect for construction", "Multiple week rental"]
    },
    {
        size: "30",
        price: "750",
        tons: "4",
        features: ["Great for renovations", "Commercial use", "Heavy debris"]
    },
    {
        size: "25",
        price: "700",
        tons: "3",
        features: ["Medium projects", "Residential use", "Mixed waste"]
    },
    {
        size: "20",
        price: "650",
        tons: "2.5",
        features: ["Small projects", "Yard waste", "Household cleanouts"]
    }
];

const excavationEquipment = [
    {
        name: "CAT Mini Excavator",
        description: "Perfect for precise digging and tight spaces",
        image: "/src/assets/images/IMG_3371.jpg",
        dailyRate: "450",
        weeklyRate: "2500",
        operatorRate: "900"
    },
    {
        name: "CAT Bobcat",
        description: "Versatile equipment for various tasks",
        image: "/src/assets/images/IMG_3370.jpg",
        dailyRate: "450",
        weeklyRate: "2500",
        operatorRate: "900"
    }
];

export default ServicesPage;