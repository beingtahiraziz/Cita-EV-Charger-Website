"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FileText, Download, Award, ArrowRight } from "lucide-react";
import { productsData } from "@/data/products";
import { PageExtras } from "@/components/sections/PageExtras";
import { AnimatedHeroTitle } from "@/components/ui/AnimatedHeroTitle";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
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

const documents = [
  {
    title: "CITA EV Certificates",
    desc: "Complete set of product certifications - UKCA, CE, ADQCC, SASO and more.",
    href: "/downloads/CITA_EV_CERTIFICATES.pdf",
    tag: "PDF",
  },
];

export default function DownloadsPage() {
  const datasheetProducts = productsData.filter((p) => p.category !== "Software");
  const softwareProducts = productsData.filter((p) => p.category === "Software");

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <HeroSlideshow images={heroSlides} overlay={null} priority />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <span className={styles.eyebrow}>Downloads</span>
            <AnimatedHeroTitle text="Datasheets & Documents" className={styles.heroTitle} />
            <p className={styles.heroSubtitle}>
              Download product datasheets, certifications and technical
              documents for the full CITA EV charging range.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATES / DOCUMENTS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.h2 className={styles.sectionTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Certifications & Documents
          </motion.h2>
          <motion.div className={styles.docGrid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {documents.map((doc, i) => (
              <motion.a
                key={i}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.docCard}
                variants={fadeUp}
              >
                <div className={styles.docIcon}><Award size={30} /></div>
                <div className={styles.docBody}>
                  <div className={styles.docTop}>
                    <h3 className={styles.docTitle}>{doc.title}</h3>
                    <span className={styles.fileTag}>{doc.tag}</span>
                  </div>
                  <p className={styles.docDesc}>{doc.desc}</p>
                  <span className={styles.docLink}>Download <Download size={16} /></span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRODUCT DATASHEETS */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <motion.h2 className={styles.sectionTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Hardware Datasheets
          </motion.h2>
          <motion.div className={styles.grid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            {datasheetProducts.map((p) => {
              const hasSheet = Boolean(p.datasheetUrl);
              const inner = (
                <>
                  <div className={styles.fileIcon}><FileText size={24} /></div>
                  <div className={styles.cardBody}>
                    <span className={styles.categoryTag}>{p.category} · {p.powerOutput}</span>
                    <h3 className={styles.cardTitle}>{p.name}</h3>
                    <span className={styles.cardLink}>
                      {hasSheet ? "Download datasheet" : "Request datasheet"}
                      {hasSheet ? <Download size={15} /> : <ArrowRight size={15} />}
                    </span>
                  </div>
                </>
              );
              return hasSheet ? (
                <motion.a key={p.slug} href={p.datasheetUrl} target="_blank" rel="noopener noreferrer" className={styles.card} variants={fadeUp}>
                  {inner}
                </motion.a>
              ) : (
                <motion.div key={p.slug} variants={fadeUp}>
                  <Link href={`/products/${p.slug}`} className={styles.card}>{inner}</Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SOFTWARE */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.h2 className={styles.sectionTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Software
          </motion.h2>
          <motion.div className={styles.grid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {softwareProducts.map((p) => (
              <motion.div key={p.slug} variants={fadeUp}>
                <Link href={`/products/${p.slug}`} className={styles.card}>
                  <div className={styles.fileIcon}><FileText size={24} /></div>
                  <div className={styles.cardBody}>
                    <span className={styles.categoryTag}>{p.category} · {p.powerOutput}</span>
                    <h3 className={styles.cardTitle}>{p.name}</h3>
                    <span className={styles.cardLink}>View details <ArrowRight size={15} /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXTRA SECTIONS */}
      <PageExtras
        trustItems={["Product Datasheets", "Certifications", "Warranty Information", "Technical Specs"]}
        whyTitle="Everything you need to specify with confidence"
        whySubtitle="Technical resources for buyers, consultants and contractors."
        features={[
          { title: "Product Specs", text: "Detailed datasheets covering power, protection ratings, connectivity and dimensions." },
          { title: "Compliance Docs", text: "Certifications confirming CITA hardware meets international safety standards." },
          { title: "Sales Support", text: "Can't find a document? Our team will send exactly what your project needs." },
        ]}
        altBackground
      />

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.div className={styles.ctaCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className={styles.ctaTitle}>Need a specific document?</h2>
          <p className={styles.ctaText}>Ask our team for datasheets, technical specs or pricing for any CITA EV product.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>Contact Us</Link>
            <a href="https://wa.me/923007929616" className={styles.ctaSecondary} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
