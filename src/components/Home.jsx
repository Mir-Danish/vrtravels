import React from 'react';
import './home.css';
import TravelLandingSection from './Offers&Features';
import picture1 from '../assets/p1.png';
import picture3 from '../assets/p3.png';
import myVideo from '../assets/images/video.mp4';
import Footer from './Footer';
import TourPlans from './TourPlans';
import WhatsAppButton from './WhatsAppButton';
import { MapPin, ArrowRight, Star } from 'lucide-react';

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
                        Travelling Opens the Door to <span>Creating Memories</span>
                    </h1>

                    <p className="p4">
                        Nestled in the heart of the Himalayas, Kashmir is a land of shimmering lakes,
                        snow-draped peaks, and warm Kashmiri souls. Let Velarova Tours guide you
                        through every unforgettable corner of the valley — from tranquil Shikara rides
                        on Dal Lake to the golden meadows of Sonamarg.
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
                        <source src={myVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <img src={picture3} alt="Beautiful Kashmir landscape" className="image3" />
                </div>
            </div>

            {/* Floating trust strip */}
            {/* <div className="hero-trust-strip">
                <div className="trust-badge-item">
                    <span className="trust-num">10+</span>
                    <span className="trust-lbl">Years Serving Kashmir</span>
                </div>
                <div className="trust-strip-divider"></div>
                <div className="trust-badge-item">
                    <span className="trust-num">15K+</span>
                    <span className="trust-lbl">Happy Travelers</span>
                </div>
                <div className="trust-strip-divider"></div>
                <div className="trust-badge-item">
                    <span className="trust-num">100%</span>
                    <span className="trust-lbl">Local Native Team</span>
                </div>
                <div className="trust-strip-divider"></div>
                <div className="trust-badge-item">
                    <span className="trust-num">4.9 ★</span>
                    <span className="trust-lbl">Satisfaction Score</span>
                </div>
            </div> */}

            <TourPlans />
            <TravelLandingSection />
            <Footer />
            <WhatsAppButton />
        </>
    );
}

export default Home;
