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
              <span><a href="tel:+14373715377" style={{color: "inherit"}}>+1 (437) 371-5377</a></span>
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
              <Link href="/exotic-weed">Exotic Weed</Link>
              <Link href="/premium-weed">Premium Weed</Link>
              <Link href="/aaa-weed">AAA+ Weed</Link>
              <Link href="/aa-weed">AA Weed</Link>
              <Link href="/budget-weed">Budget Weed</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Nicotine Vape</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/resources/local-guides/queen-street-brampton-visit-guide">Queen Street Visit Guide</Link>
              <Link href="/resources/weed-flower-guides">Weed &amp; Flower Guides</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">DELIVERY MENU</Link>
              <Link href="/info/brampton-weed-dispensary">Brampton Dispensary</Link>
              <Link href="/info/cheap-weed-brampton">Cheap Weed Brampton</Link>
              <Link href="/info/native-cigarettes-brampton">Native Cigarettes</Link>
              <Link href="/info/nicotine-vapes-brampton">Nicotine Vapes Brampton</Link>
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

