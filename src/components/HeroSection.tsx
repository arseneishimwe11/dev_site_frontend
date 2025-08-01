"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ArrowDown, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Follow on Twitter", color: "hover:text-blue-500", bg: "hover:bg-blue-50 dark:hover:bg-blue-950/20" },
  { icon: Github, href: "#", label: "Follow on Github", color: "hover:text-gray-700 dark:hover:text-gray-300", bg: "hover:bg-gray-50 dark:hover:bg-gray-900/20" },
  { icon: Linkedin, href: "#", label: "Follow on LinkedIn", color: "hover:text-blue-600", bg: "hover:bg-blue-50 dark:hover:bg-blue-950/20" },
]

// Modern Geometric Grid Background
const ModernGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="modernGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#modernGrid)" className="text-foreground" />
        </svg>
      </div>
      
      {/* Subtle animated squares */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-blue-500/10 dark:bg-blue-400/5 rounded-sm"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-32 w-3 h-3 bg-purple-500/10 dark:bg-purple-400/5 rounded-sm"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-32 left-32 w-5 h-5 bg-indigo-500/10 dark:bg-indigo-400/5 rounded-sm"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-3 h-3 bg-blue-500/10 dark:bg-blue-400/5 rounded-sm"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      {/* Large background squares for depth */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/3 dark:to-purple-400/3 rounded-2xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 dark:from-indigo-400/3 dark:to-pink-400/3 rounded-2xl"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}

// Typewriter Effect Component
const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, delay + currentIndex * 80)

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, text])

  return (
    <span className="relative">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute text-blue-600 dark:text-blue-400"
      >
        |
      </motion.span>
    </span>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Grid Background */}
      <ModernGrid />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 dark:from-blue-950/10 dark:via-transparent dark:to-indigo-950/10" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Clean, Professional Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="mb-12 flex justify-center"
          >
            <div className="relative group">
              <motion.div 
                className="h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                  <Code2 className="h-11 w-11 text-white" />
                </div>
              </motion.div>
              
              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 opacity-20 blur-xl -z-10" />
            </div>
          </motion.div>
          
          {/* Clean Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-tight mb-6">
              <motion.span 
                className="inline-block text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Crafting
              </motion.span>
              <br />
              <motion.span 
                className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Digital
              </motion.span>
              <br />
              <motion.span 
                className="inline-block text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <TypewriterText text="Experiences" delay={1000} />
              </motion.span>
            </h1>
          </motion.div>
          
          {/* Refined Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-12"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Software Engineer & Creative Developer
            </p>
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mt-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              Transforming ideas into elegant, scalable solutions with modern web technologies. 
              Building thoughtful digital experiences that matter.
            </motion.p>
          </motion.div>

          {/* Clean CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="px-8 py-3 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg transition-all duration-300"
                asChild
              >
                <a href="mailto:your.email@example.com" className="inline-flex items-center">
                  <Mail className="mr-3 h-5 w-5" />
                  Let's Connect
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-lg font-semibold rounded-2xl border-2 border-border hover:bg-accent transition-all duration-300"
                asChild
              >
                <a href="#projects" className="inline-flex items-center">
                  View My Work
                  <ArrowDown className="ml-3 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Refined Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="flex items-center justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.9 + index * 0.1,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-xl border border-border transition-all duration-300 ${social.color} ${social.bg}`}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="flex flex-col items-center space-y-3 cursor-pointer group"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 group-hover:border-foreground/50 transition-colors flex justify-center">
            <motion.div
              className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-1.5"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
