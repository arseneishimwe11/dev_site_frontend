"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Follow on Twitter" },
  { icon: Github, href: "#", label: "Follow on Github" },
  { icon: Linkedin, href: "#", label: "Follow on LinkedIn" },
]

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="mb-8">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Software Engineer, designer,{" "}
            <br className="hidden sm:block" />
            and open source enthusiast.
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            I'm a passionate software engineer based in your location. TypeScript and React are 
            my go-to technologies for crafting clean and efficient solutions. As a person always 
            learning, I'm constantly seeking exciting projects and contributing to open-source software.
          </p>

          <div className="flex items-center space-x-4 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-2 rounded-md hover:bg-accent transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild className="mb-4">
              <a href="mailto:your.email@example.com" className="inline-flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                your.email@example.com
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

