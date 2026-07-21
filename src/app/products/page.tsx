"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { productsData, ProductData } from "@/data/products";
import { AnimatedHeroTitle } from "@/components/ui/AnimatedHeroTitle";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
import styles from "./page.module.css";

const heroSlides = ["/hero/banner_new_1.png", "/hero/banner_new_2.png", "/hero/banner_new_3.png"];

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const CATEGORY_ORDER: ProductData["category"][] = [
  "Residential",
  "Commercial",
  "DC Fast",
  "Software",
];

const CATEGORY_INTRO: Record<ProductData["category"], string> = {
  Residential: "Smart, efficient home charging for daily electric vehicle use.",
  Commercial: "Intelligent charging for workplaces, retail and public spaces.",
  "DC Fast": "High-power rapid charging for high-traffic locations and fleets.",
  Software: "App and management software to monitor and control every charger.",
};

const CATEGORY_HEADING: Record<ProductData["category"], string> = {
  Residential: "Residential Chargers",
  Commercial: "Commercial Chargers",
  "DC Fast": "DC Fast Chargers",
  Software: "Software Solutions",
};

function ProductCard({ product }: { product: ProductData }) {
  return (
    <motion.div className={styles.card} variants={fadeUpVariant}>
      <Link href={`/products/${product.slug}`} className={styles.cardLink}>
        <div className={styles.cardImageWrap}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className={styles.cardImage}
            unoptimized
          />
          <span className={styles.powerBadge}>
            <Zap size={14} /> {product.powerOutput}
          </span>
        </div>
        <div className={styles.cardBody}>
          <span className={styles.categoryTag}>{product.category}</span>
          <h3 className={styles.cardTitle}>{product.name}</h3>
          <p className={styles.cardText}>{product.heroSubheadline}</p>
          <span className={styles.cardCta}>
            View details <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProductsPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <HeroSlideshow images={heroSlides} overlay={null} priority />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
          >
            <span className={styles.eyebrow}>Our Products</span>
            <AnimatedHeroTitle text="EV Chargers for Every Need" className={styles.heroTitle} />
            <p className={styles.heroSubtitle}>
              Explore our range of advanced AC and DC chargers for homes,
              businesses and public infrastructure across Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      {CATEGORY_ORDER.map((category) => {
        const items = productsData.filter((p) => p.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} className={styles.catSection}>
            <div className={styles.catContainer}>
              <motion.div
                className={styles.catHeader}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
              >
                <h2 className={styles.catTitle}>{CATEGORY_HEADING[category]}</h2>
                <p className={styles.catIntro}>{CATEGORY_INTRO[category]}</p>
              </motion.div>

              <motion.div
                className={styles.grid}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {items.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.div
          className={styles.ctaCard}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <h2 className={styles.ctaTitle}>Not sure which charger fits?</h2>
          <p className={styles.ctaText}>
            Tell us about your site and vehicles and our team will recommend the
            right CITA EV solution.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Request a Quote
            </Link>
            <a
              href="https://wa.me/923007929616"
              className={styles.ctaSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
