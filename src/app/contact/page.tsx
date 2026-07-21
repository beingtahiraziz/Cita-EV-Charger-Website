"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PageExtras } from "@/components/sections/PageExtras";
import { AnimatedHeroTitle } from "@/components/ui/AnimatedHeroTitle";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
import styles from "./page.module.css";

const heroSlides = ["/hero/banner_new_1.png", "/hero/banner_new_2.png", "/hero/banner_new_3.png"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const people = [
  { name: "Naeem Khalid", phone: "+92 300 7929616", tel: "+923007929616", wa: "923007929616" },
  { name: "Mazhar Hussain", phone: "+92 300 1002226", tel: "+923001002226", wa: "923001002226" },
];

export default function ContactPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <HeroSlideshow images={heroSlides} overlay={null} priority />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <span className={styles.eyebrow}>Contact Us</span>
            <AnimatedHeroTitle text="Let's Power Your EV Charging" className={styles.heroTitle} />
            <p className={styles.heroSubtitle}>
              Tell us about your site and vehicles and our team will recommend
              the right CITA EV solution across Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN */}
      <section className={styles.mainSection}>
        <div className={styles.mainContainer}>
          {/* Contact info */}
          <motion.div className={styles.infoColumn} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className={styles.blockTitle}>Get in touch</h2>
            <p className={styles.blockText}>
              Operated by <span className={styles.blueCompany}>BLUEOCEAN TECH IMPEX PRIVATE LIMITED</span>, official
              distributor of CITA EV charging solutions in Pakistan.
            </p>
            <div className={styles.infoGrid}>
              {people.map((p) => (
                <div key={p.name} className={styles.personCard}>
                  <h3 className={styles.infoTitle}>{p.name}</h3>
                  <a href={`tel:${p.tel}`} className={styles.contactRow}>
                    <span className={styles.rowIcon}><Phone size={16} /></span> {p.phone}
                  </a>
                  <a href={`https://wa.me/${p.wa}`} target="_blank" rel="noopener noreferrer" className={styles.contactRow}>
                    <span className={`${styles.rowIcon} ${styles.waIcon}`}><FaWhatsapp size={17} /></span> {p.phone}
                  </a>
                </div>
              ))}
              <a href="mailto:contact@superfastevcharger.com" className={styles.infoCard}>
                <span className={styles.infoIcon}><Mail size={22} /></span>
                <div>
                  <h3 className={styles.infoTitle}>Email</h3>
                  <p className={styles.infoLine}>contact@superfastevcharger.com</p>
                </div>
              </a>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}><MapPin size={22} /></span>
                <div>
                  <h3 className={styles.infoTitle}>Head Office</h3>
                  <p className={styles.infoLine}>Office No. 810, Level 8, HI Q Towers, Jail Road, Lahore, Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote form */}
          <motion.div className={styles.formCard} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className={styles.formTitle}>Request a Quote</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our team will contact you shortly."); }}>
              <div className={styles.formRow}>
                <input type="text" placeholder="Full Name *" className={styles.input} required />
                <input type="tel" placeholder="Phone Number *" className={styles.input} required />
              </div>
              <div className={styles.formRow}>
                <input type="email" placeholder="Email Address *" className={styles.input} required />
                <input type="text" placeholder="City *" className={styles.input} required />
              </div>
              <select className={styles.input} defaultValue="" required>
                <option value="" disabled>What type of charger are you looking for? *</option>
                <option>Home EV Charger</option>
                <option>Commercial EV Charger</option>
                <option>Fleet EV Charger</option>
                <option>Public / Fast DC Charger</option>
                <option>Not sure (need expert advice)</option>
              </select>
              <select className={styles.input} defaultValue="">
                <option value="" disabled>When do you want it installed?</option>
                <option>Immediately</option>
                <option>Within 1 month</option>
                <option>1-3 months</option>
                <option>Just exploring</option>
              </select>
              <textarea placeholder="Describe your requirement" className={styles.textarea}></textarea>
              <button type="submit" className={styles.submitBtn}>Submit Request</button>
            </form>
          </motion.div>
        </div>
      </section>
      {/* EXTRA SECTIONS */}
      <PageExtras
        trustItems={["Free Consultation", "Nationwide Coverage", "Fast Response", "Expert Guidance"]}
        whyTitle="How we help"
        whySubtitle="A simple, guided process from first enquiry to a fully working charger."
        features={[
          { title: "Assess", text: "We review your site, vehicles and power supply to understand your needs." },
          { title: "Recommend", text: "Our team suggests the right charger and configuration with clear pricing." },
          { title: "Install & Support", text: "Certified local partners install your charger and provide ongoing support." },
        ]}
        altBackground
      />
    </main>
  );
}
