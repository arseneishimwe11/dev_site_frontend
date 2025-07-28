"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Follow on Twitter", color: "text-blue-400" },
  { icon: Github, href: "#", label: "Follow on Github", color: "text-gray-400" },
  { icon: Linkedin, href: "#", label: "Follow on LinkedIn", color: "text-blue-600" },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            I'm Your Name, a passionate software engineer.
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I started coding when I was 16 after joining a coding academy, and it's been an 
                amazing journey ever since. Writing those first lines of code sparked a passion 
                that has only grown stronger over time.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                TypeScript and React are my go-to technologies. I love how they help me write 
                clean, efficient code while catching potential issues early in development.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I'm usually listening to music. It helps me stay creative 
                and find new perspectives in my work.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I work as a software engineer at Your Company, building innovative 
                software solutions, and also serve as a consultant for various tech projects.
              </p>
            </div>
            
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 space-y-6"
          >
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="outline" asChild>
                  <a href={social.href} className="inline-flex items-center">
                    <social.icon className={`mr-2 h-4 w-4 ${social.color}`} />
                    {social.label}
                  </a>
                </Button>
              ))}
            </div>
            
            <Button asChild>
              <a href="mailto:your.email@example.com" className="inline-flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                your.email@example.com
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

