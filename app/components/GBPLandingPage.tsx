import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SccHubLinks from "./SccHubLinks";
import styles from "./GBPLandingPage.module.css";
import { bloudsWeedOwner as store } from "../lib/weedDiscovery";
import { SITE_ORIGIN, gbpLocation, siteUrl } from "../lib/gbp-location";

const faqItems = [
  { question: "Where is Blouds Dispensary?", answer: `Blouds Dispensary is the downtown Queen Street West walk-in at ${store.address}.` },
  { question: "Is Blouds Dispensary open 24 hours?", answer: "Yes. The Queen Street West storefront is listed as open 24 hours a day, seven days a week. Overnight notes live on the 24-hour Queen Street West page." },
  { question: "What is the phone number for Blouds Dispensary?", answer: `Call Blouds Dispensary at ${store.phoneDisplay}.` },
  { question: "What cannabis categories can I explore?", answer: "Adults 19+ can explore Budget, AA, AAA+, Premium and Exotic flower tiers, along with pre-rolls, edibles, vapes, concentrates and accessories." },
  { question: "What is the difference between weed and cannabis?", answer: "Weed is common everyday terminology for cannabis. Cannabis is the broader term and can include flower, pre-rolls, edibles, vapes, concentrates and other formats." },
  { question: "What is the difference between bud and flower?", answer: "Flower is the category term for dried cannabis flower. Bud is a common informal word people use for flower." },
  { question: "Can I explore different flower tiers?", answer: "Yes. Blouds Dispensary has dedicated sections for Budget, AA, AAA+, Premium and Exotic flower browsing." },
  { question: "How can I check on a specific product before visiting?", answer: `Call Blouds Dispensary at ${store.phoneDisplay} before making a special trip for one specific product.` },
  { question: "Do I need to be 19+?", answer: "Yes. Blouds Dispensary is for adults 19+." },
];

const pageUrl = siteUrl(`/${gbpLocation.slug}`);

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
          <p className={styles.heroAddress}>{store.address}</p>
          <p className={styles.heroAddress}>Call <a href={`tel:${store.phoneIntl}`}>{store.phoneDisplay}</a> · {gbpLocation.hoursDisplay}</p>
          <div className={styles.actions}><Link href="#find-your-weed" className={styles.primaryAction}>Find Your Weed</Link><Link href="#visit" className={styles.secondaryAction}>Visit Blouds</Link></div>
          <SccHubLinks currentPath={`/${gbpLocation.slug}`} variant="dark" />
        </section>

        <section className={styles.section}>
          <h2>Weed and Cannabis on Queen Street West</h2>
          <p>Looking for a weed dispensary in downtown Brampton that is open now? Blouds Dispensary is the Queen Street West walk-in cannabis store at <strong>{store.streetAddress}</strong> and is <strong>open 24 hours a day, seven days a week</strong>.</p>
          <p>Use <strong>{store.address}</strong> in maps. Downtown Queen Street West shoppers use this page to confirm this door, hours, and phone before walking in. Overnight and late-night visits can use the <Link href="/24-hour-queen-street-brampton-dispensary">24-hour Queen Street West guide</Link>. Cannabis delivery from this Queen Street West store uses dispatcher-confirmed hours on the <Link href="/cannabis-delivery-queen-street-brampton">Queen Street West delivery guide</Link> — not the 24-hour walk-in.</p>
          <p>At Blouds Dispensary on Queen St W, adults 19+ can start with flower by tier or choose a cannabis format such as pre-rolls, edibles, vapes, concentrates or accessories. The cigarette category has a <Link href="/native-cigarettes-brampton-queen">Queen Street West native cigarettes guide</Link>. Nicotine vape is separate from THC vape — use the <Link href="/nicotine-vape-queen-street-brampton">Queen Street West nicotine vape guide</Link>. Use the <Link href="/visit">Queen Street West walk-in guide</Link> for storefront arrival and an honest comparison checklist. Shoppers looking for a dispensary Brampton or dispensary near me can use the <Link href="/dispensary-brampton">downtown Queen Street open guide</Link> for the exact pin and hours. Shoppers comparing cannabis stores in Brampton can use the <Link href="/brampton-walk-in-checklist">walk-in checklist</Link> to confirm hours, address, and phone. The <Link href="/resources/local-guides/queen-street-brampton-visit-guide">Queen Street Brampton Visit Guide</Link> is also available for shoppers who want additional store-specific visit information before heading over.</p>
          <p>If you are looking for one specific product, call <a href={`tel:${store.phoneIntl}`}><strong>{store.phoneDisplay}</strong></a> before making a special trip.</p>
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

        <section className={styles.section} id="faq"><h2>Frequently Asked Questions</h2><div className={styles.faqList}>{faqItems.map((item) => <article className={styles.faqItem} key={item.question}><h3>{item.question}</h3><p>{renderAnswer(item)}</p></article>)}</div></section>
      </main>
      <Footer />
    </>
  );
}
