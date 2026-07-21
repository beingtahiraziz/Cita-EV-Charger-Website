"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Smartphone,
  MapPin,
  CalendarClock,
  BarChart3,
  Server,
  Users,
  CreditCard,
  Activity,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { PageExtras } from "@/components/sections/PageExtras";
import { AnimatedHeroTitle } from "@/components/ui/AnimatedHeroTitle";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
import styles from "./page.module.css";

const heroSlides = ["/hero/banner_new_1.png", "/hero/banner_new_2.png", "/hero/banner_new_3.png"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const appFeatures = [
  { icon: <MapPin size={26} />, title: "Locate charging stations" },
  { icon: <CalendarClock size={26} />, title: "Start & schedule sessions" },
  { icon: <Activity size={26} />, title: "Real-time monitoring" },
  { icon: <BarChart3 size={26} />, title: "Energy usage analytics" },
];

const cpmsFeatures = [
  { icon: <Server size={26} />, title: "Central multi-charger dashboard" },
  { icon: <Users size={26} />, title: "User & RFID access control" },
  { icon: <CreditCard size={26} />, title: "Billing & revenue management" },
  { icon: <Layers size={26} />, title: "Manages both AC & DC" },
];

const faqs = [
  { q: "What software solutions does CITA offer?", a: "Two dedicated solutions: the CITA EV App for home users to monitor and control charging, and CITA CPMS for commercial, fleet and public charging management." },
  { q: "Does the software support multiple chargers at one location?", a: "Yes. CITA CPMS manages multiple chargers at a single location from one central dashboard, ideal for offices, residential communities, fleets and public sites." },
  { q: "Can I control access and users through CITA CPMS?", a: "Yes. Administrators can assign permissions, manage RFID cards, track charging sessions and monitor usage across commercial environments." },
  { q: "Is the software compatible with all CITA EV chargers?", a: "Yes. CPMS works with all CITA AC and DC chargers used in commercial and public locations, while the CITA EV App works with CITA home chargers." },
  { q: "Can CITA CPMS manage both AC and DC chargers?", a: "Absolutely. CPMS manages both AC and DC chargers from a single system, supporting mixed workplace and high-power fast-charging environments." },
];

export default function SoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <HeroSlideshow images={heroSlides} overlay={null} priority />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <span className={styles.eyebrow}>Software</span>
            <AnimatedHeroTitle text="Smart EV Charging Starts Here" className={styles.heroTitle} />
            <p className={styles.heroSubtitle}>
              The CITA EV App and Charge Point Management System give you full
              control of every charger &mdash; from your phone or your desk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* APP */}
      <section className={styles.splitSection}>
        <div className={styles.splitContainer}>
          <motion.div className={styles.splitText} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className={styles.iconWrap}><Smartphone size={30} /></div>
            <h2 className={styles.sectionTitle}>CITA EV App</h2>
            <p className={styles.sectionText}>
              Take control of your EV charging with the CITA EV App. Locate
              charging stations, schedule sessions, monitor usage and optimise
              energy efficiency &mdash; all from your phone.
            </p>
            <motion.div className={styles.featureList} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {appFeatures.map((f, i) => (
                <motion.div key={i} className={styles.featureRow} variants={fadeUp}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                  {f.title}
                </motion.div>
              ))}
            </motion.div>
            <div className={styles.storeBadges}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="https://apps.apple.com/gb/app/citaev/id6505054937" target="_blank" rel="noopener noreferrer" className={styles.storeBadge}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" />
              </a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="https://play.google.com/store/apps/details?id=com.cita.ev&hl=en" target="_blank" rel="noopener noreferrer" className={styles.storeBadge}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
              </a>
            </div>
          </motion.div>
          <motion.div className={styles.splitImageWrap} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Image src="https://citaevcharger.com.pk/wp-content/uploads/2025/12/smart-ev-app-solutions-for-all-chargers.png" alt="CITA EV App" fill className={styles.splitImage} unoptimized />
          </motion.div>
        </div>
      </section>

      {/* CPMS */}
      <section className={`${styles.splitSection} ${styles.splitAlt}`}>
        <div className={`${styles.splitContainer} ${styles.reverse}`}>
          <motion.div className={styles.splitImageWrap} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Image src="https://citaevcharger.com.pk/wp-content/uploads/2026/01/CPMS@2x.png" alt="CITA CPMS Dashboard" fill className={styles.splitImage} unoptimized />
          </motion.div>
          <motion.div className={styles.splitText} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className={styles.iconWrap}><Server size={30} /></div>
            <h2 className={styles.sectionTitle}>Charge Point Management System</h2>
            <p className={styles.sectionText}>
              CITA CPMS is built for commercial, fleet and public charging
              operators. Manage multiple chargers across locations from one
              central dashboard &mdash; monitor sessions, control access, handle
              billing and optimise performance in real time.
            </p>
            <motion.div className={styles.featureList} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {cpmsFeatures.map((f, i) => (
                <motion.div key={i} className={styles.featureRow} variants={fadeUp}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                  {f.title}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <motion.h2 className={styles.sectionTitle} style={{ textAlign: "center" }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Frequently Asked Questions
          </motion.h2>
          <div className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={styles.faqItem}>
                <button className={styles.faqQuestion} onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  {faq.q}
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === idx && <div className={styles.faqAnswer}>{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRA SECTIONS */}
      <PageExtras
        trustItems={["OCPP 1.6 Compatible", "Works with All CITA Chargers", "Real-Time Monitoring", "Secure Access Control"]}
        whyTitle="Built for operators of every size"
        whySubtitle="One platform that scales from a single home charger to a nationwide network."
        features={[
          { title: "For Homes", text: "The CITA EV App lets homeowners schedule, monitor and control charging from their phone." },
          { title: "For Businesses", text: "CPMS manages access, billing and multiple chargers across one or many locations." },
          { title: "For Fleets", text: "Centralised dashboards, usage analytics and load management keep fleets moving." },
        ]}
        altBackground
      />

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.div className={styles.ctaCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className={styles.ctaTitle}>See the platform in action</h2>
          <p className={styles.ctaText}>Book a demo or ask our team how CITA software fits your charging operation.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>Book a Demo</Link>
            <a href="https://wa.me/923007929616" className={styles.ctaSecondary} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
