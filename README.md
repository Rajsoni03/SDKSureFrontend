# SDKSureFrontendTest

React + TypeScript starter aligned with the project plan: Vite, Tailwind, shadcn/ui, React Query, Zustand, and OpenAPI-driven API clients.

## Getting started

```bash
npm install
npm run dev
```

## Generate typed API client

- Update the backend schema URL in `openapitools.json` if needed (default: `http://localhost:8000/api/v1/schema/`).
- Run `npm run generate:api` to emit DTOs/enums/API classes into `src/services/api/generated` using the `typescript-axios` generator.

## Stack highlights

- UI: Tailwind CSS, shadcn/ui primitives
- Data: @tanstack/react-query, Zustand
- HTTP: axios with configurable base URL (`VITE_API_URL`)
- Tooling: Vite, TypeScript, ESLint
