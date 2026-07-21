"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Download, ShieldCheck, Award } from "lucide-react";
import { AnimatedHeroTitle } from "@/components/ui/AnimatedHeroTitle";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
import styles from "./page.module.css";

const heroSlides = ["/hero/banner_new_1.png", "/hero/banner_new_2.png", "/hero/banner_new_3.png"];

const certifications = [
  { badge: "CE CERTIFIED", title: "CE Certification", desc: "European conformity standards for health, safety and environmental protection." },
  { badge: "UKCA", title: "UKCA Certification", desc: "United Kingdom Conformity Assessed marking for product safety." },
  { badge: "OCPP 1.6J", title: "OCPP Compliant", desc: "Open Charge Point Protocol for seamless charger-to-platform communication." },
  { badge: "IEC", title: "IEC Compliance", desc: "International Electrotechnical Commission standards for electrical equipment." },
  { badge: "TÜV", title: "TÜV Certified", desc: "Independent verification of product quality, safety and reliability." },
];

const downloads = [
  { name: "CITA EV Certificates", desc: "Full certification documentation", category: "Certificates", file: "/downloads/CITA_EV_CERTIFICATES.pdf" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function CertificationsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <HeroSlideshow images={heroSlides} priority />
        <motion.div className={styles.heroContainer} initial="hidden" animate="visible" variants={fadeUp}>
          <AnimatedHeroTitle text="Certified Technology You Can Trust" className={styles.heroTitle} />
          <p className={styles.heroSubtitle}>
            Designed and manufactured to meet international standards for quality, safety and performance.
          </p>
        </motion.div>
      </section>

      {/* CERTIFICATIONS TABS */}
      <section className={styles.certSection}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className={styles.sectionTitle}>Our Certifications</h2>
          <p className={styles.certText}>
            All CITA charging products are developed according to internationally recognized standards, helping customers deploy safe, reliable and future-ready charging infrastructure.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className={styles.tabsContainer}>
            {certifications.map((cert, i) => (
              <button 
                key={i} 
                className={activeTab === i ? styles.tabActive : styles.tabInactive}
                onClick={() => setActiveTab(i)}
              >
                {activeTab === i ? <Award size={18} color="var(--secondary-color)" /> : <ShieldCheck size={18} color="rgba(255,255,255,0.5)" />}
                {cert.badge}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.tabContentCard}
            >
              <h3>{certifications[activeTab].title}</h3>
              <p>{certifications[activeTab].desc}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      {/* DOWNLOADS */}
      <section className={styles.downloadSection} id="downloads">
        <div className={styles.downloadContainer}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: "center" }}>
            <h2 className={styles.sectionTitle}>Technical Resources &amp; Documentation</h2>
            <p className={styles.certText}>
              Access product specifications, brochures, manuals and certification documents.
            </p>
          </motion.div>

          <motion.div className={styles.downloadTableWrapper} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <table className={styles.downloadTable}>
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {downloads.map((doc, i) => (
                  <tr key={i}>
                    <td>
                      <span className={styles.docName}>{doc.name}</span>
                      <span className={styles.docDesc}>{doc.desc}</span>
                    </td>
                    <td><span className={styles.categoryTag}>{doc.category}</span></td>
                    <td>
                      {doc.file ? (
                        <a href={doc.file} download className={styles.downloadBtn}>
                          <Download size={16} /> Download
                        </a>
                      ) : (
                        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.9rem" }}>Coming Soon</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
