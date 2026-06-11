import Link from "next/link";
import Image from "next/image";
import { CalendarPlus, Phone, CheckCircle, ChevronRight, ArrowRight, MessageCircle, Shield, Award, Zap, Heart, Star } from "lucide-react";
import FAQAccordion from "./FAQAccordion";
import styles from "./ServicePageTemplate.module.css";

export default function ServicePageTemplate({
  title,
  category,
  categoryColor = "#00A6A6",
  icon,
  heroImage,
  tagline,
  description,
  benefits = [],
  steps = [],
  faqs = [],
  relatedServices = [],
}) {
  const whatsappUrl = `https://wa.me/918510007234?text=Hi, I'd like to know more about ${encodeURIComponent(title)}`;

  return (
    <main className={styles.page}>

      {/* ══════════════════════════════════════
          1. PREMIUM HERO
      ══════════════════════════════════════ */}
      <section 
        className={`${styles.hero} ${heroImage ? styles.hasHeroImage : ''}`}
        style={heroImage ? { backgroundImage: `url("${heroImage}")` } : {}}
      >
        <div className={styles.heroOverlay} style={{ background: `linear-gradient(to right, #0B1F3A 10%, transparent 100%), linear-gradient(to top, #0B1F3A 0%, transparent 80%)` }} />
        
        <div className={styles.heroContainer}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <Link href="/services">Treatments</Link>
            <ChevronRight size={13} />
            <span>{title}</span>
          </nav>

          <div className={styles.heroContent}>
            <span className={styles.heroBadge} style={{ background: categoryColor + "30", color: "#fff", border: `1px solid ${categoryColor}80` }}>
              {category}
            </span>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroTagline}>{tagline}</p>

            <div className={styles.heroCtas}>
              <Link href="/contact" className={styles.ctaBook}>
                <CalendarPlus size={18} /> Book Appointment
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaWhatsapp}>
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <a href="tel:8510007234" className={styles.ctaCall}>
                <Phone size={17} /> 8510007234
              </a>
            </div>

            {/* Trust badges */}
            <div className={styles.trustRow}>
              <div className={styles.trustBadge}>
                <span className={styles.trustIcon} style={{ background: "rgba(255,255,255,0.15)" }}>
                  <Star size={18} style={{ color: "#FBBF24" }} />
                </span>
                <span>Top Rated</span>
              </div>
              <div className={styles.trustBadge}>
                <span className={styles.trustIcon} style={{ background: "rgba(255,255,255,0.15)" }}>
                  <Zap size={18} style={{ color: "#60A5FA" }} />
                </span>
                <span>Advanced Technology</span>
              </div>
              <div className={styles.trustBadge}>
                <span className={styles.trustIcon} style={{ background: "rgba(255,255,255,0.15)" }}>
                  <Heart size={18} style={{ color: "#10B981" }} />
                </span>
                <span>Pain-Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* ══════════════════════════════════════
          3. TREATMENT OVERVIEW
      ══════════════════════════════════════ */}
      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewLeft}>
              <span className={styles.label} style={{ color: categoryColor }}>ABOUT THIS TREATMENT</span>
              <h2 className={styles.h2}>What is {title}?</h2>
              <p className={styles.bodyText}>{description}</p>
              <Link href="/contact" className={styles.outlineBtn} style={{ borderColor: categoryColor, color: categoryColor }}>
                Book Free Consultation <ArrowRight size={15} />
              </Link>
            </div>
            <div className={styles.overviewRight}>
              <div className={styles.benefitsCard} style={{ borderTop: `4px solid ${categoryColor}` }}>
                <h3 className={styles.benefitsHeading}>
                  <CheckCircle size={18} style={{ color: categoryColor }} />
                  Key Benefits
                </h3>
                <ul className={styles.benefitsList}>
                  {benefits.map((b, i) => (
                    <li key={i} className={styles.benefitItem}>
                      <span className={styles.checkDot} style={{ background: categoryColor }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. PREMIUM TIMELINE PROCESS
      ══════════════════════════════════════ */}
      {steps.length > 0 && (
        <section className={styles.processSection}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className={styles.label} style={{ color: categoryColor }}>THE PROCESS</span>
              <h2 className={styles.h2}>Step by Step</h2>
              <p className={styles.sectionSub}>A carefully designed process to ensure your comfort, safety, and best results.</p>
            </div>

            <div className={styles.timeline}>
              {steps.map((step, i) => (
                <div key={i} className={styles.timelineItem}>
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className={styles.connector} style={{ background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}40)` }} />
                  )}
                  <div className={styles.timelineCircle} style={{ background: categoryColor, boxShadow: `0 0 0 6px ${categoryColor}18` }}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.timelineTitle}>{step.title}</h4>
                    <p className={styles.timelineDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          5. WHY CHOOSE THIS TREATMENT
      ══════════════════════════════════════ */}
      {benefits.length > 0 && (
        <section className={styles.whyTreatSection}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className={styles.label} style={{ color: categoryColor }}>WHY THIS TREATMENT</span>
              <h2 className={styles.h2}>Reasons to Choose {title}</h2>
            </div>
            <div className={styles.benefitCardsGrid}>
              {benefits.map((b, i) => (
                <div key={i} className={styles.benefitCard}>
                  <div className={styles.benefitNum} style={{ background: categoryColor + "12", color: categoryColor }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className={styles.benefitCardText}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          6. WHY CHOOSE ELITE CLINIC
      ══════════════════════════════════════ */}
      <section className={styles.clinicSection}>
        <div className="container">
          <div className={styles.clinicInner}>
            <div className={styles.clinicLeft}>
              <span className={styles.clinicLabel} style={{ color: categoryColor }}>WHY ELITE SPECIALITY CLINIC</span>
              <h2 className={styles.h2}>Delhi's Most Trusted Dental Specialists</h2>
              <p className={styles.bodyText}>
                At Elite Speciality Clinic, Dwarka, we combine decades of clinical expertise with the latest dental technology — delivering world-class results with compassionate, patient-first care.
              </p>
              <div className={styles.clinicStats}>
                <div className={styles.clinicStat}>
                  <span style={{ color: categoryColor }}>10,000+</span>
                  <label>Patients Treated</label>
                </div>
                <div className={styles.clinicStat}>
                  <span style={{ color: "#2563EB" }}>15+</span>
                  <label>Years Excellence</label>
                </div>
                <div className={styles.clinicStat}>
                  <span style={{ color: "#16A34A" }}>100%</span>
                  <label>Sterilisation</label>
                </div>
              </div>
            </div>
            <div className={styles.clinicRight}>
              {[
                { icon: <Award size={22} />, t: "Expert Specialists", d: "Internationally trained dentists with advanced certifications and years of clinical practice.", c: categoryColor },
                { icon: <Zap size={22} />, t: "Advanced Technology", d: "Digital X-rays, dental microscopes, Zoom whitening and state-of-the-art treatment equipment.", c: "#2563EB" },
                { icon: <Shield size={22} />, t: "100% Sterilisation", d: "Strict global infection control protocols at every step of your treatment.", c: "#7C3AED" },
                { icon: <Heart size={22} />, t: "Pain-Free Approach", d: "Modern anaesthesia and gentle techniques ensure your complete comfort throughout.", c: "#16A34A" },
              ].map((f) => (
                <div key={f.t} className={styles.featureCard}>
                  <div className={styles.featureIcon} style={{ background: f.c + "12", color: f.c }}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>{f.t}</h4>
                    <p className={styles.featureDesc}>{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════
          8. FAQ ACCORDION
      ══════════════════════════════════════ */}
      {faqs.length > 0 && (
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className={styles.label} style={{ color: categoryColor }}>FAQ</span>
              <h2 className={styles.h2}>Frequently Asked Questions</h2>
              <p className={styles.sectionSub}>Everything you need to know about {title}.</p>
            </div>
            <FAQAccordion faqs={faqs} categoryColor={categoryColor} />
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          9. RELATED TREATMENTS
      ══════════════════════════════════════ */}
      {relatedServices.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className={styles.label} style={{ color: categoryColor }}>EXPLORE MORE</span>
              <h2 className={styles.h2}>Related Treatments</h2>
            </div>
            <div className={styles.relatedGrid}>
              {relatedServices.map((r, i) => (
                <Link key={i} href={r.link} className={styles.relatedCard}>
                  <div className={styles.relatedIconBox} style={{ background: categoryColor + "10" }}>
                    <Image src={r.icon} alt={r.title} width={52} height={52} />
                  </div>
                  <div className={styles.relatedBody}>
                    <h4 className={styles.relatedTitle}>{r.title}</h4>
                    <p className={styles.relatedDesc}>{r.desc}</p>
                  </div>
                  <div className={styles.relatedArrow} style={{ background: categoryColor + "10", color: categoryColor }}>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          10. PREMIUM CTA BANNER
      ══════════════════════════════════════ */}
      <section className={styles.ctaBannerSection}>
        <div className="container">
          <div className={styles.ctaBannerCard} style={{ background: `linear-gradient(135deg, #0B1F3A 0%, ${categoryColor} 100%)` }}>
            <div className={styles.ctaBannerBg} />
            <div className={styles.ctaContent}>
              <div className={styles.ctaLeft}>
                <h2 className={styles.ctaTitle}>Ready to Transform Your Smile?</h2>
                <p className={styles.ctaDesc}>Book a consultation today. Our expert dentists will create a personalised treatment plan just for you — completely free.</p>
                <div className={styles.ctaTrustRow}>
                  <div className={styles.ctaTrustItem}>
                    <span className={styles.ctaTrustNum} style={{ color: "rgba(255,255,255,0.95)" }}>10,000+</span>
                    <span className={styles.ctaTrustLbl}>Happy Patients</span>
                  </div>
                  <div className={styles.ctaTrustDivider} />
                  <div className={styles.ctaTrustItem}>
                    <span className={styles.ctaTrustNum} style={{ color: "rgba(255,255,255,0.95)" }}>15+</span>
                    <span className={styles.ctaTrustLbl}>Years of Excellence</span>
                  </div>
                  <div className={styles.ctaTrustDivider} />
                  <div className={styles.ctaTrustItem}>
                    <span className={styles.ctaTrustNum} style={{ color: "rgba(255,255,255,0.95)" }}>95%+</span>
                    <span className={styles.ctaTrustLbl}>Success Rate</span>
                  </div>
                  <div className={styles.ctaTrustDivider} />
                  <div className={styles.ctaTrustItem}>
                    <span className={styles.ctaTrustNum} style={{ color: "rgba(255,255,255,0.95)" }}>Free</span>
                    <span className={styles.ctaTrustLbl}>Consultation</span>
                  </div>
                </div>
              </div>
              <div className={styles.ctaBtns}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  <CalendarPlus size={17} /> Book Appointment
                </Link>
                <a href="tel:8510007234" className={styles.ctaBtnCall}>
                  <Phone size={17} /> Call Now
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaBtnWa}>
                  <MessageCircle size={17} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
