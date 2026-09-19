import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SccHubLinks from "../components/SccHubLinks";
import styles from "../visit/visit.module.css";
import { SITE_ORIGIN, gbpLocation, siteUrl } from "../lib/gbp-location";

const PAGE_PATH = "/nicotine-vape-queen-street-brampton";
const PAGE_URL = siteUrl(PAGE_PATH);
const NICOTINE_MENU = "/items/vapes";
const THC_VAPE_MENU = "/items/vape-disposables";
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(gbpLocation.address)}&z=16&output=embed`;

const title = "Nicotine Vape Queen Street West Brampton | Blouds";
const description =
  "Nicotine vape at Blouds Dispensary, 117 Queen St W, Brampton, ON L6Y 1M3. Check the current Queen Street West nicotine vape menu. Separate from THC vape. Call +1 (437) 371-5377. Adults 19+. Nicotine is addictive.";

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
    question: "Does Blouds sell nicotine vape on Queen Street West?",
    answer:
      "Yes. The downtown Queen Street West store at 117 Queen St W lists a nicotine vape category for adults 19+. Check the current nicotine vape menu for devices, pods, and posted details. Nicotine is addictive.",
  },
  {
    question: "Are nicotine vapes the same as THC vapes at this store?",
    answer:
      "No. Nicotine vape is a separate category from THC vape / cannabis disposables. Use the nicotine vape menu for nicotine products. Use the THC vape menu for cannabis vape products. Do not treat those pages as the same shelf.",
  },
  {
    question: "Where should I check the current nicotine vape selection?",
    answer:
      "Open the nicotine vape category on this website. This Queen Street West page is a neighbourhood guide. Featured or remembered names can change, so the current category listing controls what is posted today.",
  },
  {
    question: "Is this a city-wide Brampton nicotine vape page?",
    answer:
      "No. This page is only for Blouds Dispensary at 117 Queen St W in downtown Brampton. Do not travel on a different Brampton pin.",
  },
  {
    question: "Do I need ID to buy a nicotine vape on Queen Street West?",
    answer:
      "Yes. Adults 19+ only. Staff will ask for valid government photo ID at the Queen Street West door, including overnight walk-ins on the listed 24-hour schedule.",
  },
  {
    question: "Where is the Queen Street West store?",
    answer: `Blouds Dispensary is at ${gbpLocation.address}. Call ${gbpLocation.phone}. The public website for this store is the homepage.`,
  },
  {
    question: "Can I get a nicotine vape delivered from Queen Street West?",
    answer:
      "Cannabis delivery from this door is a separate dispatcher-confirmed service. Do not assume nicotine vape is on a delivery order. Use the Queen Street West delivery guide for cannabis delivery hours, then confirm nicotine vape in store or by phone.",
  },
  {
    question: "How is this different from the Brampton nicotine vape info page?",
    answer:
      "This route is the Queen Street West / downtown neighbourhood page for nicotine vape at 117 Queen St W. The Brampton nicotine vape info page is a separate product-card guide. Current retail details stay on the nicotine vape menu.",
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
        { "@type": "ListItem", position: 2, name: "Queen Street West Nicotine Vape", item: PAGE_URL },
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

export default function QueenStreetNicotineVapePage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <article className={styles.content}>
        <p className={styles.kicker}>Queen Street West nicotine vape · Adults 19+ · Nicotine is addictive</p>
        <h1 className={styles.pageTitle}>Nicotine Vape on Queen Street West in Downtown Brampton</h1>
        <p className={styles.lede}>
          {gbpLocation.storeName} lists a nicotine vape category at the downtown Queen Street West walk-in,{" "}
          <strong>{gbpLocation.address}</strong>. This page is the neighbourhood guide for that door — not a city-wide
          Brampton vape roundup, and not the THC vape shelf.
        </p>
        <p className={styles.lede}>
          Check the current <Link href={NICOTINE_MENU}>nicotine vape menu</Link> for listed devices, pods, and package
          details, or call <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a> if one listing is why you are coming.
          Cannabis vape products stay on the <Link href={THC_VAPE_MENU}>THC vape menu</Link>. Storefront arrival stays
          on the <Link href="/visit">Queen Street West walk-in guide</Link>. Overnight and “open now” visits use the{" "}
          <Link href="/24-hour-queen-street-brampton-dispensary">24-hour Queen Street West guide</Link>. The{" "}
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
            Adults 19+ · Nicotine is addictive
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href={NICOTINE_MENU}>
              Nicotine vape menu
            </Link>
            <Link className={styles.secondaryAction} href="/visit">
              Walk-in guide
            </Link>
            <a className={styles.secondaryAction} href={gbpLocation.phoneHref}>
              Call {gbpLocation.phone}
            </a>
          </div>
          <SccHubLinks currentPath={PAGE_PATH} />
        </div>

        <section className={styles.section}>
          <h2>Nicotine vape at this Queen Street West door</h2>
          <p>
            Nicotine vape is sold at this downtown Queen Street West store. Use the{" "}
            <Link href={NICOTINE_MENU}>current nicotine vape menu</Link> to see what is listed before you travel. This
            page does not freeze a device name, puff count, flavour, or price.
          </p>
          <p>
            Nicotine is addictive. Adults 19+ only. Read the package and the current item page for format details. A
            pod, disposable, or other format should be described only the way that listing describes it.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Keep nicotine vape separate from THC vape</h2>
          <p>
            The nicotine vape category is not the cannabis disposable category. Shoppers looking for THC or cannabis
            vapes should use the <Link href={THC_VAPE_MENU}>THC vape menu</Link>. Shoppers looking for nicotine
            products should stay on <Link href={NICOTINE_MENU}>/items/vapes</Link>.
          </p>
          <p>
            For a verified product-card shortlist, see the{" "}
            <Link href="/info/nicotine-vapes-brampton">Brampton nicotine vape info page</Link>. That page is not this
            Queen Street West door guide, and featured cards are not a guarantee of current stock.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Visit the downtown Queen Street West door</h2>
          <p>
            Walk in at <strong>{gbpLocation.address}</strong>. The storefront is listed as{" "}
            <strong>open 24 hours a day, seven days a week</strong> for walk-in. Overnight notes stay on the{" "}
            <Link href="/24-hour-queen-street-brampton-dispensary">24-hour Queen Street West page</Link>. Cannabis
            delivery from this door does not inherit that walk-in schedule — use the{" "}
            <Link href="/cannabis-delivery-queen-street-brampton">Queen Street West delivery guide</Link>.
          </p>
          <p>
            Cigarettes are a separate tobacco category. If that is the product you want, use the{" "}
            <Link href="/native-cigarettes-brampton-queen">Queen Street West native cigarettes guide</Link> or the{" "}
            <Link href="/items/cigarettes">cigarette menu</Link>. Flower browsing stays on the{" "}
            <Link href="/weed-dispensary-brampton">Queen Street West weed hub</Link>.
          </p>
        </section>

        <section className={styles.section} id="faq">
          <h2>FAQ: Nicotine vape on Queen Street West</h2>
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
          <h2>Address / map</h2>
          <p>
            Keep {gbpLocation.address} as the store pin. The public website for this store is the homepage at{" "}
            {SITE_ORIGIN}.
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
              Call <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a>. Walk-in {gbpLocation.hoursDisplay}. Adults
              19+. Nicotine is addictive.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.primaryAction} href={NICOTINE_MENU}>
                Nicotine vape menu
              </Link>
              <Link className={styles.secondaryAction} href="/visit">
                Queen Street walk-in
              </Link>
              <Link className={styles.secondaryAction} href="/24-hour-queen-street-brampton-dispensary">
                24-hour Queen Street West
              </Link>
              <Link className={styles.secondaryAction} href="/native-cigarettes-brampton-queen">
                Queen Street West native cigarettes
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
