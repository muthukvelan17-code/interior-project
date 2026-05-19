# Database Schema: InteriorConnect Tamil Nadu (PostgreSQL)

## Core Tables

### 1. `User` (Clients, Designers, Admins)
- `id` (UUID, Primary Key)
- `email` (String, Unique)
- `passwordHash` (String)
- `role` (Enum: CLIENT, DESIGNER, ADMIN)
- `firstName` (String)
- `lastName` (String)
- `phone` (String)
- `profileImage` (String, URL)
- `isActive` (Boolean, default: true)
- `createdAt` (Timestamp)
- `updatedAt` (Timestamp)

### 2. `DesignerProfile` (One-to-One with User)
- `id` (UUID, Primary Key)
- `userId` (UUID, Foreign Key)
- `bio` (Text)
- `experienceYears` (Int)
- `location` (String)  // e.g., " चेन्नई "
- `styles` (Array of Strings) // e.g., ["Modern", "Traditional"]
- `isVerified` (Boolean, default: false)
- `averageRating` (Float, default: 0)
- `reviewCount` (Int, default: 0)
- `consultationFee` (Decimal)
- `membershipTier` (Enum: BASIC, PREMIUM, PRO)

### 3. `PortfolioProject` (One-to-Many with DesignerProfile)
- `id` (UUID, Primary Key)
- `designerId` (UUID, Foreign Key)
- `title` (String)
- `description` (Text)
- `coverImage` (String, URL)
- `media` (Array of URLs - images/videos)
- `projectType` (String) // e.g., Residential, Commercial
- `location` (String)
- `createdAt` (Timestamp)

### 4. `ServicePackage` (One-to-Many with DesignerProfile)
- `id` (UUID, Primary Key)
- `designerId` (UUID, Foreign Key)
- `title` (String)
- `description` (Text)
- `price` (Decimal)
- `features` (Array of Strings)
- `isVirtualOnly` (Boolean)
- `deliveryTimeDays` (Int)

### 5. `ProjectBooking` (Transactions / Milestones)
- `id` (UUID, Primary Key)
- `clientId` (UUID, Foreign Key -> User)
- `designerId` (UUID, Foreign Key -> DesignerProfile)
- `status` (Enum: REQUESTED, ACCEPTED, IN_PROGRESS, COMPLETED, CANCELLED)
- `totalAmount` (Decimal)
- `commissionAmount` (Decimal)
- `startDate` (DateTime)
- `endDate` (DateTime, Nullable)

### 6. `Milestone` (One-to-Many with ProjectBooking)
- `id` (UUID, Primary Key)
- `bookingId` (UUID, Foreign Key)
- `title` (String)
- `amount` (Decimal)
- `status` (Enum: PENDING, APPROVED, PAID, COMPLETED)
- `dueDate` (DateTime)

### 7. `Message` (Real-time Chat)
- `id` (UUID, Primary Key)
- `senderId` (UUID, Foreign Key -> User)
- `receiverId` (UUID, Foreign Key -> User)
- `content` (Text)
- `mediaUrl` (String, Nullable)
- `isRead` (Boolean, default: false)
- `createdAt` (Timestamp)

### 8. `Review`
- `id` (UUID, Primary Key)
- `clientId` (UUID, Foreign Key)
- `designerId` (UUID, Foreign Key)
- `bookingId` (UUID, Foreign Key, Nullable)
- `rating` (Int, 1-5)
- `comment` (Text)
- `createdAt` (Timestamp)

## Workspace Module Tables

### 9. `ProjectTask` (Kanban Board)
- `id` (UUID, Primary Key)
- `bookingId` (UUID, Foreign Key -> ProjectBooking)
- `title` (String)
- `description` (Text)
- `status` (Enum: TODO, IN_PROGRESS, REVIEW, DONE)
- `dueDate` (DateTime, Nullable)
- `createdAt` (Timestamp)

### 10. `ShoppingListItem` (Procurement)
- `id` (UUID, Primary Key)
- `bookingId` (UUID, Foreign Key -> ProjectBooking)
- `itemName` (String)
- `category` (String)
- `productUrl` (String, Nullable)
- `vendorName` (String, Nullable)
- `estimatedPrice` (Decimal)
- `quantity` (Int, Default: 1)
- `clientStatus` (Enum: PENDING, APPROVED, REJECTED, PURCHASED)
- `createdAt` (Timestamp)

### 11. `ProjectFile` (Collaboration)
- `id` (UUID, Primary Key)
- `bookingId` (UUID, Foreign Key -> ProjectBooking)
- `fileName` (String)
- `fileUrl` (String)
- `fileType` (String) // PDF, JPG, DWG
- `uploadedBy` (UUID, Foreign Key -> User)
- `createdAt` (Timestamp)

## CRM & Business Tools

### 12. `Lead` (CRM)
- `id` (UUID, Primary Key)
- `designerId` (UUID, Foreign Key -> DesignerProfile)
- `clientName` (String)
- `clientEmail` (String)
- `clientPhone` (String)
- `projectDescription` (Text)
- `status` (Enum: NEW, CONTACTED, PROPOSAL_SENT, WON, LOST)
- `createdAt` (Timestamp)

### 13. `Invoice`
- `id` (UUID, Primary Key)
- `bookingId` (UUID, Foreign Key -> ProjectBooking)
- `designerId` (UUID, Foreign Key -> DesignerProfile)
- `amount` (Decimal)
- `status` (Enum: DRAFT, SENT, PAID, OVERDUE)
- `dueDate` (DateTime)
- `pdfUrl` (String, Nullable)

### 14. `Contract`
- `id` (UUID, Primary Key)
- `bookingId` (UUID, Foreign Key -> ProjectBooking)
- `designerId` (UUID, Foreign Key -> DesignerProfile)
- `content` (Text)
- `isSigned` (Boolean, default: false)
- `pdfUrl` (String, Nullable)

### 15. `Expense`
- `id` (UUID, Primary Key)
- `designerId` (UUID, Foreign Key -> DesignerProfile)
- `bookingId` (UUID, Foreign Key -> ProjectBooking, Nullable)
- `amount` (Decimal)
- `category` (String)
- `date` (DateTime)
- `receiptUrl` (String, Nullable)

### 16. `Vendor`
- `id` (UUID, Primary Key)
- `designerId` (UUID, Foreign Key -> DesignerProfile)
- `name` (String)
- `contactPerson` (String)
- `email` (String)
- `phone` (String)
- `website` (String, Nullable)

## AI Features

### 17. `AIMoodBoard`
- `id` (UUID, Primary Key)
- `designerId` (UUID, Foreign Key -> DesignerProfile)
- `prompt` (Text)
- `generatedImages` (Array of URLs)
- `suggestedColors` (Array of Strings)
- `createdAt` (Timestamp)
