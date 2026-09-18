import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../visit/visit.module.css";
import { SITE_ORIGIN, gbpLocation, siteUrl } from "../lib/gbp-location";

const PAGE_PATH = "/dispensary-brampton";
const PAGE_URL = siteUrl(PAGE_PATH);
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(gbpLocation.address)}&z=16&output=embed`;

const title = "Brampton Dispensary Near Me — Downtown Queen Street Open Guide";
const description =
  "Dispensary Brampton near me at 117 Queen St W, Brampton, ON L6Y 1M3. Blouds Dispensary is open 24 hours downtown. Call +1 (437) 371-5377. Adults 19+.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "dispensary brampton",
    "brampton dispensary",
    "cannabis store brampton",
    "dispensary near me",
    "dispensary near me open now",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title,
    description,
    url: PAGE_URL,
  },
};

const faqItems = [
  {
    question: "Where is a dispensary in Brampton?",
    answer: `Blouds Dispensary is the downtown Brampton cannabis store at ${gbpLocation.address}. Use that exact Queen Street West pin — not a city-only search — before you travel.`,
  },
  {
    question: "Is there a Brampton dispensary near me?",
    answer: `If you are already in downtown Brampton or along Queen Street West, Blouds Dispensary is the walk-in at ${gbpLocation.streetAddress}. Confirm the address, hours, and phone on this page. The public website for this store is the homepage.`,
  },
  {
    question: "Is the cannabis store in Brampton open now?",
    answer: `${gbpLocation.storeName} is listed as open 24 hours a day, seven days a week, so a “dispensary near me open now” walk-in can happen at any hour. Bring valid 19+ ID.`,
  },
  {
    question: "What is the exact address for Blouds Dispensary?",
    answer: `Blouds Dispensary is at 117 Queen St W, Brampton, ON L6Y 1M3. Call ${gbpLocation.phone} if you need to confirm a specific product before making a special trip.`,
  },
  {
    question: "Do I need an appointment to walk in?",
    answer: "No. Blouds Dispensary is a walk-in cannabis store. Browse the current menu before you come if you already know the category you want.",
  },
  {
    question: "What should I check when comparing Brampton walk-in stores?",
    answer: `Check the listing name, the exact street address, the phone number, and the current hours on that store’s own page or Google listing. Bring valid 19+ government photo ID. For Blouds, the details are ${gbpLocation.address}, ${gbpLocation.phone}, ${gbpLocation.hoursDisplay.toLowerCase()}. This page does not publish ratings or reviews.`,
  },
  {
    question: "What should I bring?",
    answer: "Adults 19+ only. Bring valid government photo ID. Cash and debit are accepted.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: title,
      description,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      about: { "@id": `${SITE_ORIGIN}/#store` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
        { "@type": "ListItem", position: 2, name: "Brampton Dispensary Near Me", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      about: { "@id": `${SITE_ORIGIN}/#store` },
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

function renderFaqAnswer(answer: string) {
  if (!answer.includes(gbpLocation.phone)) return answer;
  const [before, after] = answer.split(gbpLocation.phone);
  return (
    <>
      {before}
      <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a>
      {after}
    </>
  );
}

export default function DispensaryBramptonPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <article className={styles.content}>
        <p className={styles.kicker}>Downtown Queen Street · Open 24 hours · Adults 19+</p>
        <h1 className={styles.pageTitle}>Brampton Dispensary Near Me — Downtown Queen Street Open Guide</h1>
        <p className={styles.lede}>
          Searching <strong>dispensary Brampton</strong>, Brampton dispensary, or cannabis store Brampton? The downtown
          walk-in that matches this pin is {gbpLocation.storeName} at <strong>{gbpLocation.address}</strong>.
        </p>
        <p className={styles.lede}>
          This open guide turns a near-me or city search into the Queen Street West door, hours, and phone. Use the{" "}
          <Link href="/visit">Queen Street West walk-in guide</Link> for storefront arrival notes. The{" "}
          <Link href="/weed-dispensary-brampton">Brampton store page</Link> and the{" "}
          <Link href="/">current menu</Link> stay on this same website.
        </p>

        <div className={styles.napBar}>
          <p>
            <strong>{gbpLocation.storeName}</strong>
            <br />
            {gbpLocation.streetAddress}
            <br />
            {gbpLocation.city}, {gbpLocation.province} {gbpLocation.postalCode}
          </p>
          <p>
            Call <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a>
            <br />
            {gbpLocation.hoursDisplay} · 7 days a week
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href={gbpLocation.directionsUrl}>
              Get directions
            </a>
            <Link className={styles.secondaryAction} href="/visit">
              Walk-in guide
            </Link>
            <Link className={styles.secondaryAction} href="/contact">
              Contact
            </Link>
            <Link className={styles.secondaryAction} href="/faq">
              FAQ
            </Link>
          </div>
        </div>

        <section className={styles.section}>
          <h2>Why downtown Queen St</h2>
          <p>
            A <strong>dispensary Brampton</strong> result list can mix licensed stores across a large city. Downtown Queen
            Street West is the commercial core — the blocks around Main Street and the civic precinct — where a walk-in
            means a street-level door, not a pin on a different Brampton road.
          </p>
          <p>
            {gbpLocation.storeName} is that downtown storefront at <strong>{gbpLocation.streetAddress}</strong>. If a
            search only says Brampton, confirm the street before you travel. This location is{" "}
            <strong>{gbpLocation.address}</strong>.
          </p>
          <p>
            Shoppers comparing a cannabis store in Brampton should match the name, address, and phone on this page — not
            a screenshot of stars. For how the door looks and how to arrive, use the{" "}
            <Link href="/visit">Queen Street West walk-in guide</Link>.
          </p>
        </section>

        <section className={styles.section} id="pin">
          <h2>Near-me intent → exact pin</h2>
          <p>
            “Dispensary near me” uses your phone’s location. That is useful in downtown Brampton only if the map still
            opens the exact pin: <strong>{gbpLocation.address}</strong>. A city-only search can drop you at another
            licensed store.
          </p>
          <p>
            Enter the full address in your own maps app. The public website for this store is the homepage at{" "}
            {SITE_ORIGIN} — not this article, and not a city landing.
          </p>
          <div className={styles.mapWrap}>
            <iframe
              title={`Map of ${gbpLocation.storeName} at ${gbpLocation.address}`}
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Hours</h2>
          <p>
            {gbpLocation.storeName} is listed as <strong>open 24 hours a day, seven days a week</strong>. A “dispensary
            near me open now” or overnight walk-in can use this Queen Street West door at any hour on the listed schedule.
          </p>
          <p>
            Hours on this page match the store listing used across the <Link href="/">homepage</Link> and{" "}
            <Link href="/weed-dispensary-brampton">Brampton landing</Link>. Call{" "}
            <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a> if you need to confirm a product, not the address.
            Bring valid 19+ ID any hour you walk in.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Compare walk-in checklist</h2>
          <p>
            Licensed cannabis stores in Brampton can look similar in a search list. A useful comparison is the listing
            itself — not a copied review, not a star score, and not a rumour about another banner.
          </p>
          <ul className={styles.checklist}>
            <li>
              <strong>Name:</strong> the store you are travelling to should match the name on that store’s own page. This
              location is {gbpLocation.storeName}.
            </li>
            <li>
              <strong>Address:</strong> the pin should be {gbpLocation.address}.
            </li>
            <li>
              <strong>Phone:</strong> the number should be {gbpLocation.phone}.
            </li>
            <li>
              <strong>Hours:</strong> read the current hours on that store’s own listing. Blouds is listed as{" "}
              {gbpLocation.hoursDisplay.toLowerCase()}.
            </li>
            <li>
              <strong>ID:</strong> adults 19+ with valid government photo ID.
            </li>
          </ul>
          <p>
            This guide does not invent ratings, quotes, or competitor hours. If you still need storefront arrival notes
            after the pin is confirmed, open the <Link href="/visit">walk-in guide</Link>, the{" "}
            <Link href="/contact">contact page</Link>, or the <Link href="/faq">FAQ</Link>.
          </p>
        </section>

        <section className={styles.section} id="faq">
          <h2>FAQ</h2>
          <div className={styles.faqList}>
            {faqItems.map((item) => (
              <details key={item.question} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{item.question}</summary>
                <p className={styles.faqAnswer}>{renderFaqAnswer(item.answer)}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.ctaBox}>
            <address>
              {gbpLocation.storeName}
              <br />
              {gbpLocation.streetAddress}
              <br />
              {gbpLocation.city}, {gbpLocation.province} {gbpLocation.postalCode}
            </address>
            <p>
              Call <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a>. {gbpLocation.hoursDisplay}. Adults 19+.
            </p>
            <div className={styles.ctaRow}>
              <a className={styles.primaryAction} href={gbpLocation.directionsUrl}>
                Open in maps
              </a>
              <Link className={styles.secondaryAction} href="/visit">
                Queen Street walk-in
              </Link>
              <Link className={styles.secondaryAction} href="/contact">
                Contact page
              </Link>
              <Link className={styles.secondaryAction} href="/faq">
                More FAQ
              </Link>
              <Link className={styles.secondaryAction} href="/weed-dispensary-brampton">
                Brampton store page
              </Link>
              <Link className={styles.secondaryAction} href="/">
                Menu
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
