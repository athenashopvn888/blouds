import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./contact.module.css";
import { SITE_ORIGIN, gbpLocation } from "../lib/gbp-location";

export const metadata: Metadata = {
  title: { absolute: `Contact ${gbpLocation.storeName} | ${gbpLocation.streetAddress}, ${gbpLocation.city}` },
  description:
    `Visit ${gbpLocation.storeName} at ${gbpLocation.address}. ${gbpLocation.hoursDisplay} a day, 7 days a week. Call ${gbpLocation.phone}. Walk-ins welcome.`,
  alternates: {
    canonical: `${SITE_ORIGIN}/contact`,
  },
  openGraph: {
    title: `Contact ${gbpLocation.storeName} — Brampton Dispensary`,
    description:
      `${gbpLocation.streetAddress}, ${gbpLocation.city}. ${gbpLocation.hoursDisplay} a day, 7 days a week. Call ${gbpLocation.phone}.`,
    url: `${SITE_ORIGIN}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero} style={{ paddingTop: "92px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <img src="/banners/Blouds_Contact_Us.webp" alt={`Contact ${gbpLocation.storeName} at ${gbpLocation.streetAddress}, ${gbpLocation.city}`} style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-lg)" }} />
        </div>
      </section>

      {/* Info Cards */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>PIN</div>
              <h2 className={styles.infoTitle}>Location</h2>
              <p className={styles.infoText}>
                {gbpLocation.streetAddress}
                <br />
                {gbpLocation.city}, {gbpLocation.province} {gbpLocation.postalCode}
                <br />
                <span className={styles.infoMuted}>Queen Street W, Brampton</span>
              </p>
            </div>

            {/* Phone */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>CALL</div>
              <h2 className={styles.infoTitle}>Phone</h2>
              <p className={styles.infoText}>
                <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a>
                <br />
                <span className={styles.infoMuted}>Call before a special trip</span>
              </p>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>24H</div>
              <h2 className={styles.infoTitle}>Hours</h2>
              <div className={styles.hoursTable}>
                <div className={styles.hoursRow}>
                  <span>Monday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Tuesday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Wednesday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Thursday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Friday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Saturday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Sunday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
              </div>
              <div className={styles.openBadge}>
                <span className={styles.openDot}></span>
                Open 24/7 - Never Closed
              </div>
            </div>

            {/* Walk-in */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>VISIT</div>
              <h2 className={styles.infoTitle}>Walk In</h2>
              <p className={styles.infoText}>
                No appointment needed.
                <br />
                Just walk in and our staff will
                <br />
                help you find the perfect strain.
              </p>
              <p className={styles.infoText}>
                <Link href="/visit">Queen Street West walk-in guide</Link>
                {" · "}
                <Link href="/brampton-walk-in-checklist">Brampton walk-in checklist</Link>
                {" · "}
                <Link href="/dispensary-brampton">Brampton dispensary near me</Link>
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>{"\u2713"}</span>
                  Browse current flower tiers
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>{"\u2713"}</span>
                  Current menu details
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>{"\u2713"}</span>
                  Knowledgeable budtenders
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>{"\u2713"}</span>
                  Debit &amp; cash accepted
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
