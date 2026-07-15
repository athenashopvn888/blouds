import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 — Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>
              BLOUDS
            </div>
            <p className={styles.desc}>
              Your Local Cannabis Dispensary At 117 Queen St W, Brampton. Visit
              Blouds Dispensary For Premium Flower, Edibles, Vapes &amp; More.
              Open 24 Hours.
            </p>
            <div className={styles.buttons}>
              <Link
                href="/#menu"
                className={styles.btnPrimary}
              >
                View Menu
              </Link>
            </div>
          </div>

          {/* Column 2 — Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>117 Queen St W</span>
              <span>Brampton, ON L6Y 1M3</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span><a href="tel:+14374250117" style={{color: "inherit"}}>(437) 425-0117</a></span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Open 24 Hours</span>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic">Exotic Flower</Link>
              <Link href="/premium">Premium Flower</Link>
              <Link href="/aaa">AAA+ Flower</Link>
              <Link href="/aa">AA Flower</Link>
              <Link href="/budget">Budget Flower</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Vape Pens</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/resources/queen-street-visit-guide">Queen Street Visit Guide</Link>
              <Link href="/resources/blouds-flower-tier-guide">Flower Tier Guide</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">Delivery (Coming Soon)</Link>
              <Link href="/games">Games Arcade</Link>
              <Link href="/info/ottawa-weed-dispensary">Brampton Dispensary</Link>
              <Link href="/info/cheap-weed-ottawa">Cheap Weed Brampton</Link>
              <Link href="/info/native-cigarettes-ottawa">Native Cigarettes</Link>
              <Link href="/info/weed-store-near-mississauga">Weed Store Near Mississauga</Link>
              <Link href="/weed-dispensary-brampton/">Blouds Dispensary Weed Dispensary in Brampton</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Blouds Dispensary. Must be 19+ to
            enter. Adults 19+ only.
          </p>
        </div>
      </div>
    </footer>
  );
}
