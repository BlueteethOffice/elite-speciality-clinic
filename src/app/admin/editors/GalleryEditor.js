"use client";

import { useState } from "react";
import ImageUploader from "../components/ImageUploader";
import SectionCard from "../components/SectionCard";
import styles from "../admin.module.css";

const DEFAULT_IMAGES = [
  { url: "/images/treatments/Dental implant.png",        caption: "Dental Implant" },
  { url: "/images/treatments/Microscopic Root Canal.png", caption: "Root Canal" },
  { url: "/images/treatments/Invisible Braces.png",       caption: "Invisible Braces" },
  { url: "/images/treatments/Smile Makeover.png",         caption: "Smile Makeover" },
];

export default function GalleryEditor() {
  const [images, setImages] = useState(DEFAULT_IMAGES);
  const [saved, setSaved]   = useState(false);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 3000); };

  const updateImage  = (i, key, val) => { const u = [...images]; u[i] = { ...u[i], [key]: val }; setImages(u); };
  const addImage     = () => setImages(prev => [...prev, { url: "", caption: "New Image" }]);
  const removeImage  = (i) => setImages(prev => prev.filter((_, idx) => idx !== i));

  return (
    <div className={styles.editor}>
      <SectionCard title="🖼️ Gallery Images" subtitle="Manage all gallery photos">
        <div className={styles.galleryGrid}>
          {images.map((img, i) => (
            <div key={i} className={styles.galleryItem}>
              <ImageUploader
                currentImage={img.url}
                storagePath={`gallery/img${i}`}
                onUpload={(url) => updateImage(i, "url", url)}
              />
              <input className={styles.input} value={img.caption} placeholder="Caption..."
                onChange={e => updateImage(i, "caption", e.target.value)} style={{ marginTop: 8 }} />
              <button className={styles.removeBtn} onClick={() => removeImage(i)}>✕ Remove</button>
            </div>
          ))}
        </div>
        <button className={styles.addBtn} onClick={addImage}>+ Add Image</button>
      </SectionCard>

      <div className={styles.saveBar}>
        <button onClick={save} className={styles.saveBtn}>
          {saved ? "✅ Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
