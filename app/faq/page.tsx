import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";
import { TIER_CONFIG } from "../lib/products";
import { BOGO_BUY_2_GET_1, BOGO_BUY_3_GET_3, formatAsLowAsAfterPromos, formatBoardDealLine, formatDollars, formatPayEquals, formatPerGram } from "../lib/flowerDeals";

export const metadata: Metadata = {
  title: { absolute: "FAQ — Blouds Dispensary | Brampton Dispensary Questions" },
  description:
    "Frequently asked questions about Blouds Dispensary in Brampton. Hours, location, products, pricing, bundle offers, and everything you need to know before visiting.",
  alternates: {
    canonical: "https://www.bloudsdispensary.ca/faq",
  },
};

function boardTierSentence(key: "AAA+" | "PREMIUM" | "EXOTIC"): string {
  const tier = TIER_CONFIG[key];
  const deal3 = tier.deal3g;
  const deal6 = tier.deal6g;
  if (!deal3 || !deal6) return "";
  return `${tier.name} lists at ${formatDollars(tier.unitPrice)}/g. ${formatBoardDealLine(deal3)} (${formatPerGram(deal3.price, deal3.grams)}). ${formatBoardDealLine(deal6)} (${formatPerGram(deal6.price, deal6.grams)}). ${formatAsLowAsAfterPromos(deal6.price, deal6.grams)}.`;
}
const BOARD_DEAL_ANSWER = ["Exotic, Premium, and AAA+ use the in-store board deals. AA does not include these deals. Budget keeps a separate $10 / 3g Special.", boardTierSentence("AAA+"), boardTierSentence("PREMIUM"), boardTierSentence("EXOTIC"), "Board notation is 2g=3g and 3g=6g."].join(" ");
const aaaDeals = TIER_CONFIG["AAA+"];
const BOARD_DEAL_HOW = [`${BOGO_BUY_2_GET_1} means you pay for 2g and receive 3g.`, aaaDeals.deal3g ? `On AAA+ that is ${formatPayEquals(aaaDeals.deal3g.price, aaaDeals.deal3g.grams)}.` : "", `${BOGO_BUY_3_GET_3} means you pay for 3g and receive 6g.`, aaaDeals.deal6g ? `On AAA+ that is ${formatPayEquals(aaaDeals.deal6g.price, aaaDeals.deal6g.grams)}.` : "", "Premium and Exotic use the same FREE lines with their own paid totals. The 6g total is on Exotic, Premium, and AAA+ only. AA has neither board deal."].filter(Boolean).join(" ");

const FAQ_CATEGORIES = [
  {
    title: "📍 Location & Hours",
    faqs: [
      { q: "Where is Blouds Dispensary located?", a: "We are located at 117 Queen St W, Brampton, ON L6Y 1M3, on the Queen Street W side of downtown Brampton." },
      { q: "What are your hours?", a: "We are open 24 Hours a day, 7 days a week. Walk in anytime with valid 19+ ID." },
      { q: "Is there parking nearby?", a: "Parking options can vary by time of day in downtown Brampton. Check nearby street and lot signage when you arrive." },
      { q: "How far are you from Mississauga?", a: "Blouds is in Brampton at 117 Queen St W. Travel time from Mississauga depends on your starting point and traffic." },
      { q: "How do I get to Blouds Dispensary?", a: "Use 117 Queen St W, Brampton, ON L6Y 1M3 in your map app, then check the menu before heading over." },
    ],
  },
  {
    title: "🌿 Products & Menu",
    faqs: [
      { q: "What products do you carry?", a: "We carry over 200 strains of cannabis flower across 5 quality tiers (Exotic, Premium, AAA+, AA, Budget), plus edibles (gummies, chocolates, baked goods), vape pens, disposable vapes, concentrates (shatter, wax, hash, diamonds, live resin), pre-rolled joints, native cigarettes, and accessories." },
      { q: "Do you have an online menu?", a: "Yes. Browse the current menu at www.bloudsdispensary.ca for listed categories, items, prices, and package details." },
      { q: "What are your flower tiers?", a: "The flower menu is organized into Exotic, Premium, AAA+, AA, and Budget sections so shoppers can compare current listings and posted prices." },
      { q: "Do you list edibles online?", a: "Yes. Check the current edibles category for the items and package details listed online." },
      { q: "Do you list vapes?", a: "Yes. Browse the current disposable and refillable vape categories for listed nicotine and THC vape brands and package details." },
      { q: "Do you sell native cigarettes?", a: "Yes! We carry one of the widest selections of native cigarettes in downtown Brampton, including premium and value brands in multiple varieties." },
    ],
  },
  {
    title: "💰 Pricing & Flower Deals",
    faqs: [
      { q: "What is the cheapest weed you sell?", a: "Our Budget tier starts at $3/g with value ounces from $40. Our AA tier is $4/g. These are the most competitive prices you'll find in Brampton." },
      { q: "What flower deals match the in-store board?", a: BOARD_DEAL_ANSWER },
      { q: "Do you have ounce deals?", a: "Yes! Budget ounces from $40, AA ounces from $90, AAA+ ounces from $100. All with freshness and quality guaranteed." },
      { q: "How do Buy 2g Get 1g FREE and Buy 3g Get 3g FREE work?", a: BOARD_DEAL_HOW },
      { q: "How does the tier pricing work?", a: "Each flower strain is graded into one of five quality tiers. The tier determines the per-gram price. This transparent system means you always know exactly what you're paying — no confusing markups or inconsistent pricing." },
    ],
  },
  {
    title: "🛒 Shopping & Experience",
    faqs: [
      { q: "Do I need an appointment?", a: "No. Blouds Dispensary is walk-in friendly. Just bring valid 19+ ID and check the menu before visiting." },
      { q: "Can I order online?", a: "Currently, Blouds Dispensary is an in-store shopping experience only. You can browse the current menu online before visiting." },
      { q: "Do you offer delivery?", a: "Delivery is coming soon! Visit our delivery page to sign up for email notifications when we launch our delivery service." },
      { q: "What payment methods do you accept?", a: "We accept cash and debit. No credit cards at this time." },
      { q: "Can your staff help me compare menu items?", a: "Yes. Staff can help you compare the categories, formats, package details, and prices shown on the current menu." },
      { q: "Is there a minimum purchase?", a: "No minimum purchase required. You can buy as little as 1 gram." },
    ],
  },
];

export default function FAQPage() {
  // JSON-LD for FAQ page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.main}>
        <Navbar />

        {/* FAQ Banner */}
        <section style={{ width: "100%", overflow: "hidden", marginTop: "92px" }}>
          <img
            src="/banners/Blouds_FAQ_Info.webp"
            alt="Blouds Dispensary FAQ — Your Questions Answered"
            style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
          />
        </section>

        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Everything you need to know about Blouds Dispensary — Brampton&apos;s premium dispensary at 117 Queen St W in Brampton.
          </p>

          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              {cat.faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          ))}

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Use the <Link href="/visit">Queen Street West walk-in guide</Link> or the{" "}
              <Link href="/brampton-walk-in-checklist">Brampton walk-in checklist</Link> for the downtown storefront, the{" "}
              <Link href="/dispensary-brampton">Brampton dispensary near me open guide</Link> for the Queen Street pin
              and hours, or the <Link href="/24-hour-queen-street-brampton-dispensary">24-hour Queen Street West page</Link>{" "}
              for overnight walk-ins. Visit us at 117 Queen St W, Brampton.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
