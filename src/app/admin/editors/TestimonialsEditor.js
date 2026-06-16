"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc, setDoc, deleteDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ImageUploader from "../components/ImageUploader";
import SectionCard from "../components/SectionCard";
import styles from "../admin.module.css";

const DEFAULT_PAGE_DATA = {
  heroTitle: "⭐ What Our Patients Say",
  heroSub: "Real stories. Real smiles. Real experiences. Join 5,000+ patients who transformed their smiles at Elite Speciality Clinic.",
  heroImage: "/images/testimonials-hero.png",
  stat1: "5,000+", stat1Lbl: "Happy Patients",
  stat2: "98%", stat2Lbl: "Positive Reviews",
  stat3: "1,000+", stat3Lbl: "Smile Makeovers",
  stat4: "15+", stat4Lbl: "Years Experience",
};

export default function TestimonialsEditor() {
  const [testimonials, setTestimonials] = useState([]);
  const [pageData, setPageData] = useState(DEFAULT_PAGE_DATA);
  const [loading, setLoading] = useState(true);
  const [savingPage, setSavingPage] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: "", text: "", rating: 5, treatment: "", loc: "" });

  const fetchData = async () => {
    setLoading(true);
    if (!db) { setLoading(false); return; }
    try {
      getDoc(doc(db, "siteContent", "testimonials")).then(snap => {
        if (snap.exists()) setPageData({ ...DEFAULT_PAGE_DATA, ...snap.data() });
      }).catch(console.error);
      const snap = await getDocs(collection(db, "testimonials"));
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setTestimonials(data);
    } catch (err) {
      console.error("Failed to fetch testimonials", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const savePageData = async () => {
    setSavingPage(true);
    try {
      if (db) await setDoc(doc(db, "siteContent", "testimonials"), pageData);
    } catch (e) {
      console.error(e);
    }
    setSavingPage(false);
    alert("Page Content Saved!");
  };

  const updatePage = (key, val) => setPageData(prev => ({ ...prev, [key]: val }));

  const saveTestimonial = async () => {
    if (!formData.name || !formData.text) return alert("Name and Review Text are required");
    if (!db) return alert("Firebase not configured");
    try {
      if (editingId) {
        await setDoc(doc(db, "testimonials", editingId), formData, { merge: true });
      } else {
        await addDoc(collection(db, "testimonials"), { ...formData, createdAt: serverTimestamp() });
      }
      setFormData({ name: "", text: "", rating: 5, treatment: "", loc: "" });
      setEditingId(null);
      fetchData();
    } catch (e) {
      console.error("Failed to save testimonial", e);
    }
  };

  const editTestimonial = (t) => {
    setEditingId(t.id);
    setFormData({ name: t.name || "", text: t.text || "", rating: t.rating || 5, treatment: t.treatment || "", loc: t.loc || "" });
  };

  const deleteTestimonial = async (id) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    if (!db) return;
    try {
      await deleteDoc(doc(db, "testimonials", id));
      setTestimonials(prev => prev.filter(t => t.id !== id));
    } catch (e) {
      console.error("Failed to delete testimonial", e);
    }
  };

  if (loading) return <div className={styles.editorLoading}>Loading Testimonials...</div>;

  return (
    <div className={styles.editor}>

      {/* Hero Page Content Editor */}
      <SectionCard title="🖼️ Testimonials Page Content" subtitle="Manage the Hero section and Stats of the Testimonials page">
        <div className={styles.fieldRow}>
          <div className={styles.fieldFull}>
            <label className={styles.fieldLabel}>Hero Background Image</label>
            <ImageUploader
              currentImage={pageData.heroImage}
              storagePath="hero/testimonials-hero"
              onUpload={(url) => updatePage("heroImage", url)}
            />
          </div>
        </div>
        <div className={styles.fieldRow}>
          <div className={styles.fieldFull}>
            <label className={styles.fieldLabel}>Hero Title</label>
            <input className={styles.input} value={pageData.heroTitle}
              onChange={e => updatePage("heroTitle", e.target.value)} />
          </div>
        </div>
        <div className={styles.fieldRow}>
          <div className={styles.fieldFull}>
            <label className={styles.fieldLabel}>Hero Subtitle</label>
            <textarea className={styles.textarea} value={pageData.heroSub}
              onChange={e => updatePage("heroSub", e.target.value)} rows={3} />
          </div>
        </div>

        {/* Stats */}
        <h4 style={{marginTop: "20px", marginBottom: "10px", color: "#0B1F3A"}}>Page Stats</h4>
        {[
          ["stat1","stat1Lbl"],["stat2","stat2Lbl"],
          ["stat3","stat3Lbl"],["stat4","stat4Lbl"],
        ].map(([val, lbl], i) => (
          <div key={i} className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Stat {i+1} Value</label>
              <input className={styles.input} value={pageData[val]}
                onChange={e => updatePage(val, e.target.value)} />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Stat {i+1} Label</label>
              <input className={styles.input} value={pageData[lbl]}
                onChange={e => updatePage(lbl, e.target.value)} />
            </div>
          </div>
        ))}
        
        <button onClick={savePageData} disabled={savingPage} className={styles.saveBtn} style={{ marginTop: "10px", width: "auto", padding: "10px 20px" }}>
          {savingPage ? "Saving..." : "Save Page Content"}
        </button>
      </SectionCard>


      <SectionCard title="💬 Manage Testimonials" subtitle="Add or edit manual patient reviews">
        
        <div style={{ background: "#F8FBFF", padding: "20px", borderRadius: "12px", border: "1px solid #D1E3F6", marginBottom: "20px" }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#0B1F3A" }}>{editingId ? "Edit Testimonial" : "Add New Testimonial"}</h3>
          <div className={styles.fieldRow}>
            <div className={styles.fieldFull}>
              <label className={styles.fieldLabel}>Patient Name</label>
              <input className={styles.input} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            </div>
          </div>
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Location (e.g., Dwarka)</label>
              <input className={styles.input} value={formData.loc} onChange={e => setFormData({ ...formData, loc: e.target.value })} />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Treatment Received</label>
              <input className={styles.input} value={formData.treatment} onChange={e => setFormData({ ...formData, treatment: e.target.value })} />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Rating (1-5)</label>
              <input className={styles.input} type="number" min="1" max="5" value={formData.rating} onChange={e => setFormData({ ...formData, rating: Number(e.target.value) })} />
            </div>
          </div>
          <div className={styles.fieldRow}>
            <div className={styles.fieldFull}>
              <label className={styles.fieldLabel}>Review Text</label>
              <textarea className={styles.textarea} value={formData.text} onChange={e => setFormData({ ...formData, text: e.target.value })} rows={3} />
            </div>
          </div>
          <button onClick={saveTestimonial} className={styles.saveBtn} style={{ marginTop: "10px", width: "auto", padding: "10px 20px" }}>
            {editingId ? "Update Testimonial" : "Add Testimonial"}
          </button>
          {editingId && (
            <button onClick={() => { setEditingId(null); setFormData({ name: "", text: "", rating: 5, treatment: "", loc: "" }); }} 
              style={{ marginLeft: "10px", padding: "10px 20px", background: "transparent", border: "1px solid #94A3B8", borderRadius: "8px", cursor: "pointer" }}>
              Cancel
            </button>
          )}
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          {testimonials.map(t => (
            <div key={t.id} style={{ display: "flex", justifyContent: "space-between", padding: "16px", border: "1px solid #E2E8F0", borderRadius: "8px" }}>
              <div>
                <h4 style={{ margin: "0 0 4px 0", color: "#1E293B" }}>{t.name} <span style={{ color: "#F59E0B" }}>{'★'.repeat(t.rating)}</span></h4>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#64748B" }}>{t.loc} | {t.treatment}</p>
                <p style={{ margin: "6px 0 0 0", fontSize: "0.9rem", color: "#475569", fontStyle: "italic" }}>"{t.text}"</p>
              </div>
              <div style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
                <button onClick={() => editTestimonial(t)} style={{ background: "#EFF6FF", border: "none", color: "#2563EB", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" }}>Edit</button>
                <button onClick={() => deleteTestimonial(t.id)} style={{ background: "#FEF2F2", border: "none", color: "#DC2626", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" }}>Delete</button>
              </div>
            </div>
          ))}
          {testimonials.length === 0 && <p style={{ color: "#64748B", textAlign: "center" }}>No manual testimonials found.</p>}
        </div>

      </SectionCard>
    </div>
  );
}
