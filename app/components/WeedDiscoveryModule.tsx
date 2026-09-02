import Link from "next/link";
import styles from "./WeedDiscoveryModule.module.css";

export function WeedDiscoveryModule() {
  return (
    <section className={styles.section} aria-labelledby="weed-discovery-title">
      <div className={styles.inner}>
        <p className={styles.kicker}>Open 24 Hours · Adults 19+</p>
        <h2 id="weed-discovery-title">Weed in Brampton</h2>
        <p>Blouds Dispensary is open 24 hours at <strong>117 Queen St W</strong>. Adults 19+ looking specifically for Weed in Brampton can explore flower tiers, cannabis formats and store information.</p>
        <div className={styles.actions}>
          <Link href="/weed-dispensary-brampton" className={styles.primary}>Explore Weed in Brampton</Link>
          <Link href="/resources/weed-flower-guides" className={styles.secondary}>Explore Weed &amp; Flower Guides</Link>
        </div>
      </div>
    </section>
  );
}

