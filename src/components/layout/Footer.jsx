import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
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
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
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
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h3>Treatments</h3>
          <ul className={styles.linkList}>
            <li><Link href="/dental-implants">Dental Implants</Link></li>
            <li><Link href="/root-canal-treatment">Root Canal</Link></li>
            <li><Link href="/braces-and-orthodontics">Orthodontics</Link></li>
            <li><Link href="/smile-makeover">Smile Makeover</Link></li>
            <li><Link href="/teeth-whitening">Teeth Whitening</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h3>Contact Info</h3>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={20} className={styles.icon} />
              <span>C-713B, Opposite Shiksha Bharti School, Sector 7, Dwarka, New Delhi – 110077</span>
            </li>
            <li>
              <Phone size={20} className={styles.icon} />
              <a href="tel:8510007234">8510007234</a>
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
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
