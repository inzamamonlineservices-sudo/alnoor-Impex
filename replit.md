# Replit.md

## Overview

This is a full-stack web application for PakTextile Brokers, a Pakistan-based textile brokerage company with over 30 years of industry experience. The application serves as a professional business website connecting textile manufacturers and buyers worldwide, facilitating deals and showcasing the company's services in yarn, fabric, home textiles, and garments sourcing.

The website features a modern, trust-inspiring design with sections for hero presentation, company story, services, products, blog, and contact information. It's built to be fast-loading and professional to establish credibility in the global textile trade market.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation via Hookform Resolvers

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Development Setup**: Custom Vite integration for development mode with HMR
- **API Design**: RESTful API structure with `/api` prefix routing
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Error Handling**: Centralized error handling middleware with structured JSON responses

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema definition
- **Connection**: Neon Database serverless PostgreSQL connection
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: In-memory storage fallback for local development

### Authentication and Authorization
- **User Schema**: Basic user system with username/password authentication
- **Session Management**: Express session middleware with PostgreSQL storage
- **Type Safety**: Zod schemas for user validation and type inference

### Frontend Design System
- **Theme**: New York style Shadcn/ui theme with neutral base colors
- **Typography**: Inter font family for modern, professional appearance
- **Color Scheme**: Professional color palette with teal and blue accent colors
- **Responsive Design**: Mobile-first responsive design with Tailwind breakpoints
- **Component Architecture**: Reusable UI components with consistent styling patterns

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18 with TypeScript, Vite for bundling and development
- **UI Library**: Radix UI primitives with Shadcn/ui component system
- **Styling**: Tailwind CSS with PostCSS processing
- **Routing**: Wouter for lightweight React routing

### Database and ORM
- **Database**: PostgreSQL via Neon Database serverless platform
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migrations**: Drizzle Kit for schema management
- **Connection**: @neondatabase/serverless for database connectivity

### Development and Build Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Development**: Replit-specific plugins for cartographer and runtime error overlay
- **Process Management**: tsx for TypeScript execution
- **Bundling**: esbuild for production server bundling

### Form and Validation
- **Forms**: React Hook Form for form management
- **Validation**: Zod for schema validation
- **Integration**: @hookform/resolvers for Zod integration

### Utility Libraries
- **Styling Utilities**: clsx and tailwind-merge for conditional classes
- **Date Handling**: date-fns for date manipulation
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **State Management**: TanStack React Query for server state

### UI Enhancement Libraries
- **Carousel**: Embla Carousel React for image/content carousels
- **Command Palette**: cmdk for search and command interfaces
- **Icons**: Lucide React for consistent iconography
- **Styling**: class-variance-authority for component variant management