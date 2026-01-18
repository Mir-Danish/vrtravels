import React from 'react'
import './TourPlans.css'
import { Car, Utensils, Eye, Hotel, Phone } from 'lucide-react'

const tourPackages = [
    {
        id: 1,
        title: 'KASHMIR HONEYMOON PACKAGE',
        duration: '5 NIGHTS/6 DAYS',
        image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070&auto=format&fit=crop', // Snow/Couple theme
    },
    {
        id: 2,
        title: 'LEH LADAKH TOUR',
        duration: '5 NIGHTS/6 DAYS',
        image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=2070&auto=format&fit=crop', // Mountains/Lake
    },
    {
        id: 3,
        title: 'KASHMIR TOUR PACKAGE',
        duration: '6 NIGHTS/7 DAYS',
        image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop', // Green valley
    },
    {
        id: 4,
        title: 'CHARISMATIC KASHMIR WITH GULMARG',
        duration: '5 NIGHTS/6 DAYS',
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop', // Lake/Boats
    },
    {
        id: 5,
        title: 'AMARNATH YATRA BY HELICOPTER',
        duration: '3 NIGHTS/4 DAYS',
        image: 'https://images.unsplash.com/photo-1518182703889-138249079ced?q=80&w=2070&auto=format&fit=crop', // Mountains/Helicopter vibe
    },
    {
        id: 6,
        title: 'SRINAGAR TOUR PACKAGE',
        duration: '4 NIGHTS/5 DAYS',
        image: 'https://images.unsplash.com/photo-1567808291548-79b885965e98?q=80&w=2070&auto=format&fit=crop', // Tulip garden
    }
]

function TourPlans() {
    return (
        <div className="tour-plans-container">
            <div className="tour-plans-header">
                <h2 className="tour-plans-title">OUR BEST OFFERINGS</h2>
                <p className="tour-plans-subtitle">Let us plan your trip.</p>
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
                                <a href="tel:+916006708888" className="btn-phone">
                                    <Phone size={16} fill="white" />
                                    +91 9103115848
                                </a>
                                <button className="btn-enquire">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TourPlans