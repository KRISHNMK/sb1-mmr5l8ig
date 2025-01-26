import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Marketing Executive',
      company: 'Qawra Palace Resort & Spa',
      period: '2024 - Present',
      description: 'Leading digital marketing initiatives an d social media campaigns for luxury resort.',
      achievements: [
        'Increased social media engagement by 200%',
        'Managed successful event marketing campaigns',
        'Developed comprehensive content strategy'
      ]
    },
    {
      title: 'Marketing Executive',
      company: 'Cleland & Souchet',
      period: '2023 - 2024',
      description: 'Managed digital marketing and retail operations for luxury brand.',
      achievements: [
        'Led successful social media campaigns',
        'Coordinated promotional events',
        'Improved online presence and engagement'
      ]
    },
    {
      title: 'Business Analyst',
      company: 'EM Consulting Services',
      period: '2022 - 2023',
      description: 'Provided strategic business analysis and consulting services.',
      achievements: [
        'Analyzed commercial data and budgets',
        'Created functional specifications',
        'Implemented process improvements'
      ]
    },
    {
      title: 'Senior Consultant',
      company: 'Regalix Pvt Ltd',
      period: '2020 - 2022',
      description: 'Managed digital marketing campaigns and client relationships.',
      achievements: [
        'Managed high-profile marketing campaigns',
        'Exceeded client satisfaction metrics',
        'Optimized campaign performance'
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
              >
                <div
                  className={`flex items-center mb-4 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
                  <div
                    className={`absolute ${
                      index % 2 === 0 ? 'right-0 md:left-auto' : 'left-0'
                    } md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full ${
                      darkMode ? 'bg-gray-700' : 'bg-white'
                    } border-4 ${darkMode ? 'border-blue-400' : 'border-blue-600'} flex items-center justify-center`}
                  >
                    <Briefcase className={`w-4 h-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                </div>

                <div
                  className={`relative ${index % 2 === 0 ? 'md:text-right' : ''} ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div
                    className={`p-6 rounded-lg ${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    } shadow-lg`}
                  >
                    <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.title}
                    </h3>
                    <p className={`text-lg font-semibold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {exp.company}
                    </p>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {exp.period}
                    </p>
                    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {exp.description}
                    </p>
                    <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;