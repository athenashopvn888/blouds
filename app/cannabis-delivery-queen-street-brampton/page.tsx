import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SccHubLinks from "../components/SccHubLinks";
import styles from "../visit/visit.module.css";
import { SITE_ORIGIN, gbpLocation, siteUrl } from "../lib/gbp-location";

const PAGE_PATH = "/cannabis-delivery-queen-street-brampton";
const PAGE_URL = siteUrl(PAGE_PATH);
const DELIVERY_MENU = "/delivery";
const LIVE_ORDER = "/delivery?liveOrder=1";
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(gbpLocation.address)}&z=16&output=embed`;

const title = "Cannabis Delivery Queen Street West Brampton | Blouds";
const description =
  "Cannabis delivery from Blouds Dispensary at 117 Queen St W, Brampton, ON L6Y 1M3. Order through LIVE ORDER on the delivery menu. Delivery hours are confirmed by the dispatcher and are not the 24-hour Queen Street West walk-in. Call +1 (437) 371-5377. Adults 19+.";

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
    question: "Does Blouds offer cannabis delivery from Queen Street West?",
    answer:
      "Yes. Blouds Dispensary dispatches cannabis delivery from the downtown Queen Street West store at 117 Queen St W, Brampton, ON L6Y 1M3. Browse the live delivery menu, then use LIVE ORDER so a dispatcher can confirm availability, your address, and delivery details before an order is accepted.",
  },
  {
    question: "What are Blouds delivery hours in downtown Brampton?",
    answer:
      "The published delivery menu does not list a clock window. The store confirms current availability and delivery details before an order is accepted. That delivery window is separate from the 24-hour Queen Street West walk-in.",
  },
  {
    question: "Is Queen Street West cannabis delivery available 24 hours?",
    answer:
      "No. The storefront at 117 Queen St W is listed as open 24 hours for walk-in. Cannabis delivery is not that overnight door. Use LIVE ORDER on the delivery menu to see whether a dispatcher is taking orders now.",
  },
  {
    question: "How do I order cannabis delivery from Blouds on Queen Street West?",
    answer:
      "Browse the delivery menu, note the product names and weights you want, select LIVE ORDER, complete the private selfie-with-ID step if you are new, then confirm with the dispatcher. The delivery menu lists a $60 product minimum.",
  },
  {
    question: "What area does Queen Street West cannabis delivery cover?",
    answer:
      "Orders are dispatched from 117 Queen St W in downtown Brampton. This page is for Queen Street West and downtown Brampton delivery. The dispatcher confirms whether your address is in range before an order is accepted. Do not treat this page as a city-wide Brampton radius.",
  },
  {
    question: "Where is the store that sends Queen Street West delivery?",
    answer: `Blouds Dispensary is at ${gbpLocation.address}. Call ${gbpLocation.phone}. The public website for this store is the homepage.`,
  },
  {
    question: "Can I still walk in if I do not want delivery?",
    answer:
      "Yes. The Queen Street West door is listed as open 24 hours a day, seven days a week. Use the walk-in guide for storefront arrival, or the 24-hour Queen Street West page for overnight visits. Bring valid 19+ government photo ID.",
  },
  {
    question: "Do I need ID for Queen Street West cannabis delivery?",
    answer:
      "Yes. Adults 19+ only. New customers complete a private selfie-with-ID step in Web Chat before the dispatcher can proceed.",
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
        { "@type": "ListItem", position: 2, name: "Queen Street West Delivery", item: PAGE_URL },
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

export default function QueenStreetDeliveryPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <article className={styles.content}>
        <p className={styles.kicker}>Queen Street West delivery · Dispatcher confirmed · Adults 19+</p>
        <h1 className={styles.pageTitle}>Cannabis Delivery from Queen Street West in Downtown Brampton</h1>
        <p className={styles.lede}>
          {gbpLocation.storeName} dispatches cannabis delivery from the downtown Queen Street West store at{" "}
          <strong>{gbpLocation.address}</strong>. This page is the neighbourhood delivery guide for that door — not a
          city-wide Brampton roundup, and not the 24-hour walk-in claim.
        </p>
        <p className={styles.lede}>
          Browse the <Link href={DELIVERY_MENU}>live delivery menu</Link>, then use{" "}
          <Link href={LIVE_ORDER}>LIVE ORDER</Link> so a dispatcher can confirm whether your address is in range and
          whether delivery is accepting orders now. Storefront arrival stays on the{" "}
          <Link href="/visit">Queen Street West walk-in guide</Link>. Broad weed browsing stays on the{" "}
          <Link href="/weed-dispensary-brampton">Queen Street West weed hub</Link>. The{" "}
          <Link href="/">homepage menu</Link> remains the public website for this store.
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
            Walk-in: {gbpLocation.hoursDisplay} · 7 days a week
            <br />
            Delivery: dispatcher confirms hours and address — not the 24-hour walk-in
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href={LIVE_ORDER}>
              LIVE ORDER
            </Link>
            <Link className={styles.secondaryAction} href={DELIVERY_MENU}>
              Delivery menu
            </Link>
            <a className={styles.secondaryAction} href={gbpLocation.phoneHref}>
              Call {gbpLocation.phone}
            </a>
          </div>
          <SccHubLinks currentPath={PAGE_PATH} />
        </div>

        <section className={styles.section}>
          <h2>Delivery hours are not the 24-hour walk-in</h2>
          <p>
            The Queen Street West storefront is listed as <strong>open 24 hours a day, seven days a week</strong> for
            walk-in. Cannabis delivery does not inherit that overnight schedule. The live delivery menu states that the
            store confirms current availability and delivery details before an order is accepted.
          </p>
          <p>
            If LIVE ORDER is paused, wait for a dispatcher or walk in at {gbpLocation.streetAddress} instead. Overnight
            and “open now” visits use the{" "}
            <Link href="/24-hour-queen-street-brampton-dispensary">24-hour Queen Street West guide</Link>. Do not assume
            a driver is running at 3 a.m. because the door is open.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Queen Street West / downtown delivery area</h2>
          <p>
            Orders leave from <strong>{gbpLocation.address}</strong> in the downtown core on Queen Street West. This
            page is for shoppers who want delivery from that Queen Street West store — downtown Brampton, the Queen
            Street West blocks, and addresses a dispatcher can accept from this door.
          </p>
          <p>
            The website does not publish a city-wide radius. The dispatcher confirms whether your address is in range
            before an order is accepted. If delivery cannot reach you, use the{" "}
            <Link href="/visit">Queen Street West walk-in guide</Link> or the{" "}
            <Link href="/brampton-walk-in-checklist">Brampton walk-in checklist</Link> and come to the storefront.
          </p>
        </section>

        <section className={styles.section} id="how-to-order">
          <h2>How to order Queen Street West cannabis delivery</h2>
          <p>
            The how-to-order steps match the live delivery menu. There is a <strong>$60 product minimum</strong>. Adults
            19+ only.
          </p>
          <ol className={styles.checklist}>
            <li>
              <strong>Browse the delivery menu.</strong> Note the product names and weights you want on the{" "}
              <Link href={DELIVERY_MENU}>Queen Street West delivery catalog</Link>.
            </li>
            <li>
              <strong>Select LIVE ORDER.</strong> Open Web Chat and send your choices. Use{" "}
              <Link href={LIVE_ORDER}>LIVE ORDER</Link> to start that chat.
            </li>
            <li>
              <strong>Verify privately if you are new.</strong> New customers complete the private selfie-with-ID step
              in Web Chat.
            </li>
            <li>
              <strong>Confirm with the dispatcher.</strong> The dispatcher confirms availability, whether your downtown
              Brampton address is in range, delivery details, and next steps.
            </li>
          </ol>
          <p>
            Flower browsing by shelf still lives on the{" "}
            <Link href="/exotic-weed">Exotic</Link>, <Link href="/premium-weed">Premium</Link>,{" "}
            <Link href="/aaa-weed">AAA+</Link>, <Link href="/aa-weed">AA</Link>, and{" "}
            <Link href="/budget-weed">Budget</Link> tier pages. Those pages are walk-in shelves; this page is delivery
            from the same Queen Street West store.
          </p>
        </section>

        <section className={styles.section} id="faq">
          <h2>FAQ: Queen Street West cannabis delivery</h2>
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
          <h2>Dispatch address / map</h2>
          <p>
            Delivery leaves from the Queen Street West pin. Keep {gbpLocation.address} as the store address. The public
            website for this store is the homepage at {SITE_ORIGIN}.
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
              Call <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a>. Walk-in {gbpLocation.hoursDisplay}. Delivery
              hours are confirmed by the dispatcher. Adults 19+.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.primaryAction} href={LIVE_ORDER}>
                LIVE ORDER
              </Link>
              <Link className={styles.secondaryAction} href={DELIVERY_MENU}>
                Delivery menu
              </Link>
              <Link className={styles.secondaryAction} href="/visit">
                Queen Street walk-in
              </Link>
              <Link className={styles.secondaryAction} href="/brampton-walk-in-checklist">
                Walk-in checklist
              </Link>
              <Link className={styles.secondaryAction} href="/weed-dispensary-brampton">
                Queen Street West weed hub
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
