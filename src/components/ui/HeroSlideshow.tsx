"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HeroSlideshow.module.css";

export interface HeroSlideshowProps {
  images: string[];
  /** gradient overlay CSS value; pass null to disable */
  overlay?: string | null;
  interval?: number;
  priority?: boolean;
}

const DEFAULT_OVERLAY =
  "linear-gradient(90deg, rgba(5,14,29,0.94) 0%, rgba(5,14,29,0.78) 60%, rgba(5,14,29,0.6) 100%)";

export function HeroSlideshow({
  images,
  overlay = DEFAULT_OVERLAY,
  interval = 6000,
  priority = false,
}: HeroSlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, interval);
    return () => clearInterval(t);
  }, [images.length, interval]);

  return (
    <div className={styles.wrap} aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className={styles.slide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <Image
            src={images[current]}
            alt=""
            fill
            className={styles.img}
            priority={priority}
            unoptimized
          />
        </motion.div>
      </AnimatePresence>
      {overlay && <div className={styles.overlay} style={{ background: overlay }} />}
    </div>
  );
}
