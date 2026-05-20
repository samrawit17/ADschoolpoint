import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const blogPosts = [
  {
    id: 1,
    title: "How Digital Transformation is Reshaping Education",
    excerpt: "Schools migrating to comprehensive management systems see a 40% reduction in administrative overhead. Here is why going digital is no longer optional.",
    date: "April 19, 2026",
    category: "EdTech",
    author: "SchoolPoint Team",
    slug: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Parent-Teacher Engagement in the Digital Age",
    excerpt: "Real-time communication portals bridge the gap between home and school, directly improving student outcomes and satisfaction.",
    date: "March 5, 2026",
    category: "Engagement",
    author: "SchoolPoint Team",
    slug: "#",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 3,
    title: "Managing School Finances: From Chaos to Clarity",
    excerpt: "Automated billing, transparent ledgers, and seamless payroll runs. How a unified system simplifies your school's financial health.",
    date: "January 14, 2026",
    category: "Management",
    author: "SchoolPoint Team",
    slug: "#",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    featured: false
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Blog"
        description="Read SchoolPoint insights on software development, digital marketing, AI, payment integrations, and web growth opportunities for Ethiopian businesses."
        path="/blog"
        keywords={[
          "Ethiopia tech blog",
          "software development blog Ethiopia",
          "Telebirr integration guide",
          "website SEO Ethiopia",
        ]}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 border border-border/40 bg-muted/20">
            <span className="text-accent">
              Our Blog
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Latest Insights
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              & News
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our digital experts. 
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16 pb-24 relative bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={post.slug}
                className={`group flex flex-col bg-card border border-border/60 rounded-2xl overflow-hidden hover:shadow-lg hover:border-accent/40 transition-all duration-300 ${post.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className={`relative overflow-hidden w-full ${post.featured ? 'md:h-80 lg:h-96 h-64' : 'h-64'}`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/90 text-foreground backdrop-blur-sm border border-border/40 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className={`${post.featured ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl'} font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-border/40 flex items-center text-sm font-medium text-accent">
                    Read article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="border-border/80 rounded-xl hover:bg-muted text-foreground px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
