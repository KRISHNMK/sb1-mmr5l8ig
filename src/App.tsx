import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, Calendar, Download, ExternalLink } from 'lucide-react';
import { Switch } from '@headlessui/react';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Mounika Naroju
              </motion.h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>About</a>
              <a href="#portfolio" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Portfolio</a>
              <a href="#services" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Services</a>
              <a href="#experience" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Experience</a>
              <a href="#blog" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Blog</a>
              <a href="#contact" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Contact</a>
              
              <Switch
                checked={darkMode}
                onChange={setDarkMode}
                className={`${
                  darkMode ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span className="sr-only">Toggle dark mode</span>
                <span
                  className={`${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                >
                  {darkMode ? <Moon className="h-3 w-3 text-blue-600" /> : <Sun className="h-3 w-3 text-yellow-500" />}
                </span>
              </Switch>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden"
            >
              <div className={`px-2 pt-2 pb-3 space-y-1 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <a href="#about" className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>About</a>
                <a href="#portfolio" className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>Portfolio</a>
                <a href="#services" className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>Services</a>
                <a href="#experience" className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>Experience</a>
                <a href="#blog" className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>Blog</a>
                <a href="#contact" className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>Contact</a>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      <main className="pt-16">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <Blog darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p>© 2024 Mounika Naroju. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;