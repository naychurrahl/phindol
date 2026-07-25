import { Link, useParams } from 'react-router';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { blogFallback } from "@/app/newData";
import { useLiveData } from "@/app/lib/useLiveData";

export function BlogPost() {
  const { id } = useParams();
  const blogData = useLiveData("blog", blogFallback);
  const blogPosts = blogData.blogPosts;

  const post = blogPosts.find(p => p.id === Number(id)) || blogPosts[0];

  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative h-96" style={{ backgroundColor: 'var(--brand-gray-900)' }}>
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Link
              to="/blog"
              className="inline-flex items-center mb-4 hover:opacity-80 transition-opacity"
              style={{ color: 'var(--brand-white)' }}
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Blog
            </Link>
            <span className="inline-block px-4 py-1 rounded-full text-sm mb-4" style={{ backgroundColor: 'var(--brand-blue-600)', color: 'var(--brand-white)' }}>
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--brand-white)' }}>
              {post.title}
            </h1>
            <div className="flex items-center text-sm space-x-4" style={{ color: 'var(--brand-white)' }}>
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg shadow-lg p-8 md:p-12" style={{ backgroundColor: 'var(--brand-white)' }}>
            {/* Share Buttons */}
            <div className="flex items-center justify-between mb-8 pb-8" style={{ borderBottom: '1px solid var(--brand-gray-200)' }}>
              <h2 className="text-lg" style={{ color: 'var(--brand-gray-700)' }}>Share this article</h2>
              <div className="flex space-x-4">
                <button className="p-2 rounded-full transition-colors" style={{ backgroundColor: 'var(--brand-blue-100)', color: 'var(--brand-blue-600)' }}>
                  <Facebook size={20} />
                </button>
                <button className="p-2 rounded-full transition-colors" style={{ backgroundColor: 'var(--brand-blue-100)', color: 'var(--brand-blue-600)' }}>
                  <Twitter size={20} />
                </button>
                <button className="p-2 rounded-full transition-colors" style={{ backgroundColor: 'var(--brand-blue-100)', color: 'var(--brand-blue-600)' }}>
                  <Linkedin size={20} />
                </button>
                <button className="p-2 rounded-full transition-colors" style={{ backgroundColor: 'var(--brand-blue-100)', color: 'var(--brand-blue-600)' }}>
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--brand-gray-200)' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--brand-blue-100)' }}>
                    <User style={{ color: 'var(--brand-blue-600)' }} size={32} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl mb-2" style={{ color: 'var(--brand-gray-900)' }}>{post.author}</h3>
                  <p style={{ color: 'var(--brand-gray-600)' }}>
                    Expert insurance advisor with years of experience helping families and businesses find the right coverage for their needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-lg p-8 text-center" style={{ backgroundColor: 'var(--brand-blue-600)', color: 'var(--brand-white)' }}>
            <h2 className="text-2xl md:text-3xl mb-4">
              Have Questions About Insurance?
            </h2>
            <p className="text-xl mb-6" style={{ color: 'var(--brand-blue-100)' }}>
              Our expert team is ready to help you find the perfect coverage.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-md transition-colors"
              style={{ backgroundColor: 'var(--brand-white)', color: 'var(--brand-blue-600)' }}
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}