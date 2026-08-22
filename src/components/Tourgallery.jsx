import React, { useState, useEffect, useCallback } from "react";
import "./Tourgallery.css";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import {
  Camera,
  MapPin,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
  Users,
  ShieldCheck,
  HeartHandshake,
  MessageCircle,
  ArrowRight
} from "lucide-react";

const galleryItems = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326389/C1_l2evec.png",
    title: "Gulmarg Snow Wonderland",
    location: "Aphrawat Peak, Gulmarg",
    category: "gulmarg",
    layout: "tall",
    story: "Ascending to 14,000 feet on the Gulmarg Gondola amidst fresh powdery snow and endless Himalayan vistas."
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326517/C2_yg4ivj.png",
    title: "Snow Play & Mountain Fun",
    location: "Gulmarg Alpine Valley",
    category: "gulmarg",
    layout: "normal",
    story: "Pure laughter and winter joy with warm Kashmiri Kahwa waiting by the cozy wooden lodge."
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326573/C3_nal2vz.png",
    title: "Baisaran Pine Valley Trek",
    location: "Mini Switzerland, Pahalgam",
    category: "pahalgam",
    layout: "normal",
    story: "Riding gentle mountain ponies through dense deodar forests opening up to lush, emerald green meadows."
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326608/C4_itmeof.png",
    title: "Serene Sunset Shikara Ride",
    location: "Dal Lake, Srinagar",
    category: "dallake",
    layout: "wide",
    story: "Gliding across calm waters as the golden sun dips behind the Zabarwan range, with floating flower markets all around."
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326637/C5_jpu3jf.png",
    title: "Thajiwas Glacier Majesty",
    location: "Sonamarg Meadow of Gold",
    category: "sonamarg",
    layout: "normal",
    story: "Walking up to glistening glacial streams surrounded by towering snow-capped peaks in Sonamarg."
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326655/C6_x3xysx.png",
    title: "Kashmiri Hospitality with Family",
    location: "Mughal Gardens, Srinagar",
    category: "groups",
    layout: "tall",
    story: "Warm smiles, genuine hospitality (Mezbaani), and unforgettable moments spent with our beloved tour group."
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    title: "Crystal Waters of Lidder River",
    location: "Betaab Valley, Pahalgam",
    category: "pahalgam",
    layout: "normal",
    story: "Listening to the gentle roar of the Lidder river against a backdrop of towering pine valleys."
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326700/C8_mb2srs.png",
    title: "Heritage Cedar Houseboat Stay",
    location: "Nigeen Lake, Srinagar",
    category: "dallake",
    layout: "normal",
    story: "Waking up to misty morning reflections and intricate Kashmiri walnut wood carvings on serene lake waters."
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop",
    title: "Golden Meadow Expedition",
    location: "Zero Point, Sonamarg",
    category: "sonamarg",
    layout: "wide",
    story: "Crossing adventurous mountain passes surrounded by dramatic rocky cliffs and year-round snow cover."
  }
];

const filterCategories = [
  { id: "all", label: "All Memories" },
  { id: "gulmarg", label: "Gulmarg Snow & Gondola" },
  { id: "dallake", label: "Dal Lake & Houseboats" },
  { id: "pahalgam", label: "Pahalgam Pine Valleys" },
  { id: "sonamarg", label: "Sonamarg Glaciers" },
  { id: "groups", label: "Groups & Hospitality" }
];

export default function TourGallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Filter gallery items
  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  // Modal navigation handlers
  const openModal = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const showPrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  }, [filteredItems.length]);

  const showNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  }, [filteredItems.length]);

  // Keyboard navigation for lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, closeModal, showPrev, showNext]);

  return (
    <div className="tour-gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <div className="gallery-hero-badge">
            <Camera size={16} />
            <span>Customer Tour Gallery</span>
          </div>
          <h1>
            Glimpses of <span>Paradise</span> Through Our Guests' Eyes
          </h1>
          <p className="gallery-hero-subtitle">
            Authentic, unedited moments captured by wonderful travelers exploring
            Gulmarg's peaks, Dal Lake's calm waters, and Pahalgam's lush pine valleys with Velarova Tours.
          </p>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <section className="gallery-trust-bar">
        <div className="gallery-trust-item">
          <div className="gallery-trust-icon-box">
            <Users size={20} />
          </div>
          <div className="gallery-trust-info">
            <strong>15,000+</strong>
            <span>Delighted Travelers</span>
          </div>
        </div>

        <div className="gallery-trust-divider"></div>

        <div className="gallery-trust-item">
          <div className="gallery-trust-icon-box">
            <Sparkles size={20} />
          </div>
          <div className="gallery-trust-info">
            <strong>100% Real</strong>
            <span>Guest Captured Photos</span>
          </div>
        </div>

        <div className="gallery-trust-divider"></div>

        <div className="gallery-trust-item">
          <div className="gallery-trust-icon-box">
            <Star size={20} />
          </div>
          <div className="gallery-trust-info">
            <strong>4.9 / 5</strong>
            <span>Average Satisfaction</span>
          </div>
        </div>

        <div className="gallery-trust-divider"></div>

        <div className="gallery-trust-item">
          <div className="gallery-trust-icon-box">
            <ShieldCheck size={20} />
          </div>
          <div className="gallery-trust-info">
            <strong>Kashmir Native</strong>
            <span>Mezbaani & Care</span>
          </div>
        </div>
      </section>

      {/* Main Gallery Showcase */}
      <section className="gallery-main-section">
        <div className="gallery-section-header">
          <span className="gallery-tag-pill">Explore Kashmir</span>
          <h2>
            Captured <span>Memories</span>
          </h2>
          <p>
            Filter by destination to view real moments from Shikara rides on Dal Lake to snow adventures in Gulmarg.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="gallery-filters-wrapper">
          {filterCategories.map((cat) => {
            const count =
              cat.id === "all"
                ? galleryItems.length
                : galleryItems.filter((item) => item.category === cat.id).length;

            return (
              <button
                key={cat.id}
                className={`gallery-filter-btn ${activeFilter === cat.id ? "active" : ""}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div className="gallery-photo-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-card ${item.layout || "normal"}`}
              onClick={() => openModal(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="gallery-card-img"
                loading="lazy"
              />
              <div className="gallery-card-overlay">
                <div className="card-top-bar">
                  <div className="card-location-badge">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>
                  <div className="card-expand-btn">
                    <Maximize2 size={16} />
                  </div>
                </div>

                <div className="card-bottom-info">
                  <h3>{item.title}</h3>
                  <p>{item.story}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div className="gallery-modal-backdrop" onClick={closeModal}>
          <div
            className="gallery-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="gallery-modal-header">
              <div className="modal-header-left">
                <span className="modal-counter">
                  {selectedImageIndex + 1} / {filteredItems.length}
                </span>
                <div className="modal-location">
                  <MapPin size={15} color="#FAA935" />
                  <span>{filteredItems[selectedImageIndex].location}</span>
                </div>
              </div>
              <button
                className="modal-close-btn"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body / Image & Nav */}
            <div className="gallery-modal-body">
              <button
                className="modal-nav-btn prev"
                onClick={showPrev}
                aria-label="Previous photo"
              >
                <ChevronLeft size={26} />
              </button>

              <img
                src={filteredItems[selectedImageIndex].src}
                alt={filteredItems[selectedImageIndex].title}
                className="modal-main-image"
              />

              <button
                className="modal-nav-btn next"
                onClick={showNext}
                aria-label="Next photo"
              >
                <ChevronRight size={26} />
              </button>
            </div>

            {/* Modal Footer / Details & WhatsApp Action */}
            <div className="gallery-modal-footer">
              <div className="modal-info-text">
                <h3>{filteredItems[selectedImageIndex].title}</h3>
                <p>{filteredItems[selectedImageIndex].story}</p>
              </div>

              <a
                href={`https://wa.me/919103115848?text=Hello%20Velarova%20Tours,%20I%20saw%20the%20${encodeURIComponent(
                  filteredItems[selectedImageIndex].title
                )}%20photo%20in%20your%20gallery%20and%20want%20to%20plan%20a%20similar%20trip!`}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action-btn"
              >
                <MessageCircle size={17} />
                <span>Book This Experience</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Guest Experiences & Reviews */}
      <section className="gallery-stories-section">
        <div className="stories-container">
          <div className="gallery-section-header">
            <span className="gallery-tag-pill">Traveler Stories</span>
            <h2>
              What Our <span>Guests Say</span>
            </h2>
            <p>
              Memories made forever with Velarova Tours — heartfelt hospitality, expert local drivers, and seamless itineraries.
            </p>
          </div>

          <div className="stories-grid">
            <div className="story-review-card">
              <div>
                <div className="story-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} fill="#FAA935" color="#FAA935" />
                  ))}
                </div>
                <p className="story-quote-body">
                  &ldquo;Our 6-day family trip across Srinagar, Gulmarg, and Pahalgam was nothing short of magic. Our driver Danish was like family, ensuring every stop was safe and breathtaking!&rdquo;
                </p>
              </div>
              <div className="story-author-row">
                <div className="story-avatar">RK</div>
                <div className="story-author-details">
                  <strong>Rohit &amp; Kavita Sharma</strong>
                  <span>Traveled from Mumbai • Gulmarg &amp; Pahalgam Tour</span>
                </div>
              </div>
            </div>

            <div className="story-review-card">
              <div>
                <div className="story-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} fill="#FAA935" color="#FAA935" />
                  ))}
                </div>
                <p className="story-quote-body">
                  &ldquo;The sunset Shikara ride and cozy houseboat on Nigeen Lake with authentic hot Kehwa was the highlight of our honeymoon. Velarova handled every single detail with true warmth.&rdquo;
                </p>
              </div>
              <div className="story-author-row">
                <div className="story-avatar">AP</div>
                <div className="story-author-details">
                  <strong>Ananya &amp; Prateek Sen</strong>
                  <span>Traveled from Bengaluru • Kashmir Honeymoon Special</span>
                </div>
              </div>
            </div>

            <div className="story-review-card">
              <div>
                <div className="story-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} fill="#FAA935" color="#FAA935" />
                  ))}
                </div>
                <p className="story-quote-body">
                  &ldquo;Transparent pricing, immaculate clean vehicles, and 24/7 support throughout our Sonamarg and Doodhpathri exploration. We will definitely recommend Velarova to all our friends!&rdquo;
                </p>
              </div>
              <div className="story-author-row">
                <div className="story-avatar">SM</div>
                <div className="story-author-details">
                  <strong>Dr. Siddharth Mehta</strong>
                  <span>Traveled from Delhi • Group Explorer Package</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="gallery-cta-banner">
        <div className="gallery-cta-content">
          <div className="gallery-cta-text">
            <h3>
              Ready to Create Your Own <span>Kashmir Story?</span>
            </h3>
            <p>
              Tell us your preferred dates and dream destinations — we’ll craft a customized itinerary tailored specifically for you.
            </p>
          </div>
          <a
            href="https://wa.me/919103115848?text=Hello%20Velarova%20Tours,%20I%20am%20inspired%20by%20your%20gallery%20and%20want%20to%20plan%20my%20Kashmir%20trip!"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-cta-btn"
          >
            <span>Plan My Trip on WhatsApp</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
