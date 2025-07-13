import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, MapPin, Download, ExternalLink, Calendar, GraduationCap, Briefcase, Code, Award, Target, Trophy, Phone, Camera, Image, X, ChevronLeft, ChevronRight, Palette, Instagram, MessageCircle } from 'lucide-react';

// Animation Hook for scroll-triggered animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible] as const;
};

// Typewriter hook
function useTypewriter(text: string, speed = 120, pause = 1200) {
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && i < text.length) {
      timeout = setTimeout(() => setI(i + 1), speed);
    } else if (!isDeleting && i === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && i > 0) {
      timeout = setTimeout(() => setI(i - 1), speed / 2);
    } else if (isDeleting && i === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 600);
    }
    setDisplayed(text.slice(0, i));
    return () => clearTimeout(timeout);
  }, [i, isDeleting, text, speed, pause]);

  return displayed + (isDeleting || i < text.length ? '|' : '');
}

// Theme definitions
export const themes = {
  default: {
    name: 'Default',
    primary: 'from-blue-600 to-teal-600',
    secondary: 'from-purple-600 to-pink-600',
    accent: 'from-orange-500 to-red-500',
    background: 'bg-white dark:bg-gray-900',
    card: 'bg-white dark:bg-gray-800',
    text: 'text-gray-900 dark:text-white',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-gray-200 dark:border-gray-700',
    hover: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    button: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
    icon: 'text-blue-600 dark:text-blue-400'
  },
  ocean: {
    name: 'Ocean',
    primary: 'from-cyan-500 to-blue-600',
    secondary: 'from-blue-500 to-indigo-600',
    accent: 'from-teal-400 to-cyan-500',
    background: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900',
    card: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm',
    text: 'text-gray-900 dark:text-white',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-blue-200 dark:border-blue-700',
    hover: 'hover:bg-blue-50 dark:hover:bg-blue-900/50',
    button: 'bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600',
    icon: 'text-cyan-600 dark:text-cyan-400'
  },
  sunset: {
    name: 'Sunset',
    primary: 'from-orange-500 to-red-500',
    secondary: 'from-pink-500 to-rose-500',
    accent: 'from-yellow-400 to-orange-500',
    background: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-red-900',
    card: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm',
    text: 'text-gray-900 dark:text-white',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-orange-200 dark:border-orange-700',
    hover: 'hover:bg-orange-50 dark:hover:bg-orange-900/50',
    button: 'bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600',
    icon: 'text-orange-600 dark:text-orange-400'
  },
  forest: {
    name: 'Forest',
    primary: 'from-green-600 to-emerald-600',
    secondary: 'from-emerald-500 to-teal-600',
    accent: 'from-lime-400 to-green-500',
    background: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-green-900',
    card: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm',
    text: 'text-gray-900 dark:text-white',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-green-200 dark:border-green-700',
    hover: 'hover:bg-green-50 dark:hover:bg-green-900/50',
    button: 'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600',
    icon: 'text-green-600 dark:text-green-400'
  },
  lavender: {
    name: 'Lavender',
    primary: 'from-purple-500 to-indigo-600',
    secondary: 'from-indigo-500 to-purple-600',
    accent: 'from-violet-400 to-purple-500',
    background: 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-purple-900',
    card: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm',
    text: 'text-gray-900 dark:text-white',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-purple-200 dark:border-purple-700',
    hover: 'hover:bg-purple-50 dark:hover:bg-purple-900/50',
    button: 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600',
    icon: 'text-purple-600 dark:text-purple-400'
  },
  midnight: {
    name: 'Midnight',
    primary: 'from-slate-600 to-gray-700',
    secondary: 'from-gray-600 to-slate-700',
    accent: 'from-blue-400 to-indigo-500',
    background: 'bg-gradient-to-br from-slate-50 to-gray-50 dark:from-gray-900 dark:to-slate-900',
    card: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm',
    text: 'text-gray-900 dark:text-white',
    textSecondary: 'text-gray-600 dark:text-gray-300',
    border: 'border-slate-200 dark:border-slate-700',
    hover: 'hover:bg-slate-50 dark:hover:bg-slate-900/50',
    button: 'bg-slate-600 hover:bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-600',
    icon: 'text-slate-600 dark:text-slate-400'
  }
};

type ThemeKey = keyof typeof themes;

interface ThemeContextType {
  currentTheme: ThemeKey;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeKey) => void;
  theme: typeof themes[ThemeKey];
}

const ThemeContext = React.createContext<ThemeContextType>({
  currentTheme: 'default',
  isDark: false,
  toggleTheme: () => {},
  setTheme: () => {},
  theme: themes.default
});

const useTheme = () => React.useContext(ThemeContext);

// Theme Selector Component
const ThemeSelector = () => {
  const { currentTheme, setTheme, isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-300 flex items-center gap-2"
      >
        <Palette className="w-5 h-5" />
        <span className="hidden sm:inline text-sm">{themes[currentTheme].name}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-12 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-2 z-50 animate-scale-in">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => {
                setTheme(key as ThemeKey);
                setIsOpen(false);
              }}
              className={`w-full text-left p-3 rounded-md transition-all duration-200 flex items-center gap-3 ${
                currentTheme === key 
                  ? 'bg-gradient-to-r ' + theme.primary + ' text-white' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${theme.primary}`}></div>
              <span className="text-sm font-medium">{theme.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Photo Gallery Component
const PhotoGallery = ({ photos, onPhotoClick }: { photos: any[]; onPhotoClick: (index: number) => void }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo, index) => (
        <div
          key={index}
          onClick={() => onPhotoClick(index)}
          className={`group relative aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:scale-105 hover:-rotate-1 transition-all duration-500 shadow-md hover:shadow-xl ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <p className="text-white text-sm font-medium truncate">{photo.title}</p>
            <p className="text-gray-300 text-xs">{photo.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Photo Lightbox Component
const PhotoLightbox = ({ 
  photos, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev 
}: { 
  photos: any[]; 
  currentIndex: number; 
  isOpen: boolean; 
  onClose: () => void; 
  onNext: () => void; 
  onPrev: () => void; 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full hover:scale-110 hover:rotate-90 transition-all duration-300 z-10"
      >
        <X className="w-6 h-6" />
      </button>
      
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-white/20 rounded-full hover:scale-110 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-white/20 rounded-full hover:scale-110 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="max-w-4xl max-h-[90vh] mx-4 animate-scale-in">
        <img
          src={currentPhoto.url}
          alt={currentPhoto.title}
          className="max-w-full max-h-full object-contain animate-fade-in"
        />
        <div className="text-center mt-4 animate-slide-in-right">
          <h3 className="text-white text-xl font-semibold">{currentPhoto.title}</h3>
          <p className="text-gray-300">{currentPhoto.description}</p>
          <p className="text-gray-400 text-sm mt-1">{currentPhoto.category}</p>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm animate-fade-in">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110 hover:rotate-90 transition-all duration-300 z-10"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

// Header Component
const Header = () => {
  const { isDark, toggleTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg animate-slide-in-left' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 animate-fade-in">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 animate-gradient`} style={{ backgroundSize: '200% 200%' }}>
            Bhanu Sharma
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${theme.textSecondary} hover:${theme.icon.replace('text-', 'text-')} hover:scale-110 transition-all duration-300`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeSelector />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 hover:rotate-180 transition-all duration-500"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Hero Section
const Hero = () => {
  const { theme } = useTheme();
  const [textRef, textVisible] = useScrollAnimation();
  const [buttonRef, buttonVisible] = useScrollAnimation();
  const typewriter = useTypewriter('Bhanu Sharma');

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className={`absolute inset-0 ${theme.background} animate-gradient`} 
           style={{ backgroundSize: '400% 400%' }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo Image */}
        <img 
          src="/nik2.jpg" 
          alt="Logo" 
          className="mx-auto mb-6 w-32 h-32 rounded-full shadow-lg object-cover border-4 border-white dark:border-gray-800 animate-float-logo animate-photo-glow" 
        />
        <div ref={textRef} className={`${textVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono text-gray-900 dark:text-white">
            {typewriter}
          </h1>
          <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-4 animate-slide-in-left`}>
            BCA Student Specialized in AI & IoT
          </p>
          <p className={`text-lg ${theme.textSecondary} mb-8 animate-slide-in-right`}>
            AWS Developer Intern at Linux World • Building AI-Powered Solutions
          </p>
          
          <div ref={buttonRef} className={`flex flex-col sm:flex-row gap-4 justify-center ${buttonVisible ? 'animate-bounce-in' : 'opacity-0'}`}>
            <a
              href="/Bhanu_Sharma_Resume.pdf"
              download
              className={`px-8 py-3 bg-gradient-to-r ${theme.primary} text-white rounded-full hover:shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-pulse-slow flex items-center justify-center`}
            >
              <Download className="w-5 h-5 inline mr-2" />
              Download Resume
            </a>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-3 border-2 ${theme.border} ${theme.text} rounded-full hover:bg-gradient-to-r ${theme.primary} hover:text-white hover:scale-105 hover:-rotate-1 transition-all duration-300`}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className={`absolute top-20 left-10 w-20 h-20 bg-gradient-to-r ${theme.primary} rounded-full opacity-20 animate-float hover:opacity-40 transition-opacity duration-300`} />
      <div className={`absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r ${theme.secondary} rounded-full opacity-20 animate-float-delayed hover:opacity-40 transition-opacity duration-300`} />
      <div className={`absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r ${theme.accent} rounded-full opacity-10 animate-pulse-slow`} />
      <div className={`absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r ${theme.secondary} rounded-full opacity-10 animate-float`} style={{ animationDelay: '4s' }} />
    </section>
  );
};

// Section Card Component
const SectionCard = ({ 
  icon: Icon, 
  title, 
  description, 
  onClick,
  gradient,
  delay = 0
}: { 
  icon: any; 
  title: string; 
  description: string; 
  onClick: () => void;
  gradient: string;
  delay?: number;
}) => {
  const { theme } = useTheme();
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group cursor-pointer p-6 ${theme.card} rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 ${theme.border} ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`w-12 h-12 rounded-xl ${gradient} p-3 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className={`text-xl font-semibold mb-2 ${theme.text} group-hover:${theme.icon.replace('text-', 'text-')} transition-colors duration-300`}>
        {title}
      </h3>
      <p className={`${theme.textSecondary} text-sm leading-relaxed`}>
        {description}
      </p>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, tools, github }: { title: string; description: string; tools: string[]; github?: string }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 border border-gray-100 dark:border-gray-700 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((tool, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium hover:scale-110 transition-transform duration-200"
          >
            {tool}
          </span>
        ))}
      </div>
      
      {github && (
        <a 
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 dark:text-teal-400 hover:underline hover:scale-105 transition-all duration-200 text-sm"
        >
          <Github className="w-4 h-4 mr-1" />
          View Code
        </a>
      )}
    </div>
  );
};

// About Modal Content
const AboutContent = () => (
  <div className="p-8">
    <div className="flex items-center mb-6">
      <GraduationCap className="w-8 h-8 text-blue-600 dark:text-teal-400 mr-3" />
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">About Me</h2>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Personal Information</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-blue-600 dark:text-teal-400 mr-3" />
            <span className="text-gray-600 dark:text-gray-400">19 years old (Born: August 10, 2005)</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-blue-600 dark:text-teal-400 mr-3" />
            <span className="text-gray-600 dark:text-gray-400">Kableshwar, Sainthal, Dausa, Rajasthan</span>
          </div>
          <div className="flex items-center">
            <GraduationCap className="w-5 h-5 text-blue-600 dark:text-teal-400 mr-3" />
            <span className="text-gray-600 dark:text-gray-400">BCA in AI & IoT - ICFAI University, Jaipur</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Background & Strengths</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          Coming from a middle-class family with a farmer father, I've learned the values of hard work and perseverance. 
          These experiences have shaped my character and drive to excel in technology.
        </p>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 dark:text-white">Key Strengths:</h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
            <li>Self-motivation and consistency</li>
            <li>Honesty and integrity</li>
            <li>Problem-solving mindset</li>
            <li>Continuous learning approach</li>
          </ul>
        </div>
        
        <div className="mt-4">
          <h4 className="font-semibold text-gray-800 dark:text-white">Languages:</h4>
          <p className="text-gray-600 dark:text-gray-400">Hindi, English, Rajasthani</p>
        </div>
      </div>
    </div>
  </div>
);

// Internship Modal Content
const InternshipContent = () => (
  <div className="p-8">
    <div className="flex items-center mb-6">
      <Briefcase className="w-8 h-8 text-blue-600 dark:text-teal-400 mr-3" />
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Internship Experience</h2>
    </div>
    
    <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl mb-6">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">AWS Developer</h3>
      <p className="text-lg text-blue-600 dark:text-teal-400 mb-1">Linux World Informatics Pvt. Ltd., Jaipur</p>
      <p className="text-gray-600 dark:text-gray-300">Under the mentorship of Vimal Daga Sir</p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Impact & Growth</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          This internship has been a real turning point in my career. I've had the opportunity to build 
          real-world solutions that solve practical problems, moving beyond theoretical knowledge to 
          hands-on application development.
        </p>
        
        <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Key Achievements</h4>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>Independently handled frontend and backend logic</li>
          <li>Converted complex problems into efficient solutions</li>
          <li>Maintained consistent performance throughout internship</li>
          <li>Active participant in team-based projects</li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Technologies Used</h4>
        <div className="grid grid-cols-2 gap-3">
          {['Python', 'Streamlit', 'Flask', 'Docker', 'API Integration', 'GitHub', 'MongoDB', 'OpenCV'].map((tech, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Projects Modal Content
const ProjectsContent = () => {
  const projects = [
    {
      title: "🎤 AI Voice Analyzer & Age Detector",
      description: "Advanced ML model that analyzes voice patterns to predict age demographics with high accuracy.",
      tools: ["Python", "OpenCV", "ML", "Audio Processing"]
    },
    {
      title: "🎶 Mood-Based Song Recommender",
      description: "Intelligent music recommendation system with dynamic UI that changes based on detected mood.",
      tools: ["Python", "Streamlit", "API Integration", "UI/UX"]
    },
    {
      title: "🚗 Hand Gesture Controlled Car",
      description: "IoT project controlling vehicle movement through computer vision and gesture recognition.",
      tools: ["Python", "OpenCV", "IoT", "Hardware Integration"]
    },
    {
      title: "🧮 Hand-Controlled Calculator",
      description: "Touch-free calculator operated through hand gesture recognition for accessibility.",
      tools: ["Python", "OpenCV", "Computer Vision", "GUI"]
    },
    {
      title: "🎵 Hand-Controlled Song Player",
      description: "Music player with 5-finger gesture controls for play, pause, next, previous, and volume.",
      tools: ["Python", "OpenCV", "Media Control", "Gesture Recognition"]
    },
    {
      title: "💻 Digital File Explorer",
      description: "Advanced file management system with enhanced search and organization capabilities.",
      tools: ["Python", "GUI", "File System", "Database"]
    },
    {
      title: "🧠 Disease Predictor",
      description: "ML-based health diagnostic tool that predicts diseases based on symptoms input.",
      tools: ["Python", "ML", "Healthcare", "Data Analysis"]
    },
    {
      title: "📊 Student Marks Predictor",
      description: "Comprehensive ML system for academic performance prediction with college recommendations.",
      tools: ["Python", "ML", "Data Visualization", "Batch Processing"]
    },
    {
      title: "💸 EMI Calculator + Insurance Suggester",
      description: "Financial planning tool with intelligent insurance recommendations based on user profile.",
      tools: ["Python", "Finance APIs", "Data Analysis", "Web Development"]
    },
    {
      title: "🤖 WhatsApp/Email/SMS Automation",
      description: "Multi-platform automation suite for message scheduling and bulk communication.",
      tools: ["Python", "APIs", "Automation", "Web Scraping"]
    }
  ];

  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <Code className="w-8 h-8 text-blue-600 dark:text-teal-400 mr-3" />
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Major Projects</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

// Skills Modal Content
const SkillsContent = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python (Intermediate)", "C", "C++"],
      color: "bg-blue-500"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Flask", "Streamlit", "OpenCV"],
      color: "bg-green-500"
    },
    {
      title: "Tools & Platforms",
      skills: ["MongoDB", "Salesforce", "Git/GitHub", "VS Code", "Jupyter"],
      color: "bg-purple-500"
    },
    {
      title: "Core Concepts",
      skills: ["Machine Learning", "Generative AI", "API Development", "Web Automation", "Data Visualization"],
      color: "bg-orange-500"
    },
    {
      title: "Operating Systems",
      skills: ["Linux", "Windows"],
      color: "bg-teal-500"
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Teamwork", "Problem-solving", "Communication (Improving)", "Video Editing"],
      color: "bg-pink-500"
    }
  ];

  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <Code className="w-8 h-8 text-blue-600 dark:text-teal-400 mr-3" />
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Skills & Expertise</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
            <div className="flex items-center mb-4">
              <div className={`w-4 h-4 ${category.color} rounded-full mr-3`} />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Certifications Modal Content
const CertificationsContent = () => (
  <div className="p-8">
    <div className="flex items-center mb-6">
      <Award className="w-8 h-8 text-blue-600 dark:text-teal-400 mr-3" />
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Certifications & Achievements</h2>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Professional Certifications</h3>
        <div className="space-y-4">
          {[
            { name: "Salesforce Certification", detail: "3-day Workshop Participant" },
            { name: "MongoDB Certification", detail: "Database Management" },
            { name: "Internship Certificate", detail: "Linux World Informatics" },
            { name: "Full Stack Development", detail: "MERN Stack Specialization" }
          ].map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
              <h4 className="font-semibold text-gray-800 dark:text-white">{cert.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.detail}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Academic Achievements</h3>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
            <h4 className="font-semibold text-gray-800 dark:text-white">🏆 Top 10% University Batch</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Merit-based fee concession recipient</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <h4 className="font-semibold text-gray-800 dark:text-white">🎯 Consistent Performance</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Maintained excellence throughout internship</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <h4 className="font-semibold text-gray-800 dark:text-white">💡 Innovation Recognition</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Problem-solving through innovative coding solutions</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Career Objective Modal Content
const CareerObjectiveContent = () => (
  <div className="p-8">
    <div className="flex items-center mb-6">
      <Target className="w-8 h-8 text-blue-600 dark:text-teal-400 mr-3" />
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Career Objective & Vision</h2>
    </div>
    
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900 dark:to-teal-900 p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">🎯 Primary Objective</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          To become a highly-skilled AI Developer, combining my passion for automation and intelligent systems 
          with practical experience to build scalable, real-world solutions.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
          <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">🚀 Short-term Goals</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Land a high-paying role in tech industry</li>
            <li>• Master advanced AI/ML technologies</li>
            <li>• Build portfolio of production-ready applications</li>
            <li>• Enhance communication and leadership skills</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
          <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">🌟 Long-term Vision</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Contribute to global tech communities</li>
            <li>• Lead innovative AI projects</li>
            <li>• Mentor aspiring developers</li>
            <li>• Create solutions that impact millions</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
        <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">💡 Core Motivation</h4>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          My love for automation and intelligent systems drives me to continuously learn and innovate. 
          I believe technology should solve real problems and make life easier for people. Every project 
          I work on is a step towards creating more efficient, intelligent, and accessible solutions.
        </p>
      </div>
    </div>
  </div>
);

// Theme Gallery Modal Content
const ThemeGalleryContent = () => {
  const { currentTheme, setTheme, isDark, theme } = useTheme();

  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <Palette className={`w-8 h-8 ${theme.icon} mr-3`} />
        <h2 className={`text-3xl font-bold ${theme.text}`}>Theme Gallery</h2>
      </div>
      
      <p className={`${theme.textSecondary} mb-8 leading-relaxed`}>
        Discover different color themes to personalize your browsing experience. Click on any theme to apply it instantly.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(themes).map(([key, themeConfig]) => (
          <div
            key={key}
            className={`${theme.card} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
              currentTheme === key ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={() => setTheme(key as ThemeKey)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-xl font-semibold ${theme.text}`}>{themeConfig.name}</h3>
              {currentTheme === key && (
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              )}
            </div>
            <div className="space-y-2 mb-4">
              <div className={`w-full h-8 rounded-md bg-gradient-to-r ${themeConfig.primary}`}></div>
              <div className={`w-full h-8 rounded-md bg-gradient-to-r ${themeConfig.secondary}`}></div>
              <div className={`w-full h-8 rounded-md bg-gradient-to-r ${themeConfig.accent}`}></div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-sm ${theme.textSecondary}`}>
                {isDark ? 'Dark Mode' : 'Light Mode'}
              </span>
              <span className={`text-sm ${theme.icon}`}>
                {currentTheme === key ? 'Active' : 'Click to apply'}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h4 className={`font-semibold ${theme.text} mb-2`}>Theme Features:</h4>
        <ul className={`text-sm ${theme.textSecondary} space-y-1`}>
          <li>• 6 beautiful color themes to choose from</li>
          <li>• Automatic dark/light mode support</li>
          <li>• Smooth transitions between themes</li>
          <li>• Persistent theme preferences</li>
        </ul>
      </div>
    </div>
  );
};

// Contact Section
const ContactSection = () => {
  const { theme } = useTheme();
  const [titleRef, titleVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [form, setForm] = useState({ number: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.number.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
      return;
    }
    const base = 'https://wa.me/916350530251';
    const text = encodeURIComponent(
      `Number: ${form.number}\nEmail: ${form.email}\nMessage: ${form.message}`
    );
    window.open(`${base}?text=${text}`, '_blank');
    setForm({ number: '', email: '', message: '' });
    setStatus('idle');
  }

  return (
    <section id="contact" className={`py-20 ${theme.hover}`}>
      <div className="max-w-4xl mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-12 ${titleVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className={`text-4xl font-bold mb-4 ${theme.text} animate-slide-in-left`}>Get In Touch</h2>
          <p className={`${theme.textSecondary} animate-slide-in-right`}>
            Let's connect and discuss opportunities in AI, IoT, and software development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div ref={cardsRef} className={`space-y-6 ${cardsVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className={`flex items-center p-4 ${theme.card} rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-stagger-1`}>
              <Mail className={`w-6 h-6 ${theme.icon} mr-4`} />
              <div>
                <h4 className={`font-semibold ${theme.text}`}>Email</h4>
                <a href="mailto:bigbossbhanu143@gmail.com" className={`${theme.icon} hover:underline hover:scale-105 transition-all duration-200`}>
                  bigbossbhanu143@gmail.com
                </a>
              </div>
            </div>
            
            <div className={`flex items-center p-4 ${theme.card} rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-stagger-2`}>
              <MapPin className={`w-6 h-6 ${theme.icon} mr-4`} />
              <div>
                <h4 className={`font-semibold ${theme.text}`}>Location</h4>
                <p className={`${theme.textSecondary}`}>Kableshwar, Sainthal, Dausa, Rajasthan</p>
              </div>
            </div>
            
            <div className={`flex items-center p-4 ${theme.card} rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-stagger-3`}>
              <Phone className={`w-6 h-6 ${theme.icon} mr-4`} />
              <div>
                <h4 className={`font-semibold ${theme.text}`}>Phone</h4>
                <a href="tel:+916350530251" className={`${theme.icon} hover:underline hover:scale-105 transition-all duration-200`}>
                  +91 6350530251
                </a>
              </div>
            </div>
            
            <div className="flex space-x-4 animate-stagger-4">
              <a 
                href="https://www.linkedin.com/in/bhanu-sharma-b19062374/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${theme.primary} text-white rounded-full hover:scale-110 hover:rotate-12 transition-all duration-300`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/thorragnor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-900 hover:scale-110 hover:-rotate-12 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/b_ha_nu_01?igsh=MThrdTcxdHd1bzdtMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/916350530251"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div ref={formRef} className={`${theme.card} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${formVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h3 className={`text-xl font-semibold mb-4 text-gray-900 dark:text-white animate-fade-in`}>Quick Message</h3>
            
            {/* Typing Animation Section */}
            <div 
              // onClick={() => setCurrentMessageIndex((prev) => (prev + 1) % typingMessages.length)}
              className="mb-6 p-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <span className="text-sm text-gray-700 dark:text-gray-300 ml-2">Typing...</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">Click to change message</span>
              </div>
              <div 
                // key={currentMessageIndex}
                className="text-gray-900 dark:text-white animate-typing-black"
              >
                {/* {typingMessages[currentMessageIndex]} */}
              </div>
            </div>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="number"
                placeholder="Your Phone Number"
                required
                value={form.number}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:scale-105 transition-all duration-300 text-gray-900 dark:text-black placeholder-gray-500 dark:placeholder-gray-400 animate-stagger-1`}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:scale-105 transition-all duration-300 text-gray-900 dark:text-black placeholder-gray-500 dark:placeholder-gray-400 animate-stagger-2`}
              />
              <textarea
                rows={4}
                name="message"
                placeholder="Type your WhatsApp message"
                required
                value={form.message}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:scale-105 transition-all duration-300 text-gray-900 dark:text-black placeholder-gray-500 dark:placeholder-gray-400 animate-stagger-3`}
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-stagger-4"
              >
                Send WhatsApp Message
              </button>
              {status === 'error' && (
                <div className="text-red-500 text-sm mt-2 animate-fade-in">
                  Please fill in all fields before sending.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© 2024 Bhanu Sharma. All rights reserved.</p>
          </div>
          <div className="text-gray-400">
            <p>Crafted with passion for AI & IoT</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check for saved theme preference or default to false
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>(() => {
    // Check for saved color theme preference or default to 'default'
    const saved = localStorage.getItem('colorTheme');
    return (saved as ThemeKey) || 'default';
  });
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    // Save color theme preference
    localStorage.setItem('colorTheme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const setTheme = (theme: ThemeKey) => {
    setCurrentTheme(theme);
  };

  const themeContextValue: ThemeContextType = {
    currentTheme,
    isDark,
    toggleTheme,
    setTheme,
    theme: themes[currentTheme]
  };

  const sections = [
    {
      id: 'about',
      icon: GraduationCap,
      title: 'About Me',
      description: 'BCA student from Rajasthan, specializing in AI & IoT with a passion for innovation',
      gradient: `bg-gradient-to-br ${themes[currentTheme].primary}`,
      content: <AboutContent />
    },
    {
      id: 'internship',
      icon: Briefcase,
      title: 'Internship',
      description: 'AWS Developer at Linux World under Vimal Daga Sir, building real-world solutions',
      gradient: `bg-gradient-to-br ${themes[currentTheme].secondary}`,
      content: <InternshipContent />
    },
    {
      id: 'projects',
      icon: Code,
      title: 'Projects',
      description: 'AI-powered applications from voice analysis to gesture control and automation',
      gradient: `bg-gradient-to-br ${themes[currentTheme].accent}`,
      content: <ProjectsContent />
    },
    {
      id: 'skills',
      icon: Trophy,
      title: 'Skills',
      description: 'Python, ML, OpenCV, Flask, MongoDB and growing expertise in AI technologies',
      gradient: `bg-gradient-to-br ${themes[currentTheme].primary}`,
      content: <SkillsContent />
    },
    {
      id: 'certifications',
      icon: Award,
      title: 'Certifications',
      description: 'Salesforce, MongoDB, Full Stack MERN and internship achievements',
      gradient: `bg-gradient-to-br ${themes[currentTheme].secondary}`,
      content: <CertificationsContent />
    },
    {
      id: 'objective',
      icon: Target,
      title: 'Career Objective',
      description: 'Aspiring AI Developer focused on automation and intelligent system solutions',
      gradient: `bg-gradient-to-br ${themes[currentTheme].accent}`,
      content: <CareerObjectiveContent />
    },
    {
      id: 'themes',
      icon: Palette,
      title: 'Theme Gallery',
      description: 'Explore different color themes to customize your viewing experience',
      gradient: `bg-gradient-to-br ${themes[currentTheme].accent}`,
      content: <ThemeGalleryContent />
    }
  ];

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className={`min-h-screen ${themes[currentTheme].background} ${themes[currentTheme].text} transition-colors duration-300`}>
        <Header />
        
        <Hero />
        
        {/* Main Sections Grid */}
        <section id="sections" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className={`text-4xl font-bold mb-4 ${themes[currentTheme].text} animate-slide-in-left`}>Explore My Journey</h2>
              <p className={`${themes[currentTheme].textSecondary} max-w-2xl mx-auto animate-slide-in-right`}>
                Click on any section below to learn more about my background, experience, and achievements in AI & IoT
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {sections.map((section, index) => (
                <SectionCard
                  key={section.id}
                  icon={section.icon}
                  title={section.title}
                  description={section.description}
                  gradient={section.gradient}
                  onClick={() => setActiveModal(section.id)}
                  delay={index * 0.1}
                />
              ))}
            </div>
            
          </div>
        </section>
        
        <ContactSection />
        <Footer />
        
        {/* Modals */}
        {sections.map((section) => (
          <Modal
            key={section.id}
            isOpen={activeModal === section.id}
            onClose={() => setActiveModal(null)}
          >
            {section.content}
          </Modal>
        ))}
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;