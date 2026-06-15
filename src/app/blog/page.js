"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Search, Calendar, Clock, ChevronRight, Play,
  Sparkles, CalendarPlus, Phone, BookOpen,
  Lightbulb, Smile, Apple, Brush, Mail, ChevronDown
} from "lucide-react";
import styles from "./page.module.css";

/* ═══════════════════════ DATA ═══════════════════════ */

const categories = [
  { id: "all",       label: "All Posts" },
  { id: "implants",  label: "Dental Implants" },
  { id: "braces",    label: "Braces" },
  { id: "rootcanal", label: "Root Canal" },
  { id: "cosmetic",  label: "Cosmetic Dentistry" },
  { id: "hygiene",   label: "Oral Hygiene" },
  { id: "kids",      label: "Kids Dentistry" },
  { id: "makeover",  label: "Smile Makeover" },
];

const articles = [
  {
    id: 1, category: "rootcanal", featured: true,
    slug: "signs-you-need-root-canal",
    title: "10 Signs You Need a Root Canal",
    excerpt: "Persistent toothache, sensitivity to hot/cold, swollen gums — learn the warning signs that indicate you may need root canal treatment before it becomes an emergency.",
    date: "Jun 10, 2026", readTime: "5 min read",
    img: "/images/treatments/Microscopic Root Canal.png",
    author: "Dr. Prashant Jindal", authorTitle: "BDS, MDS – Prosthodontist",
    tagColor: "#DC2626", tagBg: "#FEF2F2", tag: "Root Canal",
  },
  {
    id: 2, category: "implants",
    slug: "dental-implant-cost-guide",
    title: "Dental Implant Cost Guide: What You Really Pay For",
    excerpt: "A transparent breakdown of implant costs — titanium post, abutment, crown, and why quality matters more than the cheapest quote.",
    date: "Jun 08, 2026", readTime: "6 min read",
    img: "/images/treatments/Dental implant.png",
    author: "Dr. Prashant Jindal", authorTitle: "BDS, MDS – Prosthodontist",
    tagColor: "#DC2626", tagBg: "#FEF2F2", tag: "Implants",
  },
  {
    id: 3, category: "braces",
    slug: "clear-aligners-vs-metal-braces",
    title: "Clear Aligners vs Metal Braces: A Detailed Comparison",
    excerpt: "Comfort, speed, hygiene, and cost — a medical breakdown to help you choose the right orthodontic treatment for your smile.",
    date: "Jun 05, 2026", readTime: "6 min read",
    img: "/images/treatments/Invisible Braces.png",
    author: "Dr. Neha Sharma", authorTitle: "BDS, MDS – Orthodontist",
    tagColor: "#0D9488", tagBg: "#F0FDFA", tag: "Braces",
  },
  {
    id: 4, category: "cosmetic",
    slug: "emax-veneers-vs-composite-veneers",
    title: "Emax Veneers vs Composite Veneers: Which Is Right for You?",
    excerpt: "Longevity, aesthetics, cost, and procedure time — everything you need to know before choosing your veneer type.",
    date: "May 28, 2026", readTime: "5 min read",
    img: "/images/treatments/Emax Veneers.png",
    author: "Dr. Prashant Jindal", authorTitle: "BDS, MDS – Prosthodontist",
    tagColor: "#DB2777", tagBg: "#FDF2F8", tag: "Cosmetic",
  },
  {
    id: 5, category: "hygiene",
    slug: "zoom-whitening-vs-home-kits",
    title: "Zoom Whitening vs Home Kits: Safety, Efficacy & Longevity",
    excerpt: "Discover why light-accelerated clinical whitening provides uniform shades while protecting enamel from chemical sensitivity.",
    date: "May 20, 2026", readTime: "4 min read",
    img: "/images/treatments/Zoom Whitening.png",
    author: "Dr. Neha Sharma", authorTitle: "BDS, MDS – Orthodontist",
    tagColor: "#7C3AED", tagBg: "#F5F3FF", tag: "Whitening",
  },
  {
    id: 6, category: "makeover",
    slug: "complete-smile-makeover-guide",
    title: "Complete Smile Makeover: What to Expect at Each Stage",
    excerpt: "From consultation to final reveal — a step-by-step guide to a full smile makeover including veneers, whitening, and gum contouring.",
    date: "May 15, 2026", readTime: "7 min read",
    img: "/images/treatments/Composite Veneers.png",
    author: "Dr. Prashant Jindal", authorTitle: "BDS, MDS – Prosthodontist",
    tagColor: "#059669", tagBg: "#ECFDF5", tag: "Makeover",
  },
  {
    id: 7, category: "kids",
    slug: "when-should-child-first-see-dentist",
    title: "When Should Your Child First See a Dentist?",
    excerpt: "Early orthodontic consultations can prevent complex treatments later. Learn the ideal age for your child's first dental visit.",
    date: "May 10, 2026", readTime: "4 min read",
    img: "/images/treatments/Braces.png",
    author: "Dr. Neha Sharma", authorTitle: "BDS, MDS – Orthodontist",
    tagColor: "#2563EB", tagBg: "#EFF6FF", tag: "Kids",
  },
];

const popularArticles = [
  { title: "Dental Implant Cost Guide", date: "May 18, 2026", img: "/images/treatments/Dental implant.png" },
  { title: "Teeth Whitening Myths Busted", date: "May 15, 2026", img: "/images/treatments/Teeth whitening.png" },
  { title: "Braces vs Clear Aligners", date: "May 12, 2026", img: "/images/treatments/Invisible Braces.png" },
  { title: "Root Canal: 10 Facts", date: "May 10, 2026", img: "/images/treatments/Microscopic Root Canal.png" },
  { title: "Gum Disease Warning Signs", date: "May 08, 2026", img: "/images/treatments/Teeth Cleaning.png" },
];

const videoBlogs = [
  { id: 1, title: "5 Minute Dental Tips", duration: "5:00", thumb: "/images/treatments/Teeth Cleaning.png" },
  { id: 2, title: "Implant Care Guide", duration: "4:32", thumb: "/images/treatments/Dental implant.png" },
  { id: 3, title: "Braces Cleaning Tips", duration: "3:48", thumb: "/images/treatments/Braces.png" },
  { id: 4, title: "Teeth Whitening Facts", duration: "6:10", thumb: "/images/treatments/Zoom Whitening.png" },
];

const oralHealthTips = [
  { icon: <Brush size={30} color="#3B82F6" />, bg: "rgba(59,130,246,0.1)", title: "Brushing Tips", desc: "Brush twice daily with fluoride toothpaste using gentle circular motions." },
  { icon: <Smile size={30} color="#10B981" />, bg: "rgba(16,185,129,0.1)", title: "Cavity Prevention", desc: "Floss daily and reduce sugary snacks to prevent cavities from forming." },
  { icon: <Lightbulb size={30} color="#F59E0B" />, bg: "rgba(245,158,11,0.1)", title: "Smile Care", desc: "Regular dental checkups every 6 months keep your smile healthy and bright." },
  { icon: <Apple size={30} color="#EF4444" />, bg: "rgba(239,68,68,0.1)", title: "Foods for Teeth", desc: "Calcium-rich foods like dairy, leafy greens, and nuts strengthen enamel." },
];

const faqs = [
  { q: "Is teeth whitening safe?", a: "Yes, professional teeth whitening performed by a dentist is completely safe. It uses controlled concentrations of whitening agents that protect your enamel while removing stains." },
  { q: "How long do dental implants last?", a: "With proper care, dental implants can last a lifetime. The crown on top may need replacement after 15–20 years, but the titanium post is permanent." },
  { q: "Does root canal treatment hurt?", a: "Modern root canal treatment with local anesthesia is virtually painless — comparable to getting a filling. Microscopic techniques make it even more precise and comfortable." },
  { q: "How often should I visit the dentist?", a: "We recommend a checkup and professional cleaning every 6 months for most patients. Those with gum disease or high cavity risk may need more frequent visits." },
  { q: "What is the best age to get braces?", a: "Orthodontic treatment is most effective between ages 10–14 when the jaw is still developing. However, adults can also benefit significantly from modern clear aligners." },
];

const doctors = [
  { name: "Dr. Prashant Jindal", title: "BDS, MDS – Prosthodontist", initial: "PJ", articles: 12 },
  { name: "Dr. Neha Sharma", title: "BDS, MDS – Orthodontist", initial: "NS", articles: 8 },
];

/* ═══════════════════════ MAIN PAGE ═══════════════════════ */

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [email, setEmail] = useState("");
  const [pageData, setPageData] = useState({
    heroTitle: "Dental Health",
    heroAccent: "Insights & Expert Tips",
    heroSub: "Learn about oral health, treatments, smile makeovers, and preventive care from our dental experts.",
    heroImage: "/images/blog-hero.png"
  });

  useEffect(() => {
    async function fetchPageData() {
      try {
        const snap = await getDoc(doc(db, "siteContent", "blog"));
        if (snap.exists()) {
          const data = snap.data();
          // Extract the first two words as Title, rest as Accent
          const words = data.heroTitle.split(" ");
          const title = words.slice(0, 2).join(" ");
          const accent = words.slice(2).join(" ");
          
          setPageData({
            heroTitle: title || "Dental Health",
            heroAccent: accent || "Insights & Expert Tips",
            heroSub: data.heroSub || "Learn about oral health, treatments, smile makeovers, and preventive care from our dental experts.",
            heroImage: data.heroImage || "/images/blog-hero.png"
          });
        }
      } catch (err) {
        console.error("Failed to fetch blog page data", err);
      }
    }
    fetchPageData();
  }, []);

  const featuredPost = articles.find(a => a.featured);

  const filteredArticles = articles.filter(a => {
    const matchCat = activeCategory === "all" || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    // Featured article: sirf grid mein tab dikhao jab category filter active ho ya search ho
    const showFeaturedInGrid = a.featured && (activeCategory !== "all" || searchQuery !== "");
    const hideFeaturedFromGrid = a.featured && activeCategory === "all" && searchQuery === "";
    if (hideFeaturedFromGrid) return false;
    return matchCat && matchSearch;
  });

  return (
    <main className={styles.page}>

      {/* ══════════════ HERO ══════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden>
          <div className={styles.heroGlow1} />
          <div className={styles.heroGlow2} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroLeft}>
            <div className={styles.heroEyebrow}><Sparkles size={13} /> Expert Dental Knowledge</div>
            <h1 className={styles.heroTitle}>
              {pageData.heroTitle}<br />
              <span className={styles.heroAccent}>{pageData.heroAccent}</span>
            </h1>
            <p className={styles.heroSub}>
              {pageData.heroSub}
            </p>
            <div className={styles.heroSearch}>
              <Search size={18} className={styles.heroSearchIcon} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={styles.heroSearchInput}
              />
            </div>
          </div>
          <div className={styles.heroRight}>
            <Image
              src={pageData.heroImage}
              alt="Dental Health"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className={styles.heroImgOverlay} />
          </div>
        </div>
      </section>

      {/* ══════════════ FEATURED POST ══════════════ */}
      {searchQuery === "" && activeCategory === "all" && featuredPost && (
        <section className={styles.featuredSection}>
          <div className="container">
            <div className={styles.featuredCard}>
              <div className={styles.featuredImg}>
                <Image src={featuredPost.img} alt={featuredPost.title} fill style={{ objectFit: "cover" }} />
                <span className={styles.featuredBadge}>🦷 Featured Post</span>
              </div>
              <div className={styles.featuredBody}>
                <span className={styles.catTag} style={{ color: featuredPost.tagColor, background: featuredPost.tagBg }}>
                  {featuredPost.tag}
                </span>
                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                <div className={styles.featuredMeta}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorAvatar}>{featuredPost.author.charAt(3)}</div>
                    <div>
                      <p className={styles.authorName}>{featuredPost.author}</p>
                      <p className={styles.authorTitle}>{featuredPost.authorTitle}</p>
                    </div>
                  </div>
                  <div className={styles.metaRight}>
                    <span><Calendar size={13} /> {featuredPost.date}</span>
                    <span><Clock size={13} /> {featuredPost.readTime}</span>
                  </div>
                </div>
              <Link href={`/blog/${featuredPost.slug}`} className={styles.readMoreBtn}>Read Full Article →</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════ ARTICLES + SIDEBAR ══════════════ */}
      <section className={styles.articlesSection}>
        <div className="container">
          {/* Category filter */}
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className={styles.articlesLayout}>
            {/* Articles Grid */}
            <div>
              <div className={styles.grid}>
                {filteredArticles.map(art => (
                  <Link href={`/blog/${art.slug}`} key={art.id} className={styles.card}>
                    <div className={styles.cardImg}>
                      <Image src={art.img} alt={art.title} fill style={{ objectFit: "cover" }} />
                      <span className={styles.catTag} style={{ color: art.tagColor, background: art.tagBg }}>
                        {art.tag}
                      </span>
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{art.title}</h3>
                      <p className={styles.cardExcerpt}>{art.excerpt}</p>
                      <div className={styles.cardFooter}>
                        <div className={styles.cardAuthor}>
                          <div className={styles.authorAvatarSm}>{art.author.charAt(3)}</div>
                          <span>{art.author}</span>
                        </div>
                        <div className={styles.cardMeta}>
                          <span><Clock size={11} /> {art.readTime}</span>
                        </div>
                      </div>
                      <span className={styles.readMore}>Read More →</span>
                    </div>
                  </Link>
                ))}
              </div>
              {filteredArticles.length === 0 && (
                <p className={styles.empty}>No articles found. Try a different search or category.</p>
              )}
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Popular Articles — FIRST */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>🔥 Most Read Articles</h3>
                <ul className={styles.popularList}>
                  {popularArticles.map((a, i) => (
                    <li key={i} className={styles.popularItem}>
                      <div className={styles.popularImg}>
                        <Image src={a.img} alt={a.title} fill style={{ objectFit: "cover" }} />
                      </div>
                      <div className={styles.popularInfo}>
                        <Link href={`/blog/${popularArticles[i]?.slug || '#'}`} className={styles.popularLink}>{a.title}</Link>
                        <span className={styles.popularDate}>{a.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories — SECOND */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle} style={{ fontSize: "1.1rem" }}>Categories</h3>
                <ul className={styles.catList}>
                  {[
                    { id: "all",       label: "All Posts",          count: articles.length },
                    { id: "implants",  label: "Dental Implants",    count: articles.filter(a => a.category === "implants").length },
                    { id: "braces",    label: "Braces",             count: articles.filter(a => a.category === "braces").length },
                    { id: "rootcanal", label: "Root Canal",         count: articles.filter(a => a.category === "rootcanal").length },
                    { id: "cosmetic",  label: "Cosmetic Dentistry", count: articles.filter(a => a.category === "cosmetic").length },
                    { id: "hygiene",   label: "Oral Hygiene",       count: articles.filter(a => a.category === "hygiene").length },
                    { id: "kids",      label: "Kids Dentistry",     count: articles.filter(a => a.category === "kids").length },
                    { id: "makeover",  label: "Smile Makeover",     count: articles.filter(a => a.category === "makeover").length },
                  ].map(cat => (
                    <li key={cat.id}>
                      <button
                        className={`${styles.catListItem} ${activeCategory === cat.id ? styles.catListItemActive : ""}`}
                        onClick={() => setActiveCategory(cat.id)}
                      >
                        <span>{cat.label}</span>
                        <span className={`${styles.catCount} ${activeCategory === cat.id ? styles.catCountActive : ""}`}>{cat.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter mini */}
              <div className={styles.sideCard} style={{ background: "linear-gradient(135deg, #EFF8FF, #DBEAFE)" }}>
                <h3 className={styles.sideTitle}>📬 Weekly Tips</h3>
                <p className={styles.sideNewsletterText}>Get expert dental tips every week in your inbox.</p>
                <input type="email" placeholder="Your email..." className={styles.sideEmail} />
                <button className={styles.sideSubscribeBtn}>Subscribe</button>
              </div>

              {/* Oral Health Tips in Sidebar */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>🦷 Oral Health Tips</h3>
                <div className={styles.sideTipsList}>
                  {oralHealthTips.map(tip => (
                    <div key={tip.title} className={styles.sideTipItem}>
                      <div className={styles.sideTipIcon} style={{ background: tip.bg }}>
                        {tip.icon}
                      </div>
                      <div>
                        <p className={styles.sideTipTitle}>{tip.title}</p>
                        <p className={styles.sideTipDesc}>{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ══════════════ VIDEO BLOGS ══════════════ */}
      <section className={styles.videoSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>VIDEO BLOGS</span>
            <h2 className={styles.sectionTitle}>Watch & Learn</h2>
            <p className={styles.sectionSub}>Quick dental tips and guides from our specialists.</p>
          </div>
          <div className={styles.videoGrid}>
            {videoBlogs.map(v => (
              <div key={v.id} className={styles.videoCard}>
                <div className={styles.videoThumb}>
                  <Image src={v.thumb} alt={v.title} fill style={{ objectFit: "cover" }} />
                  <div className={styles.videoOverlay}>
                    <button className={styles.playBtn} aria-label={`Play ${v.title}`}>
                      <Play size={20} fill="white" />
                    </button>
                    <span className={styles.videoDuration}>{v.duration}</span>
                  </div>
                </div>
                <p className={styles.videoTitle}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ ORAL HEALTH TIPS ══════════════ */}
      <section className={styles.tipsSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>QUICK TIPS</span>
            <h2 className={styles.sectionTitle}>Oral Health Tips</h2>
            <p className={styles.sectionSub}>Simple habits that make a big difference to your smile.</p>
          </div>
          <div className={styles.tipsGrid}>
            {oralHealthTips.map(tip => (
              <div key={tip.title} className={styles.tipCard}>
                <div className={styles.tipIcon} style={{ background: tip.bg }}>
                  {tip.icon}
                </div>
                <h3 className={styles.tipTitle}>{tip.title}</h3>
                <p className={styles.tipDesc}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>FAQ</span>
            <h2 className={styles.sectionTitle}>Common Questions Answered</h2>
            <p className={styles.sectionSub}>Quick answers to the most frequent dental questions.</p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqItemOpen : ""}`}>
                <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`${styles.faqIcon} ${openFaq === i ? styles.faqIconOpen : ""}`} />
                </button>
                {openFaq === i && <p className={styles.faqA}>{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ NEWSLETTER ══════════════ */}
      <section className={styles.newsletterSection}>
        <div className="container">
          <div className={styles.newsletterCard}>
            <div className={styles.newsletterLeft}>
              <span className={styles.newsletterEyebrow}><Mail size={14} /> Stay Informed</span>
              <h2 className={styles.newsletterTitle}>Get Weekly Dental Tips</h2>
              <p className={styles.newsletterDesc}>
                Expert advice, treatment guides, and oral health tips — delivered to your inbox every week.
              </p>
            </div>
            <div className={styles.newsletterRight}>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterBtn}>Subscribe →</button>
              </div>
              <p className={styles.newsletterNote}>No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}><Sparkles size={13} /> Professional Advice</span>
            <h2 className={styles.ctaTitle}>Need Professional Dental Advice?</h2>
            <p className={styles.ctaDesc}>
              Reading is great — but nothing replaces a personalised consultation. Book a free visit today.
            </p>
          </div>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className={styles.btnPrimary}>
              <CalendarPlus size={17} /> Book Appointment
            </Link>
            <a href="tel:8510007234" className={styles.ctaPhone}>
              <Phone size={17} /> 85100 07234
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
