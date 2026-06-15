"use client";

import { useState } from "react";
import ImageUploader from "../components/ImageUploader";
import SectionCard from "../components/SectionCard";
import styles from "../admin.module.css";

const DEFAULT = {
  heroImage: "/images/hero-banner.png",
  heroTag: "Awarded Best Dental Clinic · Dwarka, Delhi",
  heroTitle: "Excellence. Ethics. Expertise.",
  heroDesc: "World-class dentistry trusted by 10,000+ patients across Delhi NCR.",
  stat1: "10,000+", stat1Label: "Happy Patients",
  stat2: "15+",     stat2Label: "Years of Excellence",
  stat3: "15+",     stat3Label: "Treatments Offered",
  stat4: "100%",    stat4Label: "Sterilisation Standard",
};

export default function HomeEditor() {
  const [data, setData]     = useState(DEFAULT);
  const [saved, setSaved]   = useState(false);

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const update = (key, val) => setData(prev => ({ ...prev, [key]: val }));

  return (
    <div className={styles.editor}>

      <SectionCard title="🏠 Hero Section" subtitle="Main banner image and headline text">
        <div className={styles.fieldRow}>
          <div className={styles.fieldFull}>
            <label className={styles.fieldLabel}>Hero Background Image</label>
            <ImageUploader
              currentImage={data.heroImage}
              storagePath="hero/hero-banner"
              onUpload={(url) => update("heroImage", url)}
            />
          </div>
        </div>
        <div className={styles.fieldRow}>
          <div className={styles.fieldFull}>
            <label className={styles.fieldLabel}>Award Tag Text</label>
            <input className={styles.input} value={data.heroTag}
              onChange={e => update("heroTag", e.target.value)} />
          </div>
        </div>
        <div className={styles.fieldRow}>
          <div className={styles.fieldFull}>
            <label className={styles.fieldLabel}>Hero Title</label>
            <input className={styles.input} value={data.heroTitle}
              onChange={e => update("heroTitle", e.target.value)} />
          </div>
        </div>
        <div className={styles.fieldRow}>
          <div className={styles.fieldFull}>
            <label className={styles.fieldLabel}>Hero Description</label>
            <textarea className={styles.textarea} value={data.heroDesc}
              onChange={e => update("heroDesc", e.target.value)} rows={3} />
          </div>
        </div>
      </SectionCard>

      <SectionCard title="📊 Stats Strip" subtitle="Numbers shown below the hero">
        {[
          ["stat1","stat1Label"],["stat2","stat2Label"],
          ["stat3","stat3Label"],["stat4","stat4Label"],
        ].map(([num, lbl], i) => (
          <div key={i} className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Stat {i+1} Number</label>
              <input className={styles.input} value={data[num]}
                onChange={e => update(num, e.target.value)} />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Stat {i+1} Label</label>
              <input className={styles.input} value={data[lbl]}
                onChange={e => update(lbl, e.target.value)} />
            </div>
          </div>
        ))}
      </SectionCard>

      <div className={styles.saveBar}>
        <button onClick={save} className={styles.saveBtn}>
          {saved ? "✅ Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
