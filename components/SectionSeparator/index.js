import styles from "./SectionSeparator.module.css";

export const SectionSeparator = ({ sectionHeading }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeading}>{sectionHeading}</div>
      <div className={styles.sectionSeparator}></div>
    </div>
  );
};
