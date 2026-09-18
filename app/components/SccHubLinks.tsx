import Link from "next/link";
import { SCC_TIER_ROUTES, SCC_WAVE1_HUBS } from "../lib/sccHubLinks";
import styles from "./SccHubLinks.module.css";

type SccHubLinksProps = {
  currentPath: string;
  variant?: "light" | "dark";
  showTiers?: boolean;
  heading?: string;
  tierHeading?: string;
};

export default function SccHubLinks({
  currentPath,
  variant = "light",
  showTiers = true,
  heading = "Queen Street West pages",
  tierHeading = "Flower tiers at this door",
}: SccHubLinksProps) {
  const hubs = SCC_WAVE1_HUBS.filter((item) => item.href !== currentPath);
  const tiers = SCC_TIER_ROUTES.filter((item) => item.href !== currentPath);

  return (
    <nav className={`${styles.nav} ${styles[variant]}`} aria-label={heading}>
      <p className={styles.label}>{heading}</p>
      <div className={styles.row}>
        {hubs.map((item) => (
          <Link key={item.href} href={item.href} className={styles.link}>
            {item.label}
          </Link>
        ))}
      </div>
      {showTiers ? (
        <>
          <p className={styles.label}>{tierHeading}</p>
          <div className={styles.row}>
            {tiers.map((item) => (
              <Link key={item.href} href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </div>
        </>
      ) : null}
    </nav>
  );
}
