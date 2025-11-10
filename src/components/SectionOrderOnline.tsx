import React from "react";

export default function SectionOrderOnline() {
  return (
    <section id="order-online" className="order" aria-labelledby="order-h2">
      {/* checkerboard stripe */}
      <div className="order__bar" aria-hidden="true" />

      <div className="order__wrap">
        <header className="order__head">
          <h2 id="order-h2" className="order__hd">ORDER ONLINE (COMING)</h2>
          <p className="order__sub">
            Fresh pastries and viennoiserie, ready for pickup. Tap an item to learn more or start an order.
          </p>
        </header>

        {/* Row 1 — two images */}
        <div className="order__grid order__grid--row1">
          <a className="order__card" href="#">
            <img
              src="https://ik.imagekit.io/a7tech/bakery/Upload%20all/Pastry2.jpg?updatedAt=1757703003296"
              alt="Viennoiserie pastries"
            />
            <div className="order__overlay">
              <div className="order__text">
                <span className="order__title">Viennoiserie</span>
                <span className="order__subtitle">Future Online Ordering</span>
              </div>
            </div>
          </a>

          <a className="order__card" href="#">
            <img
              src="https://ik.imagekit.io/a7tech/bakery/Upload%20all/pastry3.jpg?updatedAt=1757703003449"
              alt="Patisserie desserts"
            />
            <div className="order__overlay">
              <div className="order__text">
                <span className="order__title">Patisserie</span>
                <span className="order__subtitle">Future Online Ordering</span>
              </div>
            </div>
          </a>
        </div>

        {/* Row 2 — three images */}
        <div className="order__grid order__grid--row2">
          <a className="order__card" href="#">
            <img
              src="https://ik.imagekit.io/a7tech/bakery/Upload%20all/Pastry%204.jpg?updatedAt=1757703003323"
              alt="Gâteaux de Voyage"
            />
            <div className="order__overlay">
              <div className="order__text">
                <span className="order__title">Gâteaux de Voyage</span>
                <span className="order__subtitle">Future Online Ordering</span>
              </div>
            </div>
          </a>

          <a className="order__card" href="#">
            <img
              src="https://ik.imagekit.io/a7tech/bakery/Upload%20all/Pastry5.jpg?updatedAt=1757703003352"
              alt="Drinks and beverages"
            />
            <div className="order__overlay">
              <div className="order__text">
                <span className="order__title">Drinks</span>
                <span className="order__subtitle">Future Online Ordering</span>
              </div>
            </div>
          </a>

          <a className="order__card" href="#">
            <img
              src="https://ik.imagekit.io/a7tech/bakery/Upload%20all/image.png?updatedAt=1757703322641"
              alt="Merchandise and gifts"
            />
            <div className="order__overlay">
              <div className="order__text">
                <span className="order__title">Merchandise</span>
                <span className="order__subtitle">Future Online Ordering</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <style>{`
        :root{
          --parchment:#F4E8D6;
          --gold:#C79A3A;
          --text:#3A3A3A;
          --sage:#BFDCCB;
          --ink:#FFFFFF;
          --mx:1200px;
          --pad: clamp(20px, 4vw, 48px);
          --gap: clamp(14px, 2.4vw, 28px);
          --radius: 10px;
        }

        .order{
          background: var(--parchment);
          color: var(--text);
        }

        .order__bar{
          height: 28px;
          background-image: repeating-linear-gradient(90deg, var(--sage) 0 64px, #fff 64px 128px);
          border-bottom: 1px solid rgba(0,0,0,.06);
        }

        .order__wrap{
          max-width: var(--mx);
          margin: 0 auto;
          padding: clamp(28px, 6vw, 56px) var(--pad) 80px;
        }

        .order__head{
          margin-bottom: clamp(32px, 4vw, 48px);
        }
        .order__hd{
          font-family: "Playfair Display", serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .04em;
          color: var(--gold);
          font-size: clamp(28px, 4.2vw, 42px);
          margin: 0 0 12px 0;
          line-height: 1.15;
        }
        .order__sub{
          font-family: Inter, sans-serif;
          font-size: clamp(14px, 1.35vw, 18px);
          line-height: 1.6;
          max-width: 70ch;
          margin: 0;
        }

        /* Grids */
        .order__grid{
          display: grid;
          gap: var(--gap);
          margin-bottom: var(--gap);
        }
        .order__grid--row1{ 
          grid-template-columns: 1fr 1fr; 
          margin-bottom: clamp(14px, 2.4vw, 28px);
        }
        .order__grid--row2{ 
          grid-template-columns: 1fr 1fr 1fr; 
        }

        /* Cards with overlay */
        .order__card{
          position: relative;
          overflow: hidden;
          border-radius: var(--radius);
          box-shadow: 0 6px 18px rgba(0,0,0,.08);
          text-decoration: none;
          display: block;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .order__card:hover{
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0,0,0,.12);
        }
        .order__card img{
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          display: block;
          transition: transform .4s ease;
        }
        .order__card:hover img{ 
          transform: scale(1.05); 
        }

        .order__overlay{
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1) 50%, rgba(0,0,0,0));
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .order__text{
          text-align: center;
          color: var(--ink);
        }

        .order__title{
          display: block;
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(24px, 3vw, 36px);
          line-height: 1.2;
          margin-bottom: 4px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.6);
        }

        .order__subtitle{
          display: block;
          font-family: Inter, sans-serif;
          font-weight: 400;
          font-size: clamp(14px, 1.6vw, 18px);
          opacity: 0.9;
          text-shadow: 0 1px 4px rgba(0,0,0,0.6);
        }

        /* Responsive stacking */
        @media (max-width: 900px){
          .order__grid--row1{ grid-template-columns: 1fr; }
          .order__grid--row2{ grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px){
          .order__grid--row2{ grid-template-columns: 1fr; }
          .order__title{ font-size: clamp(20px, 4vw, 28px); }
        }
      `}</style>
    </section>
  );
}