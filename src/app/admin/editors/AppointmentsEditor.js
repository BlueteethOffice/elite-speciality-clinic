"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import styles from "../admin.module.css";
import SectionCard from "../components/SectionCard";

export default function AppointmentsEditor() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    setLoading(true);
    if (!db) { setLoading(false); return; }
    try {
      const q = query(collection(db, "appointments"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAppointments(data);
    } catch (err) {
      console.error("Failed to fetch appointments", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const updateStatus = async (id, newStatus) => {
    if (!db) return;
    try {
      await updateDoc(doc(db, "appointments", id), { status: newStatus });
      setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const deleteAppointment = async (id) => {
    if (!confirm("Are you sure you want to delete this appointment?")) return;
    if (!db) return;
    try {
      await deleteDoc(doc(db, "appointments", id));
      setAppointments(prev => prev.filter(a => a.id !== id));
    } catch (err) {
      console.error("Failed to delete appointment", err);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "Unknown";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit"
    });
  };

  if (loading) return <div className={styles.editorLoading}>Loading Appointments...</div>;

  return (
    <div className={styles.editor}>
      <SectionCard title="📅 Appointment Requests" subtitle="Manage patient appointments booked from the website.">
        
        {appointments.length === 0 ? (
          <p style={{ textAlign: "center", padding: "20px", color: "#64748B" }}>No appointments found.</p>
        ) : (
          <div className={styles.appointmentsGrid} style={{ display: "grid", gap: "16px" }}>
            {appointments.map((apt) => (
              <div key={apt.id} style={{
                background: "#F8FBFF", border: "1.5px solid #D1E3F6", borderRadius: "12px", padding: "16px",
                display: "flex", flexDirection: "column", gap: "10px"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#0B1F3A", margin: "0 0 4px 0" }}>{apt.name}</h3>
                    <p style={{ fontSize: "0.85rem", color: "#64748B", margin: 0 }}>
                      Received: {formatDate(apt.createdAt)}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <select
                      value={apt.status || "new"}
                      onChange={(e) => updateStatus(apt.id, e.target.value)}
                      style={{
                        padding: "6px 12px", borderRadius: "50px", fontSize: "0.8rem", fontWeight: "700",
                        border: "1px solid", outline: "none", cursor: "pointer",
                        background: apt.status === "completed" ? "#ECFDF5" : apt.status === "contacted" ? "#EFF6FF" : "#FEF2F2",
                        color: apt.status === "completed" ? "#059669" : apt.status === "contacted" ? "#2563EB" : "#DC2626",
                        borderColor: apt.status === "completed" ? "#6EE7B7" : apt.status === "contacted" ? "#93C5FD" : "#FCA5A5"
                      }}
                    >
                      <option value="new">🆕 New</option>
                      <option value="contacted">📞 Contacted</option>
                      <option value="completed">✅ Completed</option>
                    </select>
                    <button onClick={() => deleteAppointment(apt.id)} className={styles.removeBtn} title="Delete">
                      🗑️
                    </button>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginTop: "8px" }}>
                  <div>
                    <p style={{ fontSize: "0.75rem", fontWeight: "700", color: "#94A3B8", textTransform: "uppercase", margin: "0 0 2px 0" }}>Contact</p>
                    <p style={{ fontSize: "0.9rem", color: "#1E293B", margin: 0, fontWeight: "600" }}>{apt.phone}</p>
                    {apt.email && <p style={{ fontSize: "0.85rem", color: "#64748B", margin: 0 }}>{apt.email}</p>}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.75rem", fontWeight: "700", color: "#94A3B8", textTransform: "uppercase", margin: "0 0 2px 0" }}>Treatment & Date</p>
                    <p style={{ fontSize: "0.9rem", color: "#1E293B", margin: 0, fontWeight: "600" }}>{apt.service || "Not specified"}</p>
                    <p style={{ fontSize: "0.85rem", color: "#0EA5E9", margin: 0, fontWeight: "600" }}>{apt.date || "Any Date"}</p>
                  </div>
                </div>

                {apt.message && (
                  <div style={{ background: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #E2E8F0", marginTop: "4px" }}>
                    <p style={{ fontSize: "0.75rem", fontWeight: "700", color: "#94A3B8", textTransform: "uppercase", margin: "0 0 4px 0" }}>Message</p>
                    <p style={{ fontSize: "0.9rem", color: "#475569", margin: 0 }}>"{apt.message}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </SectionCard>
    </div>
  );
}
