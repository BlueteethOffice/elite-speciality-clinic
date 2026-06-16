"use client";

import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ImageUploader from "../components/ImageUploader";
import SectionCard from "../components/SectionCard";
import styles from "../admin.module.css";

const DEFAULT = {
  heroTitle: "About Our Dental Clinic",
  heroSub: "Creating healthy, confident smiles through advanced dentistry and compassionate care. Trusted by 5,000+ patients across Delhi NCR.",
  heroImage: "/images/hero-dental.png",
  mission: "To provide ethical, advanced, and affordable dental care that transforms smiles and builds lifelong patient relationships — one visit at a time.",
  vision: "To become the most trusted smile destination in Delhi NCR — known for clinical excellence, patient trust, and transformative dental experiences.",
  stat1: "5,000+", stat1Lbl: "Happy Patients",
  stat2: "15+", stat2Lbl: "Years Experience",
  stat3: "1,000+", stat3Lbl: "Smile Makeovers",
  stat4: "4.9★", stat4Lbl: "Google Rating",
};

export default function AboutEditor() {
  const [data, setData]       = useState(DEFAULT);
  const [saving, setSaving]   = useState(false);
  const [saved, setSaved]     = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!db) { setLoading(false); return; }
    try {
      const timer = setTimeout(() => setLoading(false), 500);
      getDoc(doc(db, "siteContent", "about")).then(snap => {
        clearTimeout(timer);
        if (snap.exists()) setData({ ...DEFAULT, ...snap.data() });
        setLoading(false);
      }).catch(() => setLoading(false));
      return () => clearTimeout(timer);
    } catch {
      setLoading(false);
    }
  }, []);

  const save = async () => {
    setSaving(true);
    try {
      if (db) await setDoc(doc(db, "siteContent", "about"), data);
    } catch (e) {
      console.error(e);
    }
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const update = (key, val) => setData(prev => ({ ...prev, [key]: val }));

  if (loading) return <div className={styles.editorLoading}>Loading...</div>;

  return (
    <div className={styles.editor}>

      <SectionCard title="🏢 Hero Section" subtitle="About Us page main image, title, and subtitle">
        <div className={styles.fieldRow}>
          <div className={styles.fieldFull}>
            <label className={styles.fieldLabel}>Hero Image</label>
            <ImageUploader
              currentImage={data.heroImage}
              storagePath="hero/about-hero"
              onUpload={(url) => update("heroImage", url)}
            />
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
            <label className={styles.fieldLabel}>Hero Subtitle</label>
            <textarea className={styles.textarea} value={data.heroSub}
              onChange={e => update("heroSub", e.target.value)} rows={3} />
          </div>
        </div>
      </SectionCard>

      <SectionCard title="📊 Stats Strip" subtitle="Numbers shown on the About page">
        {[
          ["stat1","stat1Lbl"],["stat2","stat2Lbl"],
          ["stat3","stat3Lbl"],["stat4","stat4Lbl"],
        ].map(([val, lbl], i) => (
          <div key={i} className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Stat {i+1} Value</label>
              <input className={styles.input} value={data[val]}
                onChange={e => update(val, e.target.value)} />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Stat {i+1} Label</label>
              <input className={styles.input} value={data[lbl]}
                onChange={e => update(lbl, e.target.value)} />
            </div>
          </div>
        ))}
      </SectionCard>

      <SectionCard title="🎯 Mission & Vision" subtitle="Our core values">
        <div className={styles.fieldRow}>
          <div className={styles.fieldFull}>
            <label className={styles.fieldLabel}>Our Mission</label>
            <textarea className={styles.textarea} value={data.mission}
              onChange={e => update("mission", e.target.value)} rows={3} />
          </div>
        </div>
        <div className={styles.fieldRow}>
          <div className={styles.fieldFull}>
            <label className={styles.fieldLabel}>Our Vision</label>
            <textarea className={styles.textarea} value={data.vision}
              onChange={e => update("vision", e.target.value)} rows={3} />
          </div>
        </div>
      </SectionCard>

      <div className={styles.saveBar}>
        <button onClick={save} disabled={saving} className={styles.saveBtn}>
          {saving ? "Saving..." : saved ? "✅ Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
