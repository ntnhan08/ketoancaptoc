import { useState, useEffect } from 'react';
import { SiteConfig } from '../App';

interface HeaderProps {
  config: SiteConfig;
}

export default function Header({ config }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Trang chủ' },
    { href: '#about', label: 'Giới thiệu' },
    { href: '#instructors', label: 'Giảng viên' },
    { href: '#benefits', label: 'Giá trị' },
    { href: '#audience', label: 'Đối tượng' },
    { href: '#legal', label: 'Pháp luật' },
    { href: '#register', label: 'Đăng ký' },
    { href: '#contact', label: 'Liên hệ' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg' : 'shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            {/* National emblem style */}
            <div className="w-14 h-14 bg-red-700 flex items-center justify-center relative">
              <div className="absolute inset-1 border-2 border-yellow-400 flex items-center justify-center">
                <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="text-xs text-red-700 font-bold uppercase tracking-wider">Trung tâm đào tạo</div>
              <div className="text-xl md:text-2xl font-bold text-red-700 uppercase tracking-wide">
                {config.site.logo}
              </div>
              <div className="text-[10px] text-gray-600 italic">
                Professional Accounting Training Center
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-red-700 hover:bg-red-50 transition-colors uppercase tracking-wide relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
                {index < navLinks.length - 1 && (
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300">|</span>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-red-700 border border-red-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t border-gray-200 px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 uppercase tracking-wide text-sm font-semibold border-b border-gray-100"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
