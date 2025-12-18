import { Plane, BookOpen, Home as HomeIcon, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';



export default function Services() {
    const services = [
        {
            icon: <BookOpen size={48} />,
            title: "University Admissions",
            description: "We help you select the right course and university that matches your career aspirations and academic profile.",
        },
        {
            icon: <FileText size={48} />,
            title: "Visa Assistance",
            description: "Our experts guide you through the complex visa application process, ensuring all documentation is perfect.",
        },
        {
            icon: <HomeIcon size={48} />,
            title: "Accommodation",
            description: "We assist in finding safe and affordable student housing near your university campus.",
        },
        {
            icon: <Plane size={48} />,
            title: "Pre-Departure Briefing",
            description: "Get ready for your new life abroad with our comprehensive sessions on culture, travel, and lifestyle.",
        },
    ];

    return (
        <div className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive support for every step of your study abroad journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                            <div className="flex-shrink-0 text-primary">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-secondary mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/contact" className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg inline-flex items-center gap-2">
                        Get Personalised Advice
                    </Link>
                </div>
            </div>
        </div>
    );
}
