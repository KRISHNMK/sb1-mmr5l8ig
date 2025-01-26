import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Linkedin, Github } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's discuss how we can work together to achieve your marketing goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className={`w-6 h-6 mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <a
                    href="mailto:mounikan347@gmail.com"
                    className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-600`}
                  >
                    mounikan347@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className={`w-6 h-6 mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Attard, Malta
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className={`w-6 h-6 mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <a
                    href="#"
                    className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-blue-600`}
                  >
                    Schedule a meeting
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className={`p-2 rounded-full ${
                      darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className={`p-2 rounded-full ${
                      darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;