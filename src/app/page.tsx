import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import WorkExperience from "@/components/WorkExperience";

const recentArticles = [
  {
    title: "Maximizing JavaScript Efficiency: Exploring the Advantages of .mjs Files",
    description: "In this article, we'll explore the advantages of .mjs files and how they can help you maximize your JavaScript efficiency, improve performance, scope resolution, easy tree shaking, and many more",
    date: "October 16, 2023",
    href: "/articles/mjs-files"
  },
  {
    title: "Introducing react-swift-reveal: a library for animating elements as they enter the viewport",
    description: "The easiest way to add reveal animations to your React applications as the elements enter viewport. It includes both on scroll and simple reveal animations.",
    date: "October 4, 2023",
    href: "/articles/react-swift-reveal"
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

