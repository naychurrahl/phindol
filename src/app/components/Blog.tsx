import { Link } from 'react-router';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Life Insurance: A Comprehensive Guide for Families',
      excerpt: 'Learn everything you need to know about choosing the right life insurance policy for your family\'s future security and peace of mind.',
      author: 'Dr. Adewale Johnson',
      date: 'February 15, 2026',
      readTime: '5 min read',
      category: 'Life Insurance',
      image: 'https://images.unsplash.com/photo-1769674109078-da12f5cc7871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwaGFwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcyMzA1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      title: '5 Reasons Why Every Business Needs Corporate Insurance',
      excerpt: 'Discover why corporate insurance is essential for protecting your business assets, employees, and long-term growth.',
      author: 'Chioma Okafor',
      date: 'February 10, 2026',
      readTime: '4 min read',
      category: 'Corporate Insurance',
      image: 'https://images.unsplash.com/photo-1699026687712-5221e5d7b98b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NzIxODg5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      title: 'How to File an Insurance Claim: Step-by-Step Guide',
      excerpt: 'A detailed walkthrough of the claims process to help you navigate it smoothly and get the support you need quickly.',
      author: 'Ibrahim Musa',
      date: 'February 5, 2026',
      readTime: '6 min read',
      category: 'Claims & Support',
      image: 'https://images.unsplash.com/photo-1666018215790-867b14fe4822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBkb2N1bWVudHMlMjBzaWduaW5nfGVufDF8fHx8MTc3MjMwNzAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      title: 'Term vs. Whole Life Insurance: Which is Right for You?',
      excerpt: 'Compare the benefits and drawbacks of term and whole life insurance to make an informed decision for your family.',
      author: 'Fatima Bello',
      date: 'January 28, 2026',
      readTime: '7 min read',
      category: 'Life Insurance',
      image: 'https://images.unsplash.com/photo-1659352786973-82ae3af461a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9uJTIwZmFtaWx5fGVufDF8fHx8MTc3MjI0NDg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 5,
      title: 'Protecting Your Business from Cyber Threats with Insurance',
      excerpt: 'Learn how cyber insurance can safeguard your business against data breaches, ransomware, and other digital threats.',
      author: 'Ibrahim Musa',
      date: 'January 20, 2026',
      readTime: '5 min read',
      category: 'Corporate Insurance',
      image: 'https://images.unsplash.com/photo-1611736539111-2245a9f97a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjB0ZWFtJTIwd29ya3xlbnwxfHx8fDE3NzIzMDcwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 6,
      title: 'Common Insurance Myths Debunked',
      excerpt: 'Separate fact from fiction as we address the most common misconceptions about insurance coverage.',
      author: 'Dr. Adewale Johnson',
      date: 'January 15, 2026',
      readTime: '4 min read',
      category: 'Insurance Tips',
      image: 'https://images.unsplash.com/photo-1740818576358-7596eb883cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBtZWV0aW5nJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3MjMwNzAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Insurance Insights Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expert advice, tips, and insights to help you make informed decisions about your insurance needs.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
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
                  <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
                    Featured Post
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl mt-4 mb-4 text-gray-900">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-6 space-x-4">
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
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-blue-600 text-sm">{post.category}</span>
                  <h3 className="text-xl mt-2 mb-3 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
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
          <div className="bg-blue-600 text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4">Stay Informed</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest insurance tips, news, and expert advice.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-8 py-4 rounded-md hover:bg-green-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-blue-100 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-gray-900">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Life Insurance', 'Corporate Insurance', 'Claims & Support', 'Insurance Tips', 'Industry News', 'Customer Stories', 'Health & Wellness', 'Financial Planning'].map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <p className="text-gray-800">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
