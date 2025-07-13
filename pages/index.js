import React, { useState } from "react";

// ICONS
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.4a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// PERSONAL DATA
const portfolioData = {
  name: "Adeesha Sandaruwan",
  title: "Software Engineering Undergraduate | MERN Stack Developer",
  about:
    "I'm a passionate developer with a knack for creating beautiful and functional web applications. With a strong foundation in the MERN stack, I enjoy turning complex problems into simple, elegant solutions. When I'm not coding, you can find me exploring the latest design trends or contributing to open-source projects.",
  email: "adeesha75600@gmail.com",
  github: "https://github.com/Adeesha-Sandaruwan",
  linkedin: "https://www.linkedin.com/in/adeesha-sandaruwan-aa903b363/",
  projects: [],
  skills: ["HTML", "JavaScript", "Tailwind CSS", "React", "MERN Stack", "PHP", "MySQL", "Java", "C++", "C"],
};

// COMPONENTS
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md text-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Adeesha
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-pink-400 transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <XIcon /> : <MenuIcon />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="home" className="bg-gray-900 text-white py-32 md:py-48">
    <div className="container mx-auto px-6 text-center flex flex-col items-center">
      <img
        src="/profile.jpg"
        alt="Adeesha Sandaruwan"
        className="w-32 h-32 rounded-full border-4 border-pink-500 shadow-lg mb-6"
      />
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {portfolioData.name}
        </span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">{portfolioData.title}</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transform transition-transform duration-300"
        >
          Get In Touch
        </a>
        <a
          href="/Adeesha_Sandaruwan_Resume.pdf"
          download
          className="inline-block border border-pink-500 text-pink-400 font-bold py-3 px-8 rounded-full hover:bg-pink-500 hover:text-white transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-gray-800">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-12">About Me</h2>
      <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg p-8">
        <p className="text-gray-300 text-lg leading-relaxed">{portfolioData.about}</p>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-800">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Skills</h2>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
        {portfolioData.skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-700 text-white py-2 px-5 rounded-lg shadow-md hover:bg-pink-500 transition-colors duration-300 cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        I'm currently available for freelance work and open to discussing new projects. Feel free to reach out!
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a
          href={`mailto:${portfolioData.email}`}
          className="inline-flex items-center text-lg text-gray-300 hover:text-pink-400 transition-colors duration-300"
        >
          <MailIcon /> {portfolioData.email}
        </a>
        <a
          href={portfolioData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-lg text-gray-300 hover:text-pink-400 transition-colors duration-300"
        >
          <GithubIcon /> GitHub
        </a>
        <a
          href={portfolioData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-lg text-gray-300 hover:text-pink-400 transition-colors duration-300"
        >
          <LinkedinIcon /> LinkedIn
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-500 py-6">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
    </div>
  </footer>
);

// MAIN APP
export default function App() {
  return (
    <div className="bg-gray-900 font-sans leading-normal tracking-tight">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
