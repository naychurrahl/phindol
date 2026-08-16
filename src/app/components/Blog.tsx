import { Link } from 'react-router';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Loading } from "@/app/components/ui/Loading";
import { useLiveData } from "@/app/lib/useLiveData";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string | null;
  author: string | null;
  date: string | null;
  readTime: string | null;
  category: string | null;
  image: string | null;
  content: string;
}

interface BlogData {
  blogPosts: BlogPost[];
  blogCategories: string[];
}

export function Blog() {
  const { data: blogData, loading } = useLiveData<BlogData>("blog");

  if (loading) return <Loading />;
  if (!blogData || blogData.blogPosts.length === 0) return null;

  const blogPosts = blogData.blogPosts;
  const blogCategories = ["all", ...blogData.blogCategories];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(to right, var(--brand-blue-700), var(--brand-blue-900))', color: 'var(--brand-white)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Insurance Insights Blog</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--brand-blue-100)' }}>
            Expert advice, tips, and insights to help you make informed decisions about your insurance needs.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg shadow-2xl overflow-hidden" style={{ backgroundColor: 'var(--brand-white)' }}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-full min-h-[400px]">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block">
                  <span className="px-4 py-1 rounded-full text-sm" style={{ backgroundColor: 'var(--brand-blue-100)', color: 'var(--brand-blue-600)' }}>
                    Featured Post
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl mt-4 mb-4" style={{ color: 'var(--brand-gray-900)' }}>
                  {featuredPost.title}
                </h2>
                <p className="text-lg mb-6" style={{ color: 'var(--brand-gray-600)' }}>
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm mb-6 space-x-4" style={{ color: 'var(--brand-gray-500)' }}>
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--brand-blue-600)' }}
                >
                  Read Full Article
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16" style={{ backgroundColor: 'var(--brand-gray-50)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12" style={{ color: 'var(--brand-gray-900)' }}>Recent Articles</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow" style={{ backgroundColor: 'var(--brand-white)' }}>
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm" style={{ color: 'var(--brand-blue-600)' }}>{post.category}</span>
                  <h3 className="text-xl mt-2 mb-3" style={{ color: 'var(--brand-gray-900)' }}>
                    {post.title}
                  </h3>
                  <p className="mb-4" style={{ color: 'var(--brand-gray-600)' }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm mb-4" style={{ color: 'var(--brand-gray-500)' }}>
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--brand-blue-600)' }}
                  >
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg p-8 md:p-12 text-center" style={{ backgroundColor: 'var(--brand-blue-600)', color: 'var(--brand-white)' }}>
            <h2 className="text-3xl md:text-4xl mb-4">Stay Informed</h2>
            <p className="text-xl mb-8" style={{ color: 'var(--brand-blue-100)' }}>
              Subscribe to our newsletter for the latest insurance tips, news, and expert advice.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-md focus:outline-none focus:ring-2"
                style={{ color: 'var(--brand-gray-900)', borderColor: 'var(--brand-blue-300)' }}
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-md transition-colors"
                style={{ backgroundColor: 'var(--brand-green-500)', color: 'var(--brand-white)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-green-600)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-green-500)'}
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4" style={{ color: 'var(--brand-blue-100)' }}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16" style={{ backgroundColor: 'var(--brand-gray-50)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12" style={{ color: 'var(--brand-gray-900)' }}>Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {blogCategories.map((category, index) => (
              <div
                key={index}
                className="w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer"
                style={{ backgroundColor: 'var(--brand-white)' }}
              >
                <p style={{ color: 'var(--brand-gray-800)' }}>{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}