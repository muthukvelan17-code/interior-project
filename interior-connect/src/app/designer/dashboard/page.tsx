'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FolderKanban, 
  ShoppingBag, 
  MessageSquare, 
  Settings, 
  LogOut,
  Plus,
  TrendingUp,
  Clock,
  CheckCircle2,
  User
} from 'lucide-react';
import styles from './dashboard.module.css';

export default function DesignerDashboard() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric'
  });

  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          Workspace<span>Pro</span>
        </div>
        
        <nav className={styles.navMenu}>
          <a href="#" className={`${styles.navItem} ${styles.active}`}>
            <LayoutDashboard size={20} />
            Overview
          </a>
          <a href="#" className={styles.navItem}>
            <FolderKanban size={20} />
            Projects
          </a>
          <a href="#" className={styles.navItem}>
            <ShoppingBag size={20} />
            Virtual Packages
          </a>
          <a href="#" className={styles.navItem}>
            <MessageSquare size={20} />
            Client Messages
          </a>
          <a href="#" className={styles.navItem}>
            <Settings size={20} />
            Studio Settings
          </a>
        </nav>

        <a href="/" className={`${styles.navItem} ${styles.logout}`}>
          <LogOut size={20} />
          Exit Workspace
        </a>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.header}>
            <div>
              <h1 className={styles.greeting}>Good Morning, Studio Aara</h1>
              <p className={styles.date}>{currentDate}</p>
            </div>
            <button className={styles.actionBtn}>
              <Plus size={18} /> New Project
            </button>
          </div>

          {/* Analytics Row */}
          <div className={styles.analyticsRow}>
            <div className={styles.statCard}>
              <div className={styles.statTitle}>
                Active Projects <FolderKanban size={18} color="#FF6B8B" />
              </div>
              <div className={styles.statValue}>4</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statTitle}>
                Profile Views (30d) <TrendingUp size={18} color="#FF6B8B" />
              </div>
              <div className={styles.statValue}>1,248</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statTitle}>
                Pending Approvals <Clock size={18} color="#FF6B8B" />
              </div>
              <div className={styles.statValue}>12</div>
            </div>
          </div>

          {/* Active Projects Grid */}
          <div>
            <div className={styles.sectionTitle}>
              Ongoing Work
              <a href="#" className={styles.viewAll}>View All Projects &rarr;</a>
            </div>
            
            <div className={styles.projectsGrid}>
              {[
                { 
                  title: 'Ooty Heritage Villa', 
                  client: 'Priya Rajan', 
                  status: 'In_Progress', 
                  progress: 65,
                  label: 'Procurement Phase'
                },
                { 
                  title: 'Coimbatore Penthouse', 
                  client: 'Karthik S.', 
                  status: 'Review', 
                  progress: 40,
                  label: '3D Renders Pending'
                },
                { 
                  title: 'Chennai Tech Office', 
                  client: 'Freshworks Inc.', 
                  status: 'In_Progress', 
                  progress: 85,
                  label: 'Installation'
                }
              ].map((project, idx) => (
                <motion.div 
                  key={idx} 
                  className={styles.projectCard}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={styles.projectHeader}>
                    <div>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <div className={styles.projectClient}>
                        <User size={14} /> {project.client}
                      </div>
                    </div>
                    <span className={`${styles.statusPill} ${styles['status' + project.status]}`}>
                      {project.status.replace('_', ' ')}
                    </span>
                  </div>
                  
                  <div className={styles.progressSection}>
                    <div className={styles.progressLabel}>
                      <span>{project.label}</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: `${project.progress}%` }}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
