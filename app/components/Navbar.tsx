import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar} id="main-nav">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.brand}>
            ALWAYS<span className={styles.fire}>🔥</span>LIT
          </span>
        </Link>

        <div className={styles.links}>
          <Link href="/exotic" className={styles.link}>Exotic</Link>
          <Link href="/premium" className={styles.link}>Premium</Link>
          <Link href="/aaa" className={styles.link}>AAA+</Link>
          <Link href="/aa" className={styles.link}>AA</Link>
          <Link href="/budget" className={styles.link}>Budget</Link>
          <Link href="/edibles" className={styles.link}>Edibles</Link>
          <Link href="/vapes" className={styles.link}>Vapes</Link>
          <Link href="/games" className={styles.linkGames}>🎮</Link>
        </div>

        <div className={styles.actions}>
          <span className={styles.open}>
            <span className={styles.dot}></span>
            Open Now
          </span>
        </div>
      </div>
    </nav>
  );
}
