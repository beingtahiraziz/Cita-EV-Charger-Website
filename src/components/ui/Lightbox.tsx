"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Lightbox.module.css";

export interface LightboxProps {
  images: string[];
  index: number | null;
  onClose: () => void;
  onChange?: (index: number) => void;
  alt?: string;
}

export function Lightbox({ images, index, onClose, onChange, alt = "Image" }: LightboxProps) {
  const open = index !== null;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onChange && index !== null) onChange((index + 1) % images.length);
      if (e.key === "ArrowLeft" && onChange && index !== null) onChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, images.length, onChange, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          className={styles.overlay}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className={styles.close} onClick={onClose} aria-label="Close">
            <X size={26} />
          </button>

          {images.length > 1 && onChange && (
            <button
              className={`${styles.nav} ${styles.prev}`}
              onClick={(e) => { e.stopPropagation(); onChange((index - 1 + images.length) % images.length); }}
              aria-label="Previous"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          <motion.div
            className={styles.imgWrap}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <Image src={images[index]} alt={alt} fill className={styles.img} unoptimized />
          </motion.div>

          {images.length > 1 && onChange && (
            <button
              className={`${styles.nav} ${styles.next}`}
              onClick={(e) => { e.stopPropagation(); onChange((index + 1) % images.length); }}
              aria-label="Next"
            >
              <ChevronRight size={30} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
