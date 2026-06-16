"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Clock, CheckCircle, Star,
  Sparkles, CalendarPlus, MessageCircle, AlertCircle,
  ChevronRight, ZoomIn, X
} from "lucide-react";
import { collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import styles from "./page.module.css";

/* ═══════════════════ DATA ═══════════════════ */

const contactCards = [
  {
    icon: <Phone size={24} />, title: "Call Us",
    line1: "+91 85100 07234", line2: "Available Mon–Sat",
    href: "tel:8510007234", color: "#0EA5E9",
  },
  {
    icon: <MapPin size={24} />, title: "Visit Clinic",
    line1: "Dwarka Sector 12", line2: "New Delhi, India",
    href: "https://maps.google.com", color: "#059669",
  },
  {
    icon: <Clock size={24} />, title: "Working Hours",
    line1: "Mon–Sat: 10 AM – 8 PM", line2: "Sunday: By Appointment",
    href: null, color: "#7C3AED",
  },
  {
    icon: <MessageCircle size={24} />, title: "WhatsApp",
    line1: "+91 85100 07234", line2: "Quick response in 15 min",
    href: "https://wa.me/918510007234", color: "#16A34A",
  },
];

const trustPoints = [
  "15+ Years Experience",
  "MDS Specialist Doctors",
  "Latest Technology",
  "Pain-Free Treatment",
  "Easy Parking Available",
  "Same Day Appointments",
];

const tourImages = [
  { src: "/images/treatments/Dental implant.png", label: "Treatment Room" },
  { src: "/images/treatments/Microscopic Root Canal.png", label: "Advanced Equipment" },
  { src: "/images/treatments/Invisible Braces.png", label: "Orthodontics Zone" },
  { src: "/images/treatments/Emax Veneers.png", label: "Cosmetic Suite" },
];

const reviews = [
  { name: "Rahul Sharma", loc: "Dwarka Sector 10", text: "Best dentist in Dwarka. Very gentle and professional. Highly recommended!", rating: 5 },
  { name: "Priya Gupta", loc: "Dwarka Mor", text: "Got my root canal done here. Completely painless. Amazing experience!", rating: 5 },
  { name: "Anil Verma", loc: "Dwarka Sector 7", text: "The clinic is very clean and doctors explain everything. 5 stars!", rating: 5 },
];

const faqs = [
  { q: "Do you offer same-day appointments?", a: "Yes, we offer same-day appointments for most treatments. Call us on 85100 07234 or book online." },
  { q: "Is parking available at the clinic?", a: "Yes, free parking is available right outside the clinic near Dwarka Sector 12." },
  { q: "Do you offer emergency dental care?", a: "Absolutely. We handle dental emergencies — toothaches, broken teeth, swelling — promptly." },
  { q: "What payment methods do you accept?", a: "We accept cash, all major credit/debit cards, UPI, and popular wallets." },
  { q: "How long does a root canal treatment take?", a: "A single sitting root canal with our dental microscope typically takes 45–90 minutes. Microscopic RCT is more precise and usually completed in one visit, making it faster and more comfortable than traditional methods." },
];

const services = [
  "General Checkup", "Teeth Cleaning", "Fillings", "Extraction",
  "Wisdom Teeth Extraction", "Root Canal Treatment", "Microscopic RCT",
  "Tooth Colored Crown", "Metal Free Crowns", "Teeth Whitening",
  "Zoom Whitening", "Composite Veneers", "Emax Veneers",
  "Invisible Braces", "Braces", "Implants", "Other",
];

/* ═══════════════════ PAGE ═══════════════════ */

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "",
    service: "", date: "", message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [lightbox, setLightbox] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const [content, setContent] = useState({
    heroImage: "/images/contact-hero.png",
    phone: "+91 85100 07234",
    email: "info@elitespecialityclinic.com",
    address: "Dwarka Sector 12, New Delhi – 110075",
    hours: "Mon–Sat: 10 AM – 8 PM",
    tour1: "/images/treatments/Dental implant.png",
    tour2: "/images/treatments/Microscopic Root Canal.png",
    tour3: "/images/treatments/Invisible Braces.png",
    tour4: "/images/treatments/Emax Veneers.png",
  });

  useEffect(() => {
    const fetchContent = async () => {
      if (!db) return;
      try {
        const snap = await getDoc(doc(db, "siteContent", "contact"));
        if (snap.exists()) {
          setContent(prev => ({ ...prev, ...snap.data() }));
        }
      } catch (err) {
        console.error("Failed to load contact content", err);
      }
    };
    fetchContent();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await addDoc(collection(db, "appointments"), {
        ...formData, createdAt: serverTimestamp(), status: "new",
      });
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", service: "", date: "", message: "" });
      setStep(1);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Failed to submit. Please call us directly on 85100 07234.");
    }
  };

  return (
    <main className={styles.page}>

      {/* ══════ HERO ══════ */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden>
          <div className={styles.heroGlow1} />
          <div className={styles.heroGlow2} />
          <div className={styles.heroDots} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroLeft}>
            <div className={styles.heroEyebrow}><Sparkles size={13} /> Quick response within 15 minutes</div>
            <h1 className={styles.heroTitle}>
              Contact &<br />
              <span className={styles.heroAccent}>Appointment</span>
            </h1>
            <div className={styles.heroBadges}>
              {["Same Day Appointment", "Emergency Dental Care", "5,000+ Happy Patients"].map(b => (
                <span key={b} className={styles.heroBadge}><CheckCircle size={14} /> {b}</span>
              ))}
            </div>
            <div className={styles.heroBtns}>
              <a href={`tel:${content.phone.replace(/\D/g, '')}`} className={styles.btnPrimary}><Phone size={16} /> Call Now</a>
              <a href="#booking" className={styles.btnOutline}><CalendarPlus size={16} /> Book Appointment</a>
            </div>
            {/* Floating cards */}
            <div className={styles.floatCards}>
              <div className={styles.floatCard}>
                <Phone size={16} /><span>{content.phone}</span>
              </div>
              <div className={styles.floatCard}>
                <Clock size={16} /><span>{content.hours}</span>
              </div>
            </div>
          </div>
          <div className={styles.heroRight}>
            <Image src={content.heroImage} alt="Elite Dental Clinic" fill
              style={{ objectFit: "cover", objectPosition: "center" }} priority />
            <div className={styles.heroImgOverlay} />
          </div>
        </div>
      </section>

      {/* ══════ CONTACT CARDS ══════ */}
      <section className={styles.cardsSection}>
        <div className="container">
          <div className={styles.cardsGrid}>
            {contactCards.map((c, i) => (
              <div key={i} className={styles.contactCard}>
                <span className={styles.contactCardIcon} style={{ background: `${c.color}18`, color: c.color }}>
                  {c.icon}
                </span>
                <h3 className={styles.contactCardTitle}>{c.title}</h3>
                <p className={styles.contactCardLine1}>{c.href
                  ? <a href={c.href}>{c.line1}</a>
                  : c.line1}
                </p>
                <p className={styles.contactCardLine2}>{c.line2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ EMERGENCY BANNER ══════ */}
      <div className={styles.emergencyBanner}>
        <div className="container">
          <div className={styles.emergencyInner}>
            <AlertCircle size={22} />
            <span>🦷 Dental Emergency? Don't wait — call us immediately!</span>
            <a href={`tel:${content.phone.replace(/\D/g, '')}`} className={styles.emergencyBtn}>
              <Phone size={15} /> Call Now: {content.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ══════ FORM + TRUST ══════ */}
      <section className={styles.formSection} id="booking">
        <div className="container">
          <div className={styles.formLayout}>

            {/* Form */}
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Book an Appointment</h2>

              {/* Progress steps */}
              <div className={styles.steps}>
                {["Patient Details", "Treatment", "Date & Message"].map((label, i) => (
                  <div key={i} className={`${styles.step} ${step > i + 1 ? styles.stepDone : ""} ${step === i + 1 ? styles.stepActive : ""}`}>
                    <div className={styles.stepNum}>{step > i + 1 ? "✓" : i + 1}</div>
                    <span className={styles.stepLabel}>{label}</span>
                  </div>
                ))}
              </div>

              {status === "success" && (
                <div className={styles.successMsg}>
                  ✅ Appointment request submitted! We will call you shortly to confirm.
                </div>
              )}
              {status === "error" && (
                <div className={styles.errorMsg}>{errorMsg}</div>
              )}

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className={styles.stepContent}>
                    <div className={styles.formGroup}>
                      <label>Full Name *</label>
                      <input required type="text" name="name" value={formData.name}
                        onChange={handleChange} className={styles.input} placeholder="Your full name" />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Mobile Number *</label>
                      <input required type="tel" name="phone" value={formData.phone}
                        onChange={handleChange} className={styles.input} placeholder="+91 98765 43210" />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Email Address</label>
                      <input type="email" name="email" value={formData.email}
                        onChange={handleChange} className={styles.input} placeholder="you@example.com" />
                    </div>
                    <button type="button" className={styles.nextBtn} onClick={() => setStep(2)}>
                      Next: Select Treatment →
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className={styles.stepContent}>
                    <div className={styles.formGroup}>
                      <label>Treatment Required</label>
                      <select name="service" value={formData.service} onChange={handleChange} className={styles.select}>
                        <option value="">Select a treatment</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className={styles.stepBtns}>
                      <button type="button" className={styles.backBtn} onClick={() => setStep(1)}>← Back</button>
                      <button type="button" className={styles.nextBtn} onClick={() => setStep(3)}>Next: Pick Date →</button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className={styles.stepContent}>
                    <div className={styles.formGroup}>
                      <label>Preferred Date</label>
                      <input type="date" name="date" value={formData.date}
                        onChange={handleChange} className={styles.input} />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Message (Optional)</label>
                      <textarea name="message" value={formData.message} onChange={handleChange}
                        className={styles.textarea} placeholder="Describe your dental issue..." />
                    </div>
                    <div className={styles.stepBtns}>
                      <button type="button" className={styles.backBtn} onClick={() => setStep(2)}>← Back</button>
                      <button type="submit" disabled={status === "submitting"} className={styles.submitBtn}>
                        {status === "submitting" ? "Submitting..." : "Confirm Appointment"}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Trust points */}
            <div className={styles.trustCard}>
              <h3 className={styles.trustTitle}>Why Patients Choose Us</h3>
              <ul className={styles.trustList}>
                {trustPoints.map(t => (
                  <li key={t} className={styles.trustItem}>
                    <CheckCircle size={18} className={styles.trustIcon} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.trustRating}>
                <div className={styles.starsRow}>
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="#F59E0B" stroke="none" />)}
                </div>
                <p className={styles.trustRatingText}>4.9 / 5 — Based on 1,200+ Google Reviews</p>
              </div>
              <div className={styles.trustContact}>
                <a href={`tel:${content.phone.replace(/\D/g, '')}`} className={styles.btnPrimary} style={{ width: "100%", justifyContent: "center" }}>
                  <Phone size={16} /> Call: {content.phone}
                </a>
                <a href={`https://wa.me/${content.phone.replace(/\D/g, '')}`} className={styles.whatsappBtn}>
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
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
          </div>
          <div className={styles.tourGrid}>
            {[
              { src: content.tour1, label: "Treatment Room" },
              { src: content.tour2, label: "Advanced Equipment" },
              { src: content.tour3, label: "Orthodontics Zone" },
              { src: content.tour4, label: "Cosmetic Suite" },
            ].map((img, i) => (
              <button key={i} className={styles.tourItem} onClick={() => setLightbox(img.src)}>
                <Image src={img.src} alt={img.label} fill style={{ objectFit: "cover" }} />
                <div className={styles.tourOverlay}>
                  <ZoomIn size={18} color="white" />
                  <span>{img.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TRUST SECTION ══════ */}
      <section className={styles.trustSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>OUR PROMISE TO YOU</span>
            <h2 className={styles.sectionTitle}>Delhi's Most Trusted Dental Clinic</h2>
            <p className={styles.sectionSub}>
              From state-of-the-art technology to compassionate care — here's what sets us apart.
            </p>
          </div>

          {/* Trust Pillars */}
          <div className={styles.trustGrid}>
            {[
              { icon: "🏆", title: "15+ Years of Excellence", desc: "Over a decade of trusted dental care serving thousands of families in Dwarka and beyond." },
              { icon: "🔬", title: "Microscopic Precision", desc: "Our dental microscope ensures pinpoint accuracy in root canals, giving you pain-free results." },
              { icon: "🛡️", title: "100% Sterilised Equipment", desc: "Hospital-grade autoclave sterilisation — your safety is never compromised." },
              { icon: "⭐", title: "4.9★ Google Rating", desc: "Consistently rated 5 stars by real patients across Google, Practo, and Justdial." },
              { icon: "😁", title: "1,000+ Smile Makeovers", desc: "From veneers to full-mouth rehabilitation — we've transformed thousands of smiles." },
              { icon: "✅", title: "98% Treatment Success Rate", desc: "Our clinical outcomes speak for themselves — backed by modern techniques and expertise." },
            ].map((item, i) => (
              <div key={i} className={styles.trustCard}>
                <span className={styles.trustIconWrap}>{item.icon}</span>
                <h3 className={styles.trustTitle}>{item.title}</h3>
                <p className={styles.trustDesc}>{item.desc}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* ══════ MAP + INFO ══════ */}
      <section className={styles.mapSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>FIND US</span>
            <h2 className={styles.sectionTitle}>Visit Our Clinic</h2>
            <p className={styles.sectionSub}>Conveniently located near Dwarka Sector 12 Metro Station, New Delhi.</p>
          </div>
          <div className={styles.mapLayout}>
            {/* Map */}
            <div className={styles.mapCard}>
              <div className={styles.mapBadge}>
                <MapPin size={14} /> Elite Speciality Clinic
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2!2d77.0415!3d28.5912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b3a5e5e5e5e%3A0x0!2sDwarka+Sector+12%2C+New+Delhi%2C+Delhi!5e0!3m2!1sen!2sin!4v1718100000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elite Speciality Clinic Location"
              />
              <a
                href="https://www.google.com/maps/search/Elite+Speciality+Clinic+Dwarka+Sector+12+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapDirectionsBtn}
              >
                <MapPin size={15} /> Get Directions on Google Maps
              </a>
            </div>

            {/* Info Panel */}
            <div className={styles.mapInfo}>
              <div className={styles.mapInfoHeader}>
                <div className={styles.mapInfoLogo}>🦷</div>
                <div>
                  <h3 className={styles.mapInfoTitle}>Elite Speciality Clinic</h3>
                  <p className={styles.mapInfoTagline}>Your Smile, Our Priority</p>
                </div>
              </div>

              <div className={styles.mapInfoDivider} />

              <div className={styles.mapInfoRows}>
                <a href="https://maps.google.com/?q=Elite+Speciality+Clinic+Sector+7+Dwarka" target="_blank" rel="noopener noreferrer" className={styles.mapInfoRow} style={{ textDecoration: 'none' }}>
                  <span className={styles.mapInfoIcon} style={{ color: "#0EA5E9", background: "#0EA5E915" }}><MapPin size={18} /></span>
                  <div>
                    <p className={styles.mapInfoLabel}>Address</p>
                    <p className={styles.mapInfoText}>{content.address}</p>
                  </div>
                </a>
                <a href={`tel:${content.phone.replace(/\D/g, '')}`} className={styles.mapInfoRow} style={{ textDecoration: 'none' }}>
                  <span className={styles.mapInfoIcon} style={{ color: "#059669", background: "#05966915" }}><Phone size={18} /></span>
                  <div>
                    <p className={styles.mapInfoLabel}>Phone</p>
                    <p className={styles.mapInfoText}>{content.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${content.email}`} className={styles.mapInfoRow} style={{ textDecoration: 'none' }}>
                  <span className={styles.mapInfoIcon} style={{ color: "#7C3AED", background: "#7C3AED15" }}><Mail size={18} /></span>
                  <div>
                    <p className={styles.mapInfoLabel}>Email</p>
                    <p className={styles.mapInfoText}>{content.email}</p>
                  </div>
                </a>
                <div className={styles.mapInfoRow}>
                  <span className={styles.mapInfoIcon} style={{ color: "#F59E0B", background: "#F59E0B15" }}><Clock size={18} /></span>
                  <div>
                    <p className={styles.mapInfoLabel}>Hours</p>
                    <p className={styles.mapInfoText}>{content.hours}</p>
                  </div>
                </div>
              </div>

              <div className={styles.mapInfoDivider} />

              <div className={styles.mapNearby}>
                <p className={styles.mapNearbyTitle}>📍 Nearby Landmarks</p>
                <div className={styles.mapNearbyTags}>
                  <span>🚇 Sec 12 Metro</span>
                  <span>🏥 Venkateshwar Hospital</span>
                  <span>🅿️ Free Parking</span>
                  <span>🛣️ NH-48 Nearby</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${content.phone.replace(/\D/g, '')}`}
                className={styles.mapWhatsapp}
              >
                <MessageCircle size={16} /> WhatsApp for Quick Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>FAQ</span>
            <h2 className={styles.sectionTitle}>Common Questions</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}>
                <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <ChevronRight size={18} className={`${styles.faqIcon} ${openFaq === i ? styles.faqIconOpen : ""}`} />
                </button>
                {openFaq === i && <p className={styles.faqA}>{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}><Sparkles size={13} /> Start Your Smile Journey</span>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Smile?</h2>
            <p className={styles.ctaDesc}>Book your consultation today. Our specialists will create a personalised treatment plan just for you.</p>
          </div>
          <div className={styles.ctaBtns}>
            <a href="#booking" className={styles.btnPrimary}><CalendarPlus size={17} /> Book Now</a>
            <a href={`tel:${content.phone.replace(/\D/g, '')}`} className={styles.ctaPhone}><Phone size={17} /> {content.phone}</a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox}>
          <div className={styles.lightboxBackdrop} onClick={() => setLightbox(null)} />
          <div className={styles.lightboxBox}>
            {/* Header */}
            <div className={styles.lightboxHeader}>
              <span className={styles.lightboxLabel}>Elite Speciality Clinic</span>
              <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>
                <X size={16} />
              </button>
            </div>
            {/* Image */}
            <div className={styles.lightboxImgWrap}>
              <Image src={lightbox} alt="Clinic" fill style={{ objectFit: "cover" }} />
            </div>
            {/* Footer */}
            <div className={styles.lightboxFooter}>
              <span className={styles.lightboxFooterText}>📍 Dwarka Sector 12, New Delhi · Click outside to close</span>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
