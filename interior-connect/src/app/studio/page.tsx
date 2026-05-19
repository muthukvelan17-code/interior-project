'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Building2, Users, Star } from 'lucide-react';

const mockStudios = [
  {
    id: 1,
    name: 'Studio Aara',
    established: '2015',
    teamSize: '15+ Designers',
    rating: 4.8,
    description: 'A multi-disciplinary design studio focusing on high-end residential and commercial spaces. We believe in merging functionality with premium aesthetics.',
    cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    relatedProjects: [
      { id: 301, title: 'Corporate HQ, Guindy', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=80' },
      { id: 302, title: 'Boutique Hotel, Ooty', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80' }
    ]
  }
];

export default function StudioPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', padding: '4rem 5%', color: 'var(--primary-color)' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-color)', fontWeight: 600 }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
        Design <span className="text-gradient">Studios</span>
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.2rem', maxWidth: '600px' }}>
        Discover established interior design firms and agencies, their team details, and comprehensive portfolios.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {mockStudios.map(studio => (
          <div key={studio.id} className="glass-panel" style={{ overflow: 'hidden', padding: 0 }}>
            <img src={studio.cover} alt={studio.name} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            <div style={{ padding: '3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{studio.name}</h2>
                  <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Building2 size={18} /> Est. {studio.established}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Users size={18} /> {studio.teamSize}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--secondary-color)' }}><Star size={18} /> {studio.rating} / 5</span>
                  </div>
                </div>
                <button className="btn-primary">Contact Studio</button>
              </div>
              
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem', color: 'var(--text-primary)' }}>
                {studio.description}
              </p>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Related Projects</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {studio.relatedProjects.map(proj => (
                  <div key={proj.id} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                    <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '1rem', backgroundColor: '#fff' }}>
                      <p style={{ fontWeight: 600 }}>{proj.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
