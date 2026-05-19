# API Endpoints: Auth & User Roles

## Base URL: `/api/v1`

### 1. Authentication
*These endpoints bridge the Frontend's Auth provider (e.g. Firebase) with our PostgreSQL database.*

- **`POST /auth/verify`**
  - **Description**: Verifies the Firebase/Auth0 ID token and returns the platform's session JWT. Creates a new user row if it does not exist.
  - **Body**: `{ "idToken": "ey...", "role": "CLIENT | DESIGNER" }`
  - **Response**: `{ "token": "...", "user": { "id", "role", "name" } }`

- **`POST /auth/otp/send`**
  - **Description**: Triggers a phone number OTP via Twilio / Fast2SMS (if bypassing Firebase phone auth).
  - **Body**: `{ "phone": "+91XXXXXXXXXX" }`

- **`POST /auth/otp/verify`**
  - **Description**: Validates the OTP.
  - **Body**: `{ "phone": "+91XXXXXXXXXX", "code": "123456" }`

### 2. User Accounts
- **`GET /users/me`**
  - **Header**: `Authorization: Bearer <token>`
  - **Description**: Get the logged-in user's profile and basic status.
  
- **`PUT /users/me`**
  - **Description**: Update basic details (name, phone, profile image link).

### 3. Designer Onboarding Flow (Multi-Step)
- **`POST /designers/onboard/step-1`** (Basic Details)
  - **Body**: `{ "bio": "...", "experienceYears": 5, "location": "Chennai", "styles": ["Modern"] }`
  
- **`POST /designers/onboard/step-2`** (Services)
  - **Body**: `{ "services": [ { "title": "3D Render", "price": 5000 } ] }`

- **`POST /designers/onboard/step-3`** (Portfolio)
  - **Body**: `{ "projects": [ { "title": "Villa", "images": ["url1", "url2"] } ] }`
  
- **`POST /designers/onboard/step-4`** (Verification)
  - **Body**: `{ "gstNumber": "...", "idProofUrl": "..." }`

### 4. Role-Specific Protected Endpoints
- **`GET /admin/users`** - List all users (Requires `ADMIN` role)
- **`PUT /admin/designers/:id/verify`** - Approve or reject a designer profile.
- **`GET /clients/favorites`** - Fetch saved designers for a client.
- **`POST /clients/favorites/:designerId`** - Save a designer.
- **`GET /designers/dashboard/stats`** - Fetch leads, active projects, earnings.
