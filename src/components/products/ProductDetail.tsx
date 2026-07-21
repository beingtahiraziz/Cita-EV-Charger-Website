"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Smartphone, Award, Nfc, Plug, AlertTriangle, Zap, Activity, Server, Wifi, Sun, Shield, ChevronDown, ChevronUp } from "lucide-react";
import type { ProductData } from "@/data/products";
import { AnimatedHeroTitle } from "@/components/ui/AnimatedHeroTitle";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
import { Lightbox } from "@/components/ui/Lightbox";
import styles from "./ProductDetail.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function ProductDetail({ product }: { product: ProductData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedDatasheetUrl, setSelectedDatasheetUrl] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [galleryLightbox, setGalleryLightbox] = useState<number | null>(null);

  // Hero background carousel from the product's own images (installed photo first).
  const gallery = product.gallery ?? [];
  const installedShots = gallery.filter((g) => /install/i.test(g.label)).map((g) => g.src);
  const otherShots = gallery.filter((g) => !/install/i.test(g.label)).map((g) => g.src);
  const heroImages = [...installedShots, ...otherShots];
  if (heroImages.length === 0) heroImages.push(product.heroImageUrl || product.imageUrl);
  const galleryImages = gallery.map((g) => g.src);

  const handleDownloadClick = (e: React.MouseEvent, modelName: string, url: string = "") => {
    e.preventDefault();
    setSelectedModel(modelName);
    setSelectedDatasheetUrl(url);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
    if (selectedDatasheetUrl) {
      window.open(selectedDatasheetUrl, "_blank");
    } else {
      alert("Datasheet requested successfully! It will be sent to your email.");
    }
  };

  const closeModal = () => setIsModalOpen(false);

  const isSoftware = product.category === "Software";

  const commonFaqs = isSoftware
    ? [
        { q: "Is the software included with CITA chargers?", a: "Yes, CITA chargers integrate with the CITA EV App and CPMS. Talk to our team about setting it up for your chargers." },
        { q: "How do I get access?", a: "Contact our team and we will set up your account and connect your chargers to the platform." },
        { q: "Does it work across multiple sites?", a: "Yes. CPMS manages chargers across one or many locations from a single dashboard." },
      ]
    : [
        { q: "Does CITA provide installation in Pakistan?", a: "Yes. Installation is carried out by trained local partners, including a site assessment and safe electrical connection." },
        { q: "What warranty is included?", a: "AC chargers come with a 3-year extendable warranty and DC chargers a 2-year extendable warranty, with local technical support." },
        { q: "Which electric vehicles are compatible?", a: "CITA chargers work with all major EV brands available in Pakistan, including BYD, MG, Kia, Hyundai, BMW and Tesla." },
        { q: "How do I get pricing for this charger?", a: "Send us your requirement through the quote form or WhatsApp and our team will share pricing and full specifications." },
      ];
  const faqList = [...product.faqs, ...commonFaqs];

  const iconMap: Record<string, React.ElementType> = {
    smartphone: Smartphone,
    award: Award,
    nfc: Nfc,
    plug: Plug,
    "alert-triangle": AlertTriangle,
    zap: Zap,
    activity: Activity,
    server: Server,
    wifi: Wifi,
    sun: Sun,
    shield: Shield,
  };

  return (
    <main className={styles.page}>

      {/* 1. Full Width Hero Section */}
      <section className={styles.hero}>
        <HeroSlideshow
          images={heroImages}
          overlay="linear-gradient(to right, rgba(5,11,20,0.9) 0%, rgba(5,11,20,0.7) 55%, rgba(5,11,20,0.5) 100%)"
          priority
        />
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <AnimatedHeroTitle text={product.name.toUpperCase()} className={styles.productName} />
            <motion.p
              className={styles.heroSubheadline}
              initial="hidden" animate="visible" variants={fadeUp}
            >
              {product.heroSubheadline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. INTRO & QUOTE SECTION */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <motion.div className={styles.introImageWrapper} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className={styles.introImage}
              unoptimized
            />
          </motion.div>
          <motion.div className={styles.introContent} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className={styles.introHeadline}>{product.heroHeadline}</h2>
            <p className={styles.introDescription}>{product.description}</p>
            <a href="/contact" className={styles.quoteLink}>
              Get a quote <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. DATASHEET SECTION */}
      <section className={styles.datasheetSection}>
        <div className={styles.datasheetContainer}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className={styles.datasheetHeadline}>
              {isSoftware ? "Discover everything the platform can do" : "Perfect for overnight EV charging at home or workplace"}
            </h3>
            <p className={styles.datasheetSub}>
              To know more, download the datasheet below.
            </p>
            <button onClick={(e) => handleDownloadClick(e, product.name, product.datasheetUrl)} className={styles.quoteLink} style={{ marginTop: '20px', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              Download Datasheet <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      {product.gallery && product.gallery.length > 0 && (
        <section className={styles.gallerySection}>
          <motion.h2 className={styles.galleryTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {product.name} Gallery
          </motion.h2>
          <motion.div className={styles.galleryGrid} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
            {product.gallery.map((g, i) => (
              <button key={i} type="button" className={styles.galleryCard} onClick={() => setGalleryLightbox(i)}>
                <div className={styles.galleryImgWrap}>
                  <Image src={g.src} alt={`${product.name} - ${g.label}`} fill className={styles.galleryImg} unoptimized />
                </div>
                <span className={styles.galleryLabel}>{g.label}</span>
              </button>
            ))}
          </motion.div>
        </section>
      )}

      {/* SPECIFICATIONS SECTION */}
      {!isSoftware && product.comparisonTable && product.comparisonTable[0] && (
        <section className={styles.specsSection}>
          <div className={styles.specsContainer}>
            <motion.h2 className={styles.specsTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              Key Specifications
            </motion.h2>
            <motion.div className={styles.specsGrid} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
              <div className={styles.specItem}><span className={styles.specKey}>Power Output</span><span className={styles.specVal}>{product.powerOutput}</span></div>
              <div className={styles.specItem}><span className={styles.specKey}>Category</span><span className={styles.specVal}>{product.category}</span></div>
              <div className={styles.specItem}><span className={styles.specKey}>Protection</span><span className={styles.specVal}>{product.comparisonTable[0].protection}</span></div>
              <div className={styles.specItem}><span className={styles.specKey}>Mounting</span><span className={styles.specVal}>{product.comparisonTable[0].mounting}</span></div>
              <div className={styles.specItem}><span className={styles.specKey}>Connector / Cable</span><span className={styles.specVal}>{product.comparisonTable[0].cable}</span></div>
              <div className={styles.specItem}><span className={styles.specKey}>Warranty</span><span className={styles.specVal}>{product.comparisonTable[0].warranty}</span></div>
              <div className={styles.specItem}><span className={styles.specKey}>Smart App</span><span className={styles.specVal}>{product.comparisonTable[0].smartApp ? "Yes" : "No"}</span></div>
              <div className={styles.specItem}><span className={styles.specKey}>RFID Access</span><span className={styles.specVal}>{product.comparisonTable[0].rfid ? "Yes" : "No"}</span></div>
            </motion.div>
          </div>
        </section>
      )}

      {/* HARDWARE-ONLY MARKETING SECTIONS */}
      {!isSoftware && (
      <>
      {/* 1. IP65 and IK10 Rated */}
      <section className={styles.splitSection}>
        <div className={styles.splitTextContainer}>
          <h2 className={styles.splitTitle}>IP65 and IK10 Rated<br/>EV Charger</h2>
          <p className={styles.splitDesc}>
            When selecting devices for challenging environments, understanding the protection ratings is crucial to ensure durability & reliability.
          </p>
          <ul className={styles.splitList}>
            <li><Check size={20} className={styles.listIcon}/> The {product.name} is fully protected against dust and resistant to water, making it ideal for outdoor installations.</li>
            <li><Check size={20} className={styles.listIcon}/> The {product.name} is built to withstand significant impact protected from external physical damage.</li>
            <li><Check size={20} className={styles.listIcon}/> {product.name} charger is engineered for durability, providing reliable long-term performance.</li>
          </ul>
        </div>
        <div className={styles.splitImageContainerLight}>
           <Image src={(product.gallery && product.gallery[1]?.src) || product.heroImageUrl || product.imageUrl} alt={`${product.name} durability`} fill className={styles.splitImage} unoptimized />
        </div>
      </section>

      {/* 2. Benefits Grid */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContainer}>
          <h2 className={styles.benefitsTitle}>{product.name}<br/>charger benefits</h2>
          <div className={styles.benefitsGrid}>
            {product.benefits.slice(0, 6).map((benefit, idx) => (
              <div key={idx} className={styles.benefitCard}>
                <h3>{String(idx + 1).padStart(2, "0")}. {benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Warranty Banner */}
      <section className={styles.warrantyBanner}>
        <div className={styles.warrantyContent}>
          <h2>Extendable<br/>warranty</h2>
          <p>For all our CITA EV charging hardware products</p>
          <a href="/contact" className={styles.warrantyLink}>Get a quote for {product.name} <ArrowRight size={20}/></a>
        </div>
      </section>

      {/* 4. Monitor from Desk */}
      <section className={styles.splitSectionAlt}>
        <div className={styles.splitImageContainerLight}>
          <Image src="/images/desktop-software.jpg" alt="CPMS Dashboard" fill className={styles.splitImage} style={{ objectFit: 'cover', padding: 0 }} unoptimized />
        </div>
        <div className={styles.splitTextContainerBlue}>
          <h2 className={styles.splitTitle}>Monitor your EV<br/>charging from your<br/>desk</h2>
          <ul className={styles.splitList}>
            <li><Check size={20} className={styles.listIcon}/> RFID access to start and stop charging easily</li>
            <li><Check size={20} className={styles.listIcon}/> Monitor who charges when with our CPMS</li>
            <li><Check size={20} className={styles.listIcon}/> Charging insights and analytics</li>
          </ul>
          <a href="/software" className={styles.learnMoreLink}>Learn more <ArrowRight size={20}/></a>
        </div>
      </section>

      {/* 5. Smart, simple App */}
      <section className={styles.splitSection}>
        <div className={styles.splitTextContainerGreen}>
          <h2 className={styles.splitTitle}>Smart, simple and<br/>safe way to charge<br/>your EV anywhere</h2>
          <ul className={styles.splitList}>
            <li><Check size={20} className={styles.listIcon}/> Realtime operation</li>
            <li><Check size={20} className={styles.listIcon}/> Charging insights and analytics</li>
            <li><Check size={20} className={styles.listIcon}/> Schedule EV charging</li>
          </ul>
          <a href="/software" className={styles.learnMoreLink}>Learn more <ArrowRight size={20}/></a>
          <div className={styles.appStores}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="https://apps.apple.com/gb/app/citaev/id6505054937" target="_blank" rel="noopener noreferrer" className={styles.appBadge}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" />
            </a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="https://play.google.com/store/apps/details?id=com.cita.ev&hl=en" target="_blank" rel="noopener noreferrer" className={styles.appBadge}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
        <div className={styles.splitImageContainerDark}>
           <Image src="/images/apps.png" alt="Mobile App" fill className={styles.splitImage} style={{ objectFit: 'cover', padding: 0 }} unoptimized />
        </div>
      </section>
      </>
      )}

      {/* 4. COMPARISON TABLE */}
      {product.comparisonTable && product.comparisonTable.length > 0 && (
        <section className={styles.comparisonSection}>
          <div className={styles.comparisonContainer}>
            <motion.div className={styles.tableWrapper} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th>CITA EV CHARGER COMPARISON</th>
                    {product.comparisonTable.map((col, idx) => (
                      <th key={idx}>{col.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Protection</td>
                    {product.comparisonTable.map((col, idx) => <td key={idx}>{col.protection}</td>)}
                  </tr>
                  <tr>
                    <td>Smart App Support</td>
                    {product.comparisonTable.map((col, idx) => (
                      <td key={idx}>{col.smartApp ? <Check size={20} className={styles.iconCheck} /> : <X size={20} className={styles.iconCross} />}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Mounting Method</td>
                    {product.comparisonTable.map((col, idx) => <td key={idx}>{col.mounting}</td>)}
                  </tr>
                  <tr>
                    <td>RFID Card/Tag</td>
                    {product.comparisonTable.map((col, idx) => (
                      <td key={idx}>{col.rfid ? <Check size={20} className={styles.iconCheck} /> : <X size={20} className={styles.iconCross} />}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Touch Screen</td>
                    {product.comparisonTable.map((col, idx) => (
                      <td key={idx}>{col.touchScreen ? <Check size={20} className={styles.iconCheck} /> : <X size={20} className={styles.iconCross} />}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Compatible with all EVs</td>
                    {product.comparisonTable.map((col, idx) => (
                      <td key={idx}>{col.compatibleAll ? <Check size={20} className={styles.iconCheck} /> : <X size={20} className={styles.iconCross} />}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Warranty</td>
                    {product.comparisonTable.map((col, idx) => <td key={idx}>{col.warranty}</td>)}
                  </tr>
                  <tr>
                    <td>Charging Cable</td>
                    {product.comparisonTable.map((col, idx) => <td key={idx}>{col.cable}</td>)}
                  </tr>
                  <tr>
                    <td>Datasheets</td>
                    {product.comparisonTable.map((col, idx) => (
                      <td key={idx}>
                        <button
                          onClick={(e) => handleDownloadClick(e, col.name, col.datasheetUrl)}
                          style={{ color: 'var(--secondary-color)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit', fontWeight: 'bold' }}
                        >
                          {col.datasheet}
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>
      )}

      {/* 5. SMART FEATURES GRID */}
      {product.smartFeatures && product.smartFeatures.length > 0 && (
        <section className={styles.featuresSection}>
          <motion.h2 className={styles.featuresTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {product.name} - {isSoftware ? "Key Features" : "Smart Features"}
          </motion.h2>
          <div className={styles.featuresGrid}>
            {product.smartFeatures.map((feat, idx) => {
              const IconComp = iconMap[feat.icon] || Check;
              return (
                <motion.div key={idx} className={styles.featureCard} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                  <IconComp size={40} className={styles.featureIcon} />
                  <span className={styles.featureTitle}>{feat.title}</span>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* 6. TARGET APPLICATIONS */}
      {product.targetApplications && product.targetApplications.length > 0 && (
        <section className={styles.applicationsSection}>
          <motion.h2 className={styles.sectionTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Ideal Applications
          </motion.h2>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeTrack}>
              {[...product.targetApplications, ...product.targetApplications].map((app, idx) => (
                <button key={idx} type="button" className={styles.appCardMarquee} onClick={() => setSelectedApp(app)}>
                  <div className={styles.appIconWrapper}>
                    <Check size={24} className={styles.appIcon} />
                  </div>
                  <h3 className={styles.appTitle}>{app}</h3>
                  <span className={styles.appHint}>View recommended charger</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. FAQS */}
      {faqList.length > 0 && (
        <section className={styles.faqSection}>
          <motion.h2 className={styles.sectionTitle} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Frequently Asked Questions
          </motion.h2>
          <div className={styles.faqContainer}>
            {faqList.map((faq, idx) => (
              <div key={idx} className={`${styles.faqItem} ${openFaq === idx ? styles.faqOpen : ''}`}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.q}
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === idx && (
                  <div className={styles.faqAnswer}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* DOWNLOAD MODAL */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}><X size={24} /></button>
            <h3 className={styles.modalTitle}>Download the {selectedModel} Datasheet</h3>
            <form className={styles.modalForm} onSubmit={handleFormSubmit}>
              <input type="text" placeholder="Full Name" required className={styles.modalInput} />
              <input type="email" placeholder="Enter Your Email" required className={styles.modalInput} />
              <input type="tel" placeholder="Enter Your Contact Number" required className={styles.modalInput} />
              <input type="text" placeholder="Enter Your City" required className={styles.modalInput} />
              <label className={styles.modalCheckbox}>
                <input type="checkbox" required />
                <span>I confirm that I&apos;ve read and agree to Privacy Policy</span>
              </label>
              <button type="submit" className={styles.modalSubmit}>Download Now</button>
            </form>
          </div>
        </div>
      )}

      {/* IDEAL APPLICATION POPUP */}
      {selectedApp && (
        <div className={styles.modalOverlay} onClick={() => setSelectedApp(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedApp(null)}><X size={24} /></button>
            <span className={styles.appPopEyebrow}>Recommended Charger</span>
            <h3 className={styles.modalTitle}>{selectedApp}</h3>
            <p className={styles.appPopText}>
              For <strong>{selectedApp}</strong>, the <strong>{product.name}</strong> ({product.powerOutput}) is a great fit &mdash; {product.heroSubheadline}
            </p>
            <div className={styles.appPopActions}>
              <a href="/contact" className={styles.appPopPrimary}>Get a quote</a>
              <a href="https://wa.me/923007929616" target="_blank" rel="noopener noreferrer" className={styles.appPopSecondary}>WhatsApp</a>
            </div>
          </div>
        </div>
      )}

      {/* GALLERY LIGHTBOX */}
      <Lightbox
        images={galleryImages}
        index={galleryLightbox}
        onClose={() => setGalleryLightbox(null)}
        onChange={setGalleryLightbox}
        alt={product.name}
      />

    </main>
  );
}
