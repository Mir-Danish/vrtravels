import React from 'react';
import './AboutPage.css';
import Footer from './Footer';
import {
    MapPin,
    HeartHandshake,
    Compass,
    ShieldCheck,
    Coffee,
    Users,
    Star,
    Award,
    Send,
    Sparkles,
    CheckCircle2,
    MessageCircle
} from 'lucide-react';

function AboutPage() {
    return (
        <div className="about-page-container">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content">
                    <div className="hero-badge">
                        <MapPin size={16} />
                        <span>Born & Rooted in Kashmir</span>
                    </div>
                    <h1>Crafting Timeless Stories in <span>Paradise on Earth</span></h1>
                    <p className="hero-subtitle">
                        From morning mist over Dal Lake to snow-capped peaks in Gulmarg, we welcome you with
                        warm Kashmiri Kehwa and heartfelt hospitality.
                    </p>
                </div>
            </div>

            {/* Our Story / Human Narrative Section */}
            <section className="about-story-section">
                <div className="story-container">
                    <div className="story-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop"
                            alt="Serene Shikara on Dal Lake in Srinagar Kashmir"
                            className="main-story-img"
                        />
                        <div className="story-floating-badge">
                            <Coffee size={22} className="badge-icon" />
                            <div>
                                <strong>Warm Kehwa Welcome</strong>
                                <span>Authentic Local Mezbaani</span>
                            </div>
                        </div>
                    </div>

                    <div className="story-text-content">
                        <span className="section-tag">Our Roots & Culture</span>
                        <h2>More Than a Travel Agency — We Are Your <span>Kashmiri Hosts</span></h2>
                        <p className="story-lead">
                            Velarova Tours was born in the heart of the Kashmir Valley. Raised amidst the pine-scented
                            air of Pahalgam and the peaceful waters of Sumbal Bandipora, our journey started with a simple,
                            enduring passion: sharing the real Kashmir with the world.
                        </p>
                        <p className="story-body">
                            In Kashmiri culture, hosting is an art known as <em>Mezbaani</em>. To us, you are never just a
                            booking ID or a tourist — you are a guest in our motherland. We open doors to secret meadow trails,
                            introduce you to legendary saffron growers and artisan carpet weavers, and ensure every moment
                            feels safe, personal, and unforgettable.
                        </p>

                        <div className="story-quote-card">
                            <Sparkles size={20} className="quote-sparkle" />
                            <p>
                                &ldquo;In Kashmir, a guest is a blessing arriving at our doorstep. You may arrive as a visitor,
                                but you leave as family.&rdquo;
                            </p>
                            <span className="quote-author">&mdash; Team Velarova, Bandipora &amp; Srinagar</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Counter Bar */}
            {/* <section className="about-stats-bar">
                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Years Local Expertise</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">15,000+</span>
                        <span className="stat-label">Happy Travelers Welcomed</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Kashmir Native Crew</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">4.9 ★</span>
                        <span className="stat-label">Traveler Satisfaction</span>
                    </div>
                </div>
            </section> */}

            {/* Why Choose Us / Our Core Values */}
            <section className="about-values-section">
                <div className="section-header">
                    <span className="section-tag">Why Travel With Us</span>
                    <h2>The <span>Velarova Difference</span></h2>
                    <p className="section-subtext">
                        We blend deep local heritage with high-standard hospitality so you experience Kashmir without worry.
                    </p>
                </div>

                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon-wrapper">
                            <HeartHandshake size={28} />
                        </div>
                        <h3>Authentic Kashmiri Mezbaani</h3>
                        <p>
                            From a steaming cup of traditional Kehwa on arrival to genuine warmth from local hosts,
                            we make you feel completely at home.
                        </p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon-wrapper">
                            <Compass size={28} />
                        </div>
                        <h3>Handcrafted Local Itineraries</h3>
                        <p>
                            No rigid template packages. Every trip is tailored to your pace — whether you crave Gulmarg
                            adventures or tranquil houseboat retreats.
                        </p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon-wrapper">
                            <ShieldCheck size={28} />
                        </div>
                        <h3>24/7 On-Ground Kashmir Support</h3>
                        <p>
                            Our team lives right here in Bandipora and Srinagar. We are physically present 24/7 on the ground
                            to ensure your journey is smooth and secure.
                        </p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon-wrapper">
                            <Users size={28} />
                        </div>
                        <h3>Empowering Local Artisans</h3>
                        <p>
                            We work directly with local Shikara captains, boutique homestays, pony operators, and Kashmiri
                            craftsmen, ensuring your trip supports local families.
                        </p>
                    </div>
                </div>
            </section>

            {/* Kashmir Experience Highlights Showcase */}
            <section className="about-highlights-section">
                <div className="section-header">
                    <span className="section-tag">Curated Experiences</span>
                    <h2>Moments You Will <span>Cherish Forever</span></h2>
                </div>

                <div className="highlights-grid">
                    <div className="highlight-card">
                        <img
                            src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop"
                            alt="Shikara ride on Dal Lake"
                        />
                        <div className="highlight-info">
                            <h4>Shikara & Houseboat Living</h4>
                            <p>Watch golden sunsets reflect on Dal &amp; Nigeen Lake while relaxing in handcrafted wooden houseboats.</p>
                        </div>
                    </div>

                    <div className="highlight-card">
                        <img
                            src="https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326389/C1_l2evec.png"
                            alt="Gulmarg gondola and snow mountains"
                        />
                        <div className="highlight-info">
                            <h4>Gulmarg Alpine Wonders</h4>
                            <p>Soar high above snow-clad pine slopes on Asia's highest cable car and enjoy world-class skiing.</p>
                        </div>
                    </div>

                    <div className="highlight-card">
                        <img
                            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop"
                            alt="Pahalgam pine valley"
                        />
                        <div className="highlight-info">
                            <h4>Pahalgam Pine Valleys</h4>
                            <p>Stroll along the gushing Lidder river, ride ponies through Betaab valley, and breathe pure mountain air.</p>
                        </div>
                    </div>

                    <div className="highlight-card">
                        <img
                            src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop"
                            alt="Sonamarg golden meadow and glacier"
                        />
                        <div className="highlight-info">
                            <h4>Sonamarg Glacier Treks</h4>
                            <p>Explore the 'Meadow of Gold' and marvel at the breathtaking Thajiwas Glacier with local mountain guides.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Human Connect & Subscribe Section */}
            <section className="about-connect-section">
                <div className="connect-card">
                    <div className="connect-text">
                        <span className="connect-tag">Plan Your Dream Trip</span>
                        <h2>Ready to Experience Kashmir Like a Local?</h2>
                        <p>
                            Got questions about weather seasons, best itinerary routes, or customized family travel?
                            Reach out to our local Kashmir team directly.
                        </p>

                        <div className="connect-features">
                            <span><CheckCircle2 size={16} color="#FAA935" /> Personal Travel Planner</span>
                            <span><CheckCircle2 size={16} color="#FAA935" /> Transparent Local Pricing</span>
                            <span><CheckCircle2 size={16} color="#FAA935" /> Instant WhatsApp Assistance</span>
                        </div>

                        <form className="connect-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email for a free Kashmir travel guide" required />
                            <button type="submit">
                                <span>Get Travel Guide</span>
                                <Send size={16} />
                            </button>
                        </form>
                    </div>

                    <div className="connect-contact-box">
                        <div className="contact-box-header">
                            <MessageCircle size={28} className="chat-icon" />
                            <div>
                                <h3>Speak With Our Valley Team</h3>
                                <p>We reply within minutes!</p>
                            </div>
                        </div>
                        <p className="contact-details-text">
                            <strong>Office Address:</strong> Rakhi Shilvat Sumbal, Bandipora, J&K - 193501<br />
                            <strong>Email:</strong> velarovatours@gmail.com<br />
                            <strong>Phone / WhatsApp:</strong> +91 9103115848
                        </p>
                        <a
                            href="https://wa.me/919103115848?text=Hello%20Velarova%20Tours,%20I%20would%20like%20to%20know%20more%20about%20Kashmir%20trips!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-connect-btn"
                        >
                            <MessageCircle size={18} />
                            <span>Chat on WhatsApp Directly</span>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default AboutPage;