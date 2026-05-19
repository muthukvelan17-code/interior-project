# Designer Portal Specification & Architecture

## 1. Complete Designer Dashboard Architecture

The Designer Dashboard is a secure, isolated module within the InteriorConnect platform, designed as a comprehensive SaaS tool for interior designers.

### Tech Stack Additions
- **State Management**: Zustand for complex dashboard states (Kanban board drag-and-drop).
- **Drag-and-Drop**: `@hello-pangea/dnd` for the task management board.
- **Charts & Analytics**: `recharts` for financial and profile view analytics.
- **PDF Generation**: `jspdf` and `html2canvas` for invoice and contract generation.
- **AI Integration**: OpenAI API (for mood board prompt generation & cost estimation) + Stable Diffusion / Midjourney API for actual render/moodboard generation.

### Route Structure (Next.js App Router)
```text
src/app/designer/dashboard/
├── layout.tsx                # Persistent Sidebar & Topbar
├── page.tsx                  # Main Overview / Analytics Hub
├── profile/                  # Profile & Portfolio Management
├── projects/
│   ├── page.tsx              # Project List
│   └── [id]/                 # Individual Project Workspace (Kanban, Milestones, Files)
├── crm/                      # Lead & Client Management
├── business/                 # Invoices, Contracts, Expenses
├── services/                 # Virtual Services & Packages Configuration
├── shopping/                 # Procurement & Vendor Sourcing
└── ai-tools/                 # AI Mood Boards & Estimators
```

## 2. UX Wireframes (Conceptual Layouts)

### 2.1 Dashboard Layout (Global)
```text
+-------------------------------------------------------------+
|  [Logo] | Search Projects/Clients... |  [🔔] [✉️] [Profile] |
+---------+---------------------------------------------------+
| Sidebar |  Dashboard Overview                               |
| - Home  |  +--------------------+  +--------------------+   |
| - Leads |  | Profile Views: 450 |  | Active Leads: 12   |   |
| - Proj. |  +--------------------+  +--------------------+   |
| - Tasks |                                                   |
| - Fin.  |  Recent Activity                                  |
| - Shop  |  - Lead John D. requested a quote                 |
| - AI    |  - Milestone 2 approved for "Villa Project"       |
+---------+---------------------------------------------------+
```

### 2.2 Project Workspace (Kanban Board)
```text
+-------------------------------------------------------------+
| Project: Seaside Villa          [Overview] [Board] [Files]  |
+-------------------------------------------------------------+
|  TODO                 IN PROGRESS            REVIEW         |
| +-----------------+  +-----------------+  +----------------+|
| | Source Tiles    |  | Draft Floorplan |  | Client Approv. ||
| | Due: Oct 12     |  | Due: Oct 10     |  | Due: Oct 15    ||
| +-----------------+  +-----------------+  +----------------+|
+-------------------------------------------------------------+
```

### 2.3 AI Features Interface
```text
+-------------------------------------------------------------+
| AI Mood Board Generator                                     |
+-------------------------------------------------------------+
| Room Type: [Living Room v]   Style: [Minimalist v]          |
| Colors: [Earth Tones v]      Budget: [Premium v]            |
|                                                             |
| [ GENERATE MOOD BOARD (✨) ]                               |
|                                                             |
| Result:                                                     |
| [Image 1] [Image 2] [Image 3] [Image 4]                     |
| + Suggested Color Palette Hex Codes                         |
| + Suggested Material Textures                               |
+-------------------------------------------------------------+
```

## 3. Full-Stack Implementation Plan

### Phase A: Foundation & CRM (Weeks 1-2)
- Scaffold the Next.js `designer/dashboard` layout with a secure sidebar navigation.
- Implement the CRM modules: `Leads` table API, lead listing page, and lead details.
- Build the quotation/proposal generator using standard forms.

### Phase B: Project Workspace & Kanban (Weeks 3-4)
- Implement `ProjectTask` API with status enums for Kanban columns.
- Integrate `@hello-pangea/dnd` for drag-and-drop task management.
- Build the file upload interface connecting to AWS S3 for project revisions and approvals.

### Phase C: Business Tools & Procurement (Weeks 5-6)
- Develop the Invoice and Contracts schema and API.
- Create UI for generating PDF invoices.
- Implement the `Vendor` and `ShoppingList` APIs. Create the UI for designers to add products, specify vendor details, and send to clients for approval.

### Phase D: AI Tools & Analytics (Weeks 7-8)
- Integrate OpenAI/Stable Diffusion APIs.
- Build the frontend forms for AI Moodboard generation and cost estimators.
- Implement dashboard analytics querying the database for aggregate financial and lead data, displayed via `recharts`.
