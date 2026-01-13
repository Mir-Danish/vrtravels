import React from "react";

export default function TourGallerySection() {
  return (
    <section className="gallery-section">
      <span className="tag">Gallery</span>
      <h2>Visit our customers tour gallery</h2>

      <div className="gallery-grid">
        <div className="gallery-item tall">
          <img src="https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326389/C1_l2evec.png" alt="tour" />
        </div>

        <div className="gallery-item">
          <img src="https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326517/C2_yg4ivj.png" alt="tour" />
        </div>

        <div className="gallery-item">
          <img src="https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326573/C3_nal2vz.png" alt="tour" />
        </div>

        <div className="gallery-item">
          <img src="https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326608/C4_itmeof.png" alt="tour" />
        </div>

        <div className="gallery-item">
          <img src="https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326637/C5_jpu3jf.png" alt="tour" />
        </div>

        <div className="gallery-item">
          <img src="https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326655/C6_x3xysx.png" alt="tour" />
        </div>

        <div className="gallery-item">
          <img src="https://res.cloudinary.com/dcarnhdrh/image/upload/v1768326700/C8_mb2srs.png" alt="tour" />
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
