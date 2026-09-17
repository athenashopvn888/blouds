import Link from "next/link";
import styles from "./WeedDiscoveryModule.module.css";

export function WeedDiscoveryModule() {
  return (
    <section className={styles.section} aria-labelledby="weed-discovery-title">
      <div className={styles.inner}>
        <p className={styles.kicker}>Open 24 Hours · Adults 19+</p>
        <h2 id="weed-discovery-title">Weed in Brampton</h2>
        <p>Blouds Dispensary is open 24 hours at <strong>117 Queen St W, Brampton, ON L6Y 1M3</strong>. Call <a href="tel:+14373715377"><strong>+1 (437) 371-5377</strong></a>. Adults 19+ looking specifically for Weed in Brampton can explore flower tiers, cannabis formats and store information.</p>
        <div className={styles.actions}>
          <Link href="/weed-dispensary-brampton" className={styles.primary}>Explore Weed in Brampton</Link>
          <Link href="/resources/weed-flower-guides" className={styles.secondary}>Explore Weed &amp; Flower Guides</Link>
        </div>
      </div>
    </section>
  );
}

