# Gallery site

A modern React + TypeScript web application for browsing and viewing artwork. Built with Azure Functions and Azure Storage for serverless backend integration.

---

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Azure Functions (Node.js)
- **Storage**: Azure Table Storage (metadata), Azure Blob Storage (images)
- **Tooling**: Prettier, GitHub Actions, Vitest
- **CI/CD**: Github actions

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
VITE_FUNCTION_KEY_GETALL=""
VITE_FUNCTION_KEY_GETBYID=""
VITE_API_URL_GET_ARTWORKS="api/art"
VITE_API_URL_GET_ASSETS="api/assets"
VITE_API_BASEURL=""
```

#### 3. Run the app

```bash
npm run dev
```

### Run tests

```bash
npm run test
```

## Backend (Azure Functions)

This project uses Azure Functions as a serverless backend, which:

- Serves artwork metadata from Azure Table Storage
- Provides signed URLs to images stored in Azure Blob Storage
- Exposes HTTP-triggered endpoints consumed by the frontend (e.g., `/api/getArtImages`, `/api/art/{id}`)

You can find the function source code in the: [holoni-celestial-function](https://github.com/inoloh/holoni-celestial-function.git).

## CI/CD Pipeline
This project uses GitHub Actions for continuous integration and deployment:

- **CI (`ci.yml`)**
  - Triggers on every pull request to `main` and on pushes to `development`
  - Runs all tests and ensures build integrity

- **Deploy (`deploy.yml`)**
  - Triggers on push to `main`
  - Deploys the app to Azure Static Web Apps

