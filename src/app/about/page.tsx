"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Code2, Coffee, Music, Sparkles, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Follow on Twitter", color: "hover:text-blue-400", bgColor: "hover:bg-blue-400/10" },
  { icon: Github, href: "#", label: "Follow on Github", color: "hover:text-gray-400", bgColor: "hover:bg-gray-400/10" },
  { icon: Linkedin, href: "#", label: "Follow on LinkedIn", color: "hover:text-blue-600", bgColor: "hover:bg-blue-600/10" },
]

const skills = [
  { name: "TypeScript", level: 95, color: "from-blue-500 to-blue-600" },
  { name: "React/Next.js", level: 90, color: "from-cyan-500 to-cyan-600" },
  { name: "Java", level: 85, color: "from-orange-500 to-orange-600" },
  { name: "Go", level: 80, color: "from-teal-500 to-teal-600" },
  { name: "Python", level: 75, color: "from-green-500 to-green-600" },
  { name: "Node.js", level: 88, color: "from-emerald-500 to-emerald-600" },
]

const interests = [
  { icon: Code2, title: "Software Engineering", description: "Building scalable and efficient solutions" },
  { icon: Music, title: "Music", description: "Finding inspiration in melodies and rhythms" },
  { icon: Coffee, title: "Coffee Culture", description: "Fueling creativity one cup at a time" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate software engineer crafting digital experiences with precision and creativity
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8 rounded-3xl h-full">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 mr-4">
                    <div className="h-full w-full rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-display font-bold">My Journey</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I started coding at 16 after joining a coding academy, and it's been an 
                    incredible journey ever since. Writing those first lines of code sparked a passion 
                    that has only grown stronger over time.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    TypeScript, Java, and Go are my go-to technologies. I love how they help me write 
                    clean, efficient code while catching potential issues early in development.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    When I'm not coding, I'm usually listening to music. It helps me stay creative 
                    and find new perspectives in my work.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Currently, I'm working on various personal projects, building innovative 
                    software solutions, and serving as a consultant for tech projects.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">Rwanda</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">7+ years experience</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="glass-card p-8 rounded-3xl h-full flex flex-col items-center justify-center">
                <div className="relative group mb-6">
                  {/* Gradient border container */}
                  <div className="relative p-1 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-xl dark:shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/40">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        rotateX: 5,
                      }}
                      transition={{ 
                        duration: 0.6, 
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      className="relative bg-background rounded-[calc(1.5rem-4px)] p-4 overflow-hidden"
                    >
                      {/* Image container */}
                      <div className="relative">
                        <Image
                          src="/pic_pp.png"
                          alt="Arsene Ishimwe - Software Engineer"
                          width={280}
                          height={280}
                          className="rounded-2xl object-cover w-full h-auto shadow-lg"
                          priority
                        />
                        
                        {/* Hover overlay effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-pink-500/15 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      
                      {/* Floating particles effect - Enhanced for light mode */}
                      <motion.div
                        className="absolute top-4 right-4 w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full opacity-0 group-hover:opacity-80 dark:group-hover:opacity-60 shadow-lg shadow-blue-500/50"
                        animate={{ 
                          y: [0, -10, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div
                        className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-500 dark:bg-purple-400 rounded-full opacity-0 group-hover:opacity-70 dark:group-hover:opacity-40 shadow-lg shadow-purple-500/50"
                        animate={{ 
                          y: [0, -8, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                      
                      {/* Additional light mode particle */}
                      <motion.div
                        className="absolute top-1/2 right-2 w-1 h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full opacity-0 group-hover:opacity-60 dark:group-hover:opacity-30 shadow-sm shadow-indigo-500/50"
                        animate={{ 
                          x: [0, -5, 0],
                          opacity: [0, 0.6, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Ambient glow effect - Enhanced for light mode */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-15 dark:opacity-20 blur-xl -z-10 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500" />
                </div>

                {/* Name and title section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-display font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                    Arsene Ishimwe
                  </h3>
                  <p className="text-muted-foreground font-medium mb-3 text-gray-600 dark:text-gray-400">
                    Software Engineer & Creative Developer
                  </p>
                  
                  {/* Status badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/15 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-sm font-medium border border-green-500/20 dark:border-green-500/10"
                  >
                    <motion.div
                      className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full shadow-sm shadow-green-500/50"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Available for projects
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mb-16"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-2xl font-display font-bold mb-8 text-center">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-display font-bold mb-8 text-center">Interests & Passions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 mb-4">
                    <div className="h-full w-full rounded-lg bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                      <interest.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{interest.title}</h3>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="text-center"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-2xl font-display font-bold mb-6">Let's Connect</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always excited to collaborate on innovative projects and discuss new opportunities. 
                Feel free to reach out through any of these platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button 
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-glow transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="mailto:ishimwearsene11@gmail.com" className="inline-flex items-center">
                    <Mail className="mr-3 h-5 w-5" />
                    ishimwearsene11@gmail.com
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    className={`p-4 rounded-2xl glass-card transition-all duration-300 hover:scale-110 ${social.color} ${social.bgColor} group`}
                  >
                    <social.icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

