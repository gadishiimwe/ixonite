import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Button } from "../components/ui/button";

import { blogPosts } from "../lib/blogPosts";

export default function Blog() {
  // For simplicity, no search or filter in this enhanced design
  // You can add them back if needed

  // Sort blog posts by date descending
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Featured blog is the latest post
  const featuredPost = sortedPosts[0];

  // Next three posts for the right column in top section
  const topRightPosts = sortedPosts.slice(1, 4);

  // Bottom grid posts (next six)
  const bottomPosts = sortedPosts.slice(4, 10);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-16">
        {/* Top Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-2 text-center md:text-left">
            Our Insightful <span className="text-primary">Blog</span>
          </h2>
          <p className="text-center md:text-left text-gray-600 mb-10 max-w-3xl mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing vipu elit. Ut spelataras tellus luctus neullamcorper mattis, pibus leo dotu.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Featured Post */}
            <Link to={`/blog/${featuredPost.id}`} className="group flex-1 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{featuredPost.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{featuredPost.excerpt}</p>
                <div className="text-sm text-gray-500">{new Date(featuredPost.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              </div>
            </Link>

            {/* Right Column Posts */}
            <div className="flex flex-col gap-6 flex-[0.5]">
              {topRightPosts.map(post => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group flex gap-4 items-center rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white p-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-24 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary">{post.title}</h4>
                    <div className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    <div className="text-sm text-primary mt-1">Read More &rarr;</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section>
          <h2 className="text-3xl font-bold mb-2 text-center md:text-left">
            Explore Our Latest <span className="text-primary">Articles</span>
          </h2>
          <p className="text-center md:text-left text-gray-600 mb-10 max-w-3xl mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consecte turin ole adip iscing vipu dalit elit taras tellus neul sarat tame lat macorper del materio mattis luco.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {bottomPosts.map(post => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white p-4 flex flex-col">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h4 className="font-semibold text-gray-900 group-hover:text-primary mb-1">{post.title}</h4>
                <div className="text-xs text-gray-500 mb-2">{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div className="text-sm text-primary mt-auto">Read More &rarr;</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-900 transition-colors duration-300">
              View all articles
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}