"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const categories = [
  { id: "all", label: "All Cases" },
  { id: "ortho", label: "Orthodontics" },
  { id: "cosmetic", label: "Cosmetic Dentistry" },
  { id: "implant", label: "Dental Implants" },
  { id: "restorative", label: "Restorative" }
];

const cases = [
  {
    id: 1,
    category: "ortho",
    title: "Clear Aligners Transformation",
    desc: "Corrected severe crowding and bite misalignment using invisible clear aligners over 11 months.",
    beforeImg: "/images/treatments/Invisible Braces.png",
    afterImg: "/images/treatments/Invisible Braces.png",
    duration: "11 Months",
    difficulty: "Moderate",
    cost: "Premium Plan",
    tagColor: "#0D9488",
    tagBg: "#F0FDFA"
  },
  {
    id: 2,
    category: "cosmetic",
    title: "Premium Emax Veneers",
    desc: "Addressed discoloration, minor chips, and gap alignment with custom lithium disilicate veneers.",
    beforeImg: "/images/treatments/Emax Veneers.png",
    afterImg: "/images/treatments/Emax Veneers.png",
    duration: "2 Sessions",
    difficulty: "Complex",
    cost: "Custom",
    tagColor: "#DB2777",
    tagBg: "#FDF2F8"
  },
  {
    id: 3,
    category: "implant",
    title: "Full Arch Dental Implant",
    desc: "Restored missing molars and pre-molars using biocompatible titanium implants and zirconia crowns.",
    beforeImg: "/images/treatments/Dental implant.png",
    afterImg: "/images/treatments/Dental implant.png",
    duration: "3 Months",
    difficulty: "Advanced",
    cost: "Standard Arch",
    tagColor: "#DC2626",
    tagBg: "#FEF2F2"
  },
  {
    id: 4,
    category: "cosmetic",
    title: "Professional Laser Whitening",
    desc: "Removed years of tea and coffee stains, raising the shade index by 8 levels in one appointment.",
    beforeImg: "/images/treatments/Teeth whitening.png",
    afterImg: "/images/treatments/Teeth whitening.png",
    duration: "60 Mins",
    difficulty: "Simple",
    cost: "Express Zoom",
    tagColor: "#7C3AED",
    tagBg: "#F5F3FF"
  },
  {
    id: 5,
    category: "restorative",
    title: "Metal-Free Crown Placement",
    desc: "Replaced an old broken metal crown with highly aesthetic, biocompatible Lava Zirconia.",
    beforeImg: "/images/treatments/Metal Free Crowns.png",
    afterImg: "/images/treatments/Metal Free Crowns.png",
    duration: "1 Week",
    difficulty: "Moderate",
    cost: "Zirconia Tier",
    tagColor: "#2563EB",
    tagBg: "#EFF6FF"
  },
  {
    id: 6,
    category: "restorative",
    title: "Composite Bonded Fillings",
    desc: "Treated active decay and reconstructed tooth anatomy with seamless tooth-colored composite.",
    beforeImg: "/images/treatments/Dental fillings.png",
    afterImg: "/images/treatments/Dental fillings.png",
    duration: "45 Mins",
    difficulty: "Simple",
    cost: "Direct Bond",
    tagColor: "#059669",
    tagBg: "#ECFDF5"
  }
];

export default function SmileGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCases = activeFilter === "all" 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  return (
    <main className={styles.galleryPage}>
      <div className="container">
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>SMILE GALLERY</span>
          <h1 className={styles.title}>Transformations We Deliver</h1>
          <p className={styles.subtitle}>
            Explore actual treatment results and successful smile makeovers achieved by the expert specialists at Elite Speciality Clinic.
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.activeFilterBtn : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={styles.grid}>
          {filteredCases.map((c) => (
            <div key={c.id} className={styles.card}>
              {/* Before/After View */}
              <div className={styles.comparison}>
                <div className={styles.imgWrapper}>
                  <Image 
                    src={c.beforeImg} 
                    alt="Before Treatment" 
                    fill 
                    style={{ objectFit: "cover", filter: "contrast(88%) brightness(90%) saturate(60%)" }} 
                  />
                  <span className={styles.label}>Before</span>
                </div>
                <div className={styles.imgWrapper}>
                  <Image 
                    src={c.afterImg} 
                    alt="After Treatment" 
                    fill 
                    style={{ objectFit: "cover" }} 
                  />
                  <span className={styles.label} style={{ background: "#00A6A6" }}>After</span>
                </div>
              </div>

              {/* Card Info */}
              <div className={styles.info}>
                <div>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.caseTitle}>{c.title}</h3>
                    <span 
                      className={styles.categoryTag} 
                      style={{ color: c.tagColor, background: c.tagBg }}
                    >
                      {c.category}
                    </span>
                  </div>
                  <p className={styles.desc}>{c.desc}</p>
                </div>

                <div className={styles.metaRow}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLbl}>Duration</span>
                    <span className={styles.metaVal}>{c.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLbl}>Difficulty</span>
                    <span className={styles.metaVal}>{c.difficulty}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLbl}>Procedure</span>
                    <span className={styles.metaVal}>{c.cost}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
