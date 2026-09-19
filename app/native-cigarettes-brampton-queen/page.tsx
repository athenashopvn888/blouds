import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SccHubLinks from "../components/SccHubLinks";
import styles from "../visit/visit.module.css";
import { SITE_ORIGIN, gbpLocation, siteUrl } from "../lib/gbp-location";

const PAGE_PATH = "/native-cigarettes-brampton-queen";
const PAGE_URL = siteUrl(PAGE_PATH);
const CIGARETTE_MENU = "/items/cigarettes";
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(gbpLocation.address)}&z=16&output=embed`;

const title = "Native Cigarettes Queen Street West Brampton | Blouds";
const description =
  "Native cigarettes at Blouds Dispensary, 117 Queen St W, Brampton, ON L6Y 1M3. Check the current Queen Street West cigarette menu before you visit. Call +1 (437) 371-5377. Adults 19+. Tobacco and nicotine are addictive.";

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
    question: "Does Blouds sell native cigarettes on Queen Street West?",
    answer:
      "Yes. The downtown Queen Street West store at 117 Queen St W lists a cigarette category for adults 19+. “Native cigarettes” is a common search phrase for that counter. Check the current cigarette menu for the brands and prices listed today. Tobacco and nicotine are addictive.",
  },
  {
    question: "Where do I check current cigarette brands at this door?",
    answer:
      "Use the cigarette category on this website. This page is the Queen Street West neighbourhood guide. It is not a live stock list. Names, pack formats, and prices can change, so open the current cigarette menu or call before a special trip.",
  },
  {
    question: "Is this a city-wide Brampton cigarette page?",
    answer:
      "No. This page is only for Blouds Dispensary at 117 Queen St W in downtown Brampton. Do not travel on a different Brampton pin.",
  },
  {
    question: "Are Native cigarettes tax-free at this store?",
    answer:
      "No. The phrase is everyday retail language, not one tax category. Manufacturer identity, tax status, and what is listed on the current menu are separate questions. This page does not claim tax-exempt sales, Nation affiliation, or brand ownership.",
  },
  {
    question: "Do I need ID to buy cigarettes on Queen Street West?",
    answer:
      "Yes. Adults 19+ only. Staff will ask for valid government photo ID at the Queen Street West door, including overnight walk-ins on the listed 24-hour schedule.",
  },
  {
    question: "Where is the Queen Street West store?",
    answer: `Blouds Dispensary is at ${gbpLocation.address}. Call ${gbpLocation.phone}. The public website for this store is the homepage.`,
  },
  {
    question: "Can I get cigarettes delivered from Queen Street West?",
    answer:
      "Cannabis delivery from this door is a separate dispatcher-confirmed service. Do not assume cigarettes are on a delivery order. Use the Queen Street West delivery guide for cannabis delivery hours, then confirm the cigarette category in store or by phone.",
  },
  {
    question: "How is this different from the city cigarette info page?",
    answer:
      "This route is the Queen Street West / downtown neighbourhood page for the cigarette category at 117 Queen St W. Broader cigarette terminology stays on the Native cigarettes info page and the Native cigarettes resource guide.",
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
        { "@type": "ListItem", position: 2, name: "Queen Street West Native Cigarettes", item: PAGE_URL },
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

export default function QueenStreetNativeCigarettesPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <article className={styles.content}>
        <p className={styles.kicker}>Queen Street West cigarettes · Adults 19+ · Tobacco is addictive</p>
        <h1 className={styles.pageTitle}>Native Cigarettes on Queen Street West in Downtown Brampton</h1>
        <p className={styles.lede}>
          {gbpLocation.storeName} lists a cigarette category at the downtown Queen Street West walk-in,{" "}
          <strong>{gbpLocation.address}</strong>. This page is the neighbourhood guide for that door — not a city-wide
          Brampton cigarette roundup, and not a claim about Nation affiliation or tax status.
        </p>
        <p className={styles.lede}>
          “Native cigarettes” is common adult search language for the brands listed on the current{" "}
          <Link href={CIGARETTE_MENU}>cigarette menu</Link>. Open that menu for names and posted prices, or call{" "}
          <a href={gbpLocation.phoneHref}>{gbpLocation.phone}</a> if one listing is the reason for the trip. Storefront
          arrival stays on the <Link href="/visit">Queen Street West walk-in guide</Link>. Overnight and “open now”
          visits use the{" "}
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
            Adults 19+ · Tobacco and nicotine are addictive
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href={CIGARETTE_MENU}>
              Cigarette menu
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
          <h2>Queen Street West cigarette counter</h2>
          <p>
            The cigarette category is sold at this downtown Queen Street West store. Use the{" "}
            <Link href={CIGARETTE_MENU}>current cigarette menu</Link> to see what is listed before you travel. This
            page does not freeze a brand list, pack size, or price.
          </p>
          <p>
            Commercial cigarettes are tobacco products. They are not cannabis flower, and they are not traditional or
            ceremonial tobacco. Tobacco and nicotine are addictive. Adults 19+ only.
          </p>
        </section>

        <section className={styles.section}>
          <h2>How to read “Native cigarettes” here</h2>
          <p>
            Adults often use “Native cigarettes” when they mean the cigarette brands on a local menu. That phrase does
            not prove who manufactured a brand, whether a sale is tax-exempt, or any Nation relationship. Those are
            separate questions. This Queen Street West page does not make those claims.
          </p>
          <p>
            For Ontario terminology around the phrase, manufacturer identity, and tax status, use the{" "}
            <Link href="/resources/native-smokes/native-cigarettes-guide">Native cigarettes resource guide</Link>. For
            a broader cigarette info page, see{" "}
            <Link href="/info/native-cigarettes-brampton">Native cigarettes Brampton</Link>. Current retail details
            stay on the <Link href={CIGARETTE_MENU}>cigarette category</Link>.
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
            Nicotine vape is a separate category from cigarettes. If that is the product you want, use the{" "}
            <Link href="/nicotine-vape-queen-street-brampton">Queen Street West nicotine vape guide</Link> or the{" "}
            <Link href="/items/vapes">nicotine vape menu</Link>. Flower browsing stays on the{" "}
            <Link href="/weed-dispensary-brampton">Queen Street West weed hub</Link>.
          </p>
        </section>

        <section className={styles.section} id="faq">
          <h2>FAQ: Native cigarettes on Queen Street West</h2>
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
              19+. Tobacco and nicotine are addictive.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.primaryAction} href={CIGARETTE_MENU}>
                Cigarette menu
              </Link>
              <Link className={styles.secondaryAction} href="/visit">
                Queen Street walk-in
              </Link>
              <Link className={styles.secondaryAction} href="/24-hour-queen-street-brampton-dispensary">
                24-hour Queen Street West
              </Link>
              <Link className={styles.secondaryAction} href="/nicotine-vape-queen-street-brampton">
                Queen Street West nicotine vape
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
