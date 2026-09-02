import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./GBPLandingPage.module.css";
import { bloudsWeedOwner as store } from "../lib/weedDiscovery";

const faqItems = [
  { question: "Where is Blouds Dispensary?", answer: <>Blouds Dispensary is located at <strong>{store.address}</strong>.</> },
  { question: "Is Blouds Dispensary open 24 hours?", answer: <>Yes. Blouds Dispensary is <strong>open 24 hours a day, seven days a week</strong>.</> },
  { question: "What cannabis categories can I explore?", answer: <>Adults 19+ can explore Budget, AA, AAA+, Premium and Exotic flower tiers, along with pre-rolls, edibles, vapes, concentrates and accessories.</> },
  { question: "What is the difference between weed and cannabis?", answer: <><strong>Weed</strong> is common everyday terminology for cannabis. <strong>Cannabis</strong> is the broader term and can include flower, pre-rolls, edibles, vapes, concentrates and other formats.</> },
  { question: "What is the difference between bud and flower?", answer: <><strong>Flower</strong> is the category term for dried cannabis flower. <strong>Bud</strong> is a common informal word people use for flower.</> },
  { question: "Can I explore different flower tiers?", answer: <>Yes. Blouds Dispensary has dedicated sections for Budget, AA, AAA+, Premium and Exotic flower browsing.</> },
  { question: "How can I check on a specific product before visiting?", answer: <>Call Blouds Dispensary at <a href={`tel:${store.phoneIntl}`}><strong>{store.phoneDisplay}</strong></a> before making a special trip for one specific product.</> },
  { question: "Do I need to be 19+?", answer: <>Yes. Blouds Dispensary is for <strong>adults 19+</strong>.</> },
];

const storeSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://www.bloudsdispensary.ca/weed-dispensary-brampton",
  name: store.storeName,
  url: "https://www.bloudsdispensary.ca/weed-dispensary-brampton",
  telephone: store.phoneIntl,
  address: { "@type": "PostalAddress", streetAddress: store.streetAddress, addressLocality: store.city, addressRegion: store.province, postalCode: store.postalCode, addressCountry: "CA" },
  openingHours: "Mo-Su 00:00-23:59",
};

export function GBPLandingPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }} />
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Open 24 Hours · Adults 19+</p>
          <h1>Blouds Dispensary — Weed Dispensary in Brampton</h1>
          <p className={styles.heroAddress}>{store.address}</p>
          <div className={styles.actions}><Link href="#find-your-weed" className={styles.primaryAction}>Find Your Weed</Link><Link href="#visit" className={styles.secondaryAction}>Visit Blouds</Link></div>
        </section>

        <section className={styles.section}>
          <h2>Weed and Cannabis on Queen Street West</h2>
          <p>Blouds Dispensary is located at <strong>{store.streetAddress}</strong> in Brampton and is open <strong>24 hours a day, seven days a week</strong>.</p>
          <p>At Blouds Dispensary on Queen St W, adults 19+ can start with flower by tier or choose a cannabis format such as pre-rolls, edibles, vapes, concentrates or accessories. The <Link href="/resources/local-guides/queen-street-brampton-visit-guide">Queen Street Brampton Visit Guide</Link> is also available for shoppers who want additional store-specific visit information before heading over.</p>
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
          <div className={styles.visitFacts}><strong>Open 24 Hours · 7 Days a Week</strong><a href={`tel:${store.phoneIntl}`}>Phone: {store.phoneDisplay}</a><span>Adults 19+</span></div>
          <p>Blouds Dispensary is available around the clock for adults 19+ who want flexibility in when they visit. If a particular product is the reason for your trip, call ahead before travelling specifically for that item.</p>
        </section>

        <section className={styles.section}>
          <h2>Helpful Blouds Guides</h2>
          <div className={styles.guideGrid}>{store.guides.map((guide) => <article className={styles.guideCard} key={guide.href}><h3>{guide.label}</h3><p>{guide.description}</p><Link href={guide.href}>Explore {guide.label}</Link></article>)}</div>
        </section>

        <section className={styles.section} id="faq"><h2>Frequently Asked Questions</h2><div className={styles.faqList}>{faqItems.map((item) => <article className={styles.faqItem} key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></section>
      </main>
      <Footer />
    </>
  );
}

