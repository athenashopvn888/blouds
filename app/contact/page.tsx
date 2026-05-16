import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us — Always Lit Cannabis | 644 Queen St W, Toronto",
  description:
    "Visit Always Lit Cannabis at 644 Queen St W, Toronto, ON M6J 1E4. Open 7 days a week, 10AM–3AM. Walk-ins welcome. Queen West & Bathurst area.",
  openGraph: {
    title: "Contact Always Lit Cannabis — Toronto Dispensary",
    description:
      "644 Queen St W, Toronto. Open daily 10AM–3AM. Premium cannabis, always fire.",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Visit <span className={styles.heroAccent}>Always Lit</span>
          </h1>
          <p className={styles.heroSub}>
            644 Queen St W · Toronto, ON M6J 1E4
          </p>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h2 className={styles.infoTitle}>Location</h2>
              <p className={styles.infoText}>
                644 Queen St W
                <br />
                Toronto, ON M6J 1E4
                <br />
                <span className={styles.infoMuted}>Queen West &amp; Bathurst</span>
              </p>
              <a
                href="https://maps.app.goo.gl/YFPDuRCjwiuZL4J86"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoBtn}
              >
                Get Directions →
              </a>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🕒</div>
              <h2 className={styles.infoTitle}>Hours</h2>
              <div className={styles.hoursTable}>
                <div className={styles.hoursRow}>
                  <span>Monday</span>
                  <span className={styles.hoursTime}>10 AM – 3 AM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Tuesday</span>
                  <span className={styles.hoursTime}>10 AM – 3 AM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Wednesday</span>
                  <span className={styles.hoursTime}>10 AM – 3 AM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Thursday</span>
                  <span className={styles.hoursTime}>10 AM – 3 AM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Friday</span>
                  <span className={styles.hoursTime}>10 AM – 3 AM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Saturday</span>
                  <span className={styles.hoursTime}>10 AM – 3 AM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Sunday</span>
                  <span className={styles.hoursTime}>10 AM – 3 AM</span>
                </div>
              </div>
              <div className={styles.openBadge}>
                <span className={styles.openDot}></span>
                Open 7 Days a Week
              </div>
            </div>

            {/* Walk-in */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🔥</div>
              <h2 className={styles.infoTitle}>Walk In</h2>
              <p className={styles.infoText}>
                No appointment needed.
                <br />
                Just walk in and our staff will
                <br />
                help you find the perfect strain.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  200+ strains in stock
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Lab-tested &amp; safe
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Knowledgeable budtenders
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Debit &amp; cash accepted
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0!2d-79.4028!3d43.6483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34de48e69e9d%3A0x0!2s644+Queen+St+W%2C+Toronto%2C+ON+M6J+1E4!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Always Lit Cannabis — 644 Queen St W, Toronto"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            ALWAYS<span style={{ color: "var(--fire-orange)" }}>🔥</span>LIT
          </div>
          <p className={styles.footerText}>
            644 Queen St W, Toronto, ON M6J 1E4 · Open Daily 10AM–3AM
          </p>
          <p className={styles.footerLegal}>
            © {new Date().getFullYear()} Always Lit Cannabis. Must be 19+ to
            enter. Please consume responsibly.
          </p>
        </div>
      </footer>
    </main>
  );
}
