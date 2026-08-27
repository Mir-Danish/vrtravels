import React from 'react';
import './home.css';
import TravelLandingSection from './Offers&Features';
import picture1 from '../assets/p1.png';
import picture3 from '../assets/p3.png';
import Footer from './Footer';
import TourPlans from './TourPlans';
import WhatsAppButton from './WhatsAppButton';
import { MapPin, ArrowRight, Star, ShieldCheck } from 'lucide-react';

function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="main-container">
                <div className="hero-overlay"></div>

                <div className="left-container">
                    <div className="hero-location-badge">
                        <MapPin size={14} />
                        <span>Srinagar, Kashmir — J&K, India</span>
                    </div>

                    <p className="p1">Know Before You Go</p>

                    <h1 className="p2">
                        Travelling Opens the Door to <span>Unforgettable Memories</span>
                    </h1>
                    <p className="hero-welcome-line">Welcome to <span>Velarova Tour & Travels</span></p>

                    <p className="p4">
                        Welcome to Vela rova Tours and travels your trusted travel partner for discovering the breathtaking beauty of Kashmir. From majestic mountains and serene lakes to rich culture and unforgettable experiences, we help you explore Kashmir in the most memorable way.
                        Whether you are planning a family holiday, honeymoon, adventure trip, group tour, or a customized getaway.
                        Discover Kashmir. Create Memories. Travel with Velarova
                    </p>

                    <div className="hero-cta-row">
                        <a
                            href="https://wa.me/919103115848?text=Hello%20Velarova%20Tours,%20I%20want%20to%20plan%20my%20Kashmir%20trip!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-btn-primary"
                        >
                            <span>Plan My Trip</span>
                            <ArrowRight size={18} />
                        </a>
                        <div className="hero-rating-pill">
                            <Star size={15} fill="#FAA935" color="#FAA935" />
                            <strong>4.9</strong>
                            <span>Traveler Rating</span>
                        </div>
                    </div>
                </div>

                <div className="right-container">
                    <img src={picture1} alt="Kashmir valley scenic view" className="image1" />
                    <video className="videostyle" autoPlay loop muted playsInline>
                        <source src="https://res.cloudinary.com/ddu2t6hej/video/upload/v1787729510/video_zznpxe.mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <img src={picture3} alt="Beautiful Kashmir landscape" className="image3" />
                </div>
            </div>

            {/* J&K Tourism Registration & Trust Strip */}
            <div className="hero-trust-strip">
                <div className="trust-badge-item trust-registered">
                    <ShieldCheck size={20} className="trust-strip-icon" />
                    <div>
                        <span className="trust-num">J&K Tourism Registered</span>
                        <span className="trust-lbl">Certificate No: JKEA00006144</span>
                    </div>
                </div>
                <div className="trust-strip-divider"></div>
                <div className="trust-stats-row">
                    <div className="trust-badge-item">
                        <span className="trust-num">100%</span>
                        <span className="trust-lbl">Local Native Team</span>
                    </div>
                    <div className="trust-stat-divider"></div>
                    <div className="trust-badge-item">
                        <span className="trust-num">4.9 ★</span>
                        <span className="trust-lbl">Traveler Rating</span>
                    </div>
                </div>
            </div>

            <TourPlans />
            <TravelLandingSection />
            <Footer />
            <WhatsAppButton />
        </>
    );
}

export default Home;
