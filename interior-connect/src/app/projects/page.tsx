'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, User } from 'lucide-react';

const mockProjects = [
  {
    id: 1,
    title: 'Modern Chettinad Villa',
    style: 'Traditional Fusion',
    location: 'Madurai',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    designer: { name: 'Veda Designs', rating: 4.8 }
  },
  {
    id: 2,
    title: 'Tech Executive Penthouse',
    style: 'Ultra Modern',
    location: 'Chennai (OMR)',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    designer: { name: 'Karthik Rajan', rating: 4.9 }
  },
  {
    id: 3,
    title: 'Minimalist Studio Apartment',
    style: 'Minimalist',
    location: 'Coimbatore',
    image: 'https://images.unsplash.com/photo-1598928506311-c55dd1b48b59?auto=format&fit=crop&w=1200&q=80',
    designer: { name: 'Meera Nambiar', rating: 4.7 }
  }
];

export default function ProjectsPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', padding: '4rem 5%', color: 'var(--primary-color)' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-color)', fontWeight: 600 }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
        Explore <span className="text-gradient">Projects</span>
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.2rem', maxWidth: '600px' }}>
        Get inspired by completed interior design projects across the state, and discover the talented designers behind them.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
        {mockProjects.map(project => (
          <div key={project.id} className="glass-panel" style={{ overflow: 'hidden', padding: 0 }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>{project.title}</h2>
                  <p style={{ color: 'var(--text-secondary)' }}>{project.location} • {project.style}</p>
                </div>
              </div>
              
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--secondary-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Designed by</p>
                    <p style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{project.designer.name}</p>
                  </div>
                </div>
                <button className="btn-secondary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
