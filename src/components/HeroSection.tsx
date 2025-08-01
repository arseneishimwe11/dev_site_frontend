"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ArrowDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Follow on Twitter", color: "hover:text-blue-400" },
  { icon: Github, href: "#", label: "Follow on Github", color: "hover:text-gray-400" },
  { icon: Linkedin, href: "#", label: "Follow on LinkedIn", color: "hover:text-blue-600" },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Avatar with glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-glow">
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-glow opacity-75 blur-md -z-10" />
            </div>
          </motion.div>
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight mb-6">
              <span className="inline-block">Software Engineer,</span>{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">designer</span>,{" "}
              <br className="hidden sm:block" />
              <span className="inline-block">and open source enthusiast.</span>
            </h1>
          </motion.div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-balance font-inter"
          >
            I'm a passionate software engineer crafting beautiful, functional solutions. 
            TypeScript and React are my tools of choice for building extraordinary digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-glow transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="mailto:your.email@example.com" className="inline-flex items-center">
                <Mail className="mr-3 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 glass-card hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#projects" className="inline-flex items-center">
                View My Work
                <ArrowDown className="ml-3 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex items-center justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                className={`p-3 rounded-xl glass-card transition-all duration-300 hover:scale-110 ${social.color} group`}
              >
                <social.icon className="h-6 w-6 transition-transform group-hover:scale-110" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float opacity-50" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-float opacity-30" style={{animationDelay: '3s'}} />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </motion.div>
    </section>
  )
}

