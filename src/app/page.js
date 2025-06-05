"use client";
import { useState, useEffect } from 'react';
import { FaGithub, FaYoutube, FaTwitter, FaTiktok, FaInstagram, FaEnvelope } from 'react-icons/fa';
// import Image from "next/image";
// import Link from 'next/link';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [showNavbar, setShowNavbar] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showProjectsTitle, setShowProjectsTitle] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);
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
    },
    {
        title: "Exploring alternative AGI methods",
        description: "Played around with Assembly Calculus, Ben Gortzel's work, evolutionary algorithms, and more.",
        github: null,
        youtube: null,
        website: null,
        isCurrent: false
    }
    // {
    //     title: "Subtle",
    //     description: "My clothing brand. (coming soon)",
    //     github: null,
    //     youtube: null,
    //     website: null,
    //     isCurrent: false
    // }
  ];

  const socialLinks = [
    { icon: FaYoutube, url: "https://www.youtube.com/@duggalr", label: "YouTube" },
    { icon: FaTwitter, url: "https://x.com/duggalr42", label: "Twitter" },
    { icon: FaTiktok, url: "https://www.tiktok.com/@duggalr42", label: "TikTok" },
    { icon: FaEnvelope, url: "mailto:duggalr42@gmail.com", label: "Email" },
  ];

  useEffect(() => {
    // Always show navbar first
    setShowNavbar(true);
    
    if (activeSection === 'about' && !hasAnimated) {
      // Reset all states
      setShowImage(false);
      setShowTypewriter(false);
      setShowDescription(false);
      setShowProjectsTitle(false);
      setShowSocials(false);
      setTypewriterText('');
      setVisibleProjects([]);

      // Start the animation sequence
      // 1. Show image first
      setTimeout(() => {
        setShowImage(true);
        
        // 2. Start typewriter after image appears
        setTimeout(() => {
          setShowTypewriter(true);
          let currentIndex = 0;
          const typewriterInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
              setTypewriterText(fullText.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(typewriterInterval);
              
              // 3. Show description after typewriter finishes
              setTimeout(() => {
                setShowDescription(true);
                
                // 4. Show projects title after description
                setTimeout(() => {
                  setShowProjectsTitle(true);
                  
                  // 5. Show projects one by one
                  const nonCurrentProjects = projects.filter(p => !p.isCurrent);
                  nonCurrentProjects.forEach((_, index) => {
                    setTimeout(() => {
                      setVisibleProjects(prev => [...prev, index]);
                    }, index * 400); // 400ms delay between each project
                  });
                  
                  // 6. Show socials after all projects are shown
                  setTimeout(() => {
                    setShowSocials(true);
                    setHasAnimated(true);
                  }, nonCurrentProjects.length * 400 + 500);
                }, 500);
              }, 500);
            }
          }, 100);
        }, 500);
      }, 500);

    } else if (activeSection === 'about' && hasAnimated) {
      // If we've already animated, show everything immediately
      setShowImage(true);
      setShowTypewriter(true);
      setTypewriterText(fullText);
      setShowDescription(true);
      setShowProjectsTitle(true);
      setVisibleProjects(projects.filter(p => !p.isCurrent).map((_, i) => i));
      setShowSocials(true);
    } else {
      // Reset states when switching to projects section
      setShowImage(false);
      setShowTypewriter(false);
      setShowDescription(false);
      setShowProjectsTitle(false);
      setShowSocials(false);
      setTypewriterText('');
      setVisibleProjects([]);
    }
  }, [activeSection, hasAnimated]);

  return (

    <main className="min-h-screen bg-[#faf8f6] flex items-center justify-center py-16 px-4">

        {/* About Section Only */}
        <section
            className={`flex flex-col md:flex-row w-full max-w-6xl bg-white bg-opacity-80 rounded-3xl shadow-lg p-8 md:p-16 transition-all duration-500 ease-in-out mx-auto opacity-100 translate-x-0`}
            style={{ minHeight: '70vh' }}
        >

            {/* Profile Picture */}
            <div 
                className='relative w-96 h-96 flex-shrink-0 transition-opacity duration-1000 group opacity-100'
            >
                <video
                    src="/images/image_profile_gif.mov"
                    className="object-cover rounded-full border-4 border-white shadow-lg w-full h-full"
                    autoPlay
                    muted
                    playsInline
                    onMouseEnter={(e) => {
                        e.target.currentTime = 0;
                        e.target.play();
                    }}
                />

                <div className="flex flex-col items-center w-full mt-5">
                    <div className={`flex justify-center space-x-7 pt-4 transition-all duration-500 transform ${
                        showSocials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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
                                <social.icon className="w-7 h-7" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Text */}
            <div className="space-y-10 text-left pl-16 m-0 p-0 mt-0 w-full">
                
                <div className="space-y-5">
                    
                    <h1 className="text-[36px] font-bold text-gray-900 min-h-[2.5rem]">
                        {typewriterText}
                        <span className={`inline-block w-1 h-6 bg-gray-900 ml-1 align-middle ${
                        showTypewriter ? 'animate-blink' : 'opacity-0'
                        }`}></span>
                    </h1>

                    <p className={`font-sans text-[18px] text-gray-600 font-light pl-0 pt-1 transition-all duration-500 transform ${
                        showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                        Currently, I&apos;m entirely focused on building <a href="https://www.companionai.dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110">Companion AI</a> and Subtle <span className="text-gray-600">(coming soon)</span>.
                        I&apos;m also sharing a lot of this journey on <a href="https://www.youtube.com/@duggalr" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">YouTube</a>.
                    </p>

                </div>
   
                <div className={`space-y-4 pt-1 transition-all duration-500 transform ${
                    showProjectsTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    <p className={`text-[18px] text-gray-800 mb-6 font-semibold transition-all duration-500 transform ${
                        showProjectsTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>A (very) few of my past projects include:</p>

                    <ul className="space-y-6">
                        {projects.filter(p => !p.isCurrent).map((project, index) => (
                            <li key={index} className={`text-[16px] text-gray-600 transition-all duration-500 transform ${
                                visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-600">{project.title}</span>
                                    <div className="flex space-x-4">
                                        {project.github && (
                                        <a
                                            href={project.github[0]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:text-blue-600 transition-colors duration-200 inline-flex items-center"
                                        >
                                            <FaGithub className="w-4 h-4 mr-1" />
                                            <span className="text-sm">Code</span>
                                        </a>
                                        )}
                                        {project.youtube && (
                                        <a
                                            href={project.youtube[0]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:text-blue-600 transition-colors duration-200 inline-flex items-center"
                                        >
                                            <FaYoutube className="w-4 h-4 mr-1" />
                                            <span className="text-sm">Demo</span>
                                        </a>
                                        )}
                                    </div>
                                </div>
                                <p className="mt-1">{project.description}</p>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </section>
        

    </main>


  );
  
}