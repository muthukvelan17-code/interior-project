'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Briefcase } from 'lucide-react';
import styles from '../auth.module.css';

export default function SignupPage() {
  const [role, setRole] = useState<'client' | 'designer'>('client');

  return (
    <div className={styles.authContainer}>
      <motion.div 
        className={styles.authCard}
        style={{ maxWidth: '600px' }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.authHeader}>
          <h1 className={styles.authTitle}>Join InteriorConnect</h1>
          <p className={styles.authSubtitle}>Create your account and start your journey</p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <div 
            style={{ flex: 1, padding: '1.5rem', border: `2px solid ${role === 'client' ? 'var(--primary-color)' : '#ddd'}`, borderRadius: '12px', cursor: 'pointer', textAlign: 'center', transition: 'all 0.3s', backgroundColor: role === 'client' ? 'rgba(0,0,0,0.02)' : 'transparent' }}
            onClick={() => setRole('client')}
          >
            <User size={32} style={{ color: role === 'client' ? 'var(--primary-color)' : '#888', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>I'm a Client</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Looking to hire a designer</p>
          </div>
          
          <div 
            style={{ flex: 1, padding: '1.5rem', border: `2px solid ${role === 'designer' ? 'var(--secondary-color)' : '#ddd'}`, borderRadius: '12px', cursor: 'pointer', textAlign: 'center', transition: 'all 0.3s', backgroundColor: role === 'designer' ? 'rgba(193, 154, 107, 0.05)' : 'transparent' }}
            onClick={() => setRole('designer')}
          >
            <Briefcase size={32} style={{ color: role === 'designer' ? 'var(--secondary-color)' : '#888', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>I'm a Designer</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Looking to find clients</p>
          </div>
        </div>

        <form className={styles.authForm} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className={styles.inputGroup} style={{ flex: 1 }}>
              <label>First Name</label>
              <input type="text" placeholder="John" className={styles.inputField} />
            </div>
            <div className={styles.inputGroup} style={{ flex: 1 }}>
              <label>Last Name</label>
              <input type="text" placeholder="Doe" className={styles.inputField} />
            </div>
          </div>
          
          <div className={styles.inputGroup}>
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" className={styles.inputField} />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" placeholder="Create a strong password" className={styles.inputField} />
          </div>

          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '10px', backgroundColor: role === 'designer' ? 'var(--secondary-color)' : 'var(--primary-color)' }}>
            {role === 'designer' ? 'Start Designer Onboarding' : 'Create Client Account'}
          </button>
        </form>

        <p className={styles.footerText}>
          Already have an account? <Link href="/login">Log in</Link>
        </p>
      </motion.div>
    </div>
  );
}
