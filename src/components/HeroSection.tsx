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

// Fancy Irregular Pattern Background
const FancyPatternBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sophisticated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexGrid" width="60" height="52" patternUnits="userSpaceOnUse">
              <path d="M30 0 L45 13 L45 39 L30 52 L15 39 L15 13 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexGrid)" className="text-foreground" />
        </svg>
      </div>
      
      {/* Animated hexagonal shapes */}
      <motion.div
        className="absolute top-16 left-20"
        animate={{
          rotate: [0, 120, 240, 360],
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-blue-500/20 dark:text-blue-400/15">
          <path d="M12 2 L17.5 6.5 L17.5 17.5 L12 22 L6.5 17.5 L6.5 6.5 Z" fill="currentColor"/>
        </svg>
      </motion.div>

      {/* Organic blob shapes */}
      <motion.div
        className="absolute top-32 right-24"
        animate={{
          rotate: [0, -90, -180, -270, -360],
          scale: [1, 1.2, 0.9, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" className="text-purple-500/15 dark:text-purple-400/12">
          <path d="M16,4 C20,4 24,8 28,12 C24,16 20,20 16,20 C12,20 8,16 4,12 C8,8 12,4 16,4 Z" fill="currentColor"/>
        </svg>
      </motion.div>

      {/* Triangle clusters */}
      <motion.div
        className="absolute bottom-24 left-16"
        animate={{
          rotate: [0, 60, 120, 180, 240, 300, 360],
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" className="text-indigo-500/18 dark:text-indigo-400/14">
          <path d="M14 2 L26 22 L2 22 Z" fill="currentColor"/>
        </svg>
      </motion.div>

      {/* Diamond shapes */}
      <motion.div
        className="absolute bottom-32 right-28"
        animate={{
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          scale: [1, 1.08, 1.2, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" className="text-blue-500/16 dark:text-blue-400/12">
          <path d="M10 2 L18 10 L10 18 L2 10 Z" fill="currentColor"/>
        </svg>
      </motion.div>

      {/* Abstract curved shapes */}
      <motion.div
        className="absolute top-1/2 left-8"
        animate={{
          rotate: [0, -45, -90, -135, -180],
          scale: [1, 1.3, 1, 1.15, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" className="text-purple-500/12 dark:text-purple-400/10">
          <path d="M6 18 Q18 6 30 18 Q18 30 6 18" fill="currentColor"/>
        </svg>
      </motion.div>

      {/* Large decorative hexagon */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-40 h-40 opacity-[0.02] dark:opacity-[0.05]"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-blue-500">
          <path d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z" fill="currentColor"/>
        </svg>
      </motion.div>

      {/* Large decorative organic shape */}
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-32 h-32 opacity-[0.015] dark:opacity-[0.04]"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-indigo-500">
          <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="currentColor"/>
          <path d="M50,20 C60,25 70,35 75,45 C70,55 60,65 50,70 C40,65 30,55 25,45 C30,35 40,25 50,20 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </motion.div>
    </div>
  )
}

// Dynamic Cycling Text Component with Enhanced Typewriter Effect
const CyclingText = ({ sentences, delay = 0 }: { sentences: string[], delay?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isInitialDelay, setIsInitialDelay] = useState(true)

  // Calculate the longest sentence for consistent width
  const longestSentence = sentences.reduce((longest, current) =>
    current.length > longest.length ? current : longest, ""
  )

  useEffect(() => {
    // Initial delay before starting the typewriter effect
    if (isInitialDelay) {
      const initialTimeout = setTimeout(() => {
        setIsInitialDelay(false)
      }, delay)
      return () => clearTimeout(initialTimeout)
    }

    const currentSentence = sentences[currentSentenceIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < currentSentence.length) {
          setDisplayText(prev => prev + currentSentence[currentIndex])
          setCurrentIndex(prev => prev + 1)
        } else {
          // Pause before deleting (longer pause for better readability)
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1))
        } else {
          // Move to next sentence
          setIsDeleting(false)
          setCurrentIndex(0)
          setCurrentSentenceIndex(prev => (prev + 1) % sentences.length)
        }
      }
    }, isDeleting ? 50 : 100) // Optimized speeds: 100ms typing, 50ms deleting

    return () => clearTimeout(timeout)
  }, [currentIndex, displayText, isDeleting, currentSentenceIndex, sentences, delay, isInitialDelay])

  return (
    <span className="relative inline-block min-w-0">
      {/* Invisible text to maintain consistent width and prevent layout shifts */}
      <span className="invisible select-none whitespace-nowrap" aria-hidden="true">
        {longestSentence}
      </span>

      {/* Actual typewriter text positioned absolutely */}
      <span className="absolute inset-0 left-0 top-0 whitespace-nowrap">
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
          className="text-blue-600 dark:text-blue-400 font-normal ml-1"
        >
          |
        </motion.span>
      </span>
    </span>
  )
}

export default function HeroSection() {
  const cyclingTexts = [
    "Experiences",
    "Applications",
    "Interfaces",
    "Solutions",
    "Products"
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fancy Pattern Background */}
      <FancyPatternBackground />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 dark:from-blue-950/10 dark:via-transparent dark:to-indigo-950/10" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 relative z-10">
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
                className="inline-block text-foreground min-h-[1.2em] flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <CyclingText sentences={cyclingTexts} delay={1000} />
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
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light fredericka-the-great-regular">
              Software Engineer & Creative Developer
            </p>
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mt-4 leading-relaxed font-mono"
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
            className="flex relative items-center justify-center space-x-6"
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
        className="absolute bottom-1 items-center justify-center transform -translate-x-1/2"
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
