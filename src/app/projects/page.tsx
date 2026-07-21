"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Zap, Building2, ShieldCheck, Headset } from "lucide-react";
import { PageExtras } from "@/components/sections/PageExtras";
import { AnimatedHeroTitle } from "@/components/ui/AnimatedHeroTitle";
import { Carousel } from "@/components/ui/Carousel";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
import styles from "./page.module.css";

const heroSlides = ["/hero/banner_new_1.png", "/hero/banner_new_2.png", "/hero/banner_new_3.png"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const projects = [
  { img: "/images/project_corporate.jpg", title: "Corporate Headquarters", type: "Commercial Charging Hub", productName: "Smart 22", productSlug: "smart-22" },
  { img: "/images/project_condo.jpg", title: "Luxury Condominium", type: "Residential Load Balancing", productName: "Smart 7", productSlug: "smart-7" },
  { img: "/images/project_highway.jpg", title: "Highway Service Area", type: "DC Fast Charging", productName: "Smart 80 DC", productSlug: "smart-80-dc" },
  { img: "/images/car.jpg", title: "Corporate Fleet Depot", type: "Fleet Electrification", productName: "Smart 44 Gen 3", productSlug: "smart-44-gen-3" },
  { img: "/images/ready_bg.jpg", title: "Shopping Mall", type: "Public Fast Charging", productName: "Smart DC 30", productSlug: "smart-dc-30" },
  { img: "/images/why-choose-us.jpg", title: "Hotel & Resort", type: "Destination Charging", productName: "Smart 22", productSlug: "smart-22" },
];

const sitePhotos = [
  "/images/IMG_1600.JPG",
  "/images/IMG_1615.JPG",
  "/images/IMG_1616.JPG",
  "/images/IMG_1617.JPG",
  "/images/IMG_1640.JPG",
  "/images/IMG_1686.JPG",
];

const highlights = [
  { icon: <Building2 size={28} />, title: "Nationwide Installations", text: "Deployments across homes, businesses and public sites in Pakistan." },
  { icon: <Zap size={28} />, title: "AC & DC Deployments", text: "From 7kW home units to ultra-rapid DC charging hubs." },
  { icon: <ShieldCheck size={28} />, title: "Certified Hardware", text: "UKCA, CE, ADQCC and SASO certified equipment." },
  { icon: <Headset size={28} />, title: "Local Support", text: "Installation, maintenance and technical support by local partners." },
];

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <HeroSlideshow images={heroSlides} overlay={null} priority />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <span className={styles.eyebrow}>Projects</span>
            <AnimatedHeroTitle text="Our Recent Installations" className={styles.heroTitle} />
            <p className={styles.heroSubtitle}>
              A look at CITA EV charging deployments powering homes, businesses
              and public infrastructure across Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className={styles.gridSection}>
        <div className={styles.gridContainer}>
          <motion.div className={styles.grid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {projects.map((p, i) => (
              <motion.div key={i} className={styles.card} variants={fadeUp}>
                <div className={styles.imageWrap}>
                  <Image src={p.img} alt={p.title} fill className={styles.image} unoptimized />
                  <span className={styles.typeBadge}>{p.type}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <Link href={`/products/${p.productSlug}`} className={styles.cardSpec}>
                    <Zap size={15} /> {p.productName} chargers
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className={styles.highlightSection}>
        <div className={styles.highlightContainer}>
          <motion.h2 className={styles.sectionTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Why partners choose CITA EV
          </motion.h2>
          <motion.div className={styles.highlightGrid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {highlights.map((h, i) => (
              <motion.div key={i} className={styles.highlightCard} variants={fadeUp}>
                <div className={styles.hIcon}>{h.icon}</div>
                <h3 className={styles.hTitle}>{h.title}</h3>
                <p className={styles.hText}>{h.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SITE PHOTOS GALLERY */}
      <section className={styles.photosSection}>
        <div className={styles.photosContainer}>
          <motion.h2 className={styles.sectionTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            On-site installations
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
            <Carousel images={sitePhotos} perView={3} alt="CITA EV installation" />
          </motion.div>
        </div>
      </section>

      {/* PROJECT BROCHURE (PDF) */}
      <section className={styles.brochureSection}>
        <div className={styles.brochureContainer}>
          <motion.h2 className={styles.sectionTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Project references brochure
          </motion.h2>
          <motion.div className={styles.pdfFrameWrap} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <iframe
              src="/downloads/CITA-EV-Charger-Projects.pdf"
              title="CITA EV Charger Projects"
              className={styles.pdfFrame}
            />
          </motion.div>
          <div className={styles.brochureActions}>
            <a href="/downloads/CITA-EV-Charger-Projects.pdf" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
              Open full brochure
            </a>
          </div>
        </div>
      </section>

      {/* EXTRA SECTIONS */}
      <PageExtras
        trustItems={["Nationwide Installs", "AC & DC Deployments", "Certified Hardware", "Local Support"]}
        whyTitle="Our project process"
        whySubtitle="A proven approach that takes your charging project from idea to reality."
        features={[
          { title: "Consult", text: "We assess your site, load capacity and charging demand to scope the project." },
          { title: "Design", text: "A tailored charger layout and power plan built for your budget and growth." },
          { title: "Install & Maintain", text: "Professional installation, commissioning and ongoing maintenance support." },
        ]}
        altBackground
      />

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.div className={styles.ctaCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className={styles.ctaTitle}>Planning an EV charging project?</h2>
          <p className={styles.ctaText}>Contact our team for a free consultation or custom quotation for your site.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>Start Your Project</Link>
            <Link href="/products" className={styles.ctaSecondary}>Explore Chargers</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
