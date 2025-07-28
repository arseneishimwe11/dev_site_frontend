"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/ProjectCard"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and order processing.",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"]
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"]
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.",
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    tags: ["React", "TypeScript", "Chart.js", "OpenWeather API", "Tailwind CSS"]
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Framer Motion, featuring smooth animations and dark mode support.",
    liveUrl: "https://yourportfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support, comment system, and admin dashboard for content management.",
    liveUrl: "https://example-blog.com",
    githubUrl: "https://github.com/yourusername/blog-platform",
    tags: ["Next.js", "MDX", "Prisma", "NextAuth.js", "Vercel"]
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with private messaging, group chats, file sharing, and emoji reactions.",
    liveUrl: "https://example-chat.com",
    githubUrl: "https://github.com/yourusername/chat-app",
    tags: ["React", "Socket.io", "Node.js", "Express", "MongoDB"]
  }
]

const openSourceProjects = [
  {
    title: "React Animation Library",
    description: "A lightweight React animation library for creating smooth, performant animations with a simple API.",
    githubUrl: "https://github.com/yourusername/react-animations",
    tags: ["React", "TypeScript", "Animation", "Library"]
  },
  {
    title: "Next.js Starter Template",
    description: "A comprehensive Next.js starter template with TypeScript, Tailwind CSS, ESLint, and Prettier pre-configured.",
    githubUrl: "https://github.com/yourusername/nextjs-starter",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Template"]
  },
  {
    title: "API Rate Limiter",
    description: "A flexible rate limiting middleware for Express.js applications with Redis support and customizable strategies.",
    githubUrl: "https://github.com/yourusername/api-rate-limiter",
    tags: ["Node.js", "Express", "Redis", "Middleware"]
  }
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          My Projects
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Here are some of the projects I've worked on. Most are open-source - feel free to 
          check out the code or contribute.
        </p>
      </motion.div>

      {/* Websites & Apps */}
      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-bold mb-8"
        >
          Websites & Apps
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Open Source Libraries and Tools */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold mb-8"
        >
          Open Source Libraries and Tools
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openSourceProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              tags={project.tags}
              index={index + projects.length}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

