import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ — Blouds Dispensary | Brampton Dispensary Questions",
  description:
    "Frequently asked questions about Blouds Dispensary in Brampton. Hours, location, products, pricing, bundle offers, and everything you need to know before visiting.",
  alternates: {
    canonical: "https://bloudsdispensary.ca/faq",
  },
};

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
      { q: "Do you have an online menu?", a: "Yes. Browse the current menu at bloudsdispensary.ca for listed categories, items, prices, and package details." },
      { q: "What are your flower tiers?", a: "The flower menu is organized into Exotic, Premium, AAA+, AA, and Budget sections so shoppers can compare current listings and posted prices." },
      { q: "Do you list edibles online?", a: "Yes. Check the current edibles category for the items and package details listed online." },
      { q: "Do you list vapes?", a: "Yes. Browse the current disposable and refillable vape categories for listed nicotine and THC vape brands and package details." },
      { q: "Do you sell native cigarettes?", a: "Yes! We carry one of the widest selections of native cigarettes in downtown Brampton, including premium and value brands in multiple varieties." },
    ],
  },
  {
    title: "💰 Pricing & Bundle Offers",
    faqs: [
      { q: "What is the cheapest weed you sell?", a: "Our Budget tier starts at $3/g with value ounces from $40. Our AA tier is $4/g. These are the most competitive prices you'll find in Brampton." },
      { q: "What bundle pricing do you offer?", a: "Flower bundle pricing includes a 3g total option — the 3g total is shown clearly before purchase. Our Exotic, Premium, and AAA+ tiers also offer 6g bundle pricing, with 6g total pricing." },
      { q: "Do you have ounce deals?", a: "Yes! Budget ounces from $40, AA ounces from $90, AAA+ ounces from $100. All with freshness and quality guaranteed." },
      { q: "How does bundle pricing work?", a: "The 3g bundle pricing applies to every tier automatically. The 6g bundle pricing applies to Exotic, Premium, and AAA+ tiers. These are our standard everyday bundle offers." },
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
              Browse the resource hub or visit us at 117 Queen St W, Brampton.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
