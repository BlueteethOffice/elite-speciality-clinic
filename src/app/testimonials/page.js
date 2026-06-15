"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Star, Play, CalendarPlus, Phone, ChevronLeft, ChevronRight,
  Sparkles, Quote, ThumbsUp, MessageCircle
} from "lucide-react";
import styles from "./page.module.css";

/* ═══════════════════════════════════════ DATA ═══════════════════════════════════════ */

const videoTestimonials = [
  {
    id: 1, title: "My Implant Journey",
    patient: "Rajesh Kumar", location: "Dwarka Sector 7",
    treatment: "Dental Implants", duration: "2:34",
    thumbnail: "/images/treatments/Dental implant.png", rating: 5,
  },
  {
    id: 2, title: "Smile Makeover Experience",
    patient: "Priya Sharma", location: "Dwarka, Delhi",
    treatment: "Emax Veneers", duration: "1:58",
    thumbnail: "/images/treatments/Emax Veneers.png", rating: 5,
  },
  {
    id: 3, title: "Braces Transformation Story",
    patient: "Sneha Agarwal", location: "Dwarka Mor",
    treatment: "Invisible Braces", duration: "2:12",
    thumbnail: "/images/treatments/Invisible Braces.png", rating: 5,
  },
  {
    id: 4, title: "Teeth Whitening Results",
    patient: "Anita Verma", location: "Sector 12, Dwarka",
    treatment: "Zoom Whitening", duration: "1:45",
    thumbnail: "/images/treatments/Zoom Whitening.png", rating: 5,
  },
];

const categories = [
  { id: "all", label: "All Reviews" },
  { id: "implants", label: "Implants" },
  { id: "braces", label: "Braces" },
  { id: "rootcanal", label: "Root Canal" },
  { id: "veneers", label: "Veneers" },
  { id: "whitening", label: "Whitening" },
];

const reviews = [
  {
    id: 1, category: "rootcanal",
    name: "Arun Verma", date: "2 weeks ago", stars: 5, initials: "AV",
    location: "Dwarka Sector 7",
    comment: "I had a wonderful experience at Elite Speciality Clinic. Dr. Kavita is highly professional and the root canal was completely painless! She explains everything very clearly.",
    treatment: "Microscopic Root Canal",
    doctorReply: "Thank you so much, Arun! We are delighted that your experience was comfortable.",
  },
  {
    id: 2, category: "braces",
    name: "Priya Malik", date: "1 month ago", stars: 5, initials: "PM",
    location: "Dwarka Mor",
    comment: "Excellent service! I completed my clear aligners treatment here. Dr. Kavita gave a very honest diagnosis and the pricing was very transparent. Highly satisfied!",
    treatment: "Clear Aligners",
    doctorReply: "It was a pleasure treating you, Priya! Enjoy your beautiful new smile.",
  },
  {
    id: 3, category: "veneers",
    name: "Meenakshi Tiwari", date: "1 month ago", stars: 5, initials: "MT",
    location: "Dwarka Sector 12",
    comment: "My smile makeover completely changed my confidence. Dr. Kavita was so patient and avoided any unnecessary procedures. Truly the best dental clinic in Dwarka!",
    treatment: "Emax Veneers",
    doctorReply: "Meenakshi, your smile was a joy to create. Thank you for trusting us with your transformation!",
  },
  {
    id: 4, category: "whitening",
    name: "Neha Gupta", date: "2 months ago", stars: 5, initials: "NG",
    location: "Dwarka Sector 6",
    comment: "Best cosmetic dental experience! Got Zoom Whitening done. Dr. Kavita is very gentle and skilled, ensuring my complete comfort.",
    treatment: "Zoom Teeth Whitening",
    doctorReply: "We're so glad you're happy with the results, Neha! Keep smiling.",
  },
  {
    id: 5, category: "implants",
    name: "Sanjay Kaushik", date: "3 months ago", stars: 5, initials: "SK",
    location: "Sector 10",
    comment: "I was very scared of dental treatments but the team here made it so simple. Very honest advice from Dr. Kavita. Highly recommended for any dental issues.",
    treatment: "Dental Consultation",
    doctorReply: "Sanjay, your courage was inspiring. We are proud to have helped you!",
  },
  {
    id: 6, category: "rootcanal",
    name: "Dr. Anjali Sen", date: "4 months ago", stars: 5, initials: "AS",
    location: "Dwarka Sector 4",
    comment: "Being a medical professional, I am very particular about hygiene. Elite clinic maintains top-notch sterilization. Dr. Kavita and Dr. Amit R. Sultania run an exceptional practice.",
    treatment: "Comprehensive Checkup",
    doctorReply: "Dr. Sen, your words of appreciation mean a great deal from a fellow healthcare professional. Thank you!",
  },
];

const successStories = [
  {
    id: 1,
    name: "Priya Sharma",
    treatment: "Emax Veneers",
    quote: "The confidence I gained is priceless. I smile in every photo now.",
    beforeImg: "/images/treatments/Emax Veneers.png",
    afterImg: "/images/treatments/Emax Veneers.png",
    emotionBefore: "😔 Nervous",
    emotionAfter: "😁 Confident",
  },
  {
    id: 2,
    name: "Rahul Verma",
    treatment: "Dental Implants",
    quote: "Eating, smiling, laughing — everything feels natural again.",
    beforeImg: "/images/treatments/Dental implant.png",
    afterImg: "/images/treatments/Dental implant.png",
    emotionBefore: "😟 Hesitant",
    emotionAfter: "😄 Overjoyed",
  },
  {
    id: 3,
    name: "Sneha Agarwal",
    treatment: "Invisible Braces",
    quote: "11 months of aligners changed my smile and my entire personality.",
    beforeImg: "/images/treatments/Invisible Braces.png",
    afterImg: "/images/treatments/Invisible Braces.png",
    emotionBefore: "😐 Self-conscious",
    emotionAfter: "🤩 Glowing",
  },
];

const stats = [
  { value: "5,000+", label: "Happy Patients" },
  { value: "98%",    label: "Positive Reviews" },
  { value: "1,000+", label: "Smile Makeovers" },
  { value: "15+",    label: "Years Experience" },
];

const reels = [
  { id: 1, label: "Patient Smile",  duration: "45 sec", thumb: "/images/treatments/Patient Smile.png" },
  { id: 2, label: "Implant Story",  duration: "60 sec", thumb: "/images/treatments/Implant Story.png" },
  { id: 3, label: "Zoom Whitening", duration: "44 sec", thumb: "/images/treatments/Zoom Whitening Story.png" },
  { id: 4, label: "Veneer Magic",   duration: "38 sec", thumb: "/images/treatments/Veneer Magic.png" },
  { id: 5, label: "Smile Makeover", duration: "55 sec", thumb: "/images/treatments/Smile Makeover.png" },
  { id: 6, label: "Braces Journey", duration: "52 sec", thumb: "/images/treatments/Braces Journey.png" },
];

/* ═══════════════════════════════════════ COMPONENTS ═══════════════════════════════════════ */

function StarRow({ count = 5, size = 14 }) {
  return (
    <div className={styles.starsRow}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} fill="#F59E0B" stroke="none" />
      ))}
    </div>
  );
}

function VideoCard({ v }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={styles.videoCard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.videoThumb}>
        <Image src={v.thumbnail} alt={v.title} fill style={{ objectFit: "cover" }} />
        <div className={`${styles.videoOverlay} ${hovered ? styles.videoOverlayHovered : ""}`}>
          <button className={`${styles.playBtn} ${hovered ? styles.playBtnHovered : ""}`} aria-label={`Play ${v.title}`}>
            <Play size={22} fill="white" />
          </button>
        </div>
        <span className={styles.videoDuration}>{v.duration}</span>
        <span className={styles.videoTreatmentBadge}>{v.treatment}</span>
      </div>
      <div className={styles.videoInfo}>
        <StarRow count={v.rating} size={13} />
        <h3 className={styles.videoTitle}>{v.title}</h3>
        <p className={styles.videoPatient}>{v.patient} · {v.location}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════ MAIN PAGE ═══════════════════════════════════════ */

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedReply, setExpandedReply] = useState(null);
  const [liveReviews, setLiveReviews] = useState(reviews);
  const [liveStats, setLiveStats] = useState({ rating: 4.9, total: "1,200+" });
  const [pageData, setPageData] = useState({
    heroTitle: "⭐ What Our",
    heroAccent: "Patients Say",
    heroSub: "Real stories. Real smiles. Real experiences.\\nJoin 5,000+ patients who transformed their smiles at Elite Speciality Clinic.",
    heroImage: "/images/testimonials-hero.png",
    stats: stats // default stats from data
  });
  const videoScrollRef = useRef(null);
  const reelsScrollRef = useRef(null);

  useEffect(() => {
    async function fetchPageData() {
      try {
        const snap = await getDoc(doc(db, "siteContent", "testimonials"));
        if (snap.exists()) {
          const data = snap.data();
          const words = (data.heroTitle || "⭐ What Our Patients Say").split(" ");
          const title = words.slice(0, 3).join(" ");
          const accent = words.slice(3).join(" ");
          
          setPageData({
            heroTitle: title,
            heroAccent: accent,
            heroSub: data.heroSub || pageData.heroSub,
            heroImage: data.heroImage || pageData.heroImage,
            stats: [
              { value: data.stat1 || stats[0].value, label: data.stat1Lbl || stats[0].label },
              { value: data.stat2 || stats[1].value, label: data.stat2Lbl || stats[1].label },
              { value: data.stat3 || stats[2].value, label: data.stat3Lbl || stats[2].label },
              { value: data.stat4 || stats[3].value, label: data.stat4Lbl || stats[3].label },
            ]
          });
        }
      } catch (err) {
        console.error("Failed to fetch testimonials page data", err);
      }
    }
    fetchPageData();
    async function getReviews() {
      try {
        const res = await fetch("/api/reviews");
        const json = await res.json();
        if (json.success && json.data && json.data.reviews) {
          const apiReviews = json.data.reviews.map((r, i) => ({
            id: `api-${i}`,
            category: "all",
            name: r.author_name,
            date: r.relative_time_description,
            stars: r.rating,
            initials: r.author_name.charAt(0).toUpperCase(),
            location: "Verified Google Review",
            comment: r.text,
            treatment: "Dental Care",
            doctorReply: null,
          }));
          
          // Merge with existing reviews to keep the grid full
          setLiveReviews([...apiReviews, ...reviews.slice(apiReviews.length)]);
          if (json.data.rating) {
            setLiveStats({ rating: json.data.rating, total: json.data.user_ratings_total });
          }
        }
      } catch (err) {
        console.error("Failed to fetch live reviews", err);
      }
    }
    getReviews();
  }, []);

  const filteredReviews = activeCategory === "all"
    ? liveReviews
    : liveReviews.filter(r => r.category === activeCategory);

  const scrollVideos = (dir) => {
    if (!videoScrollRef.current) return;
    videoScrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <main className={styles.page}>

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden>
          <Image
            src={pageData.heroImage}
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroGlow1} />
          <div className={styles.heroGlow2} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroLeft}>
            <div className={styles.heroEyebrow}>
              <Sparkles size={13} /> Verified Patient Reviews
            </div>
            <h1 className={styles.heroTitle}>
              {pageData.heroTitle}<br />
              <span className={styles.heroAccent}>{pageData.heroAccent}</span>
            </h1>
            <p className={styles.heroSub} style={{ whiteSpace: "pre-line" }}>
              {pageData.heroSub}
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatVal}>{liveStats.rating}</span>
                <StarRow count={Math.round(liveStats.rating)} size={16} />
                <span className={styles.heroStatLbl}>Google Rating</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatVal}>{liveStats.total}</span>
                <span className={styles.heroStatLbl}>Verified Reviews</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatVal}>98%</span>
                <span className={styles.heroStatLbl}>Recommend Us</span>
              </div>
            </div>
            <div className={styles.heroBtns}>
              <Link href="/contact" className={styles.btnPrimary}>
                <CalendarPlus size={16} /> Book Free Consultation
              </Link>
              <a href="tel:8510007234" className={styles.btnOutline}>
                <Phone size={16} /> 85100 07234
              </a>
            </div>
          </div>
          {/* Floating review cards */}
          <div className={styles.heroRight} aria-hidden>
            <div className={styles.floatCard}>
              <StarRow count={5} size={12} />
              <p className={styles.floatText}>"Completely painless root canal. Amazing!"</p>
              <span className={styles.floatName}>— Rajesh S.</span>
            </div>
            <div className={`${styles.floatCard} ${styles.floatCardAlt}`}>
              <StarRow count={5} size={12} />
              <p className={styles.floatText}>"My veneers look absolutely natural."</p>
              <span className={styles.floatName}>— Meenakshi T.</span>
            </div>
            <div className={`${styles.floatCard} ${styles.floatCardSm}`}>
              <StarRow count={5} size={12} />
              <p className={styles.floatText}>"Best implant experience ever!"</p>
              <span className={styles.floatName}>— Sanjay K.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ VIDEO TESTIMONIALS ══════════════════════ */}
      <section className={styles.videoSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>PATIENT VIDEOS</span>
            <h2 className={styles.sectionTitle}>Featured Video Testimonials</h2>
            <p className={styles.sectionSub}>Watch real patients share their smile journeys in their own words.</p>
          </div>
          <div className={styles.videoScrollWrap}>
            <button className={`${styles.scrollBtn} ${styles.scrollBtnLeft}`} onClick={() => scrollVideos(-1)} aria-label="Scroll left">
              <ChevronLeft size={20} />
            </button>
            <div className={styles.videoScrollTrack} ref={videoScrollRef}>
              {videoTestimonials.map(v => <VideoCard key={v.id} v={v} />)}
            </div>
            <button className={`${styles.scrollBtn} ${styles.scrollBtnRight}`} onClick={() => scrollVideos(1)} aria-label="Scroll right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════ GOOGLE REVIEWS ══════════════════════ */}
      <section className={styles.googleSection}>
        <div className="container">
          {/* Google badge */}
          <div className={styles.googleBadge}>
              <div className={styles.googleBadgeLeft}>
              <span className={styles.googleG}>G</span>
              <div>
                <div className={styles.googleRatingBig}>{liveStats.rating} / 5</div>
                <StarRow count={Math.round(liveStats.rating)} size={18} />
                <p className={styles.googleCount}>Based on {liveStats.total} Google Reviews</p>
              </div>
            </div>
            <div className={styles.googleBadgeRight}>
              <div className={styles.googlePercents}>
                {[["5 ★", "92%"], ["4 ★", "6%"], ["3 ★", "2%"]].map(([lbl, pct]) => (
                  <div key={lbl} className={styles.googleBar}>
                    <span className={styles.googleBarLabel}>{lbl}</span>
                    <div className={styles.googleBarTrack}>
                      <div className={styles.googleBarFill} style={{ width: pct }} />
                    </div>
                    <span className={styles.googleBarPct}>{pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category filter */}
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterBtnActive : ""}`}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry reviews grid */}
          <div className={styles.reviewsGrid}>
            {filteredReviews.map(rev => (
              <div key={rev.id} className={styles.reviewCard}>
                <div className={styles.reviewCardTop}>
                  <div className={styles.reviewerInfo}>
                    <div className={styles.reviewAvatar}>{rev.initials}</div>
                    <div>
                      <p className={styles.reviewName}>{rev.name}</p>
                      <p className={styles.reviewMeta}>{rev.location} · {rev.date}</p>
                    </div>
                  </div>
                  <span className={styles.googleGSmall}>G</span>
                </div>
                <StarRow count={rev.stars} size={13} />
                <p className={styles.reviewText}>"{rev.comment}"</p>
                <span className={styles.reviewTreatmentTag}>{rev.treatment}</span>

                {/* Doctor reply */}
                <div className={styles.doctorReplyWrap}>
                  <button
                    className={styles.replyToggle}
                    onClick={() => setExpandedReply(expandedReply === rev.id ? null : rev.id)}
                  >
                    <MessageCircle size={13} />
                    {expandedReply === rev.id ? "Hide" : "Doctor's Reply"}
                  </button>
                  {expandedReply === rev.id && (
                    <div className={styles.doctorReply}>
                      <Quote size={14} className={styles.quoteIcon} />
                      <p className={styles.doctorReplyText}>{rev.doctorReply}</p>
                      <div className={styles.doctorReplyAuthor}>
                        <div className={styles.doctorReplyAvatar}>DK</div>
                        <span>Dr. Kavita · Elite Speciality Clinic</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ PATIENT SUCCESS STORIES ══════════════════════ */}
      <section className={styles.storiesSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>SUCCESS STORIES</span>
            <h2 className={styles.sectionTitle}>Patient Transformations</h2>
            <p className={styles.sectionSub}>Real before & after experiences from our patients.</p>
          </div>
          <div className={styles.storiesGrid}>
            {successStories.map(s => (
              <div key={s.id} className={styles.storyCard}>
                <div className={styles.storyImages}>
                  <div className={styles.storyImgWrap}>
                    <Image src={s.beforeImg} alt="Before" fill style={{ objectFit: "cover", filter: "grayscale(40%) brightness(90%)" }} />
                    <span className={styles.storyEmotion}>{s.emotionBefore}</span>
                    <span className={styles.storyImgLabel}>Before</span>
                  </div>
                  <div className={styles.storyArrow}>→</div>
                  <div className={styles.storyImgWrap}>
                    <Image src={s.afterImg} alt="After" fill style={{ objectFit: "cover" }} />
                    <span className={`${styles.storyEmotion} ${styles.storyEmotionAfter}`}>{s.emotionAfter}</span>
                    <span className={`${styles.storyImgLabel} ${styles.storyImgLabelAfter}`}>After</span>
                  </div>
                </div>
                <div className={styles.storyBody}>
                  <Quote size={18} className={styles.quoteIcon} />
                  <p className={styles.storyQuote}>"{s.quote}"</p>
                  <div className={styles.storyFooter}>
                    <div className={styles.storyAvatar}>{s.name.charAt(0)}</div>
                    <div>
                      <p className={styles.storyName}>{s.name}</p>
                      <p className={styles.storyTreatment}>{s.treatment}</p>
                    </div>
                    <StarRow count={5} size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ STATS STRIP ══════════════════════ */}
      <section className={styles.statsStrip}>
        <div className="container">
          <div className={styles.statsGrid}>
            {pageData.stats.map(s => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statVal}>{s.value}</span>
                <span className={styles.statLbl}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ INSTAGRAM REELS ══════════════════════ */}
      <section className={styles.reelsSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.sectionTag}>INSTAGRAM REELS</span>
            <h2 className={styles.sectionTitle}>Short Patient Stories</h2>
            <p className={styles.sectionSub}>Quick glimpses of real smiles — watch and get inspired.</p>
          </div>
          <div className={styles.reelsScrollWrap}>
            <button className={`${styles.scrollBtn} ${styles.scrollBtnLeft}`} onClick={() => reelsScrollRef.current?.scrollBy({ left: -300, behavior: "smooth" })} aria-label="Scroll left">
              <ChevronLeft size={20} />
            </button>
            <div className={styles.reelsScrollTrack} ref={reelsScrollRef}>
              {reels.map(r => (
                <div key={r.id} className={styles.reelCard}>
                  <div className={styles.reelThumb}>
                    <Image src={r.thumb} alt={r.label} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                    <div className={styles.reelOverlay}>
                      <Play size={20} fill="white" className={styles.reelPlay} />
                    </div>
                    <span className={styles.reelDuration}>{r.duration}</span>
                  </div>
                  <p className={styles.reelLabel}>{r.label}</p>
                </div>
              ))}
            </div>
            <button className={`${styles.scrollBtn} ${styles.scrollBtnRight}`} onClick={() => reelsScrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })} aria-label="Scroll right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}><Sparkles size={13} /> Join Our Happy Patients</span>
            <h2 className={styles.ctaTitle}>Ready To Join Our<br />Happy Patients?</h2>
            <p className={styles.ctaDesc}>
              Book a free consultation today. Our specialists will create a personalised treatment plan just for you.
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
