import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  PenTool,
  Globe,
  Mail,
  Users,
  Calendar,
  Search,
  MessageSquare
} from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const services = [
    {
      icon: Globe,
      title: 'Social Media Management',
      description: 'Strategic planning and execution of social media campaigns across all major platforms',
      skills: ['Strategy Development', 'Content Creation', 'Community Management', 'Analytics']
    },
    {
      icon: BarChart,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions to grow your online presence',
      skills: ['SEO', 'PPC', 'Email Marketing', 'Content Marketing']
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'Engaging content that tells your brand story and connects with your audience',
      skills: ['Copywriting', 'Visual Design', 'Video Production', 'Brand Voice']
    },
    {
      icon: Calendar,
      title: 'Event Marketing',
      description: 'Full-service event marketing from planning to execution',
      skills: ['Event Planning', 'Promotion', 'Coordination', 'Analysis']
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Strategic influencer partnerships to amplify your brand message',
      skills: ['Partnership Development', 'Campaign Management', 'ROI Tracking']
    },
    {
      icon: Search,
      title: 'Marketing Analytics',
      description: 'Data-driven insights to optimize your marketing performance',
      skills: ['Data Analysis', 'Reporting', 'Optimization', 'ROI Tracking']
    },
    {
      icon: MessageSquare,
      title: 'Brand Strategy',
      description: 'Comprehensive brand development and positioning strategies',
      skills: ['Brand Identity', 'Market Research', 'Positioning', 'Guidelines']
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Strategic email campaigns that drive engagement and conversions',
      skills: ['Campaign Strategy', 'Automation', 'A/B Testing', 'Analytics']
    }
  ];

  return (
    <section id="services" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Services & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
              } transition-colors duration-300`}
            >
              <service.icon className={`w-12 h-12 mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`text-sm px-2 py-1 rounded-full ${
                      darkMode
                        ? 'bg-gray-600 text-gray-300'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;