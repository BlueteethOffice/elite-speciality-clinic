import Link from "next/link";
import Image from "next/image";
import { fetchGoogleReviews } from "@/lib/googleReviews";
import { CalendarPlus, Phone, CheckCircle, Star, Award, Heart, Microscope, ShieldCheck, Building2, FlaskConical, Gem, Smile } from "lucide-react";
import styles from "./page.module.css";

const services = [
  { title: "Dental Implants", icon: "/icons/dental-implant.png", link: "/implants" },
  { title: "Root Canal Treatment", icon: "/icons/Root canals.png", link: "/root-canal-treatment" },
  { title: "Invisible Braces", icon: "/icons/Invisible Braces.png", link: "/invisible-braces" },
  { title: "Teeth Whitening", icon: "/icons/teeth-whitening.png", link: "/teeth-whitening" },
  { title: "Emax Veneers", icon: "/icons/Emax Veneers.png", link: "/emax-veneers" },
  { title: "Metal Free Crowns", icon: "/icons/Metal Free Crowns.png", link: "/metal-free-crowns" },
  { title: "Composite Veneers", icon: "/icons/omposite Veneers.png", link: "/composite-veneers" },
  { title: "Teeth Cleaning", icon: "/icons/teeth Cleaning (2).png", link: "/teeth-cleaning" },
];

const whyUs = [
  { icon: <Award size={32} color="#F59E0B" />, bg: "rgba(245,158,11,0.12)", title: "High-Quality Dentistry", desc: "Internationally trained specialists with years of clinical expertise." },
  { icon: <Heart size={32} color="#EF4444" />, bg: "rgba(239,68,68,0.12)", title: "Patient-First Approach", desc: "Your comfort and satisfaction is our highest priority, always." },
  { icon: <Microscope size={32} color="#3B82F6" />, bg: "rgba(59,130,246,0.12)", title: "State-of-the-Art Technology", desc: "Digital X-rays, dental microscopes, Zoom whitening and more." },
  { icon: <ShieldCheck size={32} color="#10B981" />, bg: "rgba(16,185,129,0.12)", title: "Strict Sterilisation", desc: "100% adherence to global infection control protocols." },
  { icon: <Building2 size={32} color="#8B5CF6" />, bg: "rgba(139,92,246,0.12)", title: "World-Class Infrastructure", desc: "Modern clinic designed for precision, hygiene, and comfort." },
  { icon: <FlaskConical size={32} color="#EC4899" />, bg: "rgba(236,72,153,0.12)", title: "In-House Lab Support", desc: "Faster, more accurate results with our on-site dental lab." },
  { icon: <Gem size={32} color="#06B6D4" />, bg: "rgba(6,182,212,0.12)", title: "Transparent Pricing", desc: "Fair and honest estimates with no hidden charges, ensuring complete peace of mind." },
  { icon: <Smile size={32} color="#F97316" />, bg: "rgba(249,115,22,0.12)", title: "Painless Procedures", desc: "Gentle, anxiety-free treatment with advanced anaesthesia techniques for your comfort." },
];

const stats = [
  { number: "10,000+", label: "Happy Patients" },
  { number: "15+", label: "Years of Excellence" },
  { number: "15+", label: "Treatments Offered" },
  { number: "100%", label: "Sterilisation Standard" },
];

const testimonials = [
  {
    name: "Arun Verma",
    location: "Dwarka Sector 7",
    text: "I had a wonderful experience at Elite Speciality Clinic. Dr. Kavita is highly professional and the root canal was completely painless! She explains everything very clearly.",
    rating: 5,
  },
  {
    name: "Meenakshi Tiwari",
    location: "Dwarka Sector 12",
    text: "My smile makeover completely changed my confidence. Dr. Kavita was so patient and avoided any unnecessary procedures. Truly the best dental clinic in Dwarka!",
    rating: 5,
  },
  {
    name: "Sanjay Kaushik",
    location: "Sector 10",
    text: "I was very scared of dental treatments but the team here made it so simple. Very honest advice from Dr. Kavita. Highly recommended for any dental issues.",
    rating: 5,
  },
  {
    name: "Dr. Anjali Sen",
    location: "Dwarka Sector 4",
    text: "Being a medical professional, I am very particular about hygiene. Elite clinic maintains top-notch sterilization. Dr. Kavita and Dr. Amit run an exceptional practice.",
    rating: 5,
  },
];

export default async function Home() {
  const googleData = await fetchGoogleReviews();
  const siteData = {};

  const content = {
    heroImage: siteData.heroImage || "/images/hero-banner.png",
    heroTag: siteData.heroTag || "Awarded Best Dental Clinic · Dwarka, Delhi",
    heroTitle: siteData.heroTitle || "Excellence. Ethics. Expertise.",
    heroDesc: siteData.heroDesc || "World-class dentistry trusted by 10,000+ patients across Delhi NCR. Advanced treatments, painless procedures, and lifetime care.",
    stat1: siteData.stat1 || "10,000+", stat1Label: siteData.stat1Label || "Happy Patients",
    stat2: siteData.stat2 || "15+", stat2Label: siteData.stat2Label || "Years of Excellence",
    stat3: siteData.stat3 || "15+", stat3Label: siteData.stat3Label || "Treatments Offered",
    stat4: siteData.stat4 || "100%", stat4Label: siteData.stat4Label || "Sterilisation Standard",
  };
  const displayTestimonials = googleData?.reviews ? googleData.reviews.map((r, idx) => ({
    name: r.author_name,
    location: r.relative_time_description,
    text: r.text,
    rating: r.rating,
  })) : testimonials;

  return (
    <main className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <Image
          src={content.heroImage}
          alt="Elite Speciality Clinic"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>

          {/* ── HERO RIGHT BOX ── */}
          <div className={styles.heroBox}>
            <span className={styles.heroTag}>🏆 {content.heroTag}</span>
            <h1 className={styles.heroBoxMainTitle}>
              Excellence. Ethics.<br />
              <span className={styles.heroBoxAccent}>Expertise.</span>
            </h1>
            <p className={styles.heroBoxDesc}>
              {content.heroDesc}
            </p>
            <div className={styles.heroBoxBtns}>
              <Link href="/contact" className={styles.heroBoxBtn}>
                <CalendarPlus size={16} /> Book Appointment
              </Link>
              <a href="tel:8510007234" className={styles.heroBoxCall}>
                <Phone size={15} /> 85100 07234
              </a>
            </div>
            <div className={styles.heroBoxTrust}>
              <span><CheckCircle size={13} /> Painless Procedures</span>
              <span><CheckCircle size={13} /> Lifetime Guarantee on RCT</span>
              <span><CheckCircle size={13} /> 100% Sterilised</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          {[
            { number: content.stat1, label: content.stat1Label },
            { number: content.stat2, label: content.stat2Label },
            { number: content.stat3, label: content.stat3Label },
            { number: content.stat4, label: content.stat4Label },
          ].map((s, idx) => (
            <div key={idx} className={styles.statCard}>
              <span className={styles.statNum}>{s.number}</span>
              <span className={styles.statLbl}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.sectionTag}>OUR PROMISE</p>
            <h2 className={styles.sectionTitle}>Why Choose Elite Speciality Clinic?</h2>
            <p className={styles.sectionSub}>We combine cutting-edge technology with compassionate, patient-first care.</p>
          </div>
          <div className={styles.whyGrid}>
            {whyUs.map((w) => (
              <div key={w.title} className={styles.whyCard}>
                <div className={styles.whyIcon} style={{ background: w.bg }}>
                  {w.icon}
                </div>
                <h3 className={styles.whyTitle}>{w.title}</h3>
                <p className={styles.whyDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.sectionTag}>TREATMENTS</p>
            <h2 className={styles.sectionTitle}>Our Most Popular Treatments</h2>
            <p className={styles.sectionSub}>From routine care to advanced cosmetic procedures — all under one roof.</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.slice(0, 5).map((s, i) => (
              <Link href={s.link} key={i} className={styles.serviceCard}>
                <div className={styles.serviceIconWrap}>
                  <Image src={s.icon} alt={s.title} width={64} height={64} />
                </div>
                <span className={styles.serviceTitle}>{s.title}</span>
                <span className={styles.serviceArrow}>→</span>
              </Link>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/services" className={styles.viewAllBtn}>View All Treatments</Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className={styles.aboutStrip}>
        <div className={`container ${styles.aboutInner}`}>
          <div className={styles.aboutText}>
            <p className={styles.sectionTag}>ABOUT US</p>
            <h2 className={styles.aboutTitle}>Elite Speciality Clinic — Trusted Dental Care in Dwarka</h2>
            <p className={styles.aboutDesc}>
              We are a multi-speciality dental clinic built on the belief that great dentistry goes beyond procedures. Our experienced specialists combine advanced technology with personalised, ethical treatment planning — ensuring every patient receives the highest standard of care.
            </p>
            <ul className={styles.aboutList}>
              <li><CheckCircle size={16} /> Experienced team of dental specialists</li>
              <li><CheckCircle size={16} /> Advanced diagnostic & treatment equipment</li>
              <li><CheckCircle size={16} /> Transparent pricing, no hidden charges</li>
              <li><CheckCircle size={16} /> Lifetime guarantee on Root Canal Treatment</li>
            </ul>
            <Link href="/about" className={styles.aboutBtn}>Know More About Us →</Link>
          </div>
          <div className={styles.aboutStats}>
            <div className={styles.aboutStatCard}>
              <span className={styles.aboutStatNum}>10,000+</span>
              <span className={styles.aboutStatLbl}>Patients Treated</span>
            </div>
            <div className={styles.aboutStatCard}>
              <span className={styles.aboutStatNum}>15+</span>
              <span className={styles.aboutStatLbl}>Years of Excellence</span>
            </div>
            <div className={styles.aboutStatCard}>
              <span className={styles.aboutStatNum}>100%</span>
              <span className={styles.aboutStatLbl}>Pain-Free Approach</span>
            </div>
            <div className={styles.aboutStatCard}>
              <span className={styles.aboutStatNum}>4.9★</span>
              <span className={styles.aboutStatLbl}>Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.sectionTag}>PATIENT REVIEWS</p>
            <h2 className={styles.sectionTitle}>What Our Patients Say</h2>
            <p className={styles.sectionSub}>Real experiences from real patients across Dwarka and Delhi NCR.</p>
          </div>
          <div className={styles.testimonialsGrid}>
            {displayTestimonials.slice(0, 4).map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="#F59E0B" stroke="none" />
                  ))}
                </div>
                <p className={styles.testimonialText}>"{t.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className={styles.testimonialName}>{t.name}</p>
                    <p className={styles.testimonialLocation}>{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/testimonials" className={styles.viewAllBtn}>Read More Reviews</Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaLeft}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Smile?</h2>
            <p className={styles.ctaDesc}>Book a free consultation today. Our expert team will guide you to the best treatment plan.</p>
          </div>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className={styles.ctaPrimary}>
              <CalendarPlus size={18} /> Book Free Consultation
            </Link>
            <a href="tel:8510007234" className={styles.ctaSecondary}>
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
