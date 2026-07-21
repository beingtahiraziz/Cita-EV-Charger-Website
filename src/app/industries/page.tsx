"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageExtras } from "@/components/sections/PageExtras";
import { AnimatedHeroTitle } from "@/components/ui/AnimatedHeroTitle";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
import { industries } from "@/data/industries";
import styles from "./page.module.css";

const heroSlides = ["/hero/banner_new_1.png", "/hero/banner_new_2.png", "/hero/banner_new_3.png"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function IndustriesPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <HeroSlideshow images={heroSlides} overlay={null} priority />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <span className={styles.eyebrow}>Industries</span>
            <AnimatedHeroTitle text="EV Charging for Every Sector" className={styles.heroTitle} />
            <p className={styles.heroSubtitle}>
              From homes and workplaces to fleets and public infrastructure,
              CITA EV delivers tailored charging solutions across Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className={styles.gridSection}>
        <div className={styles.gridContainer}>
          <motion.div className={styles.grid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {industries.map((ind) => (
              <motion.div key={ind.slug} className={styles.card} variants={fadeUp}>
                <Link href={`/industries/${ind.slug}`} className={styles.cardLink}>
                  <div className={styles.cardImageWrap}>
                    <Image src={ind.image} alt={ind.title} fill className={styles.cardImage} unoptimized />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{ind.title}</h3>
                    <p className={styles.cardText}>{ind.short}</p>
                    <span className={styles.cardCta}>Learn more <ArrowRight size={15} /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXTRA SECTIONS */}
      <PageExtras
        trustItems={["Home to Highway", "AC & DC Solutions", "Scalable Deployments", "Local Support"]}
        whyTitle="One partner for every sector"
        whySubtitle="Whatever your property or fleet, CITA EV has a charging solution that fits."
        features={[
          { title: "Tailored Solutions", text: "Charger types and power levels matched to each site's real usage patterns." },
          { title: "Certified Hardware", text: "UKCA, CE, ADQCC and SASO certified equipment built for demanding environments." },
          { title: "Ongoing Support", text: "Installation, maintenance and smart management for long-term reliability." },
        ]}
        altBackground
      />

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.div className={styles.ctaCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className={styles.ctaTitle}>Not sure which solution fits your site?</h2>
          <p className={styles.ctaText}>Our team designs charging setups for any property or fleet in Pakistan.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>Request a Consultation</Link>
            <Link href="/products" className={styles.ctaSecondary}>Explore Chargers</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
