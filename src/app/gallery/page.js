"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarPlus, Phone, ChevronLeft, ChevronRight,
  Star, Award, Users, Clock, Sparkles, Play, X,
  ZoomIn, Quote
} from "lucide-react";
import styles from "./page.module.css";

/* ═══════════════════════════════════════
   DATA
═══════════════════════════════════════ */
const categories = [
  { id: "all",         label: "All Cases" },
  { id: "makeover",   label: "Smile Makeover" },
  { id: "veneers",    label: "Veneers" },
  { id: "braces",     label: "Braces" },
  { id: "whitening",  label: "Whitening" },
  { id: "implants",   label: "Implants" },
  { id: "crowns",     label: "Crowns" },
];

const cases = [
  {
    id: 1,
    category: "makeover",
    title: "Hollywood Smile Makeover",
    problem: "Discolored, chipped & uneven teeth",
    treatment: "Emax Veneers",
    duration: "2 Visits",
    ageGroup: "28–35 yrs",
    result: "Natural Hollywood Smile",
    beforeImg: "/images/treatments/Emax Veneers.png",
    afterImg: "/images/treatments/Emax Veneers.png",
    tagColor: "#DB2777", tagBg: "#FDF2F8",
    doctorNote: "This patient had severe staining and spacing issues. We restored the smile using Emax Veneers in just 2 visits — the result was a perfect, natural-looking Hollywood smile.",
  },
  {
    id: 2,
    category: "veneers",
    title: "Composite Veneer Redesign",
    problem: "Gaps, discoloration & worn edges",
    treatment: "Composite Veneers",
    duration: "1 Session",
    ageGroup: "22–30 yrs",
    result: "Bright, even smile line",
    beforeImg: "/images/treatments/Composite Veneers.png",
    afterImg: "/images/treatments/Composite Veneers.png",
    tagColor: "#7C3AED", tagBg: "#F5F3FF",
    doctorNote: "Direct composite veneers allowed us to reshape and re-colour the teeth in a single session with zero drilling — an ideal minimally invasive solution.",
  },
  {
    id: 3,
    category: "braces",
    title: "Clear Aligners Transformation",
    problem: "Severe crowding & bite misalignment",
    treatment: "Invisible Braces",
    duration: "11 Months",
    ageGroup: "18–25 yrs",
    result: "Perfectly aligned smile",
    beforeImg: "/images/treatments/Invisible Braces.png",
    afterImg: "/images/treatments/Invisible Braces.png",
    tagColor: "#0D9488", tagBg: "#F0FDFA",
    doctorNote: "Using a series of custom clear aligners, we corrected significant crowding and an anterior crossbite — completely invisibly and comfortably.",
  },
  {
    id: 4,
    category: "braces",
    title: "Metal Braces Full Case",
    problem: "Malocclusion & spacing issues",
    treatment: "Metal Braces",
    duration: "18 Months",
    ageGroup: "15–22 yrs",
    result: "Harmonious, aligned bite",
    beforeImg: "/images/treatments/Braces.png",
    afterImg: "/images/treatments/Braces.png",
    tagColor: "#0D9488", tagBg: "#F0FDFA",
    doctorNote: "A comprehensive orthodontic case involving both arches — metal braces delivered precise control over tooth movement for a well-aligned, aesthetic result.",
  },
  {
    id: 5,
    category: "whitening",
    title: "Zoom Laser Whitening",
    problem: "Years of tea & coffee staining",
    treatment: "Zoom Whitening",
    duration: "60 Mins",
    ageGroup: "All ages",
    result: "8 shades brighter smile",
    beforeImg: "/images/treatments/Zoom Whitening.png",
    afterImg: "/images/treatments/Teeth whitening.png",
    tagColor: "#F59E0B", tagBg: "#FFFBEB",
    doctorNote: "In a single 60-minute appointment, Zoom laser whitening elevated the shade index by 8 levels — one of the most dramatic same-day transformations we offer.",
  },
  {
    id: 6,
    category: "implants",
    title: "Full Arch Dental Implant",
    problem: "Missing molars & pre-molars",
    treatment: "Titanium Implants + Zirconia",
    duration: "3 Months",
    ageGroup: "40–55 yrs",
    result: "Permanent, natural-feel teeth",
    beforeImg: "/images/treatments/Dental implant.png",
    afterImg: "/images/treatments/Dental implant.png",
    tagColor: "#DC2626", tagBg: "#FEF2F2",
    doctorNote: "Biocompatible titanium implants were placed in two quadrants, topped with zirconia crowns — restoring full chewing function and aesthetics permanently.",
  },
  {
    id: 7,
    category: "crowns",
    title: "Metal-Free Crown Placement",
    problem: "Broken old metal crown",
    treatment: "Lava Zirconia Crown",
    duration: "1 Week",
    ageGroup: "35–50 yrs",
    result: "Natural, metal-free restoration",
    beforeImg: "/images/treatments/Metal Free Crowns.png",
    afterImg: "/images/treatments/Metal Free Crowns.png",
    tagColor: "#2563EB", tagBg: "#EFF6FF",
    doctorNote: "Replacing the old PFM crown with a full-contour Lava zirconia crown eliminated the dark gum line and delivered superior aesthetics and biocompatibility.",
  },
  {
    id: 8,
    category: "crowns",
    title: "Root Canal + Crown",
    problem: "Infected tooth with severe decay",
    treatment: "Microscopic RCT + Crown",
    duration: "2–3 Visits",
    ageGroup: "30–45 yrs",
    result: "Tooth saved, pain-free",
    beforeImg: "/images/treatments/Microscopic Root Canal.png",
    afterImg: "/images/treatments/Root Canal Treatment.png",
    tagColor: "#059669", tagBg: "#ECFDF5",
    doctorNote: "Using dental microscope magnification, we performed a precision root canal treatment and placed a ceramic crown — saving the tooth completely.",
  },
];

const videoTestimonials = [
  {
    id: 1,
    title: "My Implant Journey",
    patient: "Rajesh Kumar",
    location: "Dwarka Sector 7",
    thumbnail: "/images/treatments/Dental implant.png",
    duration: "2:34",
    rating: 5,
  },
  {
    id: 2,
    title: "Braces Transformation",
    patient: "Sneha Agarwal",
    location: "Dwarka Mor",
    thumbnail: "/images/treatments/Braces.png",
    duration: "1:58",
    rating: 5,
  },
  {
    id: 3,
    title: "Teeth Whitening Experience",
    patient: "Priya Sharma",
    location: "Dwarka, Delhi",
    thumbnail: "/images/treatments/Zoom Whitening.png",
    duration: "2:12",
    rating: 5,
  },
];

const instagramGrid = [
  "/images/treatments/Emax Veneers.png",
  "/images/treatments/Dental implant.png",
  "/images/treatments/Invisible Braces.png",
  "/images/treatments/Zoom Whitening.png",
  "/images/treatments/Composite Veneers.png",
  "/images/treatments/Braces.png",
  "/images/treatments/Metal Free Crowns.png",
  "/images/treatments/Root Canal Treatment.png",
  "/images/treatments/Teeth whitening.png",
];

const stats = [
  { icon: <Users size={24} />, value: "5,000+", label: "Happy Smiles" },
  { icon: <Star size={24} />,  value: "98%",    label: "Patient Satisfaction" },
  { icon: <Award size={24} />, value: "15+",    label: "Years Experience" },
  { icon: <Clock size={24} />, value: "1,000+", label: "Smile Makeovers" },
];

const doctors = [
  { name: "Dr. Prashant Jindal", title: "BDS, MDS – Prosthodontist", initial: "PJ" },
  { name: "Dr. Neha Sharma",    title: "BDS, MDS – Orthodontist",    initial: "NS" },
];

/* ═══════════════════════════════════════
   BEFORE / AFTER SLIDER
═══════════════════════════════════════ */
function BeforeAfterSlider({ beforeImg, afterImg, title }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef(null);

  const update = useCallback((clientX) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const onDown  = (e) => { e.preventDefault(); setDragging(true); };
  const onMove  = useCallback((e) => { if (dragging) update(e.clientX); }, [dragging, update]);
  const onUp    = useCallback(() => setDragging(false), []);
  const onTouch = useCallback((e) => update(e.touches[0].clientX), [update]);

  return (
    <div
      ref={ref}
      className={styles.slider}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchMove={onTouch}
      onTouchEnd={onUp}
      aria-label={`Before and after: ${title}`}
    >
      {/* AFTER — base */}
      <div className={styles.sliderAfter}>
        <Image src={afterImg} alt="After" fill style={{ objectFit: "cover" }} />
        <span className={`${styles.sliderPill} ${styles.sliderPillAfter}`}>After</span>
      </div>
      {/* BEFORE — clipped */}
      <div className={styles.sliderBefore} style={{ width: `${pos}%` }}>
        <Image src={beforeImg} alt="Before" fill
          style={{ objectFit: "cover", filter: "contrast(82%) brightness(86%) saturate(50%)" }} />
        <span className={`${styles.sliderPill} ${styles.sliderPillBefore}`}>Before</span>
      </div>
      {/* HANDLE */}
      <div
        className={styles.sliderHandle}
        style={{ left: `${pos}%` }}
        onMouseDown={onDown}
        onTouchStart={(e) => { e.preventDefault(); setDragging(true); }}
        role="slider" tabIndex={0}
        aria-valuenow={Math.round(pos)} aria-valuemin={0} aria-valuemax={100}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft")  setPos(p => Math.max(0, p - 2));
          if (e.key === "ArrowRight") setPos(p => Math.min(100, p + 2));
        }}
      >
        <span className={styles.sliderLine} />
        <span className={styles.sliderThumb}>
          <ChevronLeft size={13} /><ChevronRight size={13} />
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   CASE CARD
═══════════════════════════════════════ */
function CaseCard({ c, onOpen }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Slider */}
      <div className={styles.cardSliderWrap}>
        <BeforeAfterSlider beforeImg={c.beforeImg} afterImg={c.afterImg} title={c.title} />
        {/* Hover overlay */}
        <div className={`${styles.cardOverlay} ${hovered ? styles.cardOverlayVisible : ""}`}>
          <span className={styles.overlayTreatment}>{c.treatment}</span>
          <span className={styles.overlayDuration}>{c.duration}</span>
          <span className={styles.overlayAge}>{c.ageGroup}</span>
        </div>
      </div>

      {/* Body */}
      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <h3 className={styles.caseTitle}>{c.title}</h3>
          <span className={styles.catBadge} style={{ color: c.tagColor, background: c.tagBg }}>
            {c.treatment}
          </span>
        </div>

        <div className={styles.caseDetails}>
          <div className={styles.detailRow}>
            <span className={styles.detailKey}>Problem</span>
            <span className={styles.detailVal}>{c.problem}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailKey}>Treatment</span>
            <span className={styles.detailVal}>{c.treatment}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailKey}>Duration</span>
            <span className={styles.detailVal}>{c.duration}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailKey}>Result</span>
            <span className={styles.detailVal} style={{ color: "#059669", fontWeight: 800 }}>{c.result}</span>
          </div>
        </div>

        <button className={styles.viewCaseBtn} onClick={() => onOpen(c)}>
          View Full Case →
        </button>
      </div>
    </article>
  );
}

/* ═══════════════════════════════════════
   CASE MODAL
═══════════════════════════════════════ */
function CaseModal({ c, onClose }) {
  useEffect(() => {
    const esc = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [onClose]);

  const doctor = doctors[c.id % 2];

  return (
    <div className={styles.modal} role="dialog" aria-modal="true" aria-label={c.title}>
      <div className={styles.modalBackdrop} onClick={onClose} />
      <div className={styles.modalBox}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className={styles.modalGrid}>
          {/* Left: full-screen comparison */}
          <div className={styles.modalLeft}>
            <BeforeAfterSlider beforeImg={c.beforeImg} afterImg={c.afterImg} title={c.title} />
          </div>

          {/* Right: details */}
          <div className={styles.modalRight}>
            <span className={styles.catBadge} style={{ color: c.tagColor, background: c.tagBg }}>
              {c.treatment}
            </span>
            <h2 className={styles.modalTitle}>{c.title}</h2>

            <div className={styles.modalMeta}>
              {[
                ["Problem", c.problem],
                ["Treatment", c.treatment],
                ["Duration", c.duration],
                ["Age Group", c.ageGroup],
                ["Result", c.result],
              ].map(([k, v]) => (
                <div key={k} className={styles.modalMetaRow}>
                  <span className={styles.modalMetaKey}>{k}</span>
                  <span className={styles.modalMetaVal}
                    style={k === "Result" ? { color: "#059669" } : {}}>{v}</span>
                </div>
              ))}
            </div>

            {/* Doctor comment */}
            <div className={styles.doctorNote}>
              <Quote size={20} className={styles.quoteIcon} />
              <p className={styles.doctorNoteText}>{c.doctorNote}</p>
              <div className={styles.doctorInfo}>
                <div className={styles.doctorAvatar}>{doctor.initial}</div>
                <div>
                  <p className={styles.doctorName}>{doctor.name}</p>
                  <p className={styles.doctorTitle}>{doctor.title}</p>
                </div>
              </div>
            </div>

            <Link href="/contact" className={styles.modalCTA}>
              <CalendarPlus size={16} /> Book Similar Treatment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   LIGHTBOX
═══════════════════════════════════════ */
function Lightbox({ src, onClose }) {
  useEffect(() => {
    const esc = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className={styles.lightbox} role="dialog" aria-modal="true">
      <div className={styles.lightboxBackdrop} onClick={onClose} />
      <div className={styles.lightboxBox}>
        <button className={styles.lightboxClose} onClick={onClose} aria-label="Close"><X size={22} /></button>
        <Image src={src} alt="Gallery photo" fill style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════ */
export default function SmileGallery() {
  const [filter, setFilter]           = useState("all");
  const [activeCase, setActiveCase]   = useState(null);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const filtered = filter === "all" ? cases : cases.filter(c => c.category === filter);

  return (
    <main className={styles.page}>

      {/* ══════════════════════════ 1. HERO ══════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden>
          <Image
            src="/images/gallery-hero.png"
            alt=""
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroDots} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>
              <Sparkles size={13} /> Real Patients · Real Confidence
            </div>
            <h1 className={styles.heroTitle}>
              Real Smile<br />
              <span className={styles.heroAccent}>Transformations</span>
            </h1>
            <p className={styles.heroSub}>
              See the confidence our patients gained through expert dental care.
              Drag the slider on any card to reveal the full before &amp; after.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/contact" className={styles.btnPrimary}>
                <CalendarPlus size={17} /> Book Free Consultation
              </Link>
              <a href="tel:8510007234" className={styles.btnOutline}>
                <Phone size={17} /> 85100 07234
              </a>
            </div>
          </div>
        </div>
        {/* Hero collage strip */}
        <div className={styles.heroCollage} aria-hidden>
          {[
            "/images/treatments/Emax Veneers.png",
            "/images/treatments/Dental implant.png",
            "/images/treatments/Zoom Whitening.png",
            "/images/treatments/Braces.png",
            "/images/treatments/Composite Veneers.png",
          ].map((src, i) => (
            <div key={i} className={styles.heroCollageItem}>
              <Image src={src} alt="" fill style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════ 3. GALLERY ══════════════════════════ */}
      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>BEFORE &amp; AFTER</span>
            <h2 className={styles.sectionTitle}>Premium Case Studies</h2>
            <p className={styles.sectionSub}>
              Drag the slider on each card to reveal the transformation.
              Click <em>View Full Case</em> to see the complete case study with doctor notes.
            </p>
          </div>

          {/* Category filter */}
          <div className={styles.filters} role="group" aria-label="Filter by category">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${filter === cat.id ? styles.filterBtnActive : ""}`}
                onClick={() => setFilter(cat.id)}
                aria-pressed={filter === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {filtered.map(c => (
              <CaseCard key={c.id} c={c} onOpen={setActiveCase} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className={styles.empty}>No cases in this category yet.</p>
          )}
        </div>
      </section>

      {/* ══════════════════════════ 4. FULL SCREEN COMPARISON ══════════════════════════ */}
      <section className={styles.featuredSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>FEATURED CASE</span>
            <h2 className={styles.sectionTitle}>Full Screen Comparison</h2>
          </div>
          <div className={styles.featuredCard}>
            <div className={styles.featuredSlider}>
              <BeforeAfterSlider
                beforeImg="/images/treatments/Emax Veneers.png"
                afterImg="/images/treatments/Emax Veneers.png"
                title="Hollywood Smile Makeover"
              />
            </div>
            <div className={styles.featuredDetails}>
              <div className={styles.featuredBadge}>Smile Makeover</div>
              <h3 className={styles.featuredTitle}>Hollywood Smile Makeover</h3>
              <p className={styles.featuredDesc}>
                Complete smile transformation using Emax Veneers. Corrected discoloration,
                spacing and chip — resulting in a celebrity-grade natural smile in just 2 visits.
              </p>
              <div className={styles.featuredMeta}>
                {[
                  ["Duration",  "2 Visits"],
                  ["Procedure", "Emax Veneers"],
                  ["Result",    "Hollywood Smile"],
                ].map(([k, v]) => (
                  <div key={k} className={styles.featuredMetaItem}>
                    <span className={styles.featuredMetaKey}>{k}</span>
                    <span className={styles.featuredMetaVal}>{v}</span>
                  </div>
                ))}
              </div>
              <div className={styles.doctorNote}>
                <Quote size={18} className={styles.quoteIcon} />
                <p className={styles.doctorNoteText}>
                  "This patient had severe staining and spacing. We restored the smile using
                  Emax Veneers in just 2 visits — the result was a perfect, natural-looking Hollywood smile."
                </p>
                <div className={styles.doctorInfo}>
                  <div className={styles.doctorAvatar}>PJ</div>
                  <div>
                    <p className={styles.doctorName}>Dr. Prashant Jindal</p>
                    <p className={styles.doctorTitle}>BDS, MDS – Prosthodontist</p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className={styles.btnPrimary} style={{ marginTop: "8px" }}>
                <CalendarPlus size={16} /> Book This Treatment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ 5. VIDEO TESTIMONIALS ══════════════════════════ */}
      <section className={styles.videoSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>PATIENT VIDEOS</span>
            <h2 className={styles.sectionTitle}>Video Testimonials</h2>
            <p className={styles.sectionSub}>
              Real patients share their smile journey in their own words.
            </p>
          </div>
          <div className={styles.videoGrid}>
            {videoTestimonials.map(v => (
              <div key={v.id} className={styles.videoCard}>
                <div className={styles.videoThumb}>
                  <Image src={v.thumbnail} alt={v.title} fill style={{ objectFit: "cover" }} />
                  <div className={styles.videoOverlay}>
                    <button className={styles.playBtn} aria-label={`Play ${v.title}`}>
                      <Play size={22} fill="white" />
                    </button>
                    <span className={styles.videoDuration}>{v.duration}</span>
                  </div>
                </div>
                <div className={styles.videoInfo}>
                  <div className={styles.starsRow}>
                    {Array.from({ length: v.rating }).map((_, j) => (
                      <Star key={j} size={13} fill="#F59E0B" stroke="none" />
                    ))}
                  </div>
                  <h3 className={styles.videoTitle}>{v.title}</h3>
                  <p className={styles.videoPatient}>{v.patient} · {v.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ 6. INSTAGRAM GRID ══════════════════════════ */}
      <section className={styles.instaSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>SMILE GALLERY</span>
            <h2 className={styles.sectionTitle}>Our Work, Up Close</h2>
            <p className={styles.sectionSub}>Click any photo to view full size.</p>
          </div>
          <div className={styles.instaGrid}>
            {instagramGrid.map((src, i) => (
              <button
                key={i}
                className={styles.instaItem}
                onClick={() => setLightboxSrc(src)}
                aria-label="View photo"
              >
                <Image src={src} alt={`Smile gallery ${i + 1}`} fill style={{ objectFit: "cover" }} />
                <div className={styles.instaHover}>
                  <ZoomIn size={22} color="white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ 7. CTA ══════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}><Sparkles size={13} /> Start Your Journey</span>
            <h2 className={styles.ctaTitle}>Ready for Your Smile Transformation?</h2>
            <p className={styles.ctaDesc}>
              Book a free consultation. Our specialists will craft a personalised treatment plan
              tailored to your smile goals.
            </p>
          </div>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className={styles.btnPrimary}>
              <CalendarPlus size={17} /> Book Free Consultation
            </Link>
            <a href="tel:8510007234" className={styles.ctaPhoneBtn}>
              <Phone size={17} /> 85100 07234
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ MODALS ══════════════════════════ */}
      {activeCase && <CaseModal c={activeCase} onClose={() => setActiveCase(null)} />}
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}

    </main>
  );
}
