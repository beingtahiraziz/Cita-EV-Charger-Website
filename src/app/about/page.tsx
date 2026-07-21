"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  Leaf,
  Cpu,
  Users,
  HeartHandshake,
  Target,
  Eye,
  Globe,
  Mail,
  X,
} from "lucide-react";
import { PageExtras } from "@/components/sections/PageExtras";
import { AnimatedHeroTitle } from "@/components/ui/AnimatedHeroTitle";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
import { Carousel } from "@/components/ui/Carousel";
import styles from "./page.module.css";

const aboutImages = Array.from({ length: 6 }, (_, i) => `/images/About/about%20(${i + 1}).jpeg`);

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const principles = [
  {
    icon: <Leaf size={32} />,
    title: "Sustainability & Environmental Responsibility",
    text: "We prioritise sustainability at every level, from design and manufacturing to supply chain and end-of-life disposal.",
  },
  {
    icon: <Cpu size={32} />,
    title: "Innovation & Technological Leadership",
    text: "CITA EV chargers are SASO, ADQCC and DEWA-tested and approved, UKCA and CE certified, ensuring compliance with key safety and regulatory standards.",
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Customer-Centricity & User Experience",
    text: "Dependable performance backed by a 3-year extendable warranty on most hardware products and responsive local support.",
  },
  {
    icon: <Users size={32} />,
    title: "Collaboration & Inclusivity",
    text: "We build lasting partnerships with installers, contractors and businesses to grow Pakistan's EV charging ecosystem together.",
  },
];

const certImages = [
  "/images/Certicficate/1%20(1).png",
  "/images/Certicficate/1%20(2).png",
  "/images/Certicficate/1%20(3).png",
  "/images/Certicficate/1%20(4).png",
  "/images/Certicficate/1%20(5).png",
  "/images/Certicficate/1%20(6).png",
];

type TeamMember = {
  name: string;
  role: string;
  email: string;
  img: string;
  detailTitle?: string;
  bio?: string[];
  responsibilities?: string[];
  signature?: string;
};

const team: TeamMember[] = [
  {
    name: "Naeem Khalid",
    role: "Founder, Chairman & CEO",
    email: "ceo@superfastevcharger.com",
    img: "/images/Team/Naeem.png",
    detailTitle: "Message from the CEO",
    bio: [
      "At BlueOcean Tech Impex (Private) Limited, we believe the future of transportation is electric, intelligent, and sustainable. It is a privilege to lead our organization as we begin an exciting journey to build Pakistan's EV charging infrastructure.",
      "As the Official distributor of CITA EV Charger (UK) in Pakistan, our mission is to provide world-class EV charging solutions that meet international standards while supporting Pakistan's transition toward clean and green mobility. CITA EV is globally recognized for its advanced AC & DC charging technology, smart software integration, and reliable charging solutions for residential, commercial, fleet, and public applications.",
      "Our vision is not only to supply premium EV chargers but also to establish a nationwide network of professionally installed charging stations across Pakistan. Through innovation, quality, and exceptional customer support, we aim to make EV charging accessible, safe, and convenient for every electric vehicle owner.",
      "We are committed to working closely with government organizations, developers, businesses, industries, fuel stations, shopping malls, hotels, hospitals, educational institutions, and fleet operators to accelerate Pakistan's shift toward sustainable transportation.",
      "At BlueOcean Tech Impex, every installation represents our commitment to excellence, reliability, and environmental responsibility. Together with our valued partners and customers, we are helping shape a cleaner, smarter, and more sustainable future for generations to come.",
      "Together, we are not just installing EV chargers—we are powering Pakistan's electric future. Thank you for your trust and partnership.",
    ],
    signature: "Naeem Khalid — Founder, Chairman and Chief Executive Officer (CEO), BlueOcean Tech Impex (Private) Limited. Official Distributor of CITA EV Charger (UK) – Pakistan.",
  },
  {
    name: "Mazhar Hussain",
    role: "Co-Founder & Lead Director — Operations & Projects",
    email: "directorlead@superfastevcharger.com",
    img: "/images/Team/Mazhar.jpg",
    detailTitle: "About Mazhar Hussain",
    bio: [
      "Mr. Mazhar Hussain is a dynamic business leader with extensive expertise in global operations, project management, and strategic business development. As Co-Founder & Lead Director – Global Operations of Super Fast EV Charger and Director – Operations & Projects at BlueOcean Tech Impex Private Limited, he leads international trade, Import and Export, supply chain, nationwide operations, EV charging infrastructure projects, and business expansion across Pakistan.",
      "He oversees import & export, logistics, project execution, sales, marketing, partner network development, and operational excellence, ensuring every project is delivered with efficiency, innovation, and international quality standards.",
    ],
    responsibilities: [
      "Strategic Leadership & Business Growth",
      "Global Import & Export Operations",
      "Supply Chain & Logistics Management",
      "EV Charger Projects & Infrastructure",
      "Operations & Project Management",
      "Sales, Marketing & Brand Development",
      "Partner & Dealer Network Expansion",
      "Customer Experience & Operational Excellence",
    ],
  },
  {
    name: "Awais Ashraf",
    role: "Director, Public Relations & Communication",
    email: "directorpr@superfastevcharger.com",
    img: "/images/Team/Awais.png",
  },
  {
    name: "Noman Khalid",
    role: "Director, Sales & Marketing",
    email: "directorsales@superfastevcharger.com",
    img: "/images/Team/Noman.png",
  },
];

export default function AboutPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [teamModal, setTeamModal] = useState<TeamMember | null>(null);

  return (
    <main className={styles.page}>
      {/* 1. HERO */}
      <section className={styles.hero}>
        <HeroSlideshow images={aboutImages} overlay={null} priority />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
          >
            <span className={styles.eyebrow}>About CITA EV</span>
            <AnimatedHeroTitle text="Powering Pakistan's EV Future" className={styles.heroTitle} />
            <p className={styles.heroSubtitle}>
              BlueOcean and CITA EV are driving the transition toward sustainable
              transportation through innovative EV charging infrastructure, smart
              energy solutions, and strategic partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THIS IS CITA EV */}
      <section className={styles.introSection}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2 className={styles.sectionTitle}>This is CITA EV</h2>
          <p className={styles.sectionSubtitle} style={{ textAlign: "justify" }}>
            CITA EV is dedicated to delivering cutting-edge, world-class EV
            charging solutions that are driving the future of sustainable
            mobility. With a focus on innovation and smart technology, our range
            of e-mobility products is designed to redefine the EV charging
            experience. As the official distributor in Pakistan, operated by{" "}
            <span className={styles.companyHighlight}>BLUEOCEAN TECH IMPEX PRIVATE LIMITED</span>, we are more than just an EV
            charger provider &mdash; we are your trusted partner in the
            transition to cleaner, greener transportation.
          </p>
        </motion.div>
      </section>

      {/* 2b. HEADQUARTERS & WORKPLACE GALLERY */}
      <section className={styles.galleryCarouselSection}>
        <motion.div
          className={styles.galleryCarouselInner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <h2 className={styles.sectionTitle}>Inside CITA EV &amp; BlueOcean</h2>
          <p className={styles.sectionSubtitle} style={{ maxWidth: "760px", margin: "0 auto 40px" }}>
            A look at our corporate headquarters at High-Q Tower and the workspace powering our EV
            charging initiatives across Pakistan.
          </p>
          <Carousel images={aboutImages} perView={3} alt="CITA EV headquarters" />
        </motion.div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className={styles.mvSection}>
        <motion.div
          className={styles.mvGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className={styles.mvCard} variants={fadeUpVariant}>
            <div className={styles.iconWrapper}>
              <Target size={32} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To fuel the process of green transition by deploying
              well-researched expertise on EV charging through smart and
              holistic EV infrastructure.
            </p>
          </motion.div>

          <motion.div className={styles.mvCard} variants={fadeUpVariant}>
            <div className={styles.iconWrapper}>
              <Eye size={32} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To achieve sustainability through long-term success, protecting
              the environment for current and future generations.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. GUIDING PRINCIPLES */}
      <section className={styles.principlesSection}>
        <div className={styles.principlesContainer}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            style={{ textAlign: "center" }}
          >
            <h2 className={styles.sectionTitle}>Our Guiding Principles</h2>
            <p className={styles.sectionSubtitle} style={{ maxWidth: "720px", margin: "0 auto" }}>
              The values that shape how we design, deliver and support EV
              charging in Pakistan.
            </p>
          </motion.div>

          <motion.div
            className={styles.principlesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {principles.map((p, i) => (
              <motion.div key={i} className={styles.principleCard} variants={fadeUpVariant}>
                <div className={styles.iconWrapper}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS */}
      <section className={styles.certSection}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          style={{ textAlign: "center" }}
        >
          <h2 className={styles.sectionTitle}>Trusted & Certified</h2>
          <p className={styles.sectionSubtitle} style={{ maxWidth: "720px", margin: "0 auto" }}>
            CITA EV products meet international safety and quality standards
            across the UK, Europe and the MENA region.
          </p>

          <div className={styles.certGrid}>
            {certImages.map((src, i) => (
              <button key={i} type="button" className={styles.certCard} onClick={() => setLightbox(src)}>
                <Image src={src} alt={`CITA EV certificate ${i + 1}`} fill className={styles.certImg} unoptimized />
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TEAM SECTION */}
      <section className={styles.teamSection}>
        <div className={styles.teamContainer}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} style={{ textAlign: "center" }}>
            <h2 className={styles.sectionTitle}>Meet Our Team</h2>
            <p className={styles.sectionSubtitle} style={{ maxWidth: "720px", margin: "0 auto" }}>
              The leadership powering Pakistan&apos;s EV charging future at BlueOcean Tech Impex (Private) Limited.
            </p>
          </motion.div>
          <motion.div className={styles.teamGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {team.map((m) => {
              const hasDetails = Boolean(m.bio && m.bio.length);
              return (
                <motion.div key={m.name} className={styles.teamCard} variants={fadeUpVariant}>
                  <div className={styles.teamImgWrap}>
                    <Image src={m.img} alt={m.name} fill className={styles.teamImg} unoptimized />
                  </div>
                  <h3 className={styles.teamName}>{m.name}</h3>
                  <p className={styles.teamRole}>{m.role}</p>
                  {hasDetails ? (
                    <button type="button" className={styles.teamBtn} onClick={() => setTeamModal(m)}>
                      View Details
                    </button>
                  ) : (
                    <a href={`mailto:${m.email}`} className={styles.teamBtn}>
                      <Mail size={15} /> Email
                    </a>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 6. GLOBAL PRESENCE */}
      <section className={styles.globalSection}>
        <div className={styles.globalContainer}>
          <motion.div
            className={styles.globalContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <div className={styles.iconWrapper}>
              <Globe size={32} />
            </div>
            <h2 className={styles.sectionTitle}>Leading the Charge Worldwide</h2>
            <p className={styles.sectionSubtitle}>
              CITA EV actively drives progress in the electric vehicle industry
              through participation in major global events such as the EVIS
              Event in Abu Dhabi and the EV Auto Show. By unveiling new
              innovations and connecting with industry leaders and global
              stakeholders, CITA EV stays at the forefront of EV technology
              &mdash; and brings that same standard to Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMAGE FEATURE BAND (no text) */}
      <section className={styles.featureBand}>
        <div className={styles.featureBandGrid}>
          {["/images/10.jpeg", "/images/77.jpeg", "/images/88.jpeg", "/images/99.jpeg"].map((src, i) => (
            <div key={i} className={styles.featureBandItem}>
              <Image src={src} alt="CITA EV charging" fill className={styles.featureBandImg} unoptimized />
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA SECTIONS */}
      <PageExtras
        trustItems={["Official CITA EV Distributor", "Globally Certified Hardware", "Nationwide Support", "Smart Charging Technology"]}
        whyTitle="Why partner with CITA EV Pakistan"
        whySubtitle="World-class charging technology, delivered and supported locally."
        features={[
          { title: "Local Expertise", text: "A Pakistan-based team providing consultation, installation and after-sales support." },
          { title: "Genuine Products", text: "Authentic CITA EV hardware backed by international certifications and warranty." },
          { title: "End-to-End Support", text: "From site assessment to commissioning and maintenance, we cover the full journey." },
        ]}
        altBackground
      />

      {/* 7. CTA */}
      <section className={styles.ctaSection}>
        <motion.div
          className={styles.ctaCard}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <h2 className={styles.ctaTitle}>EV Charging Made Simple with CITA EV</h2>
          <p className={styles.ctaText}>
            Explore our range of intelligent AC and DC chargers or talk to our
            team about your project.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/products" className={styles.ctaPrimary}>
              Explore Our Chargers
            </Link>
            <Link href="/contact" className={styles.ctaSecondary}>
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CERTIFICATE LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightboxOverlay}
            onClick={() => setLightbox(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)} aria-label="Close">
              <X size={28} />
            </button>
            <motion.div
              className={styles.lightboxImgWrap}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <Image src={lightbox} alt="CITA EV certificate" fill className={styles.lightboxImg} unoptimized />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TEAM MEMBER MODAL */}
      <AnimatePresence>
        {teamModal && (
          <motion.div
            className={styles.teamModalOverlay}
            onClick={() => setTeamModal(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.teamModalCard}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
            >
              <button className={styles.teamModalClose} onClick={() => setTeamModal(null)} aria-label="Close">
                <X size={22} />
              </button>
              <div className={styles.teamModalHeader}>
                <div className={styles.teamModalImgWrap}>
                  <Image src={teamModal.img} alt={teamModal.name} fill className={styles.teamImg} unoptimized />
                </div>
                <div>
                  <h3 className={styles.teamModalName}>{teamModal.name}</h3>
                  <p className={styles.teamModalRole}>{teamModal.role}</p>
                  <a href={`mailto:${teamModal.email}`} className={styles.teamEmail}>
                    <Mail size={14} /> {teamModal.email}
                  </a>
                </div>
              </div>
              <div className={styles.teamModalBody}>
                {teamModal.detailTitle && (
                  <h4 className={styles.teamModalSubtitle}>{teamModal.detailTitle}</h4>
                )}
                {teamModal.bio?.map((para, i) => (
                  <p key={i} className={styles.teamModalText}>{para}</p>
                ))}
                {teamModal.responsibilities && (
                  <>
                    <h4 className={styles.teamModalSubtitle}>Core Responsibilities</h4>
                    <ul className={styles.teamModalList}>
                      {teamModal.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </>
                )}
                {teamModal.signature && (
                  <p className={styles.teamModalSignature}>{teamModal.signature}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
