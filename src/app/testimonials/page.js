"use client";

import { Star, CheckCircle, Play, Video } from "lucide-react";
import styles from "./page.module.css";

const reviews = [
  {
    id: 1,
    name: "Rajesh Sharma",
    date: "2 weeks ago",
    stars: 5,
    initials: "RS",
    comment: "I had a wonderful experience at Elite Speciality Clinic. Dr. Vivek and his team are extremely professional. I got my microscopic root canal done here and it was completely painless! Highly recommended dental clinic in Dwarka.",
    treatment: "Microscopic Root Canal"
  },
  {
    id: 2,
    name: "Priya Malik",
    date: "1 month ago",
    stars: 5,
    initials: "PM",
    comment: "Excellent service! The clinic is very clean and uses high-tech equipment. I completed my clear aligners treatment here. The results are amazing and the pricing was very transparent compared to other clinics.",
    treatment: "Clear Aligners"
  },
  {
    id: 3,
    name: "Amit Verma",
    date: "1 month ago",
    stars: 5,
    initials: "AV",
    comment: "Got a Lava zirconia crown done after my extraction here. The fit is perfect and it feels exactly like a natural tooth. The doctors explain every step of the treatment very patiently.",
    treatment: "Zirconia Crown Placement"
  },
  {
    id: 4,
    name: "Neha Gupta",
    date: "2 months ago",
    stars: 5,
    initials: "NG",
    comment: "Best cosmetic dental experience! I got my Zoom Whitening done before my wedding and got so many compliments. Dr. Vivek is very gentle and skilled.",
    treatment: "Zoom Teeth Whitening"
  },
  {
    id: 5,
    name: "Sanjay Kaushik",
    date: "3 months ago",
    stars: 5,
    initials: "SK",
    comment: "I was very scared of dental implants, but the surgeons here made it so simple. The surgery was done in minutes, and the recovery was very smooth. Best speciality care.",
    treatment: "Dental Implant Surgery"
  },
  {
    id: 6,
    name: "Dr. Anjali Sen",
    date: "4 months ago",
    stars: 5,
    initials: "AS",
    comment: "Being a medical professional myself, I am very particular about sterilization. Elite clinic maintains top-notch hygiene standards and uses state-of-the-art diagnostics. Exceptional ethical practice.",
    treatment: "Comprehensive Dental Scaling"
  }
];

const videos = [
  {
    id: 1,
    title: "Clear Aligner Success Story",
    desc: "Aditi shares her journey of straightening her teeth without braces.",
    duration: "2 mins"
  },
  {
    id: 2,
    title: "Painless Wisdom Tooth Surgery",
    desc: "Varun shares his experience of surgical extraction with zero discomfort.",
    duration: "1.5 mins"
  },
  {
    id: 3,
    title: "Full Mouth Smile Makeover",
    desc: "Meenakshi speaks about how dental veneers restored her confidence.",
    duration: "3 mins"
  }
];

export default function Testimonials() {
  return (
    <main className={styles.testimonialsPage}>
      <div className="container">
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>PATIENT REVIEWS</span>
          <h1 className={styles.title}>Happy Smiles, Trusting Patients</h1>
          <p className={styles.subtitle}>
            Read honest feedback from patients who restored their smiles and oral health at our state-of-the-art clinic.
          </p>
        </div>

        {/* Google Reviews Badge */}
        <div className={styles.badgeContainer}>
          <div className={styles.googleBadge}>
            <div className={styles.badgeLeft}>
              <span className={styles.googleIcon}>G</span>
              <span className={styles.gRating}>4.9</span>
            </div>
            <div className={styles.badgeRight}>
              <div className={`${styles.stars} ${styles.starsLarge}`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FBBF24" stroke="none" />
                ))}
              </div>
              <h3 className={styles.badgeTitle}>Verified Google Reviews</h3>
              <p className={styles.badgeSub}>Based on 500+ patient reviews & ratings in Dwarka</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className={styles.reviewsGrid}>
          {reviews.map((rev) => (
            <div key={rev.id} className={styles.reviewCard}>
              <div>
                <div className={styles.cardHead}>
                  <div className={styles.reviewer}>
                    <div className={styles.avatar}>{rev.initials}</div>
                    <div className={styles.nameInfo}>
                      <span className={styles.revName}>{rev.name}</span>
                      <span className={styles.revMeta}>{rev.date}</span>
                    </div>
                  </div>
                  <span className={styles.gLogo}>G</span>
                </div>
                
                <div className={styles.stars} style={{ marginBottom: "14px" }}>
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} size={14} fill="#FBBF24" stroke="none" />
                  ))}
                </div>

                <p className={styles.comment}>"{rev.comment}"</p>
              </div>

              <div className={styles.verifiedRow}>
                <CheckCircle size={14} />
                <span>Verified {rev.treatment} Case</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className={styles.videoSection}>
          <h2 className={styles.videoSectionTitle}>Video Testimonials</h2>
          
          <div className={styles.videoGrid}>
            {videos.map((vid) => (
              <div key={vid.id} className={styles.videoCard}>
                <div className={styles.thumbWrap}>
                  {/* Visual mockup background representing clinical setup */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0B1F3A 0%, #1E3A8A 100%)", opacity: 0.85 }} />
                  <Video size={36} color="rgba(255,255,255,0.2)" />
                  <div className={styles.playBtn}>
                    <Play size={20} fill="#fff" stroke="none" />
                  </div>
                </div>
                <div className={styles.videoInfo}>
                  <h4 className={styles.vTitle}>{vid.title}</h4>
                  <p className={styles.vDesc}>{vid.desc} • {vid.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
