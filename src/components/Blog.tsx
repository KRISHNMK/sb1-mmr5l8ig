import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface BlogProps {
  darkMode: boolean;
}

const Blog: React.FC<BlogProps> = ({ darkMode }) => {
  const posts = [
    {
      title: 'The Future of Social Media Marketing in 2024',
      excerpt: 'Explore emerging trends and strategies that will shape social media marketing...',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop',
      date: 'Mar 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'Maximizing ROI with Data-Driven Marketing',
      excerpt: 'Learn how to leverage data analytics to optimize your marketing campaigns...',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop',
      date: 'Mar 10, 2024',
      readTime: '7 min read'
    },
    {
      title: 'Creating Engaging Content That Converts',
      excerpt: 'Discover proven strategies for creating content that drives engagement...',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=400&auto=format&fit=crop',
      date: 'Mar 5, 2024',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Latest Insights
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore the latest trends and insights in digital marketing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute bottom-0 left-0 right-0 px-4 py-2 ${
                  darkMode ? 'bg-gray-900/80' : 'bg-white/80'
                }`}>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {post.date} · {post.readTime}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {post.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-500"
                >
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;