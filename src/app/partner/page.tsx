"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { TrendingUp, Users, Wrench, Megaphone, LineChart, Zap, BatteryCharging, ClipboardList, MapPinned, CheckCircle2, Rocket, LifeBuoy } from "lucide-react";
import { AnimatedHeroTitle } from "@/components/ui/AnimatedHeroTitle";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
import { Carousel } from "@/components/ui/Carousel";
import styles from "./page.module.css";

const partnerImages = Array.from({ length: 8 }, (_, i) => `/images/Become%20partner/1%20(${i + 1}).jpeg`);

export default function PartnerPage() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const benefits = [
    { icon: <TrendingUp size={32} />, title: "Additional Revenue Stream", text: "Generate a new income source from every charging session at your location." },
    { icon: <Users size={32} />, title: "Increased Customer Traffic", text: "Attract EV drivers who spend time and money while their vehicles charge." },
    { icon: <Wrench size={32} />, title: "Complete Technical Support", text: "Our team provides full technical guidance from setup to daily operation." },
    { icon: <LifeBuoy size={32} />, title: "Installation & Maintenance", text: "We assist with professional installation and ongoing maintenance." },
    { icon: <Megaphone size={32} />, title: "Marketing & Promotional Support", text: "Benefit from joint marketing and promotion of your charging location." },
    { icon: <LineChart size={32} />, title: "Long-Term Business Growth", text: "Position your business at the centre of Pakistan's growing EV economy." },
  ];

  const partnerTypes = [
    "Fuel Stations", "Shopping Malls", "Hotels", "Restaurants", "Commercial Buildings",
    "Real Estate Developers", "Corporate Offices", "Parking Facilities",
    "Educational Institutions", "Government & Private Organizations",
  ];

  const steps = [
    { icon: <ClipboardList size={26} />, title: "Submit Application", text: "Share your details and location through our partnership form." },
    { icon: <MapPinned size={26} />, title: "Location Assessment", text: "Our team evaluates your site for the right charging setup." },
    { icon: <CheckCircle2 size={26} />, title: "Partnership Approval", text: "We finalise the partnership terms and agreement." },
    { icon: <BatteryCharging size={26} />, title: "Installation & Commissioning", text: "Chargers are professionally installed and commissioned." },
    { icon: <Rocket size={26} />, title: "Launch & Ongoing Support", text: "Go live with continuous technical and operational support." },
  ];

  return (
    <main className={styles.page}>

      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <HeroSlideshow images={partnerImages} priority />
        <div className={styles.heroContainer}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
          >
            <span className={styles.eyebrow}>Become a Partner</span>
            <AnimatedHeroTitle text="Powering Pakistan's EV Future Together" className={styles.heroTitle} />
            <p className={styles.heroSubtitle}>
              At CITA EV, Superfast EV Charger, and BlueOcean, we believe the future of transportation is
              electric. Join us in building a nationwide EV charging ecosystem.
            </p>
            <a href="#apply" className={styles.heroCta}>Become a Partner Today</a>
          </motion.div>

          <motion.div
            className={styles.heroFormCard}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={styles.formTitle}>Quick Contact</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Full Name" className={styles.formInput} required />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Email Address" className={styles.formInput} required />
              </div>
              <div className={styles.formGroup}>
                <input type="tel" placeholder="Phone Number" className={styles.formInput} required />
              </div>
              <div className={styles.formGroup}>
                <select className={styles.formSelect} required defaultValue="">
                  <option value="" disabled>Business Type</option>
                  {partnerTypes.map((t, i) => <option key={i} value={t}>{t}</option>)}
                </select>
              </div>
              <button type="submit" className={styles.submitBtn}>Submit Details</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO */}
      <section className={styles.introSection}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <h2 className={styles.sectionTitle}>Building Pakistan&apos;s EV Charging Ecosystem</h2>
          <p className={styles.sectionSubtitle}>
            As EV adoption continues to grow, the demand for reliable charging infrastructure is increasing
            across Pakistan. We are actively expanding our charging network and inviting businesses, property
            owners, investors, and strategic partners to join us. Together, we can create a cleaner, smarter,
            and more sustainable future.
          </p>
        </motion.div>
      </section>

      {/* 3. PARTNER GALLERY CAROUSEL */}
      <section className={styles.gallerySection}>
        <motion.div className={styles.gallerySectionInner} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
          <h2 className={styles.sectionTitle}>Our Partner Network in Action</h2>
          <p className={styles.sectionSubtitle} style={{ maxWidth: "760px", margin: "0 auto 40px" }}>
            A glimpse of CITA EV charging locations and partners powering electric mobility across Pakistan.
          </p>
          <Carousel images={partnerImages} perView={3} alt="CITA EV partner location" />
        </motion.div>
      </section>

      {/* 4. WHY PARTNER + WHAT WE OFFER */}
      <section className={styles.introSection}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
          <h2 className={styles.sectionTitle}>Why Partner With Us?</h2>
          <p className={styles.sectionSubtitle}>
            Partnering with us means becoming part of one of Pakistan&apos;s emerging EV charging networks. We
            provide the technology, expertise, and support needed to establish successful charging locations
            while creating new revenue opportunities for our partners.
          </p>
          <div className={styles.offerRow}>
            <div className={styles.offerCard}>
              <Zap size={30} className={styles.offerIcon} />
              <h3>AC Charging Solutions</h3>
              <p>Smart 7kW to 44kW AC chargers for homes, workplaces and commercial sites.</p>
            </div>
            <div className={styles.offerCard}>
              <BatteryCharging size={30} className={styles.offerIcon} />
              <h3>DC Fast Charging Solutions</h3>
              <p>30kW to 480kW DC fast chargers for highways, fleets and public hubs.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. PARTNERSHIP BENEFITS */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContainer}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} style={{ textAlign: "center" }}>
            <h2 className={styles.sectionTitle}>Partnership Benefits</h2>
          </motion.div>
          <motion.div className={styles.benefitsGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            {benefits.map((benefit, index) => (
              <motion.div key={index} className={styles.benefitCard} variants={fadeUpVariant}>
                <div className={styles.iconWrapper}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p className={styles.benefitText}>{benefit.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. WHO CAN PARTNER */}
      <section className={styles.idealSection}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} style={{ textAlign: "center" }}>
          <h2 className={styles.sectionTitle}>Who Can Partner With Us?</h2>
          <p className={styles.sectionSubtitle} style={{ maxWidth: "800px", margin: "0 auto" }}>
            We welcome a wide range of businesses and organizations across Pakistan to join our network.
          </p>
          <div className={styles.idealGrid}>
            {partnerTypes.map((type, index) => (
              <div key={index} className={styles.idealTag}>{type}</div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className={styles.stepsSection}>
        <div className={styles.benefitsContainer}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} style={{ textAlign: "center" }}>
            <h2 className={styles.sectionTitle}>How the Partnership Works</h2>
          </motion.div>
          <motion.div className={styles.stepsGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {steps.map((step, index) => (
              <motion.div key={index} className={styles.stepCard} variants={fadeUpVariant}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. WHY BLUEOCEAN + VISION */}
      <section className={styles.introSection}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
          <h2 className={styles.sectionTitle}>Why BlueOcean?</h2>
          <p className={styles.sectionSubtitle}>
            <span className={styles.blueCompany}>BlueOcean</span> drives strategic growth, business development,
            and network expansion, helping accelerate EV adoption across Pakistan. Our vision is to create
            Pakistan&apos;s most reliable, accessible, and future-ready EV charging network.
          </p>
        </motion.div>
      </section>

      {/* 9. MAIN APPLICATION FORM */}
      <section className={styles.formSection} id="apply">
        <motion.div className={styles.mainFormContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 className={styles.sectionTitle}>Ready to Grow With Us?</h2>
            <p className={styles.sectionSubtitle}>
              Join CITA EV, Superfast EV Charger, and BlueOcean in shaping the future of electric mobility.
              Complete the form below and our team will get in touch.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className={styles.formGrid}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Company / Business Name *" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Contact Person *" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <input type="tel" placeholder="Phone Number *" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Email Address *" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="City *" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <select className={styles.formSelect} required defaultValue="">
                <option value="" disabled>Business Type *</option>
                {partnerTypes.map((type, i) => <option key={i} value={type}>{type}</option>)}
              </select>
            </div>
            <div className={styles.formGroup} style={{ gridColumn: "1 / -1" }}>
              <input type="text" placeholder="Proposed Location / Address" className={styles.formInput} />
            </div>
            <div className={styles.formGroup} style={{ gridColumn: "1 / -1" }}>
              <textarea placeholder="Tell us about your location and requirement" className={styles.formTextarea}></textarea>
            </div>
            <div className={styles.formGroup} style={{ gridColumn: "1 / -1", marginTop: "20px" }}>
              <button type="submit" className={styles.submitBtn} style={{ padding: "20px", fontSize: "1.1rem" }}>
                Submit Application
              </button>
            </div>
          </form>
          <p className={styles.formFootnote}>Let&apos;s power the future together.</p>
        </motion.div>
      </section>

    </main>
  );
}
