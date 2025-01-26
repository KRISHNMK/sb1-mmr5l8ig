import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'Tech Solutions Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
      content: 'Mounika\'s expertise in digital marketing transformed our online presence. Her strategic approach and attention to detail delivered exceptional results.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartUp Hub',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop',
      content: 'Working with Mounika was a game-changer for our brand. Her innovative strategies and data-driven approach exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Event Manager',
      company: 'Luxury Events Co.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop',
      content: 'Mounika\'s event marketing expertise helped us achieve record attendance. Her creativity and professionalism are unmatched.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;