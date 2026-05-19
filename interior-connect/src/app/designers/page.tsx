'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, ArrowLeft } from 'lucide-react';

const mockDesigners = [
  {
    id: 1,
    name: 'Karthik Rajan',
    phone: '+91 98765 43210',
    location: 'Chennai, TN',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
    bio: 'Award-winning interior architect specializing in luxury residential spaces with a modern Chettinad touch.',
    projects: [
      { id: 101, title: 'OMR Sea View Villa', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80' },
      { id: 102, title: 'Adyar Modern Apartment', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 2,
    name: 'Meera Nambiar',
    phone: '+91 87654 32109',
    location: 'Coimbatore, TN',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    bio: 'Minimalist design expert focused on sustainable materials and smart home integrations.',
    projects: [
      { id: 201, title: 'Race Course Penthouse', image: 'https://images.unsplash.com/photo-1598928506311-c55dd1b48b59?auto=format&fit=crop&w=600&q=80' }
    ]
  }
];

export default function DesignersPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', padding: '4rem 5%', color: 'var(--primary-color)' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-color)', fontWeight: 600 }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
        Our <span className="text-gradient">Designers</span>
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.2rem', maxWidth: '600px' }}>
        Connect with Tamil Nadu's finest interior architects. Browse their contact details and portfolio of completed works.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        {mockDesigners.map(designer => (
          <div key={designer.id} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <img src={designer.avatar} alt={designer.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{designer.name}</h2>
                <div style={{ color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', marginBottom: '4px', fontWeight: 600 }}>
                  <Phone size={16} /> {designer.phone}
                </div>
                <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}>
                  <MapPin size={16} /> {designer.location}
                </div>
              </div>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>{designer.bio}</p>
            
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Featured Projects</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {designer.projects.map(proj => (
                <div key={proj.id}>
                  <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem' }} />
                  <p style={{ fontSize: '0.85rem', fontWeight: 500 }}>{proj.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
