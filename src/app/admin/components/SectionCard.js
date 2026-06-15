import styles from "../admin.module.css";

export default function SectionCard({ title, subtitle, children }) {
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionCardHeader}>
        <h3 className={styles.sectionCardTitle}>{title}</h3>
        {subtitle && <p className={styles.sectionCardSub}>{subtitle}</p>}
      </div>
      <div className={styles.sectionCardBody}>
        {children}
      </div>
    </div>
  );
}
