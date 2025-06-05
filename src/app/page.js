"use client";
import { useState, useEffect } from 'react';
import { FaGithub, FaYoutube, FaTwitter, FaTiktok, FaInstagram } from 'react-icons/fa';
// import Image from "next/image";
// import Link from 'next/link';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [showNavbar, setShowNavbar] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const fullText = "Hi, I'm Rahul.";

  const projects = [
    {
      title: "Companion AI",
      description: "Your smart digital brain for the web.",
      youtube: ["https://www.youtube.com/@companionaidev"],
      website: "https://www.companionai.dev",
      isCurrent: true
    },
    {
      title: "AI Programming Tutor",
      description: "An AI programming tutor with pre-loaded questions from MIT OCW and LeetCode.",
      github: ["https://github.com/duggalr/companion-frontend", "https://github.com/duggalr/companion-backend"],
      youtube: ["https://www.youtube.com/watch?v=4Plt_sh_cIg"],
      website: null,
      isCurrent: false
    },
    {
      title: "CreatorCoin",
      description: "CreatorCoin serves as a medium to help individuals fund their personal side projects through NFTs.",
      github: ["https://github.com/duggalr/creator-coin-main"],
      youtube: ["https://www.youtube.com/watch?v=iYg_-q4DqJU&t=1s"],
      website: null,
      isCurrent: false
    },
    {
      title: "Natural Language to SQL Playground",
      description: "A playground to convert natural language to SQL queries.",
      // github: ["https://github.com/duggalr/natural-language-to-sql"],
      github: null,
      youtube: ["https://www.youtube.com/watch?v=0l16BQMCFtA"],
      website: null,
      isCurrent: false
    }
  ];

  const socialLinks = [
    { icon: FaYoutube, url: "https://www.youtube.com/@duggalr", label: "YouTube" },
    { icon: FaTwitter, url: "https://x.com/duggalr42", label: "Twitter" },
    { icon: FaTiktok, url: "https://www.tiktok.com/@duggalr42", label: "TikTok" },
    { icon: FaInstagram, url: "https://instagram.com/yourusername", label: "Instagram" },
  ];

  useEffect(() => {

    // Always show navbar first
    setShowNavbar(true);
    
    if (activeSection === 'about' && !hasAnimated) {
      // Start the animation sequence after navbar
      setTimeout(() => {
        setShowImage(true);
        
        // Start typewriter after image appears
        setTimeout(() => {
          setShowTypewriter(true);
          let currentIndex = 0;
          const typewriterInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
              setTypewriterText(fullText.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(typewriterInterval);
              // Show description after typewriter finishes
              setTimeout(() => {
                setShowDescription(true);
                // Show socials after description
                setTimeout(() => {
                  setShowSocials(true);
                  setHasAnimated(true); // Mark animation as complete
                }, 500);
              }, 500);
            }
          }, 100);
        }, 500);
      }, 500);

    } else if (activeSection === 'about' && hasAnimated) {

      // If we've already animated, just show everything immediately
      setShowImage(true);
      setShowTypewriter(true);
      setTypewriterText(fullText);
      setShowDescription(true);
      setShowSocials(true);

    } else {

      // Reset states when switching to projects section
      setShowImage(false);
      setShowTypewriter(false);
      setShowDescription(false);
      setShowSocials(false);
      setTypewriterText('');

    }

  }, [activeSection, hasAnimated]);

  return (

    // bg-[#fafafa]
    <main className="min-h-screen bg-[#faf8f6] flex flex-col items-center font-sans relative py-16 px-4">
      
      <div className="max-w-5xl w-full space-y-12">

        {/* Navbar */}
        <nav className={`flex justify-center space-x-12 mb-8 transition-opacity duration-1000 ${
          showNavbar ? 'opacity-100' : 'opacity-0'
        }`}>
          <button 
            onClick={() => setActiveSection('about')}
            className={`relative text-lg cursor-pointer font-medium transition-colors duration-200 group ${
              activeSection === 'about' ? 'text-gray-900' : 'text-gray-600'
            }`}
          >
            About
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform transition-transform duration-300 ease-out ${
              activeSection === 'about' ? 'scale-x-100' : 'scale-x-0'
            } group-hover:scale-x-100 group-hover:animate-pencil-draw`}></span>
          </button>
          <button 
            onClick={() => setActiveSection('projects')}
            className={`relative text-lg cursor-pointer font-medium transition-colors duration-200 group ${
              activeSection === 'projects' ? 'text-gray-900' : 'text-gray-600'
            }`}
          >
            Projects
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform transition-transform duration-300 ease-out ${
              activeSection === 'projects' ? 'scale-x-100' : 'scale-x-0'
            } group-hover:scale-x-100 group-hover:animate-pencil-draw`}></span>
          </button>
        </nav>

        <div className="relative">

          {/* About Section */}
          <section 
            className={`absolute w-full transition-all duration-500 ease-in-out ${
              activeSection === 'about' 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-full pointer-events-none'
            }`}
          >

            <div className="flex flex-col md:flex-row justify-center items-center mt-32">

              {/* Profile Picture */}
              <div className={`relative w-96 h-96 mr-20 transition-opacity duration-1000 group ${
                showImage ? 'opacity-100' : 'opacity-0'
              }`}>
                <video
                  src="/images/image_profile_gif.MOV"
                  className="object-cover rounded-full border-4 border-white shadow-lg w-full h-full"
                  autoPlay
                  muted
                  playsInline
                  onMouseEnter={(e) => {
                    e.target.currentTime = 0;
                    e.target.play();
                  }}
                />
              </div>
              
              {/* Text */}
              <div className="space-y-6 text-center md:text-left m-0 p-0 ml-12">
                
                <div className="space-y-5">
                  
                  <h1 className="text-4xl font-bold text-gray-900 min-h-[2.5rem]">
                    {typewriterText}
                    <span className={`inline-block w-1 h-6 bg-gray-900 ml-1 align-middle ${
                      showTypewriter ? 'animate-blink' : 'opacity-0'
                    }`}></span>
                  </h1>
                  
                  <p className={`font-sans text-[17.5px] text-gray-600 font-light pl-0 pt-5 transition-opacity duration-500 ${
                    showDescription ? 'opacity-100' : 'opacity-0'
                  }`}>
                    Currently, I&apos;m entirely focused on building <a href="https://www.companionai.dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110">Companion AI</a>.
                  </p>
                  <p className={`text-[17.5px] text-gray-600 font-light pl-0 transition-opacity duration-500 ${
                    showDescription ? 'opacity-100' : 'opacity-0'
                  }`}>
                    I&apos;m also sharing this journey on <a href="https://www.youtube.com/@duggalr" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">YouTube</a>.
                  </p>
                  <p className={`text-[17.5px] text-gray-600 font-light pl-0 transition-opacity duration-500 ${
                    showDescription ? 'opacity-100' : 'opacity-0'
                  }`}>
                    Feel free to reach out to me via email at <a href="mailto:duggalr42@gmail.com" className="text-blue-500 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">duggalr42@gmail.com</a>.
                  </p>
                </div>
                
                <div className={`flex justify-center md:justify-start space-x-6 pt-2 transition-opacity duration-500 ${
                  showSocials ? 'opacity-100' : 'opacity-0'
                }`}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </section>

          {/* Projects Section */}
          <section 
            className={`absolute w-full transition-all duration-500 ease-in-out ${
              activeSection === 'projects' 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full pointer-events-none'
            }`}
          >
            <div className="h-[calc(100vh-12rem)] overflow-y-auto scrollbar-hide">
              <div className="space-y-8 max-w-3xl mx-auto">
                <div className="space-y-4">
                  
                  {projects.map((project, index) => (
                    
                    <div 
                      key={index}
                      className="group relative rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 cursor-pointer"
                    >

                      <div className="space-y-6">

                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <h3 className="text-[19.5px] font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                              {project.title}
                            </h3>
                            <p className="text-gray-600 text-[17px] pt-2">
                              {project.description}
                            </p>
                          </div>
                          {project.isCurrent && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 animate-pulse">
                              Current
                            </span>
                          )}
                        </div>

                        <div className="flex space-x-6 pt-4">
                          {project.website && (
                            <a
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group-hover:scale-105"
                              aria-label="Project Website"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                              <span className="text-sm">Visit Site</span>
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github[0]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group-hover:scale-105"
                              aria-label="GitHub Repository"
                            >
                              <FaGithub className="w-6 h-6" />
                              <span className="text-sm">View Code</span>
                            </a>
                          )}
                          {project.youtube && (
                            <a
                              href={project.youtube[0]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group-hover:scale-105"
                              aria-label="YouTube Video"
                            >
                              <FaYoutube className="w-6 h-6" />
                              <span className="text-sm">Watch Demo</span>
                            </a>
                          )}
                        </div>

                      </div>

                      {/* Subtle hover effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/20 group-hover:to-purple-50/20 transition-all duration-300 pointer-events-none"></div>

                    </div>

                  ))}

                </div>
              </div>
            </div>
          </section>

        </div>

        <style jsx global>{`
          @keyframes pencil-draw {
            0% {
              transform: scaleX(0);
              transform-origin: left;
            }
            50% {
              transform: scaleX(1);
              transform-origin: left;
            }
            51% {
              transform: scaleX(1);
              transform-origin: right;
            }
            100% {
              transform: scaleX(0);
              transform-origin: right;
            }
          }
          .animate-pencil-draw {
            animation: pencil-draw 1.5s ease-in-out;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;  /* Chrome, Safari and Opera */
          }
        `}</style>

      </div>

    </main>

  );
}
