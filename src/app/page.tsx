"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Server, Globe2, BatteryCharging, ChevronRight, Activity, MapPin, Award, CheckCircle, Clock, BarChart2, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { FiHome, FiBriefcase, FiShoppingBag, FiCoffee, FiTruck, FiGlobe, FiCheckCircle } from "react-icons/fi";

const partnerImages = Array.from({ length: 8 }, (_, i) => `/images/Become%20partner/1%20(${i + 1}).jpeg`);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      img: "/hero/banner_new_1.png",
      title: "Electrify ",
      titleHighlight: "Greener Pakistan",
      subtitle: "We deploy European-certified charging stations from 7kW home units to 360kW commercial fast chargers."
    },
    {
      img: "/hero/banner_new_2.png",
      title: "Premium EV ",
      titleHighlight: "Charging Solutions",
      subtitle: "Intelligent • Elegant • Powerful"
    },
    {
      img: "/hero/banner_new_3.png",
      title: "Smart Commercial ",
      titleHighlight: "Infrastructure",
      subtitle: "Reliable and OCPP Compliant"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000); // Slower transitions (8 seconds)
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const softwareRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: softwareRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className={styles.page}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className={styles.heroSlideContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className={styles.heroImageWrapper}>
              <Image 
                src={heroSlides[currentSlide].img} 
                alt="CITA EV Charging Solution" 
                fill 
                className={styles.heroImage}
                priority
              />
            </div>
            
            <div className={styles.heroOverlay} />
            
            <motion.div 
              className={styles.heroContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h1 className={styles.heroTitle}>
                {String(heroSlides[currentSlide].title).split("").map((char, index) => (
                  <motion.span
                    key={`white-${index}`}
                    initial={{ opacity: 0, display: 'none' }}
                    animate={{ opacity: 1, display: 'inline' }}
                    transition={{ delay: 0.5 + index * 0.12, duration: 0.15 }}
                  >
                    {char}
                  </motion.span>
                ))}
                <span style={{ color: "var(--secondary-color)" }}>
                  {String(heroSlides[currentSlide].titleHighlight).split("").map((char, index) => (
                    <motion.span
                      key={`green-${index}`}
                      initial={{ opacity: 0, display: 'none' }}
                      animate={{ opacity: 1, display: 'inline' }}
                      transition={{ delay: 0.5 + (String(heroSlides[currentSlide].title).length + index) * 0.12, duration: 0.15 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </h1>
              <motion.p 
                className={styles.heroSubtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 1.0 }}
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Static Buttons that remain on screen */}
        <div style={{ position: 'absolute', bottom: '20%', left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" href="/products">Explore EV Chargers</Button>
          <Button variant="outlineWhite" size="lg" href="/contact">Request A Quote</Button>
        </div>
      </section>

      {/* 2. KEY SPECS HIGHLIGHT */}
      <section className={styles.specsSection}>
        <div className={styles.container}>
          <div className={styles.specsGrid}>
            <motion.div 
              className={styles.specCardGreen}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Zap size={36} color="#ffffff" className={styles.specIcon} />
              <h2>7-360 kW</h2>
              <p>Full power spectrum</p>
            </motion.div>
            
            <motion.div 
              className={styles.specCardDark}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Activity size={36} color="var(--secondary-color)" className={styles.specIcon} />
              <h2>99.9%</h2>
              <p>Uptime reliability</p>
            </motion.div>

            <motion.div 
              className={styles.specCardBlue}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ShieldCheck size={36} color="#ffffff" className={styles.specIcon} />
              <h2>OCPP 1.6J</h2>
              <p>Smart integration</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TRUST INDICATORS */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <div className={styles.trustGrid}>
            <motion.div variants={fadeUpVariant} className={styles.whyCard}>
              <div className={styles.whyIconContainer}>
                <ShieldCheck size={32} color="var(--secondary-color)" />
              </div>
              <h3>Official Distributor</h3>
              <p>Genuine CITA EV Products with official Pakistan distribution and local support.</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className={styles.whyCard}>
              <div className={styles.whyIconContainer}>
                <Globe2 size={32} color="var(--secondary-color)" />
              </div>
              <h3>Certified Products</h3>
              <p>Certified for global standards (CE, UKCA, TUV, IEC) and built for extreme weather.</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className={styles.whyCard}>
              <div className={styles.whyIconContainer}>
                <MapPin size={32} color="var(--secondary-color)" />
              </div>
              <h3>Nationwide Support</h3>
              <p>Local sales, professional installation services, and after-sales technical support.</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className={styles.whyCard}>
              <div className={styles.whyIconContainer}>
                <Server size={32} color="var(--secondary-color)" />
              </div>
              <h3>Smart Technology</h3>
              <p>OCPP compliant, RFID enabled, and supported by advanced cloud management software.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
          >
            <h2 className={styles.sectionTitle}>Smart EV Charging Series</h2>
            <p className={styles.sectionSubtitle}>From residential units to ultra-fast DC highway chargers, we have the perfect solution for every application.</p>
          </motion.div>

          <motion.div 
            className={styles.categoryGrid} 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className={styles.categoryCard}>
              <div className={styles.categoryImageWrapper}>
                <Image unoptimized src="/products/Smart 7.png" alt="Smart 7 Residential Series" fill className={styles.categoryImage} />
              </div>
              <div className={styles.categoryContent}>
                <h3>Residential Chargers</h3>
                <p>Perfect for homes and apartments. Featuring the Smart 7, Smart 7 Eco, and Smart 7 Pro with DLB support.</p>
                <Button variant="outlineWhite" size="sm" href="/products">View Smart 7 Series</Button>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className={styles.categoryCard}>
              <div className={styles.categoryImageWrapper}>
                <Image unoptimized src="/products/New-44-Front.png" alt="Smart 22 Commercial Series" fill className={styles.categoryImage} />
              </div>
              <div className={styles.categoryContent}>
                <h3>Commercial Chargers</h3>
                <p>Designed for workplaces and retail. Featuring the Smart 22, Smart 22 Eco, and Dual Smart 44.</p>
                <Button variant="outlineWhite" size="sm" href="/products">View Smart 22 Series</Button>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className={styles.categoryCard}>
              <div className={styles.categoryImageWrapper}>
                <Image unoptimized src="/products/CITA-EV-DC-Charger.png" alt="DC Fast Chargers" fill className={styles.categoryImage} />
              </div>
              <div className={styles.categoryContent}>
                <h3>DC Fast Chargers</h3>
                <p>High-speed charging for fleets and highways. Ranging from 30kW to 160kW ultra-fast delivery.</p>
                <Button variant="outlineWhite" size="sm" href="/products">View DC Fast Chargers</Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.whyChooseGrid}>
            <motion.div className={styles.whyContent} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
              <div className={styles.sectionLabelWrapper}>
                <div className={styles.sectionLabelLine} />
                <span className={styles.sectionLabelText}>WHY CHOOSE US</span>
              </div>
              
              <h2>Your Trusted Partner for EV Infrastructure</h2>
              <p className={styles.sectionSubtitle} style={{ marginLeft: 0, marginBottom: '3rem', textAlign: 'left', color: 'var(--text-secondary)' }}>
                We combine European-certified hardware with local expertise to deliver charging solutions that work reliably in Pakistan's unique conditions.
              </p>
              
              <div className={styles.whyList}>
                <div className={styles.whyItem}>
                  <div className={styles.whyIconWrapper}>
                    <ShieldCheck size={24} color="var(--secondary-color)" />
                  </div>
                  <div className={styles.whyTextWrapper}>
                    <h4>European certification</h4>
                    <p>CE and IEC 61851 certified equipment that meets the highest safety standards.</p>
                  </div>
                </div>

                <div className={styles.whyItem}>
                  <div className={styles.whyIconWrapper}>
                    <Zap size={24} color="var(--secondary-color)" />
                  </div>
                  <div className={styles.whyTextWrapper}>
                    <h4>Full power range</h4>
                    <p>From 7kW home chargers to 360kW commercial fast chargers—one partner for all needs.</p>
                  </div>
                </div>

                <div className={styles.whyItem}>
                  <div className={styles.whyIconWrapper}>
                    <Activity size={24} color="var(--secondary-color)" />
                  </div>
                  <div className={styles.whyTextWrapper}>
                    <h4>24/7 support</h4>
                    <p>Round-the-clock monitoring and under 4-hour response time for critical issues.</p>
                  </div>
                </div>

                <div className={styles.whyItem}>
                  <div className={styles.whyIconWrapper}>
                    <Award size={24} color="var(--secondary-color)" />
                  </div>
                  <div className={styles.whyTextWrapper}>
                    <h4>Local expertise</h4>
                    <p>Deep understanding of Pakistan's grid conditions, regulations, and climate challenges.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className={styles.whyImageWrapper} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1 }}>
              <Image unoptimized src="/images/why-choose-us.jpg" alt="Why Choose CITA EV" fill className={styles.whyImage} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES TABS SLIDER */}
      <section className={styles.sectionLight} style={{ padding: '3rem 0', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
           <span style={{ fontSize: '0.75rem', letterSpacing: '3px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>
             Serving Diverse Sectors Across Pakistan
           </span>
        </div>
        
        <div className={styles.fullWidthMarquee}>
          <div className={styles.marqueeTrack}>
            {[
              "Commercial Buildings", 
              "Industrial Facilities", 
              "Retail & Hospitality", 
              "Fleet Operations", 
              "Residential Buildings", 
              "Public Infrastructure",
              // Duplicate for seamless infinite loop
              "Commercial Buildings", 
              "Industrial Facilities", 
              "Retail & Hospitality", 
              "Fleet Operations", 
              "Residential Buildings", 
              "Public Infrastructure"
            ].map((text, i) => (
              <span key={i} className={styles.industryTab}>
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED PRODUCTS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeader} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <h2 className={styles.sectionTitle}>Featured Chargers</h2>
            <p className={styles.sectionSubtitle}>Discover our most popular EV charging models in Pakistan.</p>
          </motion.div>
          <div className={styles.categoryGrid}>
              <motion.div className={styles.categoryCard} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUpVariant}>
                <div className={styles.categoryImageWrapper}>
                  <Image unoptimized src="/products/Smart 7.png" alt="Smart 7" fill className={styles.categoryImage} style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.categoryContent}>
                  <h3>Smart 7</h3>
                  <p>7kW single-phase charger ideal for home use.</p>
                  <Button variant="outlineWhite" size="sm" href="/products/smart-7">View Details</Button>
                </div>
              </motion.div>
              <motion.div className={styles.categoryCard} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUpVariant}>
                <div className={styles.categoryImageWrapper}>
                  <Image unoptimized src="/products/Smart-22-Transparent.png" alt="Smart 22" fill className={styles.categoryImage} style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.categoryContent}>
                  <h3>Smart 22</h3>
                  <p>22kW three-phase charger for commercial deployment.</p>
                  <Button variant="outlineWhite" size="sm" href="/products/smart-22">View Details</Button>
                </div>
              </motion.div>
              <motion.div className={styles.categoryCard} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUpVariant}>
                <div className={styles.categoryImageWrapper}>
                  <Image unoptimized src="/products/New-DC-Pro.png" alt="Smart 80 DC" fill className={styles.categoryImage} style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.categoryContent}>
                  <h3>Smart 80 DC</h3>
                  <p>80kW DC fast charger that charges up to four EVs at once.</p>
                  <Button variant="outlineWhite" size="sm" href="/products/smart-80-dc">View Details</Button>
                </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* 6. SOFTWARE UI */}
      <section ref={softwareRef} className={styles.softwareSection}>
        <div className={styles.softwareBackgroundGlow} />
        <div className={styles.container} style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.softwareGrid}>
            <motion.div 
              className={styles.softwareVisual} 
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.8 }}
            >
              <Image unoptimized src="/images/desktop-software.jpg" alt="Software OS" width={1200} height={900} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </motion.div>
            <motion.div className={styles.whyContent} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
              <h2 style={{ color: '#fff' }}>CITA Smart Management System</h2>
              <p className={styles.sectionSubtitle} style={{ marginLeft: 0, marginBottom: '2rem', color: 'rgba(255,255,255,0.9)', textAlign: 'left' }}>
                Take complete control of your charging network. Monitor usage, manage billing, and enable dynamic load balancing from our intuitive cloud dashboard.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button variant="primary" href="/software">Explore Software</Button>
                <Button variant="outlineWhite" href="/contact">Book Demo</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. APP DOWNLOAD SECTION */}
      <section className={styles.appDownloadSection}>
        <div className={styles.container}>
          <div className={styles.appDownloadGrid}>
            <motion.div 
              className={styles.appDownloadImageWrapper}
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <Image unoptimized src="/images/apps.png" alt="CITA EV App" fill className={styles.appDownloadImage} />
            </motion.div>

            <motion.div 
              className={styles.appDownloadCard}
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <h3>Smart, simple and safe way to charge your EV anywhere</h3>
              
              <ul className={styles.appFeaturesList}>
                <li className={styles.appFeatureItem}>
                  <Clock className={styles.appFeatureIcon} size={24} />
                  <span>Realtime operation</span>
                </li>
                <li className={styles.appFeatureItem}>
                  <BarChart2 className={styles.appFeatureIcon} size={24} />
                  <span>Charging insights and analytics</span>
                </li>
                <li className={styles.appFeatureItem}>
                  <Calendar className={styles.appFeatureIcon} size={24} />
                  <span>Schedule charging</span>
                </li>
              </ul>

              <div className={styles.appStoreButtons}>
                <a href="https://apps.apple.com/gb/app/citaev/id6505054937" target="_blank" rel="noopener noreferrer" className={styles.appStoreBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.cita.ev&hl=en&pli=1" target="_blank" rel="noopener noreferrer" className={styles.appStoreBadge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. PROJECTS (RECENT INSTALLATIONS) */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeader} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <h2 className={styles.sectionTitle}>Featured Installations</h2>
            <p className={styles.sectionSubtitle}>See how businesses across Pakistan are transitioning to electric with CITA EV.</p>
          </motion.div>
          <motion.div className={styles.projectGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { img: "/images/project_corporate.jpg", title: "Corporate Headquarters", desc: "Commercial Charging Hub" },
              { img: "/images/project_condo.jpg", title: "Luxury Condominium", desc: "Residential Load Balancing" },
              { img: "/images/project_highway.jpg", title: "Highway Service Area", desc: "160kW DC Fast Charging" }
            ].map((item, i) => (
              <motion.div key={i} className={styles.projectCard} variants={fadeUpVariant}>
                <div className={styles.projectImageWrapper}>
                   <Image unoptimized src={item.img} alt={item.title} fill className={styles.projectImage} />
                </div>
                <div className={styles.projectContent}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. CERTIFICATIONS */}
      <section className={styles.certSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.certGrid}
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={staggerContainer}
          >
            {[
              { text: "CE CERTIFIED", icon: <Award size={24} /> },
              { text: "UKCA CERTIFIED", icon: <ShieldCheck size={24} /> },
              { text: "TÜV CERTIFIED", icon: <CheckCircle size={24} /> },
              { text: "IEC COMPLIANT", icon: <Zap size={24} /> }
            ].map((cert, i) => (
              <motion.div key={i} className={styles.certBadge} variants={fadeUpVariant} whileHover={{ scale: 1.05, y: -5 }}>
                <div className={styles.certIcon}>{cert.icon}</div>
                <span className={styles.certText}>{cert.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 10. AUTHORIZED PARTNER PROGRAM */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.ctaBanner} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <h2>Become an Authorized Partner</h2>
            <p>Join the CITA EV partner network in Pakistan. Access exclusive wholesale pricing, comprehensive technical training, and priority local support.</p>
            <Button variant="primary" size="lg" href="/partner">Apply For Partnership</Button>
          </motion.div>
          <motion.div style={{ marginTop: "3rem" }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <Carousel images={partnerImages} perView={3} alt="CITA EV partner location" />
          </motion.div>
        </div>
      </section>

      {/* 11. FAQS */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeader} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          </motion.div>
          <motion.div className={styles.faqGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { q: "Is local support available in Pakistan?", a: "Yes, as the official distributor, we provide complete local sales, installation, and after-sales technical support across Pakistan." },
              { q: "What is the warranty on CITA EV chargers?", a: "All CITA EV chargers come with a standard 3-year warranty covering manufacturing defects, supported locally." },
              { q: "Can I monitor electricity usage and bill users?", a: "Absolutely. Our commercial chargers integrate with our cloud software, allowing you to set tariffs, process payments, and view detailed usage reports." }
            ].map((faq, i) => (
              <motion.div key={i} className={styles.faqItem} variants={fadeUpVariant}>
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 12. FINAL CALL TO ACTION */}
      <section className={styles.finalCtaSection}>
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <h2>Ready to Electrify?</h2>
            <p>Contact our team today for a free consultation or custom quotation for your project.</p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" href="/contact">Request A Quote</Button>
              <Button variant="outlineWhite" size="lg" href="https://wa.me/923007929616">WhatsApp Us</Button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
