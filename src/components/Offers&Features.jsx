import React from "react";
import './Offers&features.css';
import GulmargImage from "../assets/Off1.png";
import GurezImage from "../assets/Off2.png";
import YousmargImage from "../assets/Off3.png";
import SonamargImage from "../assets/Off4.png";
import PahalgamImage from "../assets/Off5.png";
import SrinagarImage from "../assets/Off6.png";

export default function TravelLandingSection() {
    return (
        <div className="page">
            {/* Featured Tours */}
            <section className="tours">
                <span className="tag">Explore Kashmir</span>
                <h2>Our Featured <span style={{ color: '#FAA935' }}>Destinations</span></h2>

                <div className="tour-grid">
                    <div className="tour big" style={{ backgroundImage: `url(${SrinagarImage})` }}>
                        <div className="overlay">
                            <p className="Place-Names">Srinagar</p>
                            <span>Kashmir</span>
                        </div>
                    </div>

                    <div className="tour" style={{ backgroundImage: `url(${SonamargImage})` }}>
                        <div className="overlay">
                            <p className="Place-Names">Sonamarg</p>
                            <span>Kashmir</span>
                        </div>
                    </div>

                    <div className="tour wide" style={{ backgroundImage: `url(${PahalgamImage})` }}>
                        <div className="overlay">
                            <p className="Place-Names">Pahalgam</p>
                            <span>Kashmir</span>
                        </div>
                    </div>

                    <div className="tour" style={{ backgroundImage: `url(${GulmargImage})` }}>
                        <div className="overlay">
                            <p className="Place-Names">Gulmarg</p>
                            <span>Kashmir</span>
                        </div>
                    </div>

                    <div className="tour" style={{ backgroundImage: `url(${YousmargImage})` }}>
                        <div className="overlay">
                            <p className="Place-Names">Yousmarg</p>
                            <span>Kashmir</span>
                        </div>
                    </div>

                    <div className="tour" style={{ backgroundImage: `url(${GurezImage})` }}>
                        <div className="overlay">
                            <p className="Place-Names">Gurez Valley</p>
                            <span>Kashmir</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
