import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SccHubLinks from "./SccHubLinks";
import styles from "./GBPLandingPage.module.css";
import { bloudsWeedOwner as store } from "../lib/weedDiscovery";
import { SITE_ORIGIN, gbpLocation, siteUrl } from "../lib/gbp-location";

const PAGE_PATH = "/weed-dispensary-brampton";
const pageUrl = siteUrl(`/${gbpLocation.slug}`);
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(gbpLocation.address)}&z=16&output=embed`;

const faqItems = [
  {
    question: "Is this the Queen Street West weed dispensary in downtown Brampton?",
    answer: `Yes. ${store.storeName} at ${store.address} is the downtown Queen Street West walk-in weed dispensary. This page is the neighbourhood weed owner for that door — not a city-wide Brampton roundup.`,
  },
  {
    question: "Is this page a city-wide Brampton weed dispensary roundup?",
    answer:
      "No. This route is only for the Queen Street West / downtown store at 117 Queen St W. Do not travel on a different Brampton pin.",
  },
  {
    question: "How is this Queen Street West weed page different from the walk-in guide?",
    answer:
      "This page is the broad weed dispensary owner for Queen Street West — flower tiers, cannabis formats, and store facts. The walk-in guide covers how the downtown storefront looks and how to arrive.",
  },
  {
    question: "How is this different from the 24-hour Queen Street West page?",
    answer:
      "The 24-hour page is the overnight / open-now owner for this door. This page stays on neighbourhood weed browsing for Queen Street West / downtown. Overnight notes stay on the 24-hour Queen Street West page.",
  },
  {
    question: "Does this Queen Street West weed dispensary page include cannabis delivery?",
    answer:
      "No. Cannabis delivery from this door is a separate dispatcher-confirmed service. Use the Queen Street West delivery guide for LIVE ORDER and delivery hours. This page is the walk-in weed owner.",
  },
  {
    question: "Can I start with flower tiers from this downtown Queen Street West page?",
    answer:
      "Yes. Adults 19+ can start with Budget, AA, AAA+, Premium, and Exotic flower tiers, or choose pre-rolls, edibles, vapes, concentrates, or accessories. Call +1 (437) 371-5377 if one listing is the reason for the trip.",
  },
  {
    question: "Does this weed dispensary page cover native cigarettes or nicotine vape?",
    answer:
      "No. Those are separate Queen Street West neighbourhood pages. Use the native cigarettes guide for the cigarette category and the nicotine vape guide for nicotine vape. This page stays on weed and cannabis.",
  },
  {
    question: "What is the exact Queen Street West pin for this weed dispensary?",
    answer:
      "Blouds Dispensary is at 117 Queen St W, Brampton, ON L6Y 1M3. Call +1 (437) 371-5377. The public website for this store is the homepage.",
  },
  {
    question: "Do I need to be 19+ to shop weed on Queen Street West?",
    answer: "Yes. Adults 19+ only. Staff will ask for valid government photo ID at the Queen Street West door.",
  },
  {
    question: "Where should I browse the current Queen Street West menu from this page?",
    answer:
      "The homepage menu is the current public listing for this store. This neighbourhood page helps you start with a flower tier or cannabis format before you walk in at 117 Queen St W, Brampton, ON L6Y 1M3.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: gbpLocation.weedOwnerTitle,
      description: gbpLocation.weedOwnerDescription,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      about: { "@id": `${SITE_ORIGIN}/#store` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
        { "@type": "ListItem", position: 2, name: "Queen Street West Weed Dispensary", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      about: { "@id": `${SITE_ORIGIN}/#store` },
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

function renderAnswer(item: (typeof faqItems)[number]) {
  if (!item.answer.includes(store.phoneDisplay)) return item.answer;
  const [before, after] = item.answer.split(store.phoneDisplay);
  return (
    <>
      {before}
      <a href={`tel:${store.phoneIntl}`}><strong>{store.phoneDisplay}</strong></a>
      {after}
    </>
  );
}

export function GBPLandingPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Open 24 Hours · Downtown Queen Street West · Adults 19+</p>
          <h1>{gbpLocation.weedOwnerH1}</h1>
          <p className={styles.heroAddress}>117 Queen St W, Brampton, ON L6Y 1M3</p>
          <p className={styles.heroAddress}>Call <a href={`tel:${store.phoneIntl}`}>{store.phoneDisplay}</a> · {gbpLocation.hoursDisplay}</p>
          <div className={styles.actions}>
            <Link href="#find-your-weed" className={styles.primaryAction}>Find Your Weed</Link>
            <Link href="#visit" className={styles.secondaryAction}>Visit Blouds</Link>
            <Link href="/visit" className={styles.secondaryAction}>Walk-in guide</Link>
          </div>
          <SccHubLinks currentPath={PAGE_PATH} variant="dark" />
        </section>

        <section className={styles.section}>
          <h2>Queen Street West / downtown weed dispensary</h2>
          <p>
            Looking for a weed dispensary in downtown Brampton that is open now? Blouds Dispensary is the Queen Street West walk-in cannabis store at <strong>{store.streetAddress}</strong> and is <strong>open 24 hours a day, seven days a week</strong>. This page is the neighbourhood weed dispensary owner for that Queen Street West / downtown door — not a city-wide Brampton roundup.
          </p>
          <p>
            Use <strong>117 Queen St W, Brampton, ON L6Y 1M3</strong> in maps. Downtown Queen Street West shoppers use this page to confirm this door, hours, and phone before walking in. Storefront arrival stays on the <Link href="/visit">Queen Street West walk-in guide</Link>. Overnight and late-night visits can use the <Link href="/24-hour-queen-street-brampton-dispensary">24-hour Queen Street West guide</Link>. Cannabis delivery from this Queen Street West store uses dispatcher-confirmed hours on the <Link href="/cannabis-delivery-queen-street-brampton">Queen Street West delivery guide</Link> — not the 24-hour walk-in.
          </p>
          <p>
            At Blouds Dispensary on Queen St W, adults 19+ can start with flower by tier or choose a cannabis format such as pre-rolls, edibles, vapes, concentrates or accessories. Flower shelves on this Queen Street West door are <Link href="/exotic-weed">Exotic Weed</Link>, <Link href="/premium-weed">Premium Weed</Link>, <Link href="/aaa-weed">AAA+ Weed</Link>, <Link href="/aa-weed">AA Weed</Link>, and <Link href="/budget-weed">Budget Weed</Link>. The cigarette category has a <Link href="/native-cigarettes-brampton-queen">Queen Street West native cigarettes guide</Link>. Nicotine vape is separate from THC vape — use the <Link href="/nicotine-vape-queen-street-brampton">Queen Street West nicotine vape guide</Link>. Shoppers looking for a dispensary Brampton or dispensary near me can use the <Link href="/dispensary-brampton">downtown Queen Street open guide</Link> for the exact pin and hours. Shoppers comparing cannabis stores in Brampton can use the <Link href="/brampton-walk-in-checklist">walk-in checklist</Link> to confirm hours, address, and phone. The <Link href="/resources/local-guides/queen-street-brampton-visit-guide">Queen Street Brampton Visit Guide</Link> is also available for shoppers who want additional store-specific visit information before heading over.
          </p>
          <p>
            The public website for this store is the homepage. If you are looking for one specific product, call <a href={`tel:${store.phoneIntl}`}><strong>{store.phoneDisplay}</strong></a> before making a special trip.
          </p>
        </section>

        <section className={styles.section} id="find-your-weed">
          <p className={styles.kicker}>Find Your Weed at Blouds</p>
          <h2>Start With Flower</h2>
          <div className={styles.cardGrid}>{store.flowerTiers.map((item) => <Link href={item.href} className={styles.card} key={item.href}><span>{item.label}</span><small>{item.description}</small></Link>)}</div>
          <div className={styles.inlineGuide}><span>Want more context before choosing a tier?</span><Link href="/resources/weed-flower-guides">Explore Weed &amp; Flower Guides</Link></div>
          <h3 className={styles.subheading}>Choose a Cannabis Format</h3>
          <div className={styles.cardGrid}>{store.categories.map((item) => <Link href={item.href} className={styles.card} key={item.href}><span>{item.label}</span><small>{item.description}</small></Link>)}</div>
          <p className={styles.note}>Individual products can change. Call <a href={`tel:${store.phoneIntl}`}><strong>{store.phoneDisplay}</strong></a> if you are visiting for something specific.</p>
        </section>

        <section className={styles.section}>
          <h2>Weed, Cannabis, Bud and Flower</h2>
          <p>Different shoppers use different words for cannabis. The terms overlap, but they can describe different parts of the shopping experience.</p>
          <div className={styles.termGrid}>
            <article><h3>Weed</h3><p>Weed is everyday language commonly used for cannabis. A shopper looking for weed may be interested in flower or another cannabis format such as pre-rolls, edibles, vapes or concentrates.</p></article>
            <article><h3>Cannabis</h3><p>Cannabis is the broader term. It includes flower and the other cannabis formats available to explore at Blouds Dispensary.</p></article>
            <article><h3>Flower</h3><p>Flower refers to dried cannabis flower. Blouds organizes flower into Budget, AA, AAA+, Premium and Exotic tiers.</p></article>
            <article><h3>Bud</h3><p>Bud is a common informal term for cannabis flower.</p></article>
          </div>
          <p>For someone starting with a general Weed search, choosing between flower tiers and other cannabis formats is often the most useful next step.</p>
        </section>

        <section className={styles.visitSection} id="visit">
          <div><p className={styles.kicker}>Open 24 Hours at 117 Queen St W</p><h2>{store.storeName}</h2><address>{store.streetAddress}<br />{store.city}, {store.province} {store.postalCode}</address></div>
          <div className={styles.visitFacts}><strong>Open 24 Hours · 7 Days a Week</strong><a href={`tel:${store.phoneIntl}`}>Phone: {store.phoneDisplay}</a><a href={gbpLocation.directionsUrl}>Get directions</a><span>Adults 19+</span></div>
          <p>Blouds Dispensary is available around the clock for adults 19+ who want flexibility in when they visit Queen Street West. If a particular product is the reason for your trip, call ahead before travelling specifically for that item. The <Link href="/visit">downtown storefront walk-in guide</Link> has arrival notes, hours, and the contact map. Late-night shoppers can use the <Link href="/24-hour-queen-street-brampton-dispensary">24-hour Queen Street West page</Link>.</p>
          <div className={styles.mapWrap}>
            <iframe
              title={`Map of ${store.storeName} at ${store.address}`}
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Learn Before You Browse</h2>
          <p>Want a clearer way to read the Blouds Dispensary menu? Start with Cannabis 101, the Queen Street Visit Guide or the Weed &amp; Flower Guides.</p>
          <div className={styles.learningLinks}>
            <Link href="/resources/cannabis-101">Cannabis 101</Link>
            <Link href="/resources/local-guides/queen-street-brampton-visit-guide">Queen Street Brampton Visit Guide</Link>
            <Link href="/resources/weed-flower-guides">Weed &amp; Flower Guides</Link>
            <Link href="/resources">Resource Centre</Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Helpful Blouds Guides</h2>
          <div className={styles.guideGrid}>{store.guides.map((guide) => <article className={styles.guideCard} key={guide.href}><h3>{guide.label}</h3><p>{guide.description}</p><Link href={guide.href}>Explore {guide.label}</Link></article>)}</div>
        </section>

        <section className={styles.section} id="faq">
          <h2>FAQ: Queen Street West weed dispensary</h2>
          <div className={styles.faqList}>{faqItems.map((item) => <article className={styles.faqItem} key={item.question}><h3>{item.question}</h3><p>{renderAnswer(item)}</p></article>)}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
