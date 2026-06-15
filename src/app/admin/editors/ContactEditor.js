"use client";

import { useState } from "react";
import ImageUploader from "../components/ImageUploader";
import SectionCard from "../components/SectionCard";
import styles from "../admin.module.css";

const DEFAULT = {
  heroImage: "/images/contact-hero.png",
  phone: "+91 85100 07234",
  email: "info@elitespecialityclinic.com",
  address: "Dwarka Sector 12, New Delhi – 110075",
  hours: "Mon–Sat: 10 AM – 8 PM",
  tour1: "/images/treatments/Dental implant.png",
  tour2: "/images/treatments/Microscopic Root Canal.png",
  tour3: "/images/treatments/Invisible Braces.png",
  tour4: "/images/treatments/Emax Veneers.png",
};

export default function ContactEditor() {
  const [data, setData]   = useState(DEFAULT);
  const [saved, setSaved] = useState(false);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 3000); };
  const update = (key, val) => setData(prev => ({ ...prev, [key]: val }));

  return (
    <div className={styles.editor}>

      <SectionCard title="🖼️ Hero Image" subtitle="Contact page main banner">
        <ImageUploader
          currentImage={data.heroImage}
          storagePath="contact/hero"
          onUpload={(url) => update("heroImage", url)}
        />
      </SectionCard>

      <SectionCard title="📍 Clinic Info" subtitle="Address, phone, email, hours">
        {[
          ["phone",   "Phone Number"],
          ["email",   "Email Address"],
          ["address", "Clinic Address"],
          ["hours",   "Working Hours"],
        ].map(([key, label]) => (
          <div key={key} className={styles.fieldRow}>
            <div className={styles.fieldFull}>
              <label className={styles.fieldLabel}>{label}</label>
              <input className={styles.input} value={data[key]}
                onChange={e => update(key, e.target.value)} />
            </div>
          </div>
        ))}
      </SectionCard>

      <SectionCard title="📸 Clinic Tour Images" subtitle="4 images shown in the tour grid">
        <div className={styles.tourGrid}>
          {["tour1","tour2","tour3","tour4"].map((key, i) => (
            <div key={key} className={styles.tourItem}>
              <label className={styles.fieldLabel}>Tour Image {i+1}</label>
              <ImageUploader
                currentImage={data[key]}
                storagePath={`contact/tour${i+1}`}
                onUpload={(url) => update(key, url)}
              />
            </div>
          ))}
        </div>
      </SectionCard>

      <div className={styles.saveBar}>
        <button onClick={save} className={styles.saveBtn}>
          {saved ? "✅ Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
