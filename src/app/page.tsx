import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import WorkExperience from "@/components/WorkExperience";

const recentArticles = [
  {
    title: "Building Scalable Backends: NestJS Microservices Architecture Deep Dive",
    description: "Explore how to design robust, decoupled systems with NestJS microservices. This guide walks through communication patterns, scalability concerns, and real-world examples of modular service design.",
    date: "March 1, 2025",
    href: "/articles/nestjs-microservices"
  },
  {
    title: "Secrets in Transit: How Zero-Knowledge Sharing Actually Works",
    description: "Understand the fundamentals of zero-knowledge secret sharing — from ephemeral encryption, secure storage, to how Vaultify leverages Go, Redis, and gRPC to share sensitive data safely.",
    date: "July 24, 2024",
    href: "/articles/zero-knowledge-sharing"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Section */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">Recent Articles</h2>
            <div className="space-y-6">
              {recentArticles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  description={article.description}
                  date={article.date}
                  href={article.href}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Work Experience Sidebar */}
          <div className="lg:col-span-1">
            <WorkExperience />
          </div>
        </div>
      </div>
    </div>
  );
}

