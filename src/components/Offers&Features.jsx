import React from "react";
import GulmargImage from "../assets/Off1.png"
import GurezImage from "../assets/Off2.png"
import YousmargImage from "../assets/Off3.png"
import SonamargImage from "../assets/Off4.png"
import PahalgamImage from "../assets/Off5.png"
import SrinagarImage from "../assets/Off6.png"

export default function TravelLandingSection() {
  return (
    <div className="page">
      {/* Services */}
      {/* <section className="services">
        <div className="services-header">
          <span className="tag">What we serve</span>
          <p className="sub-heading">We offer our best services</p>
        </div>

        <div className="service-cards">
          <div className="service-card">
            <div className="icon">☀️</div>
            <h4>Calculate Weather</h4>
            <p>Lorem ipsum dolor sit amet, adipisicing elit.</p>
          </div>
          <div className="service-card active">
            <div className="icon">🧭</div>
            <h4>Best Tour Guide</h4>
            <p>Lorem ipsum dolor sit amet, adipisicing elit.</p>
          </div>
          <div className="service-card">
            <div className="icon">⚙️</div>
            <h4>Customization</h4>
            <p>Lorem ipsum dolor sit amet, adipisicing elit.</p>
          </div>
        </div>
      </section> */}

      {/* Featured Tours */}
      <section className="tours">
        <span className="tag">Explore</span>
        <h2>Our featured tours</h2>

        <div className="tour-grid">
          <div className="tour big" style={{ backgroundImage: `url(${SrinagarImage})` }}>
            <div className="overlay">
              <p className="Place-Names">Srinagar</p>
              <span>Kashmir</span>
            </div>
          </div>

          <div className="tour" style={{ backgroundImage:  `url(${SonamargImage})` }}>
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

          <div className="tour" style={{ backgroundImage:`url(${YousmargImage})` }}>
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

          {/* <div className="tour" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad')" }}>
            <div className="overlay">
              <h3>Beijing</h3>
              <span>China</span>
            </div>
          </div> */}
        </div>
      </section>
 

      {/* CSS */}
      <style>{`
        .page {
          padding: 60px 80px;
          font-family: 'Poppins', sans-serif;
          color: #1f2937;
        }

        .tag {
          display: inline-block;
          background: #f0c61dff;
          color: #000;
          padding: 4px 14px;
          border-radius: 20px;
          font-family: "Island Moments", serif;
          font-size: 13px;
          font-weight: 600;
        }

        .sub-heading {
          font-family: "Roboto";
          font-size: 40px;
        }


        /* Services */
        .services {
          margin-bottom: 80px;
          display:flex;
        }

        .services-header {
          max-width: 420px;
          margin-bottom: 40px;
        }

        .service-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-left: 10px;
        }

        .service-card {
          background: #fff;
          border-radius: 20px;
          padding: 30px 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform .3s, box-shadow .3s;
        }

        .service-card.active {
          box-shadow: 0 20px 40px rgba(245,158,11,0.25);
        }

        .service-card:hover {
          transform: translateY(-6px);
        }

        .service-card .icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #fde68a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
        }


        .Place-Names {
          font-family: "cursive";
          font-size: 16px;
        }
        .service-card h4 {
          margin-bottom: 8px;
          font-size: 18px;
        }

        .service-card p {
          font-size: 14px;
          color: #6b7280;
        }

        /* Tours */
        .tours h2 {
          margin-bottom: 32px;
        }

        .tour-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 220px;
          gap: 20px;
        }

        .tour {
          position: relative;
          border-radius: 18px;
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .tour.big {
          grid-row: span 2;
        }

        .tour.wide {
          grid-column: span 2;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
          color: #fff;
        }

        .overlay h3 {
          font-size: 22px;
          font-weight: 600;
        }

        .overlay span {
          font-size: 14px;
          opacity: 0.9;
        }

        @media (max-width: 1024px) {
          .page {
            padding: 40px;
          }
          .service-cards {
            grid-template-columns: 1fr;
          }
          .tour-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
