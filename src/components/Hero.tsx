import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Code, Briefcase, Award } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'}`} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            {/* Professional icon instead of photo */}
            <div className="w-32 h-32 mx-auto rounded-full bg-blue-600 flex items-center justify-center">
              <Code className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            <TypeAnimation
              sequence={[
                'Digital Marketing Specialist',
                2000,
                'Social Media Strategist',
                2000,
                'Content Creator',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Transforming brands through strategic digital marketing and creative storytelling
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Let's work together
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/Mounika_Naroju_CV.pdf"
              className={`inline-flex items-center px-6 py-3 rounded-lg ${
                darkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              } font-semibold transition-colors`}
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </a>
          </motion.div>

          {/* Professional badges */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <Award className="w-5 h-5 text-blue-600" />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Google Certified</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>7+ Years Experience</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;