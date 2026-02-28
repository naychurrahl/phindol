import { Link, useParams } from 'react-router';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BlogPost() {
  const { id } = useParams();

  // Mock blog post data (in a real app, this would come from an API or CMS)
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Life Insurance: A Comprehensive Guide for Families',
      author: 'Dr. Adewale Johnson',
      date: 'February 15, 2026',
      readTime: '5 min read',
      category: 'Life Insurance',
      image: 'https://images.unsplash.com/photo-1769674109078-da12f5cc7871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwaGFwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcyMzA1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: `
        <p>Life insurance is one of the most important financial decisions you'll make for your family. It provides financial security and peace of mind, ensuring that your loved ones are protected even when you're no longer around to provide for them.</p>

        <h2>What is Life Insurance?</h2>
        <p>Life insurance is a contract between you and an insurance company. In exchange for premium payments, the insurance company provides a lump-sum payment, known as a death benefit, to your beneficiaries after your death.</p>

        <h2>Types of Life Insurance</h2>
        <p>There are two main types of life insurance:</p>
        
        <h3>1. Term Life Insurance</h3>
        <p>Term life insurance provides coverage for a specific period, typically 10, 20, or 30 years. It's the most affordable option and is ideal for temporary needs like mortgage protection or income replacement while your children are young.</p>

        <h3>2. Whole Life Insurance</h3>
        <p>Whole life insurance provides lifelong coverage and includes a savings component called cash value. While premiums are higher, this policy builds value over time that you can borrow against or withdraw.</p>

        <h2>How Much Coverage Do You Need?</h2>
        <p>A general rule of thumb is to have coverage worth 10-12 times your annual income. However, your specific needs depend on factors like:</p>
        <ul>
          <li>Outstanding debts (mortgage, loans)</li>
          <li>Number of dependents</li>
          <li>Future education costs</li>
          <li>Final expenses</li>
          <li>Existing savings and investments</li>
        </ul>

        <h2>Why Choose Phindol Insurance?</h2>
        <p>At Phindol Insurance, we understand that every family is unique. Our experienced advisors work with you to assess your needs and find the perfect policy that fits your budget and provides comprehensive protection for your loved ones.</p>

        <p>Ready to secure your family's future? Contact us today for a free consultation and personalized quote.</p>
      `,
    },
    {
      id: 2,
      title: '5 Reasons Why Every Business Needs Corporate Insurance',
      author: 'Chioma Okafor',
      date: 'February 10, 2026',
      readTime: '4 min read',
      category: 'Corporate Insurance',
      image: 'https://images.unsplash.com/photo-1699026687712-5221e5d7b98b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NzIxODg5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: `
        <p>Running a business comes with numerous risks. From property damage to liability claims, unexpected events can threaten your company's financial stability and future growth. Here are five compelling reasons why corporate insurance is essential.</p>

        <h2>1. Protects Your Assets</h2>
        <p>Your business assets—from equipment and inventory to your office space—represent significant investments. Corporate insurance protects these assets against damage from fire, theft, natural disasters, and other covered perils.</p>

        <h2>2. Covers Liability Claims</h2>
        <p>Accidents happen, and when they do on your business premises, you could be held liable. General liability insurance protects your business against claims of bodily injury, property damage, and personal injury.</p>

        <h2>3. Ensures Business Continuity</h2>
        <p>Business interruption insurance covers lost income and operating expenses if your business is forced to close temporarily due to a covered event. This ensures you can continue paying bills and employees even when operations are disrupted.</p>

        <h2>4. Attracts and Retains Talent</h2>
        <p>Offering comprehensive employee benefits, including health insurance and workers' compensation, helps you attract top talent and maintain a motivated workforce.</p>

        <h2>5. Required by Law and Contracts</h2>
        <p>Many types of business insurance are legally required, and most commercial contracts require proof of insurance before engagement. Having proper coverage ensures compliance and opens doors to new opportunities.</p>

        <h2>Get Started Today</h2>
        <p>Don't leave your business vulnerable. Contact Phindol Insurance for a customized corporate insurance package that meets your specific needs and budget.</p>
      `,
    },
    {
      id: 3,
      title: 'How to File an Insurance Claim: Step-by-Step Guide',
      author: 'Ibrahim Musa',
      date: 'February 5, 2026',
      readTime: '6 min read',
      category: 'Claims & Support',
      image: 'https://images.unsplash.com/photo-1666018215790-867b14fe4822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBkb2N1bWVudHMlMjBzaWduaW5nfGVufDF8fHx8MTc3MjMwNzAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: `
        <p>Filing an insurance claim can seem daunting, but understanding the process makes it much easier. Here's a comprehensive guide to help you navigate the claims process smoothly.</p>

        <h2>Step 1: Report the Incident Immediately</h2>
        <p>Contact your insurance provider as soon as possible after the incident. Most policies have specific time limits for reporting claims. At Phindol Insurance, you can reach our 24/7 claims hotline at any time.</p>

        <h2>Step 2: Document Everything</h2>
        <p>Gather all relevant documentation:</p>
        <ul>
          <li>Your policy number and details</li>
          <li>Date, time, and location of the incident</li>
          <li>Photos or videos of damage</li>
          <li>Police report (if applicable)</li>
          <li>Witness statements and contact information</li>
          <li>Medical reports (for injury claims)</li>
          <li>Receipts and invoices</li>
        </ul>

        <h2>Step 3: Complete the Claim Form</h2>
        <p>Fill out the claim form accurately and completely. Provide detailed information about what happened and the extent of the damage or loss. Incomplete forms can delay the process.</p>

        <h2>Step 4: Submit Required Documents</h2>
        <p>Along with your claim form, submit all supporting documentation. Keep copies of everything you submit for your records.</p>

        <h2>Step 5: Cooperate with the Claims Adjuster</h2>
        <p>An insurance adjuster may need to inspect the damage or investigate the claim. Be available for inspections and provide any additional information requested promptly.</p>

        <h2>Step 6: Review the Settlement Offer</h2>
        <p>Once your claim is assessed, you'll receive a settlement offer. Review it carefully and ask questions if anything is unclear. You have the right to negotiate or appeal if you disagree with the decision.</p>

        <h2>Tips for a Smooth Claims Process</h2>
        <ul>
          <li>Keep detailed records of all communications</li>
          <li>Don't dispose of damaged property until authorized</li>
          <li>Be honest and accurate in your statements</li>
          <li>Follow up regularly on your claim status</li>
          <li>Know your policy coverage and limits</li>
        </ul>

        <h2>We're Here to Help</h2>
        <p>At Phindol Insurance, we're committed to making the claims process as smooth as possible. Our dedicated claims team is here to support you every step of the way.</p>
      `,
    },
  ];

  const post = blogPosts.find(p => p.id === Number(id)) || blogPosts[0];

  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative h-96 bg-gray-900">
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
              className="inline-flex items-center text-white mb-4 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Blog
            </Link>
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-white text-sm space-x-4">
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
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Share Buttons */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-lg text-gray-700">Share this article</h2>
              <div className="flex space-x-4">
                <button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                  <Facebook size={20} />
                </button>
                <button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                  <Twitter size={20} />
                </button>
                <button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                  <Linkedin size={20} />
                </button>
                <button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
              }}
            />

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="text-blue-600" size={32} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl mb-2 text-gray-900">{post.author}</h3>
                  <p className="text-gray-600">
                    Expert insurance advisor with years of experience helping families and businesses find the right coverage for their needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl mb-4">
              Have Questions About Insurance?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Our expert team is ready to help you find the perfect coverage.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
