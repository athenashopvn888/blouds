import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SccHubLinks from "../components/SccHubLinks";
import styles from "../visit/visit.module.css";
import { SITE_ORIGIN, gbpLocation, siteUrl } from "../lib/gbp-location";

const PAGE_PATH = "/24-hour-queen-street-brampton-dispensary";
const PAGE_URL = siteUrl(PAGE_PATH);
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(gbpLocation.address)}&z=16&output=embed`;

const title = "24-Hour Queen Street West Brampton Dispensary | Blouds";
const description =
  "24-hour dispensary and open-now walk-in on Queen Street West in downtown Brampton. Blouds Dispensary at 117 Queen St W, Brampton, ON L6Y 1M3 is listed open 24 hours for storefront visits. Call +1 (437) 371-5377. Adults 19+. Delivery hours are separate.";

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
    question: "Is there a 24-hour dispensary on Queen Street West in Brampton?",
    answer: `Yes. ${gbpLocation.storeName} at ${gbpLocation.address} is listed as open 24 hours a day, seven days a week. This page is the overnight and open-now guide for that downtown Queen Street West door.`,
  },
  {
    question: "Can I walk into Blouds after midnight in downtown Brampton?",
    answer:
      "Yes. A late-night or early-morning walk-in can use the Queen Street West storefront at any hour on the listed 24-hour schedule. Bring valid 19+ government photo ID. Product names can change overnight, so call if one listing is the reason for the trip.",
  },
  {
    question: "Do I still need 19+ ID for an overnight Queen Street West visit?",
    answer:
      "Yes. Adults 19+ only, any hour. Staff will ask for valid government photo ID at the door, including after midnight and before the morning rush.",
  },
  {
    question: "How do I confirm the Queen Street West pin before a late-night trip?",
    answer: `Enter 117 Queen St W, Brampton, ON L6Y 1M3 in a live map. Do not travel on a city-only “Brampton dispensary” pin. The walk-in is the street-level door at 117 Queen St W in the downtown core.`,
  },
  {
    question: "Should I call before an overnight walk-in?",
    answer: `Call ${gbpLocation.phone} if a specific product is the reason you are coming after hours. Hours and the Queen Street West address stay on this page; the phone is for live stock questions.`,
  },
  {
    question: "Is this the same page as the downtown Brampton weed hub?",
    answer:
      "No. This route is the 24-hour / overnight owner for Queen Street West. Broad weed browsing stays on the Queen Street West weed hub. Storefront arrival stays on the walk-in guide.",
  },
  {
    question: "Is Blouds open now on Queen Street West?",
    answer:
      "The Queen Street West storefront at 117 Queen St W is listed as open 24 hours a day, seven days a week, so an open-now walk-in can use that downtown door on the listed schedule. This page does not invent hours for other Brampton addresses or other banners.",
  },
  {
    question: "Can I walk in at 3 a.m. on Queen Street West?",
    answer:
      "Yes, on the listed 24-hour walk-in schedule for 117 Queen St W. Bring valid 19+ government photo ID. Confirm the Queen Street West pin before you leave. Product names can change overnight, so call if one listing is the reason for the trip.",
  },
  {
    question: "Is Queen Street West cannabis delivery available 24 hours?",
    answer:
      "No. The listed 24-hour schedule is the storefront walk-in at 117 Queen St W. Cannabis delivery is a separate dispatcher-confirmed window. Do not assume a driver is running because the door is open.",
  },
  {
    question: "Does the 24-hour listing apply to another Brampton address?",
    answer:
      "No. This page is only for Blouds Dispensary at 117 Queen St W, Brampton, ON L6Y 1M3 in the downtown Queen Street West core. Do not travel on a different Brampton pin.",
  },
  {
    question: "Do I need an appointment for an overnight Queen Street West visit?",
    answer:
      "No. The Queen Street West door is a walk-in. Browse the current menu before you come if you already know the category you want, and bring valid 19+ ID.",
  },
  {
    question: "What if downtown parking or transit is different late at night?",
    answer:
      "Hours on this page are the listed 24-hour walk-in for 117 Queen St W. Parking signs, lot access, and transit trips can change by hour. This site does not promise a travel time. Read current maps and signs when you arrive.",
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
        { "@type": "ListItem", position: 2, name: "24-Hour Queen Street West", item: PAGE_URL },
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

export default function QueenStreet24HourPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <article className={styles.content}>
        <p className={styles.kicker}>Open 24 hours · Open now · Queen Street West · Adults 19+</p>
        <h1 className={styles.pageTitle}>24-Hour Dispensary on Queen Street West in Downtown Brampton</h1>
        <p className={styles.lede}>
          Overnight and open-now walk-in at <strong>{gbpLocation.address}</strong> — the listed 24-hour Queen Street
          West door, not a city-wide hours list.
        </p>
        <p className={styles.lede}>
          {gbpLocation.storeName} is the downtown Queen Street West cannabis store at that pin. This page is the
          overnight, late-night, and “dispensary open now” owner for that exact door. Hours here follow the listed
          storefront schedule. This page does not invent 24-hour service for delivery, other Brampton addresses, or
          other banners.
        </p>
        <p className={styles.lede}>
          Confirm the pin, bring 19+ ID, and use the <Link href="/">current menu</Link> or call{" "}
          <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a> if one listing is why you are coming after hours. The{" "}
          <Link href="/visit">Queen Street West walk-in guide</Link> covers how the storefront looks in daylight or
          dark. Broad weed browsing stays on the{" "}
          <Link href="/weed-dispensary-brampton">Queen Street West weed hub</Link>. Near-me city searches that still
          need this downtown pin can use the{" "}
          <Link href="/dispensary-brampton">Brampton dispensary near me guide</Link>. Cannabis delivery from this door
          is a separate dispatcher-confirmed window on the{" "}
          <Link href="/cannabis-delivery-queen-street-brampton">Queen Street West delivery guide</Link> — not this
          overnight walk-in.
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
            <Link className={styles.secondaryAction} href="/dispensary-brampton">
              Near me / open now pin
            </Link>
            <Link className={styles.secondaryAction} href="/">
              Menu
            </Link>
          </div>
          <SccHubLinks currentPath={PAGE_PATH} />
        </div>

        <section className={styles.section}>
          <h2>Dispensary open now on Queen Street West</h2>
          <p>
            Shoppers searching “24-hour dispensary,” “dispensary open now,” or “late-night dispensary” for downtown
            Brampton should confirm this Queen Street West pin: <strong>{gbpLocation.address}</strong>. The storefront
            is listed as open 24 hours a day, seven days a week. That listed schedule is the open-now answer for this
            door.
          </p>
          <p>
            Use a live map for 117 Queen St W before you leave. A city-only “Brampton dispensary” result can drop you
            on a different block. Comparing licensed stores by name, address, and phone? Use the{" "}
            <Link href="/brampton-walk-in-checklist">Brampton walk-in checklist</Link>. Arrival notes for the
            storefront stay on the <Link href="/visit">Queen Street West walk-in guide</Link>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What the listed 24-hour schedule covers</h2>
          <p>
            The listed 24-hour schedule is the <strong>walk-in storefront</strong> at 117 Queen St W. It is not a
            promise that cannabis delivery, a dispatcher, or a driver is available at every hour. Delivery hours are
            confirmed separately on the{" "}
            <Link href="/cannabis-delivery-queen-street-brampton">Queen Street West delivery guide</Link>.
          </p>
          <p>
            This page also does not invent 24-hour hours for another Brampton address. If a search shows a different
            street, unit, or corridor, treat that as a different listing. This route stays on Queen Street West
            downtown.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Overnight walk-in on Queen Street West</h2>
          <p>
            {gbpLocation.storeName} is listed as <strong>open 24 hours a day, seven days a week</strong> at{" "}
            {gbpLocation.streetAddress}. A “dispensary open now,” after-midnight, or early-morning visit uses this
            downtown door on that schedule.
          </p>
          <p>
            The storefront is street-level on Queen Street West in the downtown core. Put the full address into maps
            before you leave so a city-only search does not send you to a different Brampton block. This page does not
            invent hours for other banners. Delivery from Queen Street West is not this 24-hour walk-in; use the{" "}
            <Link href="/cannabis-delivery-queen-street-brampton">Queen Street West delivery guide</Link> for
            dispatcher-confirmed hours.
          </p>
          <p>
            Inside, adults 19+ can browse flower by tier or another listed format. Listings can change overnight. If
            one strain or size is the trip, call{" "}
            <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a> first.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Open now vs a daytime Queen Street visit</h2>
          <p>
            Hours are the same every day of the week on the listed 24-hour schedule. The difference at night is
            practical: confirm the Queen Street West pin, bring ID, and assume downtown parking and transit notes can
            change by hour. This site does not promise a travel time.
          </p>
          <p>
            Shoppers who still need storefront arrival notes can use the{" "}
            <Link href="/visit">Queen Street West walk-in guide</Link>. Shoppers comparing licensed stores by name,
            address, and phone can use the{" "}
            <Link href="/brampton-walk-in-checklist">Brampton walk-in checklist</Link>. Near-me city searches that need
            the exact downtown pin can use the{" "}
            <Link href="/dispensary-brampton">Brampton dispensary near me guide</Link>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What to browse before a late-night trip</h2>
          <p>
            Start with the <Link href="/">homepage menu</Link>, then pick a flower tier if you already know the shelf:
            <Link href="/exotic-weed"> Exotic</Link>, <Link href="/premium-weed">Premium</Link>,{" "}
            <Link href="/aaa-weed">AAA+</Link>, <Link href="/aa-weed">AA</Link>, or{" "}
            <Link href="/budget-weed">Budget</Link>. Each tier page stays narrow. The{" "}
            <Link href="/weed-dispensary-brampton">Queen Street West weed hub</Link> is the broader weed owner for this
            downtown door.
          </p>
        </section>

        <section className={styles.section} id="faq">
          <h2>FAQ: 24-hour Queen Street West dispensary</h2>
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
              <Link className={styles.secondaryAction} href="/visit">
                Queen Street walk-in
              </Link>
              <Link className={styles.secondaryAction} href="/dispensary-brampton">
                Brampton dispensary near me
              </Link>
              <Link className={styles.secondaryAction} href="/brampton-walk-in-checklist">
                Walk-in checklist
              </Link>
              <Link className={styles.secondaryAction} href="/weed-dispensary-brampton">
                Queen Street West weed hub
              </Link>
              <Link className={styles.secondaryAction} href="/cannabis-delivery-queen-street-brampton">
                Queen Street West delivery
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
