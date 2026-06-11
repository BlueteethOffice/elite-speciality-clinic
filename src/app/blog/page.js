"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, Clock, ChevronRight, BookOpen } from "lucide-react";
import styles from "./page.module.css";

const categories = [
  { id: "all", label: "All Articles" },
  { id: "hygiene", label: "Oral Hygiene" },
  { id: "ortho", label: "Orthodontics" },
  { id: "surgery", label: "Oral Surgery" }
];

const articles = [
  {
    id: 1,
    category: "hygiene",
    title: "How Often Do You Really Need Professional Teeth Cleaning?",
    desc: "Understand the dental scale criteria and find out why standard cleanings prevent critical gum diseases and preserve bone health.",
    date: "Jun 10, 2026",
    readTime: "4 min read",
    img: "/images/treatments/Teeth Cleaning.png",
    tagColor: "#059669",
    tagBg: "#ECFDF5",
    isFeatured: true
  },
  {
    id: 2,
    category: "ortho",
    title: "Clear Aligners vs Traditional Metal Braces: A Detailed Comparison",
    desc: "A medical breakdown comparing comfort, speed of treatment, hygiene upkeep, and aesthetic visibility between braces and clear aligners.",
    date: "Jun 08, 2026",
    readTime: "6 min read",
    img: "/images/treatments/Invisible Braces.png",
    tagColor: "#0D9488",
    tagBg: "#F0FDFA"
  },
  {
    id: 3,
    category: "surgery",
    title: "Wisdom Teeth Extraction: Recovery Tips and What to Expect",
    desc: "Our surgeons share a pre-visit checklist, recovery rules, and key dietary guidelines to avoid dry socket and accelerate healing.",
    date: "May 28, 2026",
    readTime: "5 min read",
    img: "/images/treatments/Wisdom Teeth Extraction.png",
    tagColor: "#DC2626",
    tagBg: "#FEF2F2"
  },
  {
    id: 4,
    category: "hygiene",
    title: "Zoom Whitening vs Home Kits: Safety, Efficacy, and Longevity",
    desc: "Discover why light-accelerated clinical whitening provides uniform shades while protecting enamel from chemical sensitivity.",
    date: "May 15, 2026",
    readTime: "4 min read",
    img: "/images/treatments/Zoom Whitening.png",
    tagColor: "#7C3AED",
    tagBg: "#F5F3FF"
  },
  {
    id: 5,
    category: "ortho",
    title: "Why Early Orthodontic Consultations Benefit Growing Children",
    desc: "Learn about jaw development interceptive therapy and how early alignment interventions prevent complex surgical needs later.",
    date: "May 04, 2026",
    readTime: "5 min read",
    img: "/images/treatments/Braces.png",
    tagColor: "#2563EB",
    tagBg: "#EFF6FF"
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(art => {
    const matchesCategory = activeCategory === "all" || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = articles.find(art => art.isFeatured);
  const otherPosts = filteredArticles.filter(art => !art.isFeatured || activeCategory !== "all" || searchQuery !== "");

  return (
    <main className={styles.blogPage}>
      <div className="container">
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>DENTAL HUB</span>
          <h1 className={styles.title}>Clinical Articles & Dental Advice</h1>
          <p className={styles.subtitle}>
            Read medical insights, dental hygiene routines, and speciality treatment advice from the practitioners at Elite Speciality Clinic.
          </p>
        </div>

        {/* Controls */}
        <div className={styles.controlsRow}>
          <div className={styles.searchBox}>
            <Search className={styles.searchIcon} size={18} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterPills}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`${styles.pill} ${activeCategory === cat.id ? styles.activePill : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post (Only show if searching is not active and filter is All) */}
        {activeCategory === "all" && searchQuery === "" && featuredPost && (
          <div className={styles.featuredSection}>
            <Link href="#" className={styles.featuredCard}>
              <div className={styles.featuredImgArea}>
                <Image 
                  src={featuredPost.img} 
                  alt={featuredPost.title} 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.featuredInfoArea}>
                <div>
                  <span className={styles.fBadge}>Featured Article</span>
                  <h2 className={styles.fTitle}>{featuredPost.title}</h2>
                  <p className={styles.fDesc}>{featuredPost.desc}</p>
                </div>
                <div className={styles.fMeta}>
                  <Calendar size={14} />
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <Clock size={14} />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Articles Grid */}
        <div className={styles.grid}>
          {otherPosts.map((art) => (
            <Link href="#" key={art.id} className={styles.card}>
              <div className={styles.cardImgWrap}>
                <Image 
                  src={art.img} 
                  alt={art.title} 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.cardInfo}>
                <div>
                  <span 
                    className={styles.cBadge} 
                    style={{ color: art.tagColor, background: art.tagBg }}
                  >
                    {art.category}
                  </span>
                  <h3 className={styles.cTitle}>{art.title}</h3>
                  <p className={styles.cDesc}>{art.desc}</p>
                </div>
                
                <div className={styles.cMeta}>
                  <span>{art.date}</span>
                  <span>{art.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
