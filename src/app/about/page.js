"use client";

import { ShieldCheck, Heart, CircleDollarSign, Activity, Award, Users, Smile } from "lucide-react";
import styles from "./page.module.css";

const stats = [
  { val: "15+", lbl: "Years of Trust" },
  { val: "10k+", lbl: "Happy Smiles" },
  { val: "4.9★", lbl: "Google Rating" },
  { val: "100%", lbl: "Ethical Care" }
];

const values = [
  {
    icon: <ShieldCheck size={26} />,
    title: "Class-A Sterilization",
    desc: "We prioritize patient safety by maintaining strict Class-B Autoclave sterilization protocols and disposable kits for every checkup."
  },
  {
    icon: <Heart size={26} />,
    title: "Patient-First Empathy",
    desc: "Dental anxiety is real. Our clinicians practice painless delivery methods, explanation of treatment plans, and patient comfort."
  },
  {
    icon: <CircleDollarSign size={26} />,
    title: "No Hidden Costs",
    desc: "We provide upfront, clear treatment estimates before initiating procedures. No hidden pricing, no surprise bills, only honest advice."
  },
  {
    icon: <Activity size={26} />,
    title: "Next-Gen Technology",
    desc: "From microscopic root canals and low-radiation digital X-rays to clear aligners, we employ modern dental technology."
  }
];

const doctors = [
  {
    name: "Dr. Vivek Kumar",
    specs: "Clinic Director & Chief Endodontist",
    quals: "MDS - Conservative Dentistry & Endodontics",
    bio: "Specializes in microscopic root canal treatments, complex dental retreatment, and aesthetic smile designs with over 12 years of clinical experience."
  },
  {
    name: "Dr. Nidhi Sen",
    specs: "Senior Orthodontist",
    quals: "MDS - Orthodontics & Dentofacial Orthopedics",
    bio: "Expert in invisible clear aligners, ceramic braces, and interceptive orthodontic treatments for children, focusing on balanced jaw alignment."
  }
];

export default function AboutUs() {
  return (
    <main className={styles.aboutPage}>
      <div className="container">
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>ABOUT ELITE CLINIC</span>
          <h1 className={styles.title}>Dwarka's Premier Dental Speciality Clinic</h1>
          <p className={styles.subtitle}>
            Founded on the values of clinical excellence and ethical dental practices, we are dedicated to providing world-class speciality treatments with a gentle, patient-first approach.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {stats.map((st, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statVal}>{st.val}</span>
                <span className={styles.statLbl}>{st.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>Our Core Commitments</h2>
          <div className={styles.valuesGrid}>
            {values.map((val, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>{val.icon}</div>
                <div>
                  <h3 className={styles.valueTitle}>{val.title}</h3>
                  <p className={styles.valueDesc}>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Doctors */}
        <div className={styles.doctorsSection}>
          <h2 className={styles.sectionTitle}>Meet Our Dental Specialists</h2>
          <div className={styles.doctorsGrid}>
            {doctors.map((doc, i) => (
              <div key={i} className={styles.docCard}>
                <div className={styles.docAvatarWrap}>
                  <Users size={46} color="#fff" />
                </div>
                <h3 className={styles.docName}>{doc.name}</h3>
                <span className={styles.docSpecs}>{doc.specs}</span>
                <p className={styles.docQuals}>{doc.quals}</p>
                <p className={styles.docBio}>{doc.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
