"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Sparkles, CalendarPlus, Phone, Star, Award, Users, Clock,
  Smile, ShieldCheck, Heart, Microscope, Monitor, Scan,
  Target, Rocket, CheckCircle, X, ZoomIn
} from "lucide-react";
import styles from "./page.module.css";

/* ═══════════════════ DATA ═══════════════════ */

const timeline = [
  { year: "2010", title: "Clinic Founded", desc: "Elite Speciality Clinic opened its doors in Dwarka with a vision to provide ethical, advanced dental care." },
  { year: "2015", title: "Advanced Technology", desc: "Introduced dental microscope, digital X-rays, and CAD/CAM systems for precision treatment." },
  { year: "2020", title: "Smile Makeover Centre", desc: "Launched a dedicated cosmetic dentistry wing offering veneers, whitening, and full smile makeovers." },
  { year: "2025", title: "5,000+ Happy Patients", desc: "Reached a milestone of 5,000+ successfully treated patients with a 4.9★ Google rating." },
];

const doctors = [
  {
    name: "Dr. Vivek Kumar",
    title: "Clinic Director & Chief Endodontist",
    qual: "MDS – Conservative Dentistry & Endodontics",
    exp: "12+ Years",
    spec: "Microscopic RCT, Smile Design",
    initial: "VK",
    img: null,
  },
  {
    name: "Dr. Nidhi Sen",
    title: "Senior Orthodontist",
    qual: "MDS – Orthodontics & Dentofacial Orthopedics",
    exp: "10+ Years",
    spec: "Clear Aligners, Braces, Kids Ortho",
    initial: "NS",
    img: null,
  },
  {
    name: "Dr. Prashant Jindal",
    title: "Prosthodontist",
    qual: "BDS, MDS – Prosthodontics",
    exp: "8+ Years",
    spec: "Implants, Veneers, Crowns",
    initial: "PJ",
    img: null,
  },
];

const whyUs = [
  { icon: "🖥️", title: "Advanced Technology", desc: "Digital X-rays, dental microscope, Zoom whitening, CAD/CAM and more." },
  { icon: "💖", title: "Patient-First Care", desc: "Painless procedures, gentle approach and complete comfort at every visit." },
  { icon: "⭐", title: "4.9★ Google Rating", desc: "Trusted by 5,000+ patients with consistent 5-star reviews." },
  { icon: "🛡️", title: "100% Sterilisation", desc: "Class-B autoclave and international infection control protocols." },
  { icon: "⏰", title: "Flexible Appointments", desc: "Early morning and evening slots available for working professionals." },
  { icon: "🏆", title: "High Success Rate", desc: "Precision-led treatments with industry-leading clinical outcomes." },
];

const tourImages = [
  { src: "/images/treatments/Microscopic Root Canal.png", label: "Treatment Room" },
  { src: "/images/treatments/Dental implant.png", label: "Advanced Equipment" },
  { src: "/images/treatments/Invisible Braces.png", label: "Orthodontics Zone" },
  { src: "/images/treatments/Emax Veneers.png", label: "Cosmetic Dentistry" },
  { src: "/images/treatments/Zoom Whitening.png", label: "Whitening Suite" },
  { src: "/images/treatments/Teeth Cleaning.png", label: "Hygiene Station" },
];

const technologies = [
  { icon: "/icons/Digital X-Ray.png",        title: "Digital X-Ray",       desc: "Low radiation, instant imaging for precise diagnosis." },
  { icon: "/icons/Dental Microscope.png",     title: "Dental Microscope",   desc: "Microscopic precision for root canals and restorations." },
  { icon: "/icons/Zoom Whitening.png",        title: "Zoom Whitening",      desc: "Professional laser whitening system for 8+ shade improvement." },
  { icon: "/icons/CADCAM Dentistry.png",      title: "CAD/CAM Dentistry",   desc: "Same-day crowns and veneers with digital precision." },
  { icon: "/icons/Intraoral Scanner.png",     title: "Intraoral Scanner",   desc: "3D digital impressions — no messy moulds." },
  { icon: "/icons/Sterilisation Unit.png",    title: "Sterilisation Unit",  desc: "Class-B autoclave with international safety protocols." },
];

const testimonials = [
  { name: "Priya Sharma", loc: "Dwarka, Delhi", text: "The doctors are highly professional and the clinic is spotlessly clean. My smile makeover was a dream come true!", rating: 5, treatment: "Emax Veneers" },
  { name: "Rajesh Kumar", loc: "Sector 7, Dwarka", text: "Got my dental implants here. Absolutely painless and the results are natural. Best clinic in Dwarka by far.", rating: 5, treatment: "Dental Implants" },
  { name: "Anita Verma", loc: "Dwarka Mor", text: "Root canal was completely painless! The team is so kind and explains everything clearly. Highly recommended.", rating: 5, treatment: "Microscopic RCT" },
];

const stats = [
  { val: "5,000+", lbl: "Happy Patients" },
  { val: "15+",    lbl: "Years Experience" },
  { val: "1,000+", lbl: "Smile Makeovers" },
  { val: "4.9★",   lbl: "Google Rating" },
];

const certifications = [
  { icon: "🏅", title: "IDA Member", sub: "Indian Dental Association" },
  { icon: "🥇", title: "ISO Certified", sub: "Quality Management" },
  { icon: "🏆", title: "Best Dental Clinic", sub: "Dwarka, Delhi 2023" },
  { icon: "💎", title: "Invisalign Provider", sub: "Certified Partner" },
  { icon: "🌟", title: "Nobel Biocare", sub: "Implant Specialist" },
  { icon: "🛡️", title: "Safety Protocol", sub: "International Standards" },
];

/* ═══════════════════ PAGE ═══════════════════ */

export default function AboutPage() {
  const [lightbox, setLightbox] = useState(null);
  const [liveTestimonials, setLiveTestimonials] = useState(testimonials);
  const [pageData, setPageData] = useState({
    heroTitle: "About Our",
    heroAccent: "Dental Clinic",
    heroSub: "Creating healthy, confident smiles through advanced dentistry and compassionate care. Trusted by 5,000+ patients across Delhi NCR.",
    heroImage: "/images/hero-dental.png",
    mission: "To provide ethical, advanced, and affordable dental care that transforms smiles and builds lifelong patient relationships — one visit at a time.",
    vision: "To become the most trusted smile destination in Delhi NCR — known for clinical excellence, patient trust, and transformative dental experiences.",
    stats: stats // default stats
  });

  useEffect(() => {
    async function fetchPageData() {
      if (!db) return;
      try {
        const snap = await getDoc(doc(db, "siteContent", "about"));
        if (snap.exists()) {
          const data = snap.data();
          const words = (data.heroTitle || "About Our Dental Clinic").split(" ");
          const title = words.slice(0, 2).join(" ");
          const accent = words.slice(2).join(" ");
          
          setPageData({
            heroTitle: title,
            heroAccent: accent,
            heroSub: data.heroSub || pageData.heroSub,
            heroImage: data.heroImage || pageData.heroImage,
            mission: data.mission || pageData.mission,
            vision: data.vision || pageData.vision,
            stats: [
              { val: data.stat1 || stats[0].val, lbl: data.stat1Lbl || stats[0].lbl },
              { val: data.stat2 || stats[1].val, lbl: data.stat2Lbl || stats[1].lbl },
              { val: data.stat3 || stats[2].val, lbl: data.stat3Lbl || stats[2].lbl },
              { val: data.stat4 || stats[3].val, lbl: data.stat4Lbl || stats[3].lbl },
            ]
          });
        }
      } catch (err) {
        console.error("Failed to fetch about page data", err);
      }
    }
    fetchPageData();
  }, []);

  useEffect(() => {
    async function getReviews() {
      try {
        const res = await fetch("/api/reviews");
        const json = await res.json();
        if (json.success && json.data && json.data.reviews) {
          const apiReviews = json.data.reviews.map(r => ({
            name: r.author_name,
            loc: r.relative_time_description,
            text: r.text,
            rating: r.rating,
            treatment: "Verified Google Review"
          }));
          setLiveTestimonials([...apiReviews, ...testimonials].slice(0, 3));
        }
      } catch (err) {
        console.error("Failed to fetch live reviews", err);
      }
    }
    getReviews();
  }, []);

  return (
    <main className={styles.page}>

      {/* ══════ HERO ══════ */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden>
          <div className={styles.heroGlow1} /><div className={styles.heroGlow2} />
          <div className={styles.heroDots} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroLeft}>
            <div className={styles.heroEyebrow}><Sparkles size={13} /> Est. 2010 · Dwarka, Delhi</div>
            <h1 className={styles.heroTitle}>
              {pageData.heroTitle}<br />
              <span className={styles.heroAccent}>{pageData.heroAccent}</span>
            </h1>
            <p className={styles.heroSub}>
              {pageData.heroSub}
            </p>
            <div className={styles.heroStats}>
              {pageData.stats.map(s => (
                <div key={s.lbl} className={styles.heroStat}>
                  <span className={styles.heroStatVal}>{s.val}</span>
                  <span className={styles.heroStatLbl}>{s.lbl}</span>
                </div>
              ))}
            </div>
            <div className={styles.heroBtns}>
              <Link href="/contact" className={styles.btnPrimary}><CalendarPlus size={16} /> Book Consultation</Link>
              <a href="tel:8510007234" className={styles.btnOutline}><Phone size={16} /> 85100 07234</a>
            </div>
          </div>
          <div className={styles.heroRight}>
            <Image src={pageData.heroImage} alt="Elite Speciality Clinic" fill
              style={{ objectFit: "cover", objectPosition: "center" }} priority />
            <div className={styles.heroImgOverlay} />
          </div>
        </div>
      </section>

      {/* ══════ OUR STORY + TIMELINE ══════ */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyLayout}>
            <div className={styles.storyLeft}>
              <span className={styles.sectionTag}>OUR JOURNEY</span>
              <h2 className={styles.sectionTitle}>Built on Trust,<br />Driven by Excellence</h2>
              <p className={styles.storyText}>
                Elite Speciality Clinic was founded in 2010 with a single purpose — to deliver world-class dental care with honesty, precision, and compassion. From a single consultation room in Dwarka to a fully-equipped multi-speciality clinic, our journey has been defined by our patients' trust.
              </p>
              <p className={styles.storyText}>
                Today, with 15+ years of experience, a team of specialist doctors, and over 5,000 happy smiles, we continue to raise the bar for dental excellence in Delhi NCR.
              </p>
            </div>
            <div className={styles.timeline}>
              {timeline.map((t, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineYear}>{t.year}</span>
                    <h3 className={styles.timelineTitle}>{t.title}</h3>
                    <p className={styles.timelineDesc}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ MEET OUR DOCTORS ══════ */}
      <section className={styles.doctorsSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>OUR TEAM</span>
            <h2 className={styles.sectionTitle}>Meet Our Dental Specialists</h2>
            <p className={styles.sectionSub}>Internationally trained, compassionate specialists committed to your smile.</p>
          </div>
          <div className={styles.doctorsGrid}>
            {doctors.map((d, i) => (
              <div key={i} className={styles.doctorCard}>
                <div className={styles.doctorImgWrap}>
                  <div className={styles.doctorAvatar}>{d.initial}</div>
                </div>
                <div className={styles.doctorInfo}>
                  <h3 className={styles.doctorName}>{d.name}</h3>
                  <p className={styles.doctorTitle}>{d.title}</p>
                  <p className={styles.doctorQual}>{d.qual}</p>
                  <div className={styles.doctorMeta}>
                    <span className={styles.doctorBadge}>{d.exp}</span>
                    <span className={styles.doctorBadge}>{d.spec}</span>
                  </div>
                  <button className={styles.viewProfileBtn}>View Profile →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHY CHOOSE US ══════ */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>WHY US</span>
            <h2 className={styles.sectionTitle}>Why Choose Elite Speciality Clinic?</h2>
            <p className={styles.sectionSub}>We combine cutting-edge technology with compassionate patient-first care.</p>
          </div>
          <div className={styles.whyGrid}>
            {whyUs.map((w, i) => (
              <div key={i} className={styles.whyCard}>
                <span className={styles.whyIconWrap}>{w.icon}</span>
                <h3 className={styles.whyTitle}>{w.title}</h3>
                <p className={styles.whyDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ MISSION & VISION ══════ */}
      <section className={styles.mvSection}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>🎯</span>
              <h3 className={styles.mvTitle}>Our Mission</h3>
              <p className={styles.mvDesc}>
                {pageData.mission}
              </p>
              <ul className={styles.mvList}>
                {["Ethical treatment planning", "Pain-free procedures", "Transparent pricing", "Patient education"].map(item => (
                  <li key={item}><CheckCircle size={14} /> {item}</li>
                ))}
              </ul>
            </div>
            <div className={`${styles.mvCard} ${styles.mvCardAccent}`}>
              <span className={styles.mvIcon}>🚀</span>
              <h3 className={styles.mvTitle}>Our Vision</h3>
              <p className={styles.mvDesc}>
                {pageData.vision}
              </p>
              <ul className={styles.mvList}>
                {["5-star patient experience", "Continuous clinical training", "Community dental health", "Innovation in dentistry"].map(item => (
                  <li key={item}><CheckCircle size={14} /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CLINIC TOUR ══════ */}
      <section className={styles.tourSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>CLINIC TOUR</span>
            <h2 className={styles.sectionTitle}>Step Inside Our Clinic</h2>
            <p className={styles.sectionSub}>A modern, hygienic, and comfortable environment designed for your care.</p>
          </div>
          <div className={styles.tourGrid}>
            {tourImages.map((img, i) => (
              <button key={i} className={styles.tourItem} onClick={() => setLightbox(img.src)}>
                <Image src={img.src} alt={img.label} fill style={{ objectFit: "cover" }} />
                <div className={styles.tourOverlay}>
                  <ZoomIn size={20} color="white" />
                  <span>{img.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TECHNOLOGY ══════ */}
      <section className={styles.techSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>TECHNOLOGY</span>
            <h2 className={styles.sectionTitle}>Advanced Equipment & Technology</h2>
            <p className={styles.sectionSub}>State-of-the-art tools that ensure precision, safety, and superior results.</p>
          </div>
          <div className={styles.techGrid}>
            {technologies.map((t, i) => (
              <div key={i} className={styles.techCard}>
                <div className={styles.techIconWrap}>
                  <Image src={t.icon} alt={t.title} width={42} height={42} style={{ objectFit: "contain" }} />
                </div>
                <h3 className={styles.techTitle}>{t.title}</h3>
                <p className={styles.techDesc}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ STATS STRIP ══════ */}
      <section className={styles.statsStrip}>
        <div className="container">
          <div className={styles.statsGrid}>
            {pageData.stats.map(s => (
              <div key={s.lbl} className={styles.statCard}>
                <span className={styles.statVal}>{s.val}</span>
                <span className={styles.statLbl}>{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>PATIENT REVIEWS</span>
            <h2 className={styles.sectionTitle}>What Our Patients Say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {liveTestimonials.map((t, i) => (
              <blockquote key={i} className={styles.testimonialCard}>
                <div className={styles.starsRow}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#F59E0B" stroke="none" />
                  ))}
                </div>
                <p className={styles.testimonialText}>"{t.text}"</p>
                <footer className={styles.testimonialFooter}>
                  <div className={styles.testimonialAvatar}>{t.name.charAt(0)}</div>
                  <div>
                    <p className={styles.testimonialName}>{t.name}</p>
                    <p className={styles.testimonialMeta}>{t.loc} · <span style={{ color: "#0EA5E9" }}>{t.treatment}</span></p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className={styles.viewAllWrap}>
            <Link href="/testimonials" className={styles.viewAllBtn}>View All Reviews →</Link>
          </div>
        </div>
      </section>

      {/* ══════ CERTIFICATIONS ══════ */}
      <section className={styles.certSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>CREDENTIALS</span>
            <h2 className={styles.sectionTitle}>Certifications & Affiliations</h2>
          </div>
          <div className={styles.certGrid}>
            {certifications.map((c, i) => (
              <div key={i} className={styles.certCard}>
                <div className={styles.certIconWrap}>{c.icon}</div>
                <div>
                  <p className={styles.certTitle}>{c.title}</p>
                  <p className={styles.certSub}>{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}><Sparkles size={13} /> Start Your Journey</span>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Smile?</h2>
            <p className={styles.ctaDesc}>Book a free consultation today. Our experts will create a personalised plan just for you.</p>
          </div>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className={styles.btnPrimary}><CalendarPlus size={17} /> Book Appointment</Link>
            <a href="tel:8510007234" className={styles.ctaPhone}><Phone size={17} /> 85100 07234</a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} role="dialog">
          <div className={styles.lightboxBackdrop} onClick={() => setLightbox(null)} />
          <div className={styles.lightboxBox}>
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)}><X size={20} /></button>
            <Image src={lightbox} alt="Clinic" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      )}

    </main>
  );
}
