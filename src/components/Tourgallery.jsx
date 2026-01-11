import React from "react";

export default function TourGallerySection() {
  return (
    <section className="gallery-section">
      <span className="tag">Gallery</span>
      <h2>Visit our customers tour gallery</h2>

      <div className="gallery-grid">
        <div className="gallery-item tall">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="tour" />
        </div>

        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" alt="tour" />
        </div>

        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="tour" />
        </div>

        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="tour" />
        </div>

        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="tour" />
        </div>

        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" alt="tour" />
        </div>

        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d" alt="tour" />
        </div>
      </div>

      <style>{`
        .gallery-section {
          padding: 60px 80px;
          font-family: 'Poppins', sans-serif;
        }

        .tag {
          display: inline-block;
          background: #fde68a;
          color: #d97706;
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        .gallery-section h2 {
          font-size: 32px;
          margin: 12px 0 40px;
          color: #1f2937;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 180px;
          gap: 20px;
        }

        .gallery-item {
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .gallery-item.tall {
          grid-row: span 2;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.08);
        }

        @media (max-width: 1024px) {
          .gallery-section {
            padding: 40px;
          }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
