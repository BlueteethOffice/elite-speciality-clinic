"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQAccordion.module.css";

export default function FAQAccordion({ faqs, categoryColor }) {
  const [open, setOpen] = useState(0);

  return (
    <div className={styles.list}>
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`${styles.item} ${isOpen ? styles.active : ""}`}
            style={{
              borderColor: isOpen ? categoryColor : undefined,
              boxShadow: isOpen ? `0 8px 24px ${categoryColor}15` : undefined
            }}
          >
            <button
              className={styles.question}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <div 
                className={styles.qNumBox} 
                style={{ 
                  color: categoryColor, 
                  backgroundColor: categoryColor + "15" 
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <span className={styles.qText}>{faq.q}</span>
              <div className={`${styles.chevronBox} ${isOpen ? styles.chevronOpen : ""}`}>
                <ChevronDown size={18} className={styles.chevron} />
              </div>
            </button>
            <div 
              className={styles.answerWrapper}
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className={styles.answerInner}>
                <div className={styles.answer}>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
