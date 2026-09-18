import Link from "next/link";
import styles from "./Footer.module.css";
import { gbpLocation } from "../lib/gbp-location";

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
              Your Local Cannabis Dispensary At {gbpLocation.streetAddress}, {gbpLocation.city}. Visit {gbpLocation.storeName} For Premium Flower, Edibles, Vapes &amp; More. {gbpLocation.hoursDisplay}.
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
              <span>{gbpLocation.streetAddress}</span>
              <span>{gbpLocation.city}, {gbpLocation.province} {gbpLocation.postalCode}</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span><a href={gbpLocation.phoneHref} style={{color: "inherit"}}>{gbpLocation.phone}</a></span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>{gbpLocation.hoursDisplay}</span>
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
              <Link href="/visit">Queen Street Walk-In</Link>
              <Link href="/brampton-walk-in-checklist">Brampton Walk-In Checklist</Link>
              <Link href="/dispensary-brampton">Brampton Dispensary Near Me</Link>
              <Link href="/24-hour-queen-street-brampton-dispensary">24-Hour Queen Street West</Link>
              <Link href="/resources/local-guides/queen-street-brampton-visit-guide">Queen Street Visit Guide</Link>
              <Link href="/resources/weed-flower-guides">Weed &amp; Flower Guides</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">DELIVERY MENU</Link>
              <Link href="/info/brampton-weed-dispensary">Brampton Dispensary</Link>
              <Link href="/info/cheap-weed-brampton">Cheap Weed Brampton</Link>
              <Link href="/info/native-cigarettes-brampton">Native Cigarettes</Link>
              <Link href="/info/nicotine-vapes-brampton">Nicotine Vapes Brampton</Link>
              <Link href="/info/weed-store-near-mississauga">Weed Store Near Mississauga</Link>
              <Link href="/resources/local-guides/how-to-reach-blouds-from-north-mississauga">North Mississauga Route Guide</Link>
              <Link href="/weed-dispensary-brampton">Blouds Dispensary Weed Dispensary in Brampton</Link>
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

