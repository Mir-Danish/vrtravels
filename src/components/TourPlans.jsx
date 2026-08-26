import React from 'react'
import './TourPlans.css'
import { Car, Utensils, Eye, Hotel, Phone } from 'lucide-react'

// Authentic Kashmir destination images
import GulmargGondolaImg from '../assets/Off1.png';
import GurezValleyImg from '../assets/Off2.png';
import LehPassImg from '../assets/Off4.png';
import PahalgamRiverImg from '../assets/Off5.png';
import SrinagarTulipImg from '../assets/Off6.png';

const tourPackages = [
    {
        id: 1,
        title: 'KASHMIR HONEYMOON PACKAGE',
        duration: '5 NIGHTS/6 DAYS',
        image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop', // Dal Lake Houseboats with snow mountains
    },
    {
        id: 2,
        title: 'LEH LADAKH TOUR',
        duration: '5 NIGHTS/6 DAYS',
        image: LehPassImg, // High mountain pass & snow peaks
    },
    {
        id: 3,
        title: 'KASHMIR TOUR PACKAGE',
        duration: '6 NIGHTS/7 DAYS',
        image: PahalgamRiverImg, // Lidder River and pine mountains
    },
    {
        id: 4,
        title: 'CHARISMATIC KASHMIR WITH GULMARG',
        duration: '5 NIGHTS/6 DAYS',
        image: GulmargGondolaImg, // Gulmarg Gondola in snow
    },
    {
        id: 5,
        title: 'GUREZ VALLEY OFFBEAT TOUR',
        duration: '4 NIGHTS/5 DAYS',
        image: GurezValleyImg, // Gurez Valley scenic river & mountains
    },
    {
        id: 6,
        title: 'SRINAGAR TOUR PACKAGE',
        duration: '4 NIGHTS/5 DAYS',
        image: SrinagarTulipImg, // Tulip Garden in Srinagar
    }
]

function TourPlans() {
    return (
        <div className="tour-plans-container">
            <div className="tour-plans-header">
                <span className="tour-plans-eyebrow">Kashmir Tour Packages</span>
                <h2 className="tour-plans-title">Our Best <span>Offerings</span></h2>
                <p className="tour-plans-subtitle">Handcrafted itineraries built by locals who know every trail, every lake, and every hidden gem of the valley.</p>
            </div>

            <div className="tour-plans-grid">
                {tourPackages.map((pkg) => (
                    <div key={pkg.id} className="tour-card">
                        <div className="tour-image-container">
                            <img src={pkg.image} alt={pkg.title} className="tour-image" />
                        </div>

                        <div className="tour-content">
                            <h3 className="tour-title">{pkg.title}</h3>

                            <div className="tour-separator"></div>

                            <div className="tour-duration">{pkg.duration}</div>

                            <div className="tour-separator"></div>

                            <div className="tour-icons-row">
                                <div className="tour-icon-item">
                                    <Car size={24} />
                                    <span className="tour-icon-label">Transport</span>
                                </div>
                                <div className="tour-icon-item">
                                    <Utensils size={24} />
                                    <span className="tour-icon-label">Meals</span>
                                </div>
                                <div className="tour-icon-item">
                                    <Eye size={24} />
                                    <span className="tour-icon-label">Sightsee</span>
                                </div>
                                <div className="tour-icon-item">
                                    <Hotel size={24} />
                                    <span className="tour-icon-label">Hotel</span>
                                </div>
                            </div>

                            <div className="tour-buttons">
                                <a href="tel:+919103115848" className="btn-phone">
                                    <Phone size={16} fill="white" />
                                    +919103115848
                                </a>
                                <a
                                    href={`https://wa.me/919103115848?text=${encodeURIComponent(
                                        `Hello Velarova Tours, I want to book the ${pkg.title} (${pkg.duration})!`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-enquire"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TourPlans