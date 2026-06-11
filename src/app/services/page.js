"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarPlus, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./page.module.css";

/* ── Category SVG Icons ── */
const CatIcon = ({ id, size = 24 }) => {
  const icons = {
    preventive: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.5 2 5 5 5 8.5c0 2.5.8 4.5 1.8 6.2C8 17 8.5 19 8.5 21h7c0-2 .5-4 1.7-6.3C18.2 13 19 11 19 8.5 19 5 15.5 2 12 2z"/>
        <line x1="9" y1="13" x2="15" y2="13" strokeWidth="1.5"/>
        <line x1="12" y1="10" x2="12" y2="16" strokeWidth="1.5"/>
      </svg>
    ),
    restorative: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
      </svg>
    ),
    surgical: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    endodontics: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3 C6 3 4 5.5 4 8 C4 10 5 11.5 6 13 C7 14.5 7.5 16.5 7.5 19 L9.5 19 C9.5 17 10 15 11 13.5"/>
        <path d="M15 3 C18 3 20 5.5 20 8 C20 10 19 11.5 18 13 C17 14.5 16.5 16.5 16.5 19 L14.5 19 C14.5 17 14 15 13 13.5"/>
        <path d="M9.5 19 L14.5 19"/>
        <line x1="11" y1="13.5" x2="13" y2="13.5"/>
      </svg>
    ),
    cosmetic: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.8 5.5H19l-4.6 3.3 1.8 5.5L12 14l-4.2 3.3 1.8-5.5L5 8.5h5.2z"/>
        <circle cx="19" cy="4" r="1" fill="currentColor" stroke="none"/>
        <circle cx="5" cy="4" r="1" fill="currentColor" stroke="none"/>
        <circle cx="19" cy="19" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    orthodontics: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="9" width="20" height="6" rx="2.5"/>
        <line x1="7" y1="9" x2="7" y2="15"/>
        <line x1="12" y1="9" x2="12" y2="15"/>
        <line x1="17" y1="9" x2="17" y2="15"/>
        <path d="M2 12 Q7 10 12 12 Q17 14 22 12" strokeDasharray="1.5 1.5"/>
      </svg>
    ),
  };
  return icons[id] || null;
};

const categories = [
  {
    id: "preventive",
    label: "Preventive",
    fullLabel: "Preventive Care",
    desc: "Keep dental problems at bay with routine professional care and early intervention.",
    color: "#059669",
    light: "#ECFDF5",
    gradient: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
    services: [
      { title: "Teeth Cleaning", desc: "Professional scaling & polishing removes tartar, bacteria and deep stains — the cornerstone of lasting oral health.", icon: "/icons/teeth Cleaning (2).png", link: "/teeth-cleaning" },
      { title: "Fillings", desc: "Tooth-coloured composite fillings that restore decayed teeth to full strength — early treatment prevents bigger problems.", icon: "/icons/filling.png", link: "/fillings" },
    ],
  },
  {
    id: "restorative",
    label: "Restorative",
    fullLabel: "Restorative Dentistry",
    desc: "Repair, rebuild and restore your natural teeth to full function and beauty.",
    color: "#2563EB",
    light: "#EFF6FF",
    gradient: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
    services: [
      { title: "Fillings", desc: "Tooth-coloured composite fillings that restore decayed teeth with a seamless, natural look.", icon: "/icons/filling.png", link: "/fillings" },
      { title: "Tooth Colored Crown", desc: "Metal-free ceramic crowns crafted to match your natural teeth — strong, durable, and invisible.", icon: "/icons/Tooth Colored Crown.png", link: "/tooth-colored-crown" },
      { title: "Metal Free Crowns", desc: "Premium Lava Zirconia crowns — biocompatible, ultra-durable, and virtually indistinguishable from real teeth.", icon: "/icons/Metal Free Crowns.png", link: "/metal-free-crowns" },
    ],
  },
  {
    id: "surgical",
    label: "Oral Surgery",
    fullLabel: "Oral Surgery",
    desc: "Precise surgical solutions for complex dental conditions, performed with expert care.",
    color: "#DC2626",
    light: "#FEF2F2",
    gradient: "linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)",
    services: [
      { title: "Extraction", desc: "Safe, virtually painless tooth removal under precise local anaesthesia by experienced dental surgeons.", icon: "/icons/Extraction.png", link: "/extraction" },
      { title: "Wisdom Teeth Extraction", desc: "Specialist surgical removal of impacted or painful wisdom teeth with minimal downtime.", icon: "/icons/wisdom-tooth.png", link: "/wisdom-teeth-extraction" },
      { title: "Dental Implants", desc: "Permanent titanium roots with natural-looking crowns — the gold standard for replacing missing teeth.", icon: "/icons/dental-implant.png", link: "/implants" },
    ],
  },
  {
    id: "endodontics",
    label: "Endodontics",
    fullLabel: "Endodontics (RCT)",
    desc: "Save your natural teeth through advanced root canal techniques with lifetime warranty.",
    color: "#7C3AED",
    light: "#F5F3FF",
    gradient: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
    services: [
      { title: "Root Canal Treatment", desc: "Painless RCT to save your natural tooth. Every procedure backed by our lifetime guarantee.", icon: "/icons/Root canals.png", link: "/root-canal-treatment" },
      { title: "Microscopic Root Canal", desc: "Microscope-enhanced precision RCT with motorised instruments — ideal for complex or retreatment cases.", icon: "/icons/Microscopic Root Canal Treatment.png", link: "/microscopic-root-canal" },
    ],
  },
  {
    id: "cosmetic",
    label: "Cosmetic",
    fullLabel: "Cosmetic Dentistry",
    desc: "Transform your smile with cutting-edge aesthetic treatments for a picture-perfect look.",
    color: "#DB2777",
    light: "#FDF2F8",
    gradient: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)",
    services: [
      { title: "Teeth Whitening", desc: "Professional-grade whitening that safely removes years of staining from tea, coffee and food.", icon: "/icons/teeth-whitening.png", link: "/teeth-whitening" },
      { title: "Zoom Whitening", desc: "Light-accelerated Zoom technology — up to 8 shades whiter in a single 60-minute in-clinic session.", icon: "/icons/Zoom Whitening.png", link: "/zoom-whitening" },
      { title: "Composite Veneers", desc: "Same-day resin veneers that instantly mask cracks, chips and discolouration.", icon: "/icons/omposite Veneers.png", link: "/composite-veneers" },
      { title: "Emax Veneers", desc: "Ultra-thin lithium disilicate porcelain veneers crafted for a flawless, Hollywood-worthy smile.", icon: "/icons/Emax Veneers.png", link: "/emax-veneers" },
    ],
  },
  {
    id: "orthodontics",
    label: "Orthodontics",
    fullLabel: "Orthodontics",
    desc: "Straighten your smile with modern alignment solutions — discreet, comfortable and effective.",
    color: "#0D9488",
    light: "#F0FDFA",
    gradient: "linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)",
    services: [
      { title: "Invisible Braces", desc: "Custom clear aligners that straighten teeth discreetly — removable, comfortable and virtually invisible.", icon: "/icons/Invisible Braces.png", link: "/invisible-braces" },
      { title: "Braces", desc: "High-quality metal and ceramic braces for precise tooth alignment — trusted by millions worldwide.", icon: "/icons/braces.png", link: "/braces" },
    ],
  },
];

export default function ServicesPage() {
  const [activeId, setActiveId] = useState("preventive");
  const active = categories.find((c) => c.id === activeId);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
          <span className={styles.heroTag}>Dwarka's Most Trusted Dental Clinic</span>
          <h1 className={styles.heroTitle}>
            World-Class Dental <br />
            <span className={styles.heroAccent}>Treatments</span>
          </h1>
          <p className={styles.heroSub}>
            15+ specialised treatments delivered by expert dentists using advanced technology — all under one roof in Dwarka, Delhi. We combine clinical excellence with a patient-first approach to ensure painless, high-quality, and ethical care.
          </p>
          <div className={styles.heroBtns}>
            <Link href="/contact" className={styles.heroPrimary}>
              <CalendarPlus size={18} /> Book Appointment
            </Link>
            <a href="tel:8510007234" className={styles.heroSecondary}>
              <Phone size={18} /> 8510007234
            </a>
          </div>
          </div>
        </div>
      </section>



      {/* ── TREATMENTS SECTION ── */}
      <section className={styles.treatmentsSection}>
        <div className="container">

          {/* Section Header */}
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>OUR SERVICES</span>
            <h2 className={styles.sectionTitle}>Explore Our Dental Treatments</h2>
            <p className={styles.sectionSub}>
              Comprehensive dental solutions designed to keep your smile healthy, functional, and beautiful.
            </p>
          </div>

          {/* ── HORIZONTAL TABS ── */}
          <div className={styles.tabsWrapper}>
            <div className={styles.tabs}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`${styles.tab} ${activeId === cat.id ? styles.tabActive : ""}`}
                  onClick={() => setActiveId(cat.id)}
                  style={activeId === cat.id ? {
                    background: cat.color,
                    borderColor: cat.color,
                    color: "#fff",
                  } : {}}
                >
                  <span className={styles.tabIcon} style={activeId === cat.id ? { color: "#fff" } : { color: cat.color }}>
                    <CatIcon id={cat.id} size={18} />
                  </span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── CATEGORY BANNER ── */}
          <div
            className={styles.catBanner}
            style={{ background: active.gradient, borderColor: active.color + "30" }}
          >
            <div className={styles.catBannerLeft}>
              <div className={styles.catBannerIcon} style={{ background: active.color + "18", color: active.color }}>
                <CatIcon id={active.id} size={32} />
              </div>
              <div>
                <span className={styles.catBannerBadge} style={{ background: active.color + "18", color: active.color }}>
                  {active.label}
                </span>
                <h3 className={styles.catBannerTitle}>{active.fullLabel}</h3>
                <p className={styles.catBannerDesc}>{active.desc}</p>
              </div>
            </div>
            <div className={styles.catBannerRight}>
              <span className={styles.catBannerCount} style={{ color: active.color }}>
                {active.services.length}
              </span>
              <span className={styles.catBannerCountLabel}>Treatment{active.services.length > 1 ? "s" : ""}</span>
            </div>
          </div>

          {/* ── CARDS GRID ── */}
          <div className={styles.cardsGrid}>
            {active.services.map((s, i) => (
              <Link href={s.link} key={i} className={styles.card}>
                <div className={styles.cardIconWrap} style={{ background: active.color + "12" }}>
                  <Image src={s.icon} alt={s.title} width={52} height={52} />
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>{s.title}</h4>
                  <p className={styles.cardDesc}>{s.desc}</p>
                </div>
                <div
                  className={styles.cardBtn}
                  style={{ color: active.color, borderColor: active.color + "30", background: active.color + "08" }}
                >
                  View Treatment <ArrowRight size={15} />
                </div>
                <div className={styles.cardAccent} style={{ background: active.color }} />
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── ALL TREATMENTS OVERVIEW ── */}
      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewHeaderRow}>
            <div className={styles.overviewHeaderLeft}>
              <span className={styles.sectionTag}>ALL TREATMENTS</span>
              <h2 className={styles.sectionTitle}>Everything We Offer</h2>
              <p className={styles.sectionSub}>Comprehensive dental care across all specialities — from routine checkups to advanced cosmetic procedures.</p>
            </div>
          </div>
          
          <div className={styles.sliderContainer}>
            <button onClick={() => scroll("left")} className={`${styles.sliderArrow} ${styles.arrowLeft}`} aria-label="Scroll Left">
              <ChevronLeft size={24} />
            </button>

            <div className={styles.overviewScrollWrapper} ref={scrollContainerRef}>
              <div className={styles.overviewGrid}>
                {(() => {
                  const seen = new Set();
                  const uniqueServices = [];
                  categories.forEach((cat) => {
                    cat.services.forEach((s) => {
                      if (!seen.has(s.title)) {
                        seen.add(s.title);
                        uniqueServices.push({ ...s, cat });
                      }
                    });
                  });
                  return uniqueServices.map((s, i) => (
                    <Link href={s.link} key={i} className={styles.overviewCard}>
                      <div className={styles.overviewCardAccent} style={{ background: `linear-gradient(90deg, ${s.cat.color}, transparent)` }} />
                      <div className={styles.overviewIcon} style={{ background: s.cat.light }}>
                        <Image src={s.icon} alt={s.title} width={36} height={36} />
                      </div>
                      <div className={styles.overviewInfo}>
                        <span className={styles.overviewCat} style={{ color: s.cat.color }}>{s.cat.label}</span>
                        <span className={styles.overviewTitle}>{s.title}</span>
                      </div>
                      <div className={styles.overviewArrowWrap} style={{ background: s.cat.light, color: s.cat.color }}>
                        <ArrowRight size={16} className={styles.overviewArrow} />
                      </div>
                    </Link>
                  ));
                })()}
              </div>
            </div>

            <button onClick={() => scroll("right")} className={`${styles.sliderArrow} ${styles.arrowRight}`} aria-label="Scroll Right">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className={styles.ctaTitle}>Not sure which treatment you need?</h2>
            <p className={styles.ctaDesc}>Our dentists will evaluate your oral health and recommend the best personalised plan — completely free.</p>
          </div>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className={styles.ctaPrimary}>
              <CalendarPlus size={16} /> Book Free Consultation
            </Link>
            <a href="tel:8510007234" className={styles.ctaCall}>
              <Phone size={16} /> Call Clinic
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
