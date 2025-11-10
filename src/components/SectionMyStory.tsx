import React from "react";

export default function SectionMyStory() {
  return (
    <section id="our-story" className="story2" aria-labelledby="my-story-h2">
      {/* checkerboard stripe */}
      <div className="story2__bar" aria-hidden="true" />

      <div className="story2__grid">
        {/* R1 — image LEFT */}
        <figure className="story2__fig story2__fig--left">
          <img
            src="https://ik.imagekit.io/a7tech/bakery/Dog1.jpg?updatedAt=1757701281457"
            alt="Piccolo with a croissant"
            loading="lazy"
          />
          <figcaption className="story2__cap story2__cap--left">
            Piccolo aka LoLo
          </figcaption>
        </figure>

        {/* R1 — text RIGHT */}
        <div className="story2__text story2__text--story">
          <h2 id="my-story-h2" className="story2__hd">MY STORY</h2>
          <p className="story2__p">
            After moving to the U.S., I longed for the croissants and pastries I
            loved—delicate, balanced, unforgettable. Everything I found was too
            sweet, too heavy, never the same. That longing sparked a journey to
            bring authentic French baking to life and share it with others.
          </p>
          <p className="story2__p story2__p--sub">THE STORY OF LOLO</p>
          <p className="story2__p">
            Piccolo, affectionately known as LoLo, inspires the spirit of our
            bakery—an endless love for good food, kindness, and the joy of making
            new friends. And then there's her playful yet shy little brother—Genjo,
            a 70-pound dog who still believes he's a lap puppy, forever wanting to
            curl up on you as your sweetest darling.
          </p>
        </div>

        {/* R2 — text LEFT */}
        <div className="story2__text story2__text--vision">
          <h3 className="story2__hd">OUR VISION</h3>
          <p className="story2__p">
            Bringing authentic European pastries with love and craftsmanship,
            creating a warm community space where every bite is both delight and
            memory.
          </p>
        </div>

        {/* R2 — image RIGHT */}
        <figure className="story2__fig story2__fig--right">
          <img
            src="https://ik.imagekit.io/a7tech/bakery/Dog2.jpg?updatedAt=1757701289137"
            alt="Genjo looking at a croissant on a plate"
            loading="lazy"
          />
          <figcaption className="story2__cap story2__cap--right">
            Genjo the Little Troublemaker
          </figcaption>
        </figure>
      </div>

      <style>{`
        :root{
          --parchment:#F4E8D6;
          --gold:#C79A3A;
          --text:#3A3A3A;
          --cap:#9A835B;
          --sage:#BFDCCB;
          --mx:1200px;
          --gx: clamp(18px, 2.5vw, 32px);
          --pad: clamp(20px, 4vw, 48px);
        }

        .story2{
          background: var(--parchment);
          color: var(--text);
        }

        .story2__bar{
          height: 28px;
          background-image: repeating-linear-gradient(90deg, var(--sage) 0 64px, #fff 64px 128px);
          border-bottom: 1px solid rgba(0,0,0,.06);
        }

        .story2__grid{
          max-width: var(--mx);
          margin: 0 auto;
          padding: clamp(28px, 6vw, 56px) var(--pad) 72px;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: auto;
          gap: var(--gx);
          align-items: start;
        }

        /* --- IMAGES --- */
        .story2__fig{
          margin: 0;
          position: relative;
        }
        .story2__fig img{
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          display: block;
          box-shadow: 0 8px 24px rgba(0,0,0,.08);
        }
        .story2__fig--left{ grid-column: 1 / span 5; grid-row: 1; }
        .story2__fig--right{ grid-column: 7 / span 6; grid-row: 2; }

        /* captions: left under left image, right under right image */
        .story2__cap{
          font-family: Inter, ui-sans-serif, system-ui;
          font-size: 12px;
          color: var(--cap);
          margin-top: 8px;
        }
        .story2__cap--left{ text-align: left; padding-left: 4px; }
        .story2__cap--right{ text-align: right; padding-right: 4px; }

        /* --- TEXT BLOCKS --- */
        .story2__text{
          padding-top: clamp(6px, 1vw, 10px);
        }
        .story2__text--story{ grid-column: 7 / span 6; grid-row: 1; }
        .story2__text--vision{ grid-column: 1 / span 5; grid-row: 2; }

        .story2__hd{
          font-family: "Playfair Display", ui-serif, Georgia, serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .04em;
          color: var(--gold);
          line-height: 1.15;
          font-size: clamp(28px, 4.2vw, 42px);
          margin: 6px 0 14px;
        }

        .story2__p{
          font-family: Inter, ui-sans-serif, system-ui;
          font-weight: 400;
          font-size: clamp(14px, 1.35vw, 18px);
          line-height: 1.6;
          max-width: 62ch;
          margin: 0 0 14px 0;
        }
        .story2__p--sub{
          font-weight: 600;
          letter-spacing: .01em;
          margin-top: 10px;
          margin-bottom: 6px;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 980px){
          .story2__fig--left{ grid-column: 1 / span 6; }
          .story2__text--story{ grid-column: 7 / span 6; }
          .story2__text--vision{ grid-column: 1 / span 6; }
          .story2__fig--right{ grid-column: 7 / span 6; }
        }

        @media (max-width: 760px){
          /* stack in the exact reading order of the design */
          .story2__fig--left{ grid-column: 1 / -1; grid-row: 1; }
          .story2__text--story{ grid-column: 1 / -1; grid-row: 2; }
          .story2__text--vision{ grid-column: 1 / -1; grid-row: 3; }
          .story2__fig--right{ grid-column: 1 / -1; grid-row: 4; }
          .story2__fig img{ 
            height: auto; 
            width: 100%; 
            object-fit: cover; 
            max-height: 50vh; 
          }
          .story2__cap--right{ text-align: left; }
        }
      `}</style>
    </section>
  );
}