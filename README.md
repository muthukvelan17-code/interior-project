# InteriorConnect Tamil Nadu
A premium marketplace connecting clients with top interior designers in Tamil Nadu.

## Structure
- `docs/` - Contains the product architecture, database schemas, roadmap, and UI/UX screen diagrams.
- `interior-connect/` - The Next.js frontend application.
- `backend/` - The Express + Node.js API with Socket.io.

## Getting Started

### 1. Frontend (Next.js)
```bash
cd interior-connect
npm install
npm run dev
```
Runs the web app on `http://localhost:3000`.

### 2. Backend (Node.js/Express)
```bash
cd backend
npm install
npx ts-node src/index.ts
```
Runs the API server on `http://localhost:5000`.

## Architecture Highlights
- Fully decoupled Node API and Next.js frontend
- Prepared for Prisma ORM with PostgreSQL
- Integrates Socket.io for Real-Time chat between clients and designers
- Premium UI/UX using CSS modules, Lucide Icons, and Framer Motion for smooth animations.
