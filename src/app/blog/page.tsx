"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
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
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function BlogPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <HeroSlideshow images={heroSlides} overlay={null} priority />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <span className={styles.eyebrow}>Blog & Guides</span>
            <AnimatedHeroTitle text="EV Charging Insights" className={styles.heroTitle} />
            <p className={styles.heroSubtitle}>
              Guides, tips and insights on electric vehicles, charging technology
              and EV adoption across Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* POSTS */}
      <section className={styles.gridSection}>
        <div className={styles.gridContainer}>
          <motion.div className={styles.grid} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {blogPosts.map((post) => (
              <motion.article key={post.slug} className={styles.card} variants={fadeUp}>
                <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                  <div className={styles.imageWrap}>
                    <Image src={post.image} alt={post.title} fill className={styles.image} unoptimized />
                    <span className={styles.catBadge}>{post.category}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.meta}>
                      <span>{post.date}</span>
                      <span className={styles.metaDot}>•</span>
                      <span className={styles.metaTime}><Clock size={13} /> {post.readTime}</span>
                    </div>
                    <h2 className={styles.cardTitle}>{post.title}</h2>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <span className={styles.readMore}>Read article <ArrowRight size={16} /></span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.div className={styles.ctaCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className={styles.ctaTitle}>Ready to go electric?</h2>
          <p className={styles.ctaText}>Talk to our team about the right CITA EV charging solution for your home or business.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimary}>Request a Quote</Link>
            <Link href="/products" className={styles.ctaSecondary}>Explore Chargers</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
