# my-portfolio
A sleek personal portfolio built with Next.js and deployed seamlessly on Vercel to showcase my work and skills.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## About

This is a personal portfolio website built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/), designed to serve as a central hub for showcasing work, skills, and writing. It is hosted on [Vercel](https://vercel.com/) and live at [ishubhamsingh.dev](https://ishubhamsingh.dev). The project addresses the need for a fast, modern, and maintainable personal presence on the web without relying on heavyweight CMS platforms or site builders.

The site includes a blog powered by Markdown files (managed via `gray-matter` and `react-markdown`), allowing posts to be written in plain text and rendered seamlessly within the Next.js app. Styling is handled through [Tailwind CSS](https://tailwindcss.com/) with [NextUI](https://nextui.org/) components, and subtle animations are provided by [Framer Motion](https://www.framer.com/motion/). Theme switching between light and dark modes is supported via `next-themes`.

This project is intended for developers, recruiters, and anyone interested in learning more about Shubham Singh's work. It is also a practical demonstration of building a production-ready Next.js application with TypeScript, component libraries, and automated dependency management via Renovate.

## Installation

**Prerequisites**
- Node.js (v18 or later recommended)
- npm

**Steps**

1. Clone the repository:

```bash
git clone https://github.com/ishubhamsingh/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Usage

### Starting the Development Server

Run the local development server with hot reloading:

```bash
npm run dev
```

The portfolio will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

Compile and optimize the application for production:

```bash
npm run build
```

### Running the Production Server

After building, start the production server locally:

```bash
npm run start
```

### Linting

Check the codebase for linting issues:

```bash
npm run lint
```

### Adding Blog Posts

Blog posts are sourced from the `posts/` directory as Markdown files. To add a new post, create a `.md` file in that directory with the appropriate frontmatter:

```markdown
---
title: "My New Post"
date: "2024-01-01"
description: "A short description of the post."
---

Your post content goes here. Markdown is fully supported, including **bold**, _italic_, and code blocks.
```

The post will automatically appear in the portfolio once the dev server restarts or the site is rebuilt.

### Main User Flows

- **Portfolio browsing** — Visit the home page to view projects, skills, and personal information rendered with smooth animations powered by `framer-motion`.
- **Theme switching** — Toggle between light and dark mode using the theme switcher, managed by `next-themes`.
- **Reading blog posts** — Navigate to the blog section to browse and read posts. Markdown content is rendered via `react-markdown` with syntax highlighting support.

## License

This project is licensed under the [MIT](https://github.com/ishubhamsingh/my-portfolio/blob/main/LICENSE) license.