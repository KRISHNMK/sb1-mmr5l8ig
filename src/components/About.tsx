import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Briefcase, Code, Laptop, Target, Lightbulb, Trophy } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '7+' },
    { icon: Users, label: 'Satisfied Clients', value: '50+' },
    { icon: Briefcase, label: 'Projects Completed', value: '100+' },
    { icon: Code, label: 'Certifications', value: '5+' },
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className={`w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8`} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} flex flex-col items-center justify-center space-y-6`}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} flex flex-col items-center`}>
                <Laptop className={`w-12 h-12 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-3`} />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Digital Marketing</span>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} flex flex-col items-center`}>
                <Target className={`w-12 h-12 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-3`} />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Strategy</span>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} flex flex-col items-center`}>
                <Lightbulb className={`w-12 h-12 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-3`} />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Innovation</span>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} flex flex-col items-center`}>
                <Trophy className={`w-12 h-12 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-3`} />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Excellence</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Digital Marketing Specialist & Content Creator
            </h3>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I am a seasoned Digital Marketing Specialist with over 7 years of experience in crafting and executing comprehensive marketing strategies. My expertise spans social media management, content creation, campaign optimization, and event coordination.
            </p>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              My approach combines data-driven decision making with creative storytelling to deliver measurable results. I believe in staying ahead of digital trends while maintaining authentic connections with audiences.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;