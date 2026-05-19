'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, ChevronRight, Menu, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.main}>
      {/* Navbar */}
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>
          Interior<span>Connect</span>
        </div>
        <div className={styles.navLinks}>
          <Link href="/designers" className={styles.navLink}>Designers</Link>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
          <Link href="/studio" className={styles.navLink}>Studio</Link>
        </div>
        <div className={styles.navActions}>
          <Link href="/designer/dashboard" className={styles.navLink} style={{ fontWeight: 600, color: 'var(--secondary-color)' }}>
            Pro Dashboard
          </Link>
          <Link href="/login" className="btn-secondary">Log In</Link>
          <Link href="/signup" className="btn-primary">Join as Pro</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Living Room" 
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.heroTitle}>
            Design That <span className="text-gradient">Inspires</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Collaborate with Tamil Nadu's elite interior architects. From bespoke Chennai villas to modern Coimbatore penthouses.
          </p>
          
          <div className={`${styles.searchBar} glass-panel`}>
             <select className={styles.locationSelect} defaultValue="all">
               <option value="all">Tamil Nadu (All)</option>
               <option value="chennai">Chennai</option>
               <option value="coimbatore">Coimbatore</option>
               <option value="madurai">Madurai</option>
               <option value="trichy">Tiruchirappalli</option>
             </select>
             <div className={styles.divider}></div>
             <input 
              type="text" 
               placeholder="Search modern, chettinad, minimalist..." 
              className={styles.searchInput}
             />
             <button className={styles.searchBtn}>
               <Search size={20} />
               <span>Explore</span>
             </button>
          </div>
        </motion.div>
      </section>

      {/* Featured Designers Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Curated <span className="text-gradient">Visionaries</span></h2>
          <p className={styles.sectionSubtitle}>Exclusive access to the most sought-after design studios</p>
        </div>
        
        <div className={styles.grid}>
          {[
            { name: 'Karthik Interiors', loc: 'Chennai, TN', rating: 4.9, img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', style: 'Modern Luxury' },
            { name: 'Studio Aara', loc: 'Coimbatore, TN', rating: 4.8, img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80', style: 'Minimalist' },
            { name: 'Veda Designs', loc: 'Madurai, TN', rating: 4.7, img: 'https://images.unsplash.com/photo-1598928506311-c55dd1b48b59?auto=format&fit=crop&w=800&q=80', style: 'Neo-Chettinad' },
          ].map((designer, i) => (
            <motion.div 
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              <div className={styles.cardImageWrapper}>
                <img src={designer.img} alt={designer.name} className={styles.cardImage} />
                <div className={styles.cardOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {designer.name}
                  <span className={styles.rating}><Star size={14} fill="currentColor" /> {designer.rating}</span>
                </h3>
                <p className={styles.cardSub}><MapPin size={16} /> {designer.loc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Style: {designer.style}</span>
                  <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.8rem', borderRadius: '8px' }}>
                    View Studio
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Elevate Your <span className="text-gradient">Practice</span></h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Join the exclusive network of top-tier designers. Access premium leads, utilize our escrow protection, and showcase your finest work.
          </p>
          <Link href="/designer/dashboard">
            <button className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Go to Dashboard <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>Interior<span className="text-gradient">Connect</span></h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              The definitive platform for premium interior architecture in Tamil Nadu.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4 style={{ color: '#fff' }}>Expertise</h4>
            <ul>
              <li><a href="#">Luxury Residential</a></li>
              <li><a href="#">Commercial Spaces</a></li>
              <li><a href="#">Smart Home Integration</a></li>
              <li><a href="#">Vastu Consultancy</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4 style={{ color: '#fff' }}>Company</h4>
            <ul>
              <li><a href="#">The Team</a></li>
              <li><a href="#">Journal</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4 style={{ color: '#fff' }}>Connect</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} InteriorConnect. Crafted for excellence.</p>
        </div>
      </footer>
    </main>
  );
}
