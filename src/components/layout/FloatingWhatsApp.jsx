"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  const phoneNumber = "918510007234";
  const message = encodeURIComponent("Hello, I would like to book an appointment with Elite Speciality Clinic.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.floatingBtn}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className={styles.tooltip}>Chat with us</span>
    </a>
  );
}
