import React from "react";

export default function SectionContactUs() {
  return (
    <section id="contact-us" className="contact" aria-labelledby="contact-h2">
      {/* checkerboard stripe */}
      <div className="contact__bar" aria-hidden="true" />

      <div className="contact__wrap">
        <header className="contact__head">
          <h2 id="contact-h2" className="contact__hd">CONTACT US</h2>
          <p className="contact__sub">
            Visit us at The Pavilion on Bainbridge Island. We look forward to welcoming you.
          </p>
        </header>

        <div className="contact__grid">
          {/* Map */}
          <div className="contact__map-container">
            <img
              src="https://ik.imagekit.io/a7tech/bakery/Chezlolomap.jpg?updatedAt=1762810379276"
              alt="Map to Chez Lolo at The Pavilion"
              className="contact__map"
            />
          </div>

          {/* Address & Info */}
          <div className="contact__info">
            <div className="contact__info-block">
              <h3 className="contact__info-title">Location</h3>
              <p className="contact__info-text">
                THE PAVILION<br />
                403 Madison Ave N<br />
                Top Floor past Nirvana Indian Food<br />
                Bainbridge Island, WA 98110
              </p>
            </div>

            <div className="contact__info-block">
              <h3 className="contact__info-title">Hours</h3>
              <ul className="contact__hours">
                <li><span>Monday</span><span>Closed</span></li>
                <li><span>Tuesday</span><span>Closed</span></li>
                <li><span>Wednesday</span><span>Closed</span></li>
                <li><span>Thursday</span><span>8:00 AM – 1:00 PM</span></li>
                <li><span>Friday</span><span>8:00 AM – 1:00 PM</span></li>
                <li><span>Saturday</span><span>8:00 AM – 1:00 PM</span></li>
                <li><span>Sunday</span><span>8:00 AM – 1:00 PM</span></li>
              </ul>
            </div>

            <div className="contact__info-block">
              <h3 className="contact__info-title">Questions?</h3>
              <p className="contact__info-text">
                We'd love to hear from you.<br />
                Stop by during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        :root{
          --parchment:#F4E8D6;
          --gold:#C79A3A;
          --text:#3A3A3A;
          --sage:#BFDCCB;
          --mx:1200px;
          --pad: clamp(20px, 4vw, 48px);
          --radius: 10px;
        }

        .contact{
          background: var(--parchment);
          color: var(--text);
        }

        .contact__bar{
          height: 28px;
          background-image: repeating-linear-gradient(90deg, var(--sage) 0 64px, #fff 64px 128px);
          border-bottom: 1px solid rgba(0,0,0,.06);
        }

        .contact__wrap{
          max-width: var(--mx);
          margin: 0 auto;
          padding: clamp(28px, 6vw, 56px) var(--pad) 80px;
        }

        .contact__head{
          margin-bottom: clamp(32px, 4vw, 48px);
        }

        .contact__hd{
          font-family: "Playfair Display", serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .04em;
          color: var(--gold);
          font-size: clamp(28px, 4.2vw, 42px);
          margin: 0 0 12px 0;
          line-height: 1.15;
        }

        .contact__sub{
          font-family: Inter, sans-serif;
          font-size: clamp(14px, 1.35vw, 18px);
          line-height: 1.6;
          max-width: 70ch;
          margin: 0;
        }

        .contact__grid{
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: clamp(24px, 4vw, 56px);
          align-items: start;
        }

        .contact__map-container{
          position: relative;
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,.12);
        }

        .contact__map{
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .contact__info{
          display: flex;
          flex-direction: column;
          gap: clamp(28px, 3.5vw, 40px);
        }

        .contact__info-block{
          padding: clamp(20px, 3vw, 28px);
          background: rgba(255, 255, 255, 0.5);
          border-radius: var(--radius);
          box-shadow: 0 4px 12px rgba(0,0,0,.06);
        }

        .contact__info-title{
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(18px, 2vw, 24px);
          color: var(--gold);
          margin: 0 0 12px 0;
          letter-spacing: .02em;
        }

        .contact__info-text{
          font-family: Inter, sans-serif;
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 1.7;
          margin: 0;
          color: var(--text);
        }

        .contact__hours{
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact__hours li{
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          font-family: Inter, sans-serif;
          font-size: clamp(13px, 1.25vw, 15px);
          color: var(--text);
        }

        .contact__hours li:last-child{
          border-bottom: none;
        }

        .contact__hours li span:first-child{
          font-weight: 600;
        }

        .contact__hours li span:last-child{
          font-weight: 400;
          opacity: 0.85;
        }

        /* Responsive */
        @media (max-width: 900px){
          .contact__grid{
            grid-template-columns: 1fr;
            gap: clamp(32px, 5vw, 48px);
          }

          .contact__info{
            gap: clamp(20px, 3vw, 28px);
          }
        }
      `}</style>
    </section>
  );
}
