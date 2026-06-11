"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import styles from "./page.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      await addDoc(collection(db, "appointments"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "new"
      });
      
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting appointment:", error);
      setStatus("error");
      setErrorMsg("Failed to book appointment. Please try calling us instead.");
    }
  };

  return (
    <main className={styles.contactPage}>
      <div className="container">
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>GET IN TOUCH</span>
          <h1 className={styles.title}>Contact & Book Appointment</h1>
          <p className={styles.subtitle}>
            Book an appointment online, call us for clinical emergencies, or visit our clinic in Dwarka, New Delhi.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Clinic Information */}
          <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <div className={styles.iconWrap}><Phone size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Phone</h3>
                <p>Call us for emergencies or appointments</p>
                <a href="tel:8510007234">+91 85100 07234</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrap}><Mail size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Email</h3>
                <p>Drop us a line anytime</p>
                <a href="mailto:info@elitespecialityclinic.com">info@elitespecialityclinic.com</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrap}><MapPin size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Location</h3>
                <p>Elite Speciality Clinic</p>
                <p>Dwarka Sector 12, New Delhi, India</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrap}><Clock size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Working Hours</h3>
                <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                <p>Sunday: By Appointment Only</p>
              </div>
            </div>

            {/* Google Map */}
            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.26915151525!2d77.03923057613144!3d28.59173097562624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad77a72d3e1%3A0xe54e3cb48bf5b273!2sDwarka%20Sector%2012%20Metro%20Station!5e0!3m2!1sen!2sin!4v1718100000000!5m2!1sen!2sin" 
                width="100%" 
                height="220" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className={styles.mapNote}>
              📍 Located near Dwarka Sector 12 Metro Station — Easy access & free parking available.
            </p>
          </div>

          {/* Booking Form */}
          <div className={styles.formSection}>
            <h2>Book an Appointment</h2>
            
            {status === "success" && (
              <div className={styles.successMessage}>
                Thank you! Your appointment request has been submitted successfully. We will call you shortly to confirm your slot.
              </div>
            )}

            {status === "error" && (
              <div className={styles.errorMessage}>
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Full Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className={styles.input} placeholder="John Doe" />
              </div>

              <div className={styles.formGroup}>
                <label>Mobile Number *</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={styles.input} placeholder="+91 98765 43210" />
              </div>

              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} placeholder="john@example.com" />
              </div>

              <div className={styles.formGroup}>
                <label>Service Required</label>
                <select name="service" value={formData.service} onChange={handleChange} className={styles.select}>
                  <option value="">Select a service</option>
                  <option value="General Checkup">General Checkup</option>
                  <option value="Teeth Cleaning">Teeth Cleaning</option>
                  <option value="Fillings">Fillings</option>
                  <option value="Extraction">Extraction</option>
                  <option value="Wisdom Teeth Extraction">Wisdom Teeth Extraction</option>
                  <option value="Root Canal Treatment">Root Canal Treatment</option>
                  <option value="Microscopic Root Canal Treatment">Microscopic Root Canal Treatment</option>
                  <option value="Tooth Colored Crown">Tooth Colored Crown</option>
                  <option value="Metal Free Crowns">Metal Free Crowns</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                  <option value="Zoom Whitening">Zoom Whitening</option>
                  <option value="Composite Veneers">Composite Veneers</option>
                  <option value="Emax Veneers">Emax Veneers</option>
                  <option value="Invisible Braces">Invisible Braces</option>
                  <option value="Braces">Braces</option>
                  <option value="Implants">Implants</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Preferred Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className={styles.input} />
              </div>

              <div className={styles.formGroup}>
                <label>Message (Optional)</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className={styles.textarea} placeholder="Any specific dental issues or questions?"></textarea>
              </div>

              <button type="submit" disabled={status === "submitting"} className={styles.submitBtn}>
                {status === "submitting" ? "Submitting Request..." : "Request Appointment"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
