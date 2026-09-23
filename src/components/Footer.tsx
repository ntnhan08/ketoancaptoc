import { SiteConfig } from '../App';
import { LogoIcon, FacebookIcon, YoutubeIcon } from './icons';

interface FooterProps {
  config: SiteConfig;
}

export default function Footer({ config }: FooterProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-700 flex items-center justify-center relative">
                <div className="absolute inset-1 border-2 border-yellow-400 flex items-center justify-center">
                  <LogoIcon className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{config.site.department}</div>
                <div className="text-xl font-bold uppercase tracking-wide">{config.site.logo}</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              {config.site.tagline}. Đào tạo kế toán chuyên sâu về nghiệp vụ và pháp luật thuế.
            </p>
            {/* Social Links */}
            <div className="flex space-x-2">
              <a
                href={config.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-all duration-300 text-gray-400 hover:text-white hover-lift hover-glow"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={config.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-all duration-300 text-gray-400 hover:text-white hover-lift hover-glow"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider border-b-2 border-red-700 pb-2 inline-block">Liên kết</h3>
            <ul className="space-y-3">
              {[
                { href: '#home', label: config.navigation.home },
                { href: '#about', label: config.navigation.about },
                { href: '#instructors', label: config.navigation.instructors },
                { href: '#benefits', label: config.navigation.benefits },
                { href: '#audience', label: config.navigation.audience },
                { href: '#register', label: config.navigation.register },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm uppercase tracking-wider"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider border-b-2 border-red-700 pb-2 inline-block">Chương trình</h3>
            <ul className="space-y-3">
              {[
                { href: '#features', label: config.navigation.features },
                { href: '#legal', label: config.navigation.legal },
                { href: '#testimonials', label: config.navigation.testimonials },
                { href: '#contact', label: config.navigation.contact },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm uppercase tracking-wider text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider border-b-2 border-red-700 pb-2 inline-block">{config.navigation.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-red-700 flex-shrink-0 mt-1"></div>
                <span className="text-gray-400 text-sm">{config.contact.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-red-700 flex-shrink-0 mt-1"></div>
                <span className="text-gray-400 text-sm">{config.contact.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-red-700 flex-shrink-0 mt-1"></div>
                <span className="text-gray-400 text-sm">{config.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm uppercase tracking-wider">
              © {config.site.currentYear} {config.site.logo}. {config.site.copyrightText}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-red-400 text-sm transition-colors uppercase tracking-wider">
                {config.site.privacyPolicy}
              </a>
              <a href="#" className="text-gray-500 hover:text-red-400 text-sm transition-colors uppercase tracking-wider">
                {config.site.termsOfUse}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
