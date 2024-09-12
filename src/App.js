import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, FileText, User, Linkedin, Github, Twitter, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

const Header = () => (
  <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center">
    <img
      src="/api/placeholder/150/150"
      alt="Eustace Mukoya"
      className="rounded-full w-24 h-24 mr-6 border-4 border-white"
    />
    <div>
      <h1 className="text-3xl font-bold">Eustace Mukoya</h1>
      <p className="text-xl">Junior Networking and Cybersecurity Specialist</p>
    </div>
  </header>
);

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'skills', label: 'Skills', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4">
      <ul className="flex justify-around">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center ${
                activeTab === tab.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300'
              } hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300`}
            >
              <tab.icon className="mr-2" size={20} />
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const AboutMe = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">About Me</h2>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      I'm a passionate junior networking and cybersecurity specialist with a keen interest in protecting digital
      assets and ensuring network integrity. My experience at Cisco has honed my skills in network design,
      implementation, and security protocols. I'm constantly learning and adapting to the ever-evolving landscape
      of cybersecurity threats and solutions.
    </p>
  </div>
);

const SkillBar = ({ skill, level }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
      <span className="text-gray-600 dark:text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    { name: "Network Security", level: 85 },
    { name: "Firewall Configuration", level: 80 },
    { name: "Intrusion Detection Systems", level: 50 },
    { name: "Vulnerability Assessment", level: 50 },
    { name: "Cisco IOS", level: 90 },
    { name: "Python Scripting", level: 65 },
    { name: "Wireshark", level: 50 },
    { name: "SIEM Tools", level: 50 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Skills</h2>
      {skills.map((skill, index) => (
        <SkillBar key={index} skill={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

const Education = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Education</h2>
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Bachelor of Science Information Technology</h3>
      <p className="text-gray-600 dark:text-gray-400">Maseno University, 2021 - Present</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Certifications</h3>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
        <li>Cisco Certified Network Associate (CCNA)</li>
        <li>ISC2 Candidate</li>
        
      </ul>
    </div>
  </div>
);

const Resume = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Resume</h2>
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Work Experience</h3>
      <p className="font-medium text-gray-600 dark:text-gray-400">Intern at Golf Hotel Kakamega</p>
      <p className="text-gray-500 dark:text-gray-500">May 2024 - Present</p>
      <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
        <li>Assist in implementing and maintaining network security measures</li>
        <li>Conduct regular vulnerability assessments and penetration testing</li>
        <li>Collaborate with senior team members on incident response procedures</li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Projects</h3>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
        <li>Developed a Python script for automated log analysis</li>
        <li>Contributed to the design of a secure network architecture for a mid-size enterprise</li>
      </ul>
    </div>
  </div>
);

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Contact Me</h2>
      {submitted ? (
        <p className="text-green-600 dark:text-green-400">Thank you for your message! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded hover:from-blue-600 hover:to-purple-600 transition-colors duration-300">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

const SocialLinks = () => (
  <footer className="bg-gray-200 dark:bg-gray-800 p-4 flex justify-center space-x-6">
    <a href="https://www.linkedin.com/in/EustaceMukoya" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
      <Linkedin size={24} />
    </a>
    <a href="https://github.com/EustaceMukoya" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
      <Github size={24} />
    </a>
    <a href="https://twitter.com/eustacemukoya" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors duration-300">
      <Twitter size={24} />
    </a>
  </footer>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutMe />;
      case 'skills':
        return <Skills />;
      case 'education':
        return <Education />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
      <SocialLinks />
    </div>
  );
};

export default App;