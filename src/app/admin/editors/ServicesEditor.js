"use client";

import { useState } from "react";
import ImageUploader from "../components/ImageUploader";
import SectionCard from "../components/SectionCard";
import styles from "../admin.module.css";

const DEFAULT_SERVICES = [
  { title: "Dental Implants",      icon: "/icons/dental-implant.png",      image: "/images/treatments/Dental implant.png" },
  { title: "Root Canal Treatment", icon: "/icons/Root canals.png",          image: "/images/treatments/Root Canal Treatment.png" },
  { title: "Invisible Braces",     icon: "/icons/Invisible Braces.png",     image: "/images/treatments/Invisible Braces.png" },
  { title: "Teeth Whitening",      icon: "/icons/teeth-whitening.png",      image: "/images/treatments/Teeth whitening.png" },
  { title: "Emax Veneers",         icon: "/icons/Emax Veneers.png",         image: "/images/treatments/Emax Veneers.png" },
  { title: "Metal Free Crowns",    icon: "/icons/Metal Free Crowns.png",    image: "/images/treatments/Metal Free Crowns.png" },
  { title: "Composite Veneers",    icon: "/icons/omposite Veneers.png",     image: "/images/treatments/Composite Veneers.png" },
  { title: "Teeth Cleaning",       icon: "/icons/teeth Cleaning (2).png",   image: "/images/treatments/Teeth Cleaning.png" },
];

const PER_PAGE = 2;

export default function ServicesEditor() {
  const [services, setServices] = useState(DEFAULT_SERVICES);
  const [saved, setSaved]       = useState(false);
  const [page, setPage]         = useState(0);

  const totalPages = Math.ceil(services.length / PER_PAGE);
  const paginated  = services.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 3000); };

  const updateService = (i, key, val) => {
    const globalIndex = page * PER_PAGE + i;
    const updated = [...services];
    updated[globalIndex] = { ...updated[globalIndex], [key]: val };
    setServices(updated);
  };

  return (
    <div className={styles.editor}>
      {paginated.map((svc, i) => (
        <SectionCard key={page * PER_PAGE + i} title={`🦷 ${svc.title}`} subtitle={`Service card ${page * PER_PAGE + i + 1} of ${services.length}`}>
          <div className={styles.fieldRow}>
            <div className={styles.fieldFull}>
              <label className={styles.fieldLabel}>Service Name</label>
              <input className={styles.input} value={svc.title}
                onChange={e => updateService(i, "title", e.target.value)} />
            </div>
          </div>
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Icon Image</label>
              <ImageUploader
                currentImage={svc.icon}
                storagePath={`services/icon${page * PER_PAGE + i}`}
                onUpload={(url) => updateService(i, "icon", url)}
                small
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Treatment Image</label>
              <ImageUploader
                currentImage={svc.image}
                storagePath={`services/image${page * PER_PAGE + i}`}
                onUpload={(url) => updateService(i, "image", url)}
              />
            </div>
          </div>
        </SectionCard>
      ))}

      <div className={styles.pagination}>
        <button className={styles.pageBtn} onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}>← Prev</button>
        <div className={styles.pageNums}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} className={`${styles.pageNum} ${page === i ? styles.pageNumActive : ""}`} onClick={() => setPage(i)}>{i + 1}</button>
          ))}
        </div>
        <button className={styles.pageBtn} onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1}>Next →</button>
      </div>

      <div className={styles.saveBar}>
        <button onClick={save} className={styles.saveBtn}>
          {saved ? "✅ Saved!" : "Save All Changes"}
        </button>
      </div>
    </div>
  );
}
