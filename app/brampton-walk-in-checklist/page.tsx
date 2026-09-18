import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SccHubLinks from "../components/SccHubLinks";
import styles from "../visit/visit.module.css";
import { SITE_ORIGIN, gbpLocation, siteUrl } from "../lib/gbp-location";

const PAGE_PATH = "/brampton-walk-in-checklist";
const PAGE_URL = siteUrl(PAGE_PATH);
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(gbpLocation.address)}&z=16&output=embed`;

const title = "Choosing a Brampton Walk-In Dispensary — Practical Checklist | Blouds";
const description =
  "Searching Value Buds or other cannabis stores in Brampton? Confirm hours, address, and phone before you travel. Blouds Dispensary is at 117 Queen St W, Brampton, ON L6Y 1M3. Call +1 (437) 371-5377. Adults 19+.";

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
    question: "Is Blouds Dispensary the same store as Value Buds?",
    answer:
      "No. Blouds Dispensary is the Queen Street West walk-in at 117 Queen St W, Brampton, ON L6Y 1M3. Value Buds is a separate licensed chain. If a Value Buds search brought you here, compare each store’s own listed name, address, hours, and phone before you travel. This page does not publish ratings or reviews for any competitor.",
  },
  {
    question: "How should I choose a dispensary in Brampton without relying on reviews?",
    answer: `Use a practical checklist: read the hours on that store’s own listing, match the street address in maps, and call the published phone number. For Blouds Dispensary the details are ${gbpLocation.address}, ${gbpLocation.phone}, ${gbpLocation.hoursDisplay.toLowerCase()}. This page does not invent ratings, quotes, or competitor hours.`,
  },
  {
    question: "What are the hours at Blouds Dispensary?",
    answer: `${gbpLocation.storeName} is listed as open 24 hours a day, seven days a week. Bring valid 19+ government photo ID for a walk-in at any hour on that schedule.`,
  },
  {
    question: "What is the Blouds Dispensary address?",
    answer: `The downtown Queen Street West walk-in is at ${gbpLocation.address}. Enter that full address in maps so the pin matches the storefront you intend to visit.`,
  },
  {
    question: "What is the Blouds phone number?",
    answer: `Call ${gbpLocation.phone} if you need to confirm a specific product before making a special trip. Use the number published by the store you actually plan to visit.`,
  },
  {
    question: "Do cannabis stores in Brampton require an appointment?",
    answer:
      "Blouds Dispensary is a walk-in cannabis store. No appointment is required. Browse the current menu on this website before you come if you already know the category you want.",
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
        { "@type": "ListItem", position: 2, name: "Brampton Walk-In Checklist", item: PAGE_URL },
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

export default function BramptonWalkInChecklistPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <article className={styles.content}>
        <p className={styles.kicker}>Practical walk-in checklist · Adults 19+</p>
        <h1 className={styles.pageTitle}>Choosing a Brampton Walk-In Dispensary</h1>
        <p className={styles.lede}>
          If a search for <strong>Value Buds</strong>, dispensary Brampton, or cannabis stores Brampton brought you
          here, use this page as a practical checklist — not a review roundup. Confirm hours, address, and phone on
          each store’s own listing, then walk in at {gbpLocation.storeName} on Queen Street West if that pin is the
          trip you want.
        </p>
        <p className={styles.lede}>
          {gbpLocation.storeName} is the downtown walk-in at <strong>{gbpLocation.address}</strong>. This page does not invent star ratings, quotes, or competitor scores. The{" "}
          <Link href="/visit">Queen Street West walk-in guide</Link> covers storefront arrival; the{" "}
          <Link href="/dispensary-brampton">Brampton dispensary near me guide</Link> turns a city search into this pin;
          the <Link href="/weed-dispensary-brampton">Queen Street West weed hub</Link> is the broad weed page; overnight
          visits can use the{" "}
          <Link href="/24-hour-queen-street-brampton-dispensary">24-hour Queen Street West guide</Link>. The{" "}
          <Link href="/">current menu</Link> stays on this same website.
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
          <SccHubLinks currentPath={PAGE_PATH} />
        </div>

        <section className={styles.section}>
          <h2>Check GBP hours</h2>
          <p>
            Open the store’s own Google listing or website and read the hours published there. Do not guess from a
            screenshot, a social post, or a third-party recap. {gbpLocation.storeName} is listed as{" "}
            <strong>open 24 hours a day, seven days a week</strong> at the Queen Street West storefront.
          </p>
          <p>
            This checklist does not invent hours for other banners, including Value Buds. If you need an overnight or
            early-morning walk-in in downtown Brampton, the Blouds door at {gbpLocation.streetAddress} is listed as
            open on that 24-hour schedule. Use the{" "}
            <Link href="/24-hour-queen-street-brampton-dispensary">24-hour Queen Street West page</Link> for late-night
            notes. Hours on this page match the store listing used on the{" "}
            <Link href="/">homepage</Link> and <Link href="/faq">FAQ</Link>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Check address match</h2>
          <p>
            A familiar chain name in search results is not the same as the pin you will walk to. Put the full street
            address into maps and confirm it matches the storefront you intend to visit.
          </p>
          <p>
            For {gbpLocation.storeName}, the address is <strong>{gbpLocation.address}</strong>. Use that exact Queen
            Street West string so the map does not drop you on a different block. This page is only for the downtown
            Queen Street West walk-in.
          </p>
          <p>
            If a listing shows a different street, unit, or city, you are looking at a different store. Match the
            address before you travel — not the brand name you typed into search.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Check phone</h2>
          <p>
            Call the number published by the store you actually plan to visit. For {gbpLocation.storeName} the number
            is <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a>. Use it to confirm a specific product, not to
            skip the address check.
          </p>
          <p>
            This page does not publish competitor phone numbers. If a Value Buds or other cannabis-store search led you
            here, read that store’s own listing for its phone, then compare it with the Blouds number above so you know
            which door you are calling.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What Blouds offers as Queen St walk-in</h2>
          <p>
            {gbpLocation.storeName} is a Queen Street West walk-in cannabis store for adults 19+. You do not need an
            appointment. At the door, staff will ask for valid government photo ID.
          </p>
          <p>
            Inside, you can browse flower by tier or choose another cannabis format such as pre-rolls, edibles, vapes,
            concentrates, or accessories. Cash and debit are accepted. Product names and posted sizes can change, so
            check the <Link href="/">homepage menu</Link> or call before a special trip for one item.
          </p>
          <p>
            The public website for this store is the homepage at {SITE_ORIGIN}. For storefront arrival notes, use the{" "}
            <Link href="/visit">Queen Street walk-in guide</Link>. For more store questions, see the{" "}
            <Link href="/faq">FAQ</Link> or the <Link href="/contact">contact page</Link>.
          </p>
        </section>

        <section className={styles.section} id="faq">
          <h2>FAQ: comparing Brampton cannabis stores</h2>
          <p>
            These answers stay on the checklist: name, hours, address, and phone. They do not invent ratings, quotes,
            or competitor hours.
          </p>
          <div className={styles.faqList}>
            {faqItems.map((item) => (
              <details key={item.question} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{item.question}</summary>
                <p className={styles.faqAnswer}>{renderFaqAnswer(item.answer)}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.section} id="cta">
          <h2>Walk in at Blouds on Queen Street West</h2>
          <p>
            If the hours, address, and phone on this page match the trip you want, {gbpLocation.storeName} is the
            downtown walk-in at {gbpLocation.address}. Use the map for the Queen Street West pin, then keep that
            address as the one you enter in your own maps app.
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
                Contact
              </Link>
              <Link className={styles.secondaryAction} href="/faq">
                FAQ
              </Link>
              <Link className={styles.secondaryAction} href="/visit">
                Queen Street walk-in
              </Link>
              <Link className={styles.secondaryAction} href="/dispensary-brampton">
                Brampton near-me guide
              </Link>
              <Link className={styles.secondaryAction} href="/weed-dispensary-brampton">
                Queen Street West weed hub
              </Link>
              <Link className={styles.secondaryAction} href="/24-hour-queen-street-brampton-dispensary">
                24-hour Queen Street West
              </Link>
              <Link className={styles.secondaryAction} href="/">
                Menu
              </Link>
            </div>
            <SccHubLinks currentPath={PAGE_PATH} />
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
