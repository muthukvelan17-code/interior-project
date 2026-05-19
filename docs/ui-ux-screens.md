# UI/UX Screens & Component Architecture

## Aesthetic Philosophy
- **Vibe:** Premium luxury interior, slightly glassmorphic, modern sans-serif fonts (e.g., 'Inter' or 'Outfit').
- **Colors:** Deep earth tones, muted golds, soft off-whites, contrasted with sleek dark mode.
- **Typography:** Large, elegant headings with generous whitespace.

## Core Screens

### 1. Landing Page (`/`)
- **Hero Section:** Full-width background video/image of a luxury living room. Bold heading: "Transform Your Space in Tamil Nadu". CTA: "Find a Designer".
- **Discover Styles Carousel:** Horizontal scrolling cards of Modern, Traditional, Minimalist styles.
- **Featured Designers:** Grid of top-rated designers with their profile photo, location, and a star rating.
- **How It Works:** Step-by-step 1-2-3 graphic (Search -> Connect -> Transform).

### 2. Designer Directory (`/designers`)
- **Left Sidebar / Top Bar Filters:** Location (Chennai, Coimbatore, etc.), Style, Budget, Services.
- **Listing View:** Grid or List view of designers. Each card shows: Profile Pic, Name, 3 Portfolio thumbnails (carousel), base consultation rate, and a "Chat Now" or "View Profile" button.

### 3. Designer Profile Profile (`/designers/[id]`)
- **Header:** Sticky header with Designer Name, verified badge, "Book Consultation" CTA.
- **About/Bio Section:** Experience, philosophy.
- **Portfolio Masonry Grid:** Lush, full-width masonry layout for project images. Clicking an image opens a modal gallery.
- **Service Packages Tab:** Cards detailing Basic/Standard/Premium offerings with price tags.
- **Reviews Section:** Client testimonials with stars.

### 4. Client Dashboard (`/dashboard/client`)
- **My Projects:** Active bookings and their timeline milestones.
- **Saved Designers:** Grid of favorited profiles.
- **Messages:** Inbox for active conversations.

### 5. Designer Dashboard (`/dashboard/designer`)
- **Overview:** Active leads, ongoing projects, total earnings.
- **Project Kanban:** A board (Lead -> Negotiating -> Active -> Completed).
- **Portfolio Manager:** Interface to upload, edit, and organize project imagery.

### 6. Built-in Chat Modal
- An always-available bottom-right toggle (or dedicated `/messages` route) for real-time text chat, file attachments (e.g., floor plans).
