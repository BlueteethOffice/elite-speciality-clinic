"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc, setDoc, deleteDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ImageUploader from "../components/ImageUploader";
import SectionCard from "../components/SectionCard";
import styles from "../admin.module.css";

const DEFAULT_PAGE_DATA = {
  heroTitle: "Dental Health Insights & Expert Tips",
  heroSub: "Learn about oral health, treatments, smile makeovers, and preventive care from our dental experts.",
  heroImage: "/images/blog-hero.png"
};

export default function BlogEditor() {
  const [blogs, setBlogs] = useState([]);
  const [pageData, setPageData] = useState(DEFAULT_PAGE_DATA);
  const [loading, setLoading] = useState(true);
  const [savingPage, setSavingPage] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: "", content: "", author: "Admin", date: "", img: "" });

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch Page Data
      const timer = setTimeout(() => {}, 500); // Ignore offline timeout issues
      getDoc(doc(db, "siteContent", "blog")).then(snap => {
        if (snap.exists()) setPageData({ ...DEFAULT_PAGE_DATA, ...snap.data() });
      }).catch(console.error);

      // Fetch Blogs Collection
      const snap = await getDocs(collection(db, "blogs"));
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setBlogs(data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const savePageData = async () => {
    setSavingPage(true);
    try {
      await setDoc(doc(db, "siteContent", "blog"), pageData);
    } catch (e) {
      console.error(e);
    }
    setSavingPage(false);
    alert("Page Content Saved!");
  };

  const updatePage = (key, val) => setPageData(prev => ({ ...prev, [key]: val }));

  const saveBlog = async () => {
    if (!formData.title || !formData.content) return alert("Title and Content are required");
    try {
      if (editingId) {
        await setDoc(doc(db, "blogs", editingId), formData, { merge: true });
      } else {
        await addDoc(collection(db, "blogs"), { ...formData, createdAt: serverTimestamp() });
      }
      setFormData({ title: "", content: "", author: "Admin", date: "", img: "" });
      setEditingId(null);
      fetchData();
    } catch (e) {
      console.error("Failed to save blog", e);
    }
  };

  const editBlog = (b) => {
    setEditingId(b.id);
    setFormData({ title: b.title || "", content: b.content || "", author: b.author || "Admin", date: b.date || "", img: b.img || "" });
  };

  const deleteBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    try {
      await deleteDoc(doc(db, "blogs", id));
      setBlogs(prev => prev.filter(b => b.id !== id));
    } catch (e) {
      console.error("Failed to delete blog", e);
    }
  };

  if (loading) return <div className={styles.editorLoading}>Loading Blogs...</div>;

  return (
    <div className={styles.editor}>

      {/* Hero Page Content Editor */}
      <SectionCard title="🖼️ Blog Page Content" subtitle="Manage the Hero section of the Blog page">
        <div className={styles.fieldRow}>
          <div className={styles.fieldFull}>
            <label className={styles.fieldLabel}>Hero Background Image</label>
            <ImageUploader
              currentImage={pageData.heroImage}
              storagePath="hero/blog-hero"
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
        <button onClick={savePageData} disabled={savingPage} className={styles.saveBtn} style={{ marginTop: "10px", width: "auto", padding: "10px 20px" }}>
          {savingPage ? "Saving..." : "Save Page Content"}
        </button>
      </SectionCard>


      <SectionCard title="✍️ Manage Blogs" subtitle="Add, edit, or delete blog posts">
        
        <div style={{ background: "#F8FBFF", padding: "20px", borderRadius: "12px", border: "1px solid #D1E3F6", marginBottom: "20px" }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#0B1F3A" }}>{editingId ? "Edit Blog" : "Add New Blog"}</h3>
          
          <div className={styles.fieldRow}>
            <div className={styles.fieldFull}>
              <label className={styles.fieldLabel}>Blog Image</label>
              <ImageUploader
                currentImage={formData.img}
                storagePath={`blogs/${editingId || 'new'}`}
                onUpload={(url) => setFormData(prev => ({ ...prev, img: url }))}
              />
            </div>
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.fieldFull}>
              <label className={styles.fieldLabel}>Blog Title</label>
              <input className={styles.input} value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
            </div>
          </div>
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Author</label>
              <input className={styles.input} value={formData.author} onChange={e => setFormData({ ...formData, author: e.target.value })} />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Date (e.g. Oct 15, 2023)</label>
              <input className={styles.input} value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
            </div>
          </div>
          <div className={styles.fieldRow}>
            <div className={styles.fieldFull}>
              <label className={styles.fieldLabel}>Content</label>
              <textarea className={styles.textarea} value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })} rows={5} />
            </div>
          </div>
          <button onClick={saveBlog} className={styles.saveBtn} style={{ marginTop: "10px", width: "auto", padding: "10px 20px" }}>
            {editingId ? "Update Blog" : "Add Blog"}
          </button>
          {editingId && (
            <button onClick={() => { setEditingId(null); setFormData({ title: "", content: "", author: "Admin", date: "", img: "" }); }} 
              style={{ marginLeft: "10px", padding: "10px 20px", background: "transparent", border: "1px solid #94A3B8", borderRadius: "8px", cursor: "pointer" }}>
              Cancel
            </button>
          )}
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          {blogs.map(b => (
            <div key={b.id} style={{ display: "flex", justifyContent: "space-between", padding: "16px", border: "1px solid #E2E8F0", borderRadius: "8px" }}>
              <div>
                <h4 style={{ margin: "0 0 4px 0", color: "#1E293B" }}>{b.title}</h4>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#64748B" }}>By {b.author} | {b.date}</p>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button onClick={() => editBlog(b)} style={{ background: "#EFF6FF", border: "none", color: "#2563EB", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" }}>Edit</button>
                <button onClick={() => deleteBlog(b.id)} style={{ background: "#FEF2F2", border: "none", color: "#DC2626", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" }}>Delete</button>
              </div>
            </div>
          ))}
          {blogs.length === 0 && <p style={{ color: "#64748B", textAlign: "center" }}>No blogs found.</p>}
        </div>

      </SectionCard>
    </div>
  );
}
