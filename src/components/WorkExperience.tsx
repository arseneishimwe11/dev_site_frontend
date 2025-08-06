"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface WorkExperienceItem {
  company: string
  position: string
  duration: string
  logo?: string
}

const workExperience: WorkExperienceItem[] = [
  {
    company: "MT",
    position: "Lead Backend Engineer",
    duration: "Jan 2024 — Present",
  },
  {
    company: "Sphere News",
    position: "Backend Developer & Project Collaborator",
    duration: "2024",
  },
  {
    company: "SalesPro",
    position: "Full Stack Developer",
    duration: "2023",
  },
]

export default function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <div className="h-5 w-5 rounded bg-primary mr-2"></div>
        Experience
      </h3>
      
      <div className="space-y-4">
        {workExperience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="border-border/50">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm">{item.company}</h4>
                    <p className="text-sm text-muted-foreground">{item.position}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.duration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

