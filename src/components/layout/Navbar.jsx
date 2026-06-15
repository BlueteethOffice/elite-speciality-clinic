"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarPlus, Menu, X, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";

const serviceLinks = [
  { label: "Teeth Cleaning", href: "/teeth-cleaning" },
  { label: "Fillings", href: "/fillings" },
  { label: "Extraction", href: "/extraction" },
  { label: "Wisdom Teeth Extraction", href: "/wisdom-teeth-extraction" },
  { label: "Root Canal Treatment", href: "/root-canal-treatment" },
  { label: "Microscopic Root Canal", href: "/microscopic-root-canal" },
  { label: "Tooth Colored Crown", href: "/tooth-colored-crown" },
  { label: "Metal Free Crowns", href: "/metal-free-crowns" },
  { label: "Teeth Whitening", href: "/teeth-whitening" },
  { label: "Zoom Whitening", href: "/zoom-whitening" },
  { label: "Composite Veneers", href: "/composite-veneers" },
  { label: "Emax Veneers", href: "/emax-veneers" },
  { label: "Invisible Braces", href: "/invisible-braces" },
  { label: "Braces", href: "/braces" },
  { label: "Dental Implants", href: "/implants" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = React.useRef(null);

  const openDropdown = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  if (pathname?.startsWith("/admin")) return null;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className="container">
          <span>📍 Sector 7, Dwarka, New Delhi – 110077</span>
          <span>
            <a href="tel:8510007234">📞 8510007234</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="mailto:info@elitespecialityclinic.com">✉ info@elitespecialityclinic.com</a>
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className={styles.mainNav}>
        <div className={`container ${styles.navContainer}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
            <span className={styles.logoElite}>ELITE</span>
            <span className={styles.logoClinic}>SPECIALITY CLINIC</span>
          </Link>

          {/* Desktop links */}
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>

            {/* Services Dropdown */}
            <div
              className={styles.dropdown}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <Link href="/services" className={`${styles.navLink} ${styles.dropdownTrigger}`}>
                Treatments <ChevronDown size={14} />
              </Link>
              {servicesOpen && (
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownGrid}>
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={styles.dropdownItem}
                        onClick={() => setServicesOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                  <div className={styles.dropdownFooter}>
                    <Link href="/services" className={styles.seeAllBtn}>
                      See All Treatments →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/gallery" className={styles.navLink}>Smile Gallery</Link>
            <Link href="/testimonials" className={styles.navLink}>Testimonials</Link>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
            <Link href="/about" className={styles.navLink}>About Us</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </div>

          {/* CTA */}
          <div className={styles.desktopActions}>
            <a href="tel:8510007234" className={styles.callBtn}>📞 8510007234</a>
            <Link href="/contact" className={styles.bookBtn}>
              <CalendarPlus size={16} /> Book Appointment
            </Link>
          </div>

          {/* Hamburger */}
          <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Home</Link>
          <details className={styles.mobileDropdown}>
            <summary className={styles.mobileSummary}>Treatments</summary>
            <div className={styles.mobileSubLinks}>
              {serviceLinks.map((s) => (
                <Link key={s.href} href={s.href} className={styles.mobileSubLink} onClick={() => setMobileOpen(false)}>
                  {s.label}
                </Link>
              ))}
              <Link href="/services" className={styles.mobileSubLink} onClick={() => setMobileOpen(false)}>
                → See All Treatments
              </Link>
            </div>
          </details>
          <Link href="/gallery" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Smile Gallery</Link>
          <Link href="/testimonials" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Testimonials</Link>
          <Link href="/blog" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/about" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/contact" className={styles.mobileBook} onClick={() => setMobileOpen(false)}>
            <CalendarPlus size={16} /> Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}
