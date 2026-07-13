"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./delivery.module.css";

export default function DeliveryContent() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      // Save to Google Sheets via Apps Script
      const res = await fetch(
        `https://script.google.com/macros/s/AKfycbx09_sDal1eMVF1r-hUck4e7oq_XBHEWhGvA79JuhZNQ6P4CdhCas0xE3FfexWQ3hq4/exec?action=delivery_email&email=${encodeURIComponent(email)}&store=BLS01`,
        { method: "GET", mode: "no-cors" }
      );
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("success"); // no-cors always succeeds visually
    }
  }

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <img src="/banners/Blouds_Delivery.webp" alt="Blouds Delivery" style={{ width: "100%", maxWidth: "1200px", display: "block", margin: "0 auto 2rem auto", borderRadius: "var(--radius-lg)" }} />
        <h1 className={styles.pageTitle}>
          Delivery <span className={styles.highlight}>Coming Soon</span>
        </h1>
        <p className={styles.pageSubtitle}>
          Blouds Dispensary is preparing delivery updates for Brampton shoppers.
          Join the list and we&apos;ll let you know when this store is ready.
        </p>

        {/* Email signup */}
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>🔔 Get Notified When We Launch</h2>
          <p className={styles.formDesc}>
            Enter your email to join our delivery waitlist. We&apos;ll send you one email when delivery goes live.
          </p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={styles.emailInput}
                required
                disabled={status === "loading"}
              />
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Notify Me"}
              </button>
            </div>
          </form>
          {status === "success" && (
            <p className={styles.successMsg}>
              ✅ You&apos;re on the list! We&apos;ll notify you when delivery launches.
            </p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        {/* Info cards */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>📦</span>
            <h3 className={styles.infoTitle}>Delivery Updates</h3>
            <p className={styles.infoDesc}>Timing and coverage will be confirmed before this page goes live.</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>🌉</span>
            <h3 className={styles.infoTitle}>Brampton Area</h3>
            <p className={styles.infoDesc}>Delivery area details will stay specific to Blouds Dispensary.</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>💰</span>
            <h3 className={styles.infoTitle}>Store-Specific Routing</h3>
            <p className={styles.infoDesc}>Your signup stays tied to Blouds and store code BLS01.</p>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Until delivery is live, visit us in-store at <strong>117 Queen St W, Brampton</strong> —
            open <strong>24 hours</strong>. Call <strong>(437) 425-0117</strong>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}


