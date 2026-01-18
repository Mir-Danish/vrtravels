import React from 'react';
import './AboutPage.css';
import Footer from './Footer'; // Assuming you have a Footer component, using it here or letting simple integration happen.

function AboutPage() {
    return (
        <div className="about-page-container">
            {/* Hero Section */}
            <div className="about-hero">
                <h1>About <span>Us</span></h1>
            </div>

            {/* Intro Section */}
            <div className="about-intro-section">
                <div className="intro-text">
                    <h2>Who <span>We Are?</span></h2>
                    <p>
                        We're all about creating unforgettable experiences for our guests.
                        Our journey began with a simple passion for exploring the beauty of the World.
                    </p>

                    <h2>Our <span>Mission</span></h2>
                    <p>
                        We believe that travel is not just about visiting new places, but about
                        immersing yourself in new cultures, connecting with nature, and making
                        memories that last a lifetime.
                    </p>
                </div>
                <div className="intro-image">
                    <img
                        src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop"
                        alt="Beautiful tropical scenary"
                    />
                </div>
            </div>

            {/* Services Section */}
            <div className="about-services-section">
                <div className="services-header">
                    <h3>What we serve</h3>
                    <h2>We offer our best services</h2>
                </div>

                <div className="services-grid">
                    <div className="service-card">
                        <span className="service-icon">🌤️</span>
                        <h4>Calculate Weather</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="service-card">
                        <span className="service-icon">🧭</span>
                        <h4>Best Tour Guide</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="service-card">
                        <span className="service-icon">⚙️</span>
                        <h4>Customization</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>

            {/* Subscribe Section */}
            <div className="about-subscribe-section">
                <div className="subscribe-content">
                    <h2>Subscribe now to get useful traveling information</h2>
                    <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                    <p className="sub-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisci sunt in, provident facere ipsum?
                    </p>
                </div>
                <div className="subscribe-image">
                    {/* Using a placeholder person image that matches the 'tourist' vibe */}
                    <img src="https://purepng.com/public/uploads/large/purepng.com-traveler-manmanpeoplepersonmaletravelertouristtravelinghatbag-112152508828557kyd.png" alt="Tourist" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutPage;