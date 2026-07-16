import Link from "next/link";
import styles from "./HiringCallout.module.css";

export default function HiringCallout() {
  return (
    <section aria-label="Blouds Dispensary hiring" className={styles.section}>
      <div className={styles.callout}>
        <div>
          <span className={styles.eyebrow}>
            Budtenders / Managers Wanted
          </span>
          <h2 className={styles.heading}>
            Join Blouds
          </h2>
          <p className={styles.copy}>
            Queen Street needs sharp, friendly people who can handle busy customer flow and keep the vibe clean. Online applications only. Please do not call the store about hiring.
          </p>
        </div>
        <Link
          href="/careers/budtender"
          className={styles.apply}
        >
          Apply Online
        </Link>
      </div>
    </section>
  );
}
