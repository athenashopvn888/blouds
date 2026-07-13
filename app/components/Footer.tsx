import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.brand}>
              BLOUDS
            </div>
            <p className={styles.desc}>
              Your local cannabis dispensary at 117 Queen St W, Brampton. Visit
              Blouds Dispensary for flower, edibles, vapes, cigarettes, Magic
              Stuff, and more. Open 24 Hours.
            </p>
            <div className={styles.buttons}>
              <Link href="/#menu" className={styles.btnPrimary}>
                View Menu
              </Link>
            </div>
          </div>

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
              <span>
                <a href="tel:+14374250117" style={{ color: "inherit" }}>
                  (437) 425-0117
                </a>
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Open 24 Hours</span>
            </div>
          </div>

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
              <Link href="/items/vapes">THC Vape</Link>
              <Link href="/items/vape-disposables">Nic Vape</Link>
              <Link href="/items/magic">Magic Stuff</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/resources/queen-street-w-visit-guide">Queen Street W Visit Guide</Link>
              <Link href="/resources/downtown-brampton-menu-map">Downtown Menu Map</Link>
              <Link href="/resources/blouds-flower-tier-guide">Flower Tier Guide</Link>
              <Link href="/resources/native-smokes-brampton-guide">Native Smokes Guide</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">Delivery</Link>
              <Link href="/games">Games Arcade</Link>
              <Link href="/info/brampton-weed-dispensary">Brampton Dispensary</Link>
              <Link href="/info/cheap-weed-brampton">Cheap Weed Brampton</Link>
              <Link href="/info/native-cigarettes-brampton">Native Cigarettes</Link>
              <Link href="/info/weed-store-near-mississauga">Weed Store Near Mississauga</Link>
              <Link href="/weed-dispensary-brampton/">Blouds Dispensary Weed Dispensary in Brampton</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            Copyright {new Date().getFullYear()} Blouds Dispensary. Must be 19+
            to enter. Please consume responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
