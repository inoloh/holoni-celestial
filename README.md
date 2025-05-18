# Gallery site

A modern React + TypeScript web application for browsing and viewing artwork. Built with Azure Functions and Azure Storage for serverless backend integration.

---

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Azure Functions (Node.js)
- **Storage**: Azure Table Storage (metadata), Azure Blob Storage (images)
- **Tooling**: Prettier, GitHub Actions, Vitest

---

### Setup Instructions

#### 1. Clone the Repository and install dependencies

```bash
git clone https://github.com/inoloh/holoni-celestial.git
cd holoni-celestial
npm install
```

#### 2. Configure environment variables
Create a .env based on the example below
```bash
VITE_API_URL_GETALL=https://<your-azure-function-url>/api/getArtImages
VITE_FUNCTION_KEY_GETALL=<your-azure-function-key>
VITE_API_URL_GETBYID=https://<your-azure-function-url>/api/art
VITE_FUNCTION_KEY_GETBYID=<your-azure-function-key>
```

#### 3. Run the app
```bash
npm run dev
```

### Run tests
```bash
npm run test
```

## ☁️ Backend (Azure Functions)

This project uses Azure Functions as a serverless backend, which:

- Serves artwork metadata from Azure Table Storage
- Provides signed URLs to images stored in Azure Blob Storage
- Exposes HTTP-triggered endpoints consumed by the frontend (e.g., `/api/getArtImages`, `/api/art/{id}`)

You can find the function source code in the: [holoni-celestial-function](https://github.com/inoloh/holoni-celestial-function.git).
