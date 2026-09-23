import { SiteConfig } from '../App';

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
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Trung tâm đào tạo</div>
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
                className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-colors text-gray-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={config.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-colors text-gray-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider border-b-2 border-red-700 pb-2 inline-block">Liên kết</h3>
            <ul className="space-y-3">
              {[
                { href: '#home', label: 'Trang chủ' },
                { href: '#about', label: 'Giới thiệu' },
                { href: '#instructors', label: 'Giảng viên' },
                { href: '#benefits', label: 'Giá trị' },
                { href: '#audience', label: 'Đối tượng' },
                { href: '#register', label: 'Đăng ký' },
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
                { href: '#features', label: 'Năng lực đào tạo' },
                { href: '#legal', label: 'Cập nhật pháp luật' },
                { href: '#testimonials', label: 'Học viên' },
                { href: '#contact', label: 'Liên hệ' },
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
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wider border-b-2 border-red-700 pb-2 inline-block">Liên hệ</h3>
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
              © 2024 {config.site.logo}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-red-400 text-sm transition-colors uppercase tracking-wider">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-gray-500 hover:text-red-400 text-sm transition-colors uppercase tracking-wider">
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
