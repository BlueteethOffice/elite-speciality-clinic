"use client";

import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerCol}>
          <div className={styles.logo}>
            <span className={styles.logoElite}>ELITE</span>
            <span className={styles.logoClinic}>SPECIALITY CLINIC</span>
          </div>
          <p className={styles.aboutText}>
            Dwarka's premier destination for advanced dental treatments and smile design. Experience painless, ethical care delivered by MDS specialists.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/elitespecialityclinic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/elitespecialityclinic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a
              href="https://wa.me/918510007234"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h3>Quick Links</h3>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Treatments</Link></li>
            <li><Link href="/gallery">Smile Gallery</Link></li>
            <li><Link href="/testimonials">Patient Reviews</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h3>Treatments</h3>
          <ul className={styles.linkList}>
            <li><Link href="/dental-implants">Dental Implants</Link></li>
            <li><Link href="/root-canal-treatment">Root Canal</Link></li>
            <li><Link href="/microscopic-root-canal">Microscopic RCT</Link></li>
            <li><Link href="/braces-and-orthodontics">Orthodontics</Link></li>
            <li><Link href="/smile-makeover">Smile Makeover</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h3>Contact Info</h3>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={20} className={styles.icon} />
              <a
                href="https://www.google.com/maps/search/Elite+Speciality+Clinic+Sector+7+Dwarka+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
              >
                C-713B, Opp. Shiksha Bharti School, Sector 7, Dwarka, New Delhi – 110077
              </a>
            </li>
            <li>
              <Phone size={20} className={styles.icon} />
              <a href="tel:8510007234">85100 07234</a>
            </li>
            <li>
              <Mail size={20} className={styles.icon} />
              <a href="mailto:info@elitespecialityclinic.com">info@elitespecialityclinic.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomBarContent}`}>
          <p>&copy; {new Date().getFullYear()} Elite Speciality Clinic. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJp_gfMUbjDDkRGTSe_BYhlzY"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⭐ Google Reviews
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
