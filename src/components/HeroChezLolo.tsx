import React from "react";

export default function HeroChezLolo() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const slides = [
    {
      background: 'https://ik.imagekit.io/a7tech/bakery/croissant1.jpg?updatedAt=1757692565369',
      title: 'BONJOUR BAINBRIDGE ISLAND',
      text: 'Chez Lolo blends authentic French craftsmanship with Pacific Northwest spirit. Born from a quest for the perfect pastry; it\'s more than a bakery—it\'s a welcoming place where fresh memories are made daily.'
    },
    {
      background: 'https://ik.imagekit.io/a7tech/bakery/Pastry1.jpg?updatedAt=1757695930090',
      title: 'CRAFTSMANSHIP',
      text: 'Traditional methods, meticulous attention to detail, and the patience that true artistry demands.'
    },
    {
      background: 'https://ik.imagekit.io/a7tech/bakery/Cookies1.jpg?updatedAt=1757698603804',
      title: 'QUALITY WITHOUT COMPROMISE',
      text: 'Only the finest ingredients, upholding the spirit of true French baking tradition.'
    },
    {
      background: 'https://ik.imagekit.io/a7tech/bakery/smallcake1.jpg?updatedAt=1757698586378',
      title: 'WARM HOSPITALITY',
      text: 'Every guest feels welcomed, remembered, and genuinely cared for.'
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-root">
      {/* Top checkerboard bar */}
      <div className="top-bar" aria-hidden="true" />

      {/* Nav */}
      <header className="nav">
        <a className="brand" href="/" aria-label="Chez Lolo Home">
          <img
            src="https://ik.imagekit.io/a7tech/bakery/chezlolologo.webp?updatedAt=1756513480105"
            alt="Chez Lolo logo"
            className="logo"
          />
        </a>

        <nav className="menu">
          <a
            href="#our-story"
            className="menu-item"
            onClick={(e) => handleScrollToSection(e, 'our-story')}
          >
            My Story
          </a>
          <a
            href="#order-online"
            className="menu-item"
            onClick={(e) => handleScrollToSection(e, 'order-online')}
          >
            Online Ordering
          </a>
          <a
            href="#contact-us"
            className="menu-item"
            onClick={(e) => handleScrollToSection(e, 'contact-us')}
          >
            Contact Us
          </a>
        </nav>
      </header>

      {/* Hero background */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`hero-bg ${index === currentSlide ? 'active' : ''}`} 
          style={{ backgroundImage: `url('${slide.background}')` }}
          role="img" 
          aria-label={index === 0 ? "Freshly baked croissants" : "Artisanal pastries"}
        />
      ))}

      {/* Overlay for readability */}
      <div className="overlay" />

      {/* Content */}
      <div className="container">
        <div className="content-wrapper">
          {slides.map((slide, index) => (
            <div key={index} className={`slide-content ${index === currentSlide ? 'active' : ''}`}>
              <h1 className="headline">{slide.title}</h1>
              <p className="tagline">{slide.text}</p>
            </div>
          ))}
        </div>

        <p className="footer-mini">
          THE PAVILION // 403 Madison Ave N Suite 260, Bainbridge Island, WA 98110
        </p>
      </div>

      <style>{`
        :root{
          --brand-sage: #BFDCCB;
          --brand-sage-600: #8CB6A3;
          --ink: #FFFFFF;
          --ink-muted: #F5F7F6;
          --overlay: rgba(0,0,0,0.28);
          --maxw: 1200px;
          --pad-x: clamp(16px, 4vw, 48px);
          --nav-h: 84px;
        }

        .hero-root{
          position: relative;
          min-height: 88vh;
          color: var(--ink);
          overflow: hidden;
          background: #000; /* fallback before image paints */
        }

        /* Green/white rectangular pattern bar */
        .top-bar{
          height: 28px;
          background-image:
            repeating-linear-gradient(
              90deg,
              var(--brand-sage) 0 64px,
              #ffffff 64px 128px
            );
          border-bottom: 1px solid rgba(0,0,0,0.06);
          position: relative;
          z-index: 3;
        }

        .nav{
          position: absolute;
          top: 28px;
          left: 0; right: 0;
          height: var(--nav-h);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 var(--pad-x);
          z-index: 10;
          pointer-events: none;
        }
        .nav > *{
          pointer-events: auto;
        }

        .brand{
          margin-top: 64px;
          padding-top: 64px;
        }

        .logo{
          height: 144px;
          width: auto;
          border-radius: 6px;
        }

        .menu{
          display: flex;
          gap: clamp(12px, 2.6vw, 28px);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Apple Color Emoji","Segoe UI Emoji";
          font-weight: 600;
          letter-spacing: 0.02em;
          font-size: clamp(14px, 1.2vw, 16px);
        }

        .menu-item{
          color: var(--ink);
          text-decoration: none;
          cursor: pointer;
          position: relative;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          letter-spacing: inherit;
          display: inline-block;
          transition: color 0.2s ease;
        }
        .menu-item:hover{
          color: var(--ink-muted);
        }
        .menu-item::after{
          content:"";
          position:absolute;
          left:0; right:0; bottom:-6px;
          height:1px; background: transparent;
          transition: background .2s ease;
        }
        .menu-item:hover::after{ 
          background: var(--ink-muted); 
        }

        .hero-bg{
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: none;
          z-index: 1;
          transform: scale(1.02); /* subtle punch */
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .hero-bg.active{
          opacity: 1;
        }

        .content-wrapper{
          position: relative;
        }

        .slide-content{
          opacity: 0;
          transition: opacity 1s ease-in-out;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
        }
        .slide-content.active{
          opacity: 1;
          position: relative;
        }
        .overlay{
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.35));
          z-index: 2;
        }

        .container{
          position: relative;
          z-index: 5;
          max-width: var(--maxw);
          margin: 0 auto;
          padding: calc(28px + var(--nav-h) + 40px + 64px) var(--pad-x) 48px;
          display: grid;
          align-content: center;
          min-height: 88vh;
        }

        .headline{
          font-family: "Playfair Display", ui-serif, Georgia, "Times New Roman", serif;
          font-weight: 100;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-size: clamp(36px, 6vw, 64px);
          line-height: 1.05;
          margin: 0 0 20px 0;
          text-shadow: 0 2px 16px rgba(0,0,0,0.5);
        }

        .tagline{
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          font-weight: 400;
          font-size: clamp(14px, 1.6vw, 18px);
          line-height: 1.5;
          max-width: 720px;
          text-shadow: 0 1px 10px rgba(0,0,0,0.45);
          margin: 0 0 28px 0;
        }

        .footer-mini{
          font-family: Inter, ui-sans-serif, system-ui;
          font-size: clamp(11px, 1.2vw, 12px);
          opacity: 0.9;
          position: absolute;
          bottom: 32px;
          right: var(--pad-x);
          text-align: right;
          margin: 0;
          text-shadow: 0 1px 8px rgba(0,0,0,0.45);
        }

        /* Mobile adjustments */
        @media (max-width: 640px){
          .logo{ height: 60px; }
          .footer-mini{ max-width: 90%; }
          .menu{ display: none; }
        }
      `}</style>
    </section>
  );
}