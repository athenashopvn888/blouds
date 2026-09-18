import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./visit.module.css";
import { SITE_ORIGIN, gbpLocation, siteUrl } from "../lib/gbp-location";

const PAGE_PATH = "/visit";
const PAGE_URL = siteUrl(PAGE_PATH);
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(gbpLocation.address)}&z=16&output=embed`;

const title = "Bloud Brampton Walk-In — Queen Street West Storefront Guide";
const description =
  "Bloud Brampton walk-in guide for Blouds Dispensary at 117 Queen St W. Open 24 hours downtown. Call +1 (437) 371-5377. Adults 19+.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
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
    question: "Where is the Bloud Brampton dispensary?",
    answer: `Blouds Dispensary is the downtown walk-in cannabis store at ${gbpLocation.address}. Use that exact Queen Street West pin in maps.`,
  },
  {
    question: "Is there a dispensary near me in downtown Brampton?",
    answer: `If you are already in downtown Brampton or along Queen Street West, Blouds Dispensary is the walk-in store at ${gbpLocation.streetAddress}. Confirm the address, hours, and phone on this page before you travel.`,
  },
  {
    question: "Are you open now?",
    answer: `${gbpLocation.storeName} is listed as open 24 hours a day, seven days a week, so a walk-in can happen at any hour. Bring valid 19+ ID.`,
  },
  {
    question: "Is Blouds the same store as Value Buds?",
    answer:
      "No. Blouds Dispensary is the Queen Street West walk-in at 117 Queen St W, Brampton, ON L6Y 1M3. Value Buds is a separate licensed chain. If a Value Buds search brought you here, compare each store's own listed name, address, hours, and phone before you travel. This page does not publish ratings or reviews for any competitor.",
  },
  {
    question: "What should I check when comparing Brampton cannabis stores?",
    answer: `Check the listing name, the exact street address, the phone number, and the current hours on that store's own page or Google listing. Bring valid 19+ government photo ID. For Blouds, the details are ${gbpLocation.address}, ${gbpLocation.phone}, ${gbpLocation.hoursDisplay.toLowerCase()}.`,
  },
  {
    question: "Do I need an appointment to walk in?",
    answer: "No. Blouds Dispensary is a walk-in cannabis store. Browse the current menu before you come if you already know the category you want.",
  },
  {
    question: "What should I bring?",
    answer: "Adults 19+ only. Bring valid government photo ID. Cash and debit are accepted.",
  },
  {
    question: "How do I get to Queen Street West?",
    answer: `Enter ${gbpLocation.address} in a live map or transit planner. Downtown Brampton Transit routes serve the core; schedules and construction can change, so check current directions before you leave.`,
  },
  {
    question: "What is the Blouds phone number?",
    answer: `Call ${gbpLocation.phone} if you need to confirm a specific product before making a special trip.`,
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
        { "@type": "ListItem", position: 2, name: "Queen Street Walk-In", item: PAGE_URL },
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

export default function VisitPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <article className={styles.content}>
        <p className={styles.kicker}>Downtown storefront guide · Adults 19+</p>
        <h1 className={styles.pageTitle}>Queen Street West Brampton Dispensary Walk-In</h1>
        <p className={styles.lede}>
          {gbpLocation.storeName} is the downtown Brampton cannabis store at <strong>{gbpLocation.address}</strong>.
          Shoppers searching Bloud Brampton, Blouds, or B Loud on Queen Street use this page to confirm the storefront,
          hours, and phone before walking in.
        </p>
        <p className={styles.lede}>
          This is a visit guide for the Queen Street West door. The{" "}
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
            <Link className={styles.secondaryAction} href="/contact">
              Contact
            </Link>
            <Link className={styles.secondaryAction} href="/faq">
              FAQ
            </Link>
          </div>
        </div>

        <section className={styles.section}>
          <h2>117 Queen St W storefront — what you’ll see</h2>
          <p>
            The storefront sits on Queen Street West in downtown Brampton. Put <strong>{gbpLocation.address}</strong>{" "}
            into maps and walk to that pin. This is a street-level walk-in cannabis store. You do not need an appointment.
          </p>
          <p>
            At the door, staff will ask adults for valid government photo ID. Ontario’s legal age for recreational cannabis
            is 19. Inside, you can browse flower by tier or choose another cannabis format such as pre-rolls, edibles,
            vapes, concentrates, or accessories.
          </p>
          <p>
            Product names and posted sizes can change. If one specific item is the reason for the trip, call{" "}
            <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a> before you travel, or check the{" "}
            <Link href="/">homepage menu</Link> first.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Downtown Brampton / transit arrival</h2>
          <p>
            Blouds is in the downtown Brampton core on Queen Street West, not a suburban plaza pin. Shoppers coming from
            Main Street, the civic precinct, or nearby Queen Street blocks should use the full address so the map does not
            drop you on a different Queen Street segment.
          </p>
          <p>
            Brampton Transit serves downtown. Enter {gbpLocation.streetAddress} in a live trip planner and read the
            current route, stop, and construction notes before you leave. The website does not promise a fixed travel time.
          </p>
          <p>
            Street and municipal parking in downtown Brampton can change by time of day. Read the signs on the block when
            you arrive. Adults travelling from the Mississauga edge can use the{" "}
            <Link href="/resources/local-guides/how-to-reach-blouds-from-north-mississauga">
              North Mississauga route guide
            </Link>{" "}
            and still treat {gbpLocation.streetAddress} as the only destination.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Hours &amp; open-now</h2>
          <p>
            {gbpLocation.storeName} is listed as <strong>open 24 hours a day, seven days a week</strong>. A “dispensary
            near me open now” or overnight walk-in can use this Queen Street West door at any hour on the listed schedule.
          </p>
          <p>
            Walk-ins are welcome late night and early morning. Bring 19+ ID either way. Hours on this page match the
            store listing used across the homepage and{" "}
            <Link href="/weed-dispensary-brampton">Brampton landing</Link>. Call{" "}
            <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a> if you need to confirm a product, not the address.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What shoppers comparing walk-ins should check</h2>
          <p>
            Licensed cannabis stores in Brampton can look familiar in a search results list. A useful comparison is the
            listing itself — not a screenshot of stars, not a copied review, and not a rumour about another banner.
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
            Value Buds and other chain names often appear when people search for a Brampton cannabis store. Familiarity
            is not the same as confirming the downtown Queen Street pin. If you are comparing walk-ins, use the checklist
            above on each store’s own page, or the dedicated{" "}
            <Link href="/brampton-walk-in-checklist">Brampton walk-in checklist</Link>. This guide does not invent ratings, quotes, or competitor hours.
          </p>
        </section>

        <section className={styles.section} id="faq">
          <h2>FAQ: Brampton dispensary near me</h2>
          <div className={styles.faqList}>
            {faqItems.map((item) => (
              <details key={item.question} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{item.question}</summary>
                <p className={styles.faqAnswer}>{renderFaqAnswer(item.answer)}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.section} id="map">
          <h2>Contact / map</h2>
          <p>
            Use the map for the Queen Street West pin, then keep {gbpLocation.address} as the address you enter in your
            own maps app. The public website for this store is the homepage at {SITE_ORIGIN}.
          </p>
          <div className={styles.mapWrap}>
            <iframe
              title={`Map of ${gbpLocation.storeName} at ${gbpLocation.address}`}
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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
