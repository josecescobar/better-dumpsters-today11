import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Truck, Construction, Wrench, Clock, AlertCircle, DollarSign, PhoneCall } from 'lucide-react';

const ServicesPage = () => {
    return (
        <Layout>
            {/* Services Header */}
            <section className="relative bg-blue-700 text-white py-16">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                    {/* Standard Dumpster Sizes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {dumpsterSizes.map((dumpster) => (
                            <div key={dumpster.size}
                                 className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                                <div className="text-center p-4 bg-blue-50 rounded-lg mb-4">
                                    <h3 className="text-xl font-bold mb-2">{dumpster.size}-Yard Dumpster</h3>
                                    <p className="text-sm text-gray-600">{dumpster.dimensions}</p>
                                </div>
                                <div className="text-center mb-4">
                                    <p className="text-3xl font-bold text-blue-700">${dumpster.price}</p>
                                    <p className="text-gray-600">{dumpster.tons} Tons Included</p>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {dumpster.features.map((feature, index) => (
                                        <li key={index} className="flex items-start space-x-2">
                                            <span className="text-blue-700">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Special Materials & Conditions */}
                    <div className="bg-gray-50 rounded-xl p-8 mb-12">
                        <h3 className="text-2xl font-bold mb-6">Special Materials & Conditions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Special Material Pricing</h4>
                                <ul className="space-y-3">
                                    <PriceListItem
                                        title="Clean Dirt, Concrete, or Asphalt"
                                        price="650"
                                        note="20 yard only, 20 inches from the top"
                                    />
                                    <PriceListItem
                                        title="Clean Metal Hauling"
                                        price="250"
                                        note="Maximum 10 tons"
                                    />
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Additional Charges</h4>
                                <ul className="space-y-3">
                                    <PriceListItem title="Overage Charges" price="100" note="per ton" />
                                    <PriceListItem title="Trip Coverage" price="125" note="for overloaded/blocked dumpsters" />
                                    <PriceListItem title="Relocation" price="125" note="on-site without dumping" />
                                    <PriceListItem title="Wait Charge" price="100" note="per hour after 15 minutes" />
                                    <PriceListItem title="Extra Dump Fees" price="100" note="per item (tires, mattresses, etc.)" />
                                    <PriceListItem title="Extended Rental" price="10" note="per day after 14 days" />
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Concrete Delivery Services */}
                    <section className="py-16 bg-gray-50" id="concrete-delivery">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4">Concrete Delivery Services</h2>
                                <p className="text-gray-600">Reliable concrete delivery at competitive pricing</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-xl text-center">
                                <h3 className="text-2xl font-bold mb-4">Pricing</h3>
                                <p className="text-lg text-gray-700 mb-2">
                                    <strong>$190</strong> per yard
                                </p>
                                <p className="text-lg text-gray-700">
                                    <strong>$200</strong> delivery fee
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Important Notes */}
                    <div className="bg-blue-50 rounded-xl p-8">
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <AlertCircle className="w-6 h-6 mr-2 text-blue-700" />
                            Important Notes
                        </h3>
                        <ul className="space-y-4">
                            {importantNotes.map((note, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <span className="text-blue-700 font-bold">•</span>
                                    <span className="text-gray-700">{note}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Excavation Services */}
            <section className="py-16 bg-gray-50" id="excavation-services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Excavation & Land Clearing</h2>
                        <p className="text-gray-600">Professional excavation services with 2024 equipment</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {excavationEquipment.map((equipment) => (
                            <div key={equipment.name} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{equipment.name}</h3>
                                        <p className="text-gray-600">{equipment.description}</p>
                                    </div>
                                    <img
                                        src={equipment.image}
                                        alt={equipment.name}
                                        className="w-32 h-32 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <RateCard title="Daily Rate" rate={equipment.dailyRate} />
                                    <RateCard title="Weekly Rate" rate={equipment.weeklyRate} />
                                    <RateCard title="With Operator" rate={equipment.operatorRate} />
                                </div>
                                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                    <p className="text-sm text-blue-800">
                                        Available within 30-mile radius of Glen Dale, MD
                                    </p>
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
                        <div className="bg-gray-50 rounded-xl shadow-xl p-8">
                            <h3 className="text-xl font-bold mb-6">Hourly Rates</h3>
                            <table className="w-full">
                                <tbody className="divide-y divide-gray-200">
                                {haulingRates.map((rate, index) => (
                                    <tr key={index}>
                                        <td className="py-4 text-gray-700">{rate.service}</td>
                                        <td className="py-4 font-bold text-right text-blue-700">{rate.rate}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gray-50 rounded-xl shadow-xl p-8">
                            <img
                                src="/better-dumpsters-today11/images/img_3372.jpg"
                                alt="Dump Truck"
                                className="w-full h-48 object-cover rounded-lg mb-6"
                            />
                            <h3 className="text-xl font-bold mb-4">Equipment Features</h3>
                            <ul className="space-y-3 text-gray-600">
                                {truckFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <Truck className="w-5 h-5 text-blue-700" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="relative py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl mb-8">Contact us today for a custom quote</p>
                    <a
                        href="tel:240-960-6005"
                        className="inline-flex items-center bg-white text-blue-700 px-8 py-3 rounded-lg font-bold
                                 hover:bg-opacity-90 transform transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                        <PhoneCall className="w-6 h-6 mr-2" />
                        Call 240-960-6005
                    </a>
                </div>
            </section>
        </Layout>
    );
};

// Utility Components
const RateCard = ({ title, rate }) => (
    <div className="bg-gray-50 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-600 mb-1">{title}</p>
        <p className="text-lg font-bold text-blue-700">${rate}</p>
    </div>
);

const PriceListItem = ({ title, price, note }) => (
    <li className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-blue-700" />
            <span className="text-gray-700">{title}</span>
        </div>
        <div className="text-right">
            <span className="font-bold text-blue-700">${price}</span>
            <p className="text-sm text-gray-500">{note}</p>
        </div>
    </li>
);

// Data
const dumpsterSizes = [
    {
        size: "40",
        dimensions: "22' X 8' X 8'",
        price: "600",
        tons: "2",
        features: ["Ideal for large projects", "Perfect for construction", "Multiple week rental"]
    },
    {
        size: "30",
        dimensions: "22' X 8' X 6'",
        price: "550",
        tons: "2",
        features: ["Great for renovations", "Commercial use", "Heavy debris"]
    },
    {
        size: "25",
        dimensions: "22' X 8' X 6'",
        price: "525",
        tons: "1",
        features: ["Medium projects", "Residential use", "Mixed waste"]
    },
    {
        size: "20",
        dimensions: "22' X 8' X 4'",
        price: "500",
        tons: "1",
        features: ["Small projects", "Yard waste", "Household cleanouts"]
    }
];

const excavationEquipment = [
    {
        name: "CAT Mini Excavator",
        description: "Perfect for precise digging and tight spaces",
        image: "/better-dumpsters-today11/images/img_3371.jpg",
        dailyRate: "450",
        weeklyRate: "2500",
        operatorRate: "900"
    },
    {
        name: "CAT Bobcat",
        description: "Versatile equipment for various tasks",
        image: "/better-dumpsters-today11/images/img_3370.jpg",
        dailyRate: "450",
        weeklyRate: "2500",
        operatorRate: "900"
    }
];

const haulingRates = [
    { service: "Base Rate", rate: "$90/hr" },
    { service: "Travel Time", rate: "1 Hr Minimum" },
    { service: "Minimum Service", rate: "4 Hours" }
];

const truckFeatures = [
    "Heavy-duty dump trucks",
    "Multiple truck sizes available",
    "Professional operators",
    "Available for long-term contracts"
];

const importantNotes = [
    "If quarry determines the load is not Clean - Mixed Load pricing will be applied",
    "If asphalt is mixed with clean concrete, rock, gravel & dirt there will be an additional charge of $150",
    "If landfill determines the load is not Clean LCD - Mixed Load pricing will be applied",
    "Bamboo is not considered LCD",
    "If recycling center determines the load is not Clean Asphalt - Mixed Load pricing will be applied",
    "If the scrap yard determines the load is not clean metal - Mixed Load pricing will be applied"
];

export default ServicesPage;