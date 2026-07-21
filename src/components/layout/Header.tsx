"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { productsData } from "@/data/products";
import { industries } from "@/data/industries";
import styles from "./Header.module.css";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

type DropdownItem = { href: string; name: string; meta?: string };

const dropdownData: Record<string, { items: DropdownItem[]; allHref: string; allLabel: string }> = {
  products: {
    items: productsData.map((p) => ({ href: `/products/${p.slug}`, name: p.name, meta: p.powerOutput })),
    allHref: "/products",
    allLabel: "View all products",
  },
  industries: {
    items: industries.slice(0, 7).map((i) => ({ href: `/industries/${i.slug}`, name: i.title })),
    allHref: "/industries",
    allLabel: "View all industries",
  },
};

const NAV_LINKS: { name: string; href: string; dropdown?: keyof typeof dropdownData }[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products", dropdown: "products" },
  { name: "Industries", href: "/industries", dropdown: "industries" },
  { name: "Software", href: "/software" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Downloads", href: "/downloads" },
  { name: "Partner Program", href: "/partner" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="CITA EV"
            width={200}
            height={56}
            style={{ objectFit: "contain", height: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.name} className={styles.navItem}>
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
                  {link.dropdown && <FiChevronDown className={styles.dropdownIcon} />}
                </Link>
                {link.dropdown && (
                  <div className={styles.dropdown}>
                    {dropdownData[link.dropdown].items.map((item) => (
                      <Link key={item.href} href={item.href} className={styles.dropdownItem}>
                        {item.name}
                        {item.meta && <span className={styles.dropdownMeta}>{item.meta}</span>}
                      </Link>
                    ))}
                    <Link href={dropdownData[link.dropdown].allHref} className={styles.dropdownAll}>
                      {dropdownData[link.dropdown].allLabel}
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          <Button variant="outlineWhite" href="https://wa.me/923007929616">
            WhatsApp
          </Button>
          <Button variant="primary" href="/contact">
            Request Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className={styles.mobileNavList}>
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        type="button"
                        className={styles.mobileNavToggle}
                        onClick={() =>
                          setOpenMobileDropdown((v) => (v === link.dropdown ? null : link.dropdown!))
                        }
                        aria-expanded={openMobileDropdown === link.dropdown}
                      >
                        {link.name}
                        <FiChevronDown
                          className={`${styles.mobileChevron} ${openMobileDropdown === link.dropdown ? styles.mobileChevronOpen : ""}`}
                        />
                      </button>
                      {openMobileDropdown === link.dropdown && (
                        <ul className={styles.mobileSubList}>
                          {dropdownData[link.dropdown].items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className={styles.mobileSubLink}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name}
                                {item.meta && <span className={styles.mobileSubMeta}>{item.meta}</span>}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href={dropdownData[link.dropdown].allHref}
                              className={styles.mobileSubAll}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropdownData[link.dropdown].allLabel}
                            </Link>
                          </li>
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={styles.mobileNavLink}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className={styles.mobileActions}>
              <Button variant="secondary" href="https://wa.me/923007929616" fullWidth>
                WhatsApp
              </Button>
              <Button variant="primary" href="/contact" fullWidth>
                Request Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
