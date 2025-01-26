{/* Update Portfolio component with live project links */}
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface PortfolioProps {
  darkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'Resort Marketing Campaign',
      description: 'Comprehensive digital marketing campaign for luxury resort, resulting in 150% increase in bookings',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400&auto=format&fit=crop',
      tags: ['Social Media', 'Content Strategy', 'Email Marketing'],
      link: 'https://qawrapalace.com'
    },
    {
      title: 'E-commerce Growth Strategy',
      description: 'Developed and executed marketing strategy leading to 200% increase in online sales',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=400&auto=format&fit=crop',
      tags: ['Analytics', 'PPC', 'SEO'],
      link: 'https://clelandsouchet.com'
    },
    {
      title: 'Brand Awareness Campaign',
      description: 'Created viral social media campaign reaching over 1M impressions',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop',
      tags: ['Branding', 'Social Media', 'Content Creation'],
      link: 'https://regalix.com/case-studies'
    },
    {
      title: 'Event Marketing',
      description: 'Managed marketing for international conference with 5000+ attendees',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop',
      tags: ['Event Planning', 'PR', 'Social Media'],
      link: 'https://www.linkedin.com/in/mounika-naroju'
    }
  ];

  return (
    <section id="portfolio" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore my recent projects and success stories in digital marketing and content creation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-sm px-3 py-1 rounded-full ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;