import React from 'react';
import './Transport.css';
import { MapPin, ShieldCheck, Clock, Phone } from 'lucide-react';

function Transport() {
    return (
        <div className="transport-page-container">

            {/* Hero Section */}
            <div className="transport-hero">
                <div className="transport-hero-overlay"></div>
                <div className="transport-hero-content">
                    <div className="transport-hero-badge">
                        <MapPin size={16} />
                        <span>Kashmir Valley Fleet</span>
                    </div>
                    <h1>Travel Kashmir in <span>Comfort & Style</span></h1>
                    <p className="transport-hero-subtitle">
                        From cozy mountain hatchbacks to spacious SUVs — our local drivers know every curve
                        of the valley, so you can sit back and soak in the view.
                    </p>
                </div>
            </div>

            {/* Trust Badges Row */}
            <div className="transport-trust-bar">
                <div className="trust-item">
                    <ShieldCheck size={22} className="trust-icon" />
                    <span>Fully Insured & Verified Vehicles</span>
                </div>
                <div className="trust-divider"></div>
                <div className="trust-item">
                    <Clock size={22} className="trust-icon" />
                    <span>24/7 On-Call Pickup & Drop</span>
                </div>
                <div className="trust-divider"></div>
                <div className="trust-item">
                    <MapPin size={22} className="trust-icon" />
                    <span>Local Kashmir-Native Drivers</span>
                </div>
                <div className="trust-divider"></div>
                <div className="trust-item">
                    <Phone size={22} className="trust-icon" />
                    <span>Instant Booking via WhatsApp</span>
                </div>
            </div>

            {/* Vehicles Section */}
            <section className="transport-fleet-section">
                <div className="transport-section-header">
                    <span className="transport-section-tag">Our Fleet</span>
                    <h2>Our <span>Featured Vehicles</span></h2>
                    <p className="transport-section-subtext">
                        Every vehicle in our fleet is hand-picked, regularly serviced, and driven by experienced locals
                        who know Kashmir's mountain roads like the back of their hand.
                    </p>
                </div>

                <div className="vehicles-grid">
                    <div className="vehicle-row">
                        <div className="left-vehicle-image-container vehicle-card">
                            <div className="vehicle-card-label">
                                <span>Luxury SUV</span>
                            </div>
                        </div>
                        <div className="right-vehicle-image-container vehicle-card">
                            <div className="vehicle-card-label">
                                <span>Comfort Sedan</span>
                            </div>
                        </div>
                    </div>
                    <div className="vehicle-row">
                        <div className="bottom-left-container vehicle-card">
                            <div className="vehicle-card-label">
                                <span>Premium Hatchback</span>
                            </div>
                        </div>
                        <div className="bottom-right-container vehicle-card">
                            <div className="vehicle-card-label">
                                <span>Mountain Cruiser</span>
                            </div>
                        </div>
                    </div>
                    <div className="vehicle-row centered-row">
                        <div className="long-container vehicle-card">
                            <div className="vehicle-card-label">
                                <span>Group Travel Van</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <div className="transport-cta-strip">
                <div className="cta-strip-content">
                    <div className="cta-text">
                        <h3>Need a Custom Transport Arrangement?</h3>
                        <p>Tell us your group size, destinations, and dates — we'll handle the rest.</p>
                    </div>
                    <a
                        href="https://wa.me/919103115848?text=Hello%20Velarova%20Tours,%20I%20need%20transport%20for%20my%20Kashmir%20trip!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-whatsapp-btn"
                    >
                        Book Your Ride
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Transport;