import Link from "next/link";
import Image from "next/image";
import { CalendarPlus, Phone, CheckCircle, Star } from "lucide-react";
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
  { icon: "🏅", title: "High-Quality Dentistry", desc: "Internationally trained specialists with years of clinical expertise." },
  { icon: "❤️", title: "Patient-First Approach", desc: "Your comfort and satisfaction is our highest priority, always." },
  { icon: "🔬", title: "State-of-the-Art Technology", desc: "Digital X-rays, dental microscopes, Zoom whitening and more." },
  { icon: "🛡️", title: "Strict Sterilisation", desc: "100% adherence to global infection control protocols." },
  { icon: "🏗️", title: "World-Class Infrastructure", desc: "Modern clinic designed for precision, hygiene, and comfort." },
  { icon: "⚗️", title: "In-House Lab Support", desc: "Faster, more accurate results with our on-site dental lab." },
  { icon: "💎", title: "Transparent Pricing", desc: "Fair and honest estimates with no hidden charges, ensuring complete peace of mind." },
];

const stats = [
  { number: "10,000+", label: "Happy Patients" },
  { number: "15+", label: "Years of Excellence" },
  { number: "15+", label: "Treatments Offered" },
  { number: "100%", label: "Sterilisation Standard" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Dwarka, Delhi",
    text: "Got my root canal done here. Absolutely painless — I was shocked. The doctor explained every step. Highly recommended to anyone afraid of dental procedures.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Sector 7, Dwarka",
    text: "Had my dental implants placed at Elite Speciality Clinic. The team is professional, the clinic is spotlessly clean, and the result is amazing. My smile has completely transformed.",
    rating: 5,
  },
  {
    name: "Anita Verma",
    location: "Dwarka Mor",
    text: "Zoom whitening session was fantastic. In just one visit my teeth are noticeably whiter. The staff is very welcoming and the doctor is gentle and thorough.",
    rating: 5,
  },
  {
    name: "Sanjay Singhal",
    location: "Dwarka Sector 12",
    text: "Very professional doctors and staff. The clinic is equipped with the latest technology. Got my invisible braces here and the progress has been excellent.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <main className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <Image
          src="/images/hero-banner.png"
          alt="Elite Speciality Clinic"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>Awarded Best Dental Clinic · Dwarka, Delhi</span>
            <h1 className={styles.heroTitle}>
              Excellence. Ethics.<br />
              <span className={styles.heroAccent}>Expertise.</span>
            </h1>
            <p className={styles.heroSub}>
              World-class dentistry trusted by 10,000+ patients across Delhi NCR. Advanced treatments, painless procedures, and lifetime care.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/contact" className={styles.heroPrimary}>
                <CalendarPlus size={18} /> Book Appointment
              </Link>
              <a href="tel:8510007234" className={styles.heroSecondary}>
                <Phone size={18} /> 8510007234
              </a>
            </div>
            <div className={styles.heroTrust}>
              <span><CheckCircle size={15} /> Painless Procedures</span>
              <span><CheckCircle size={15} /> Lifetime Guarantee on RCT</span>
              <span><CheckCircle size={15} /> 100% Sterilised</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
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
                <span className={styles.whyIcon}>{w.icon}</span>
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
            {testimonials.map((t, i) => (
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
