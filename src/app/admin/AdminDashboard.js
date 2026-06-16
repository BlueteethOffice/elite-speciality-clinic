"use client";

import { useState } from "react";
import styles from "./admin.module.css";
import HomeEditor from "./editors/HomeEditor";
import ContactEditor from "./editors/ContactEditor";
import ServicesEditor from "./editors/ServicesEditor";
import GalleryEditor from "./editors/GalleryEditor";
import AppointmentsEditor from "./editors/AppointmentsEditor";
import AboutEditor from "./editors/AboutEditor";
import BlogEditor from "./editors/BlogEditor";
import TestimonialsEditor from "./editors/TestimonialsEditor";

const PAGES = [
  { id: "home",         label: "🏠 Home Page",     icon: "🏠" },
  { id: "about",        label: "🏢 About Us",      icon: "🏢" },
  { id: "services",     label: "🦷 Services Page",  icon: "🦷" },
  { id: "gallery",      label: "🖼️ Gallery Page",   icon: "🖼️" },
  { id: "blog",         label: "✍️ Blogs",         icon: "✍️" },
  { id: "testimonials", label: "💬 Testimonials",  icon: "💬" },
  { id: "contact",      label: "📞 Contact Page",   icon: "📞" },
  { id: "appointments", label: "📅 Appointments",   icon: "📅" },
];

export default function AdminDashboard({ user, onLogout }) {
  const [activePage, setActivePage] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavClick = (id) => {
    setActivePage(id);
    setSidebarOpen(false);
  };

  const renderEditor = () => {
    switch (activePage) {
      case "home":         return <HomeEditor />;
      case "about":        return <AboutEditor />;
      case "services":     return <ServicesEditor />;
      case "gallery":      return <GalleryEditor />;
      case "blog":         return <BlogEditor />;
      case "testimonials": return <TestimonialsEditor />;
      case "contact":      return <ContactEditor />;
      case "appointments": return <AppointmentsEditor />;
      default:             return <HomeEditor />;
    }
  };

  return (
    <div className={styles.dashboard}>
      {/* Mobile backdrop */}
      <div
        className={`${styles.sidebarBackdrop} ${sidebarOpen ? styles.sidebarBackdropVisible : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
        <div className={styles.sidebarHeader}>
          <img src="/images/admin-logo.png" alt="Elite Clinic Logo" className={styles.sidebarLogoImg} />
          <div>
            <p className={styles.sidebarTitle}>Admin Panel</p>
            <p className={styles.sidebarSub}>Elite Clinic</p>
          </div>
        </div>

        <nav className={styles.sidebarNav}>
          <p className={styles.navLabel}>PAGES</p>
          {PAGES.map(p => (
            <button
              key={p.id}
              onClick={() => handleNavClick(p.id)}
              className={`${styles.navItem} ${activePage === p.id ? styles.navItemActive : ""}`}
            >
              <span>{p.icon}</span>
              <span>{p.label.replace(/^.+?\s/, "")}</span>
            </button>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <p className={styles.adminEmail}>{user.email}</p>
          <button onClick={onLogout} className={styles.logoutBtn}>Sign Out</button>
        </div>
      </aside>

      {/* Main */}
      <main className={styles.main}>
        {/* Mobile top bar */}
        <div className={styles.mobileTopBar}>
          <span className={styles.mobileTopBarTitle}>
            {PAGES.find(p => p.id === activePage)?.label}
          </span>
          <button className={styles.mobileHamburger} onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            ☰
          </button>
        </div>

        <div className={styles.mainHeader}>
          <h1 className={styles.mainTitle}>
            {PAGES.find(p => p.id === activePage)?.label}
          </h1>
          <span className={styles.mainBadge}>Content Manager</span>
        </div>
        <div className={styles.mainContent}>
          {renderEditor()}
        </div>
      </main>
    </div>
  );
}
