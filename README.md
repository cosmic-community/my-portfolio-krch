# QA Developer Portfolio
![App Preview](https://imgix.cosmicjs.com/128f7450-5326-11f1-8cae-3ba0530d6aa4-autopilot-photo-1573496359142-b8d87734a5a2-1779155841030.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive portfolio website built with Next.js 16 and Cosmic CMS, designed specifically for QA developers to showcase their projects, skills, work experience, and contact information.

## Features

- 🏠 Beautiful homepage with hero section and featured projects
- 💼 Detailed project pages with screenshots and tech stack
- 🛠️ Skills page organized by category with proficiency levels
- 🏢 Work experience timeline with detailed responsibilities
- 📇 Contact page with social links and downloadable resume
- 📱 Fully responsive design for all devices
- ⚡ Server-side rendering for optimal performance
- 🎨 Modern UI with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a0bc2edc9307e7d2c5af940&clone_repository=6a0bc458c9307e7d2c5af9ae)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience.
> 
> User instructions: A QA developer portfolio with projects, skills, work experience, and contact info"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Portfolio". The content is managed in Cosmic CMS with the following object types: projects, skills, work-experience, contact-info. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A QA developer portfolio with projects, skills, work experience, and contact info

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **Bun** - Fast package manager

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the appropriate content model

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Set up environment variables in `.env.local`:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all projects with related data
const projects = await cosmic.objects
  .find({ type: 'projects' })
  .depth(1)

// Fetch featured projects only
const featured = await cosmic.objects
  .find({ type: 'projects', 'metadata.featured': true })
  .depth(1)
```

## Cosmic CMS Integration

The application integrates with these Cosmic object types:
- **projects** - Portfolio projects with screenshots
- **skills** - Technical skills grouped by category
- **work-experience** - Professional work history
- **contact-info** - Personal contact information

## Deployment

Deploy easily to Vercel or Netlify by connecting your repository and adding environment variables.

<!-- README_END -->