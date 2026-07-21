"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lightbox } from "./Lightbox";
import styles from "./Carousel.module.css";

export interface CarouselProps {
  images: string[];
  /** items visible on desktop (defaults 3) */
  perView?: number;
  autoPlay?: boolean;
  interval?: number;
  enableLightbox?: boolean;
  alt?: string;
  rounded?: boolean;
}

export function Carousel({
  images,
  perView = 3,
  autoPlay = true,
  interval = 4000,
  enableLightbox = true,
  alt = "Slide",
  rounded = true,
}: CarouselProps) {
  const [view, setView] = useState(perView);
  const [index, setIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setView(1);
      else if (w < 1024) setView(Math.min(2, perView));
      else setView(perView);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [perView]);

  const maxIndex = Math.max(0, images.length - view);

  const next = useCallback(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex]);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? maxIndex : i - 1)), [maxIndex]);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  useEffect(() => {
    if (!autoPlay || images.length <= view || lightboxIndex !== null) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [autoPlay, images.length, view, interval, next, lightboxIndex]);

  const slidePercent = 100 / view;

  return (
    <div className={styles.carousel}>
      <div className={styles.viewport}>
        <div
          ref={trackRef}
          className={styles.track}
          style={{ transform: `translateX(-${index * slidePercent}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className={styles.slide} style={{ flex: `0 0 ${slidePercent}%` }}>
              <button
                type="button"
                className={`${styles.imgBtn} ${rounded ? styles.rounded : ""}`}
                onClick={() => enableLightbox && setLightboxIndex(i)}
                aria-label={`${alt} ${i + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`${alt} ${i + 1}`} className={styles.img} loading="lazy" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {images.length > view && (
        <>
          <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Next">
            <ChevronRight size={24} />
          </button>
          <div className={styles.dots}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {enableLightbox && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
          alt={alt}
        />
      )}
    </div>
  );
}
