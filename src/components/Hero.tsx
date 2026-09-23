import { useEffect, useState } from 'react';
import { SiteConfig } from '../App';

interface HeroProps {
  config: SiteConfig;
}

export default function Hero({ config }: HeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToRegister = () => {
    const element = document.querySelector('#register');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white overflow-hidden particle-bg">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'
        }}></div>
      </div>

      {/* Animated decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 animate-morph -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 animate-morph -ml-32 -mb-32" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/5 animate-float-diagonal"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-400/10 animate-float-medium"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
            <div className={`transition-all duration-1000 animate-fade-in-up ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Breadcrumb style */}
            <div className="flex items-center space-x-2 text-sm text-yellow-300 mb-6 animate-fade-in-left">
              <span>{config.navigation.home}</span>
              <span>/</span>
              <span className="text-white">Đào tạo kế toán</span>
            </div>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-1000 delay-200 animate-fade-in-up ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              {config.site.heroTitle}
            </h1>            
            <p className={`text-lg md:text-xl text-red-100 mb-8 max-w-lg leading-relaxed transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              {config.site.heroSubtitle}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 animate-fade-in-up ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <button
                onClick={scrollToRegister}
                className="group bg-yellow-400 text-red-900 px-8 py-4 font-bold uppercase tracking-wider hover:bg-yellow-300 transition-all duration-300 shadow-lg btn-ripple hover-lift"
              >
                Đăng ký tư vấn ngay
                <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-red-700 transition-all duration-300 btn-ripple hover-lift"
              >
                Tìm hiểu thêm
              </button>
            </div>

            {/* Stats */}
            <div className={`mt-12 grid grid-cols-3 gap-6 transition-all duration-1000 delay-700 animate-fade-in-up ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              {[
                { value: '5000+', label: 'Học viên' },
                { value: '15+', label: 'Năm kinh nghiệm' },
                { value: '98%', label: 'Hài lòng' },
              ].map((stat, i) => (
                <div key={i} className="border-l-4 border-yellow-400 pl-4 hover-lift transition-all duration-300" style={{ animationDelay: `${0.7 + i * 0.1}s` }}>
                  <div className="text-3xl font-bold text-yellow-400 hover-scale-pulse">{stat.value}</div>
                  <div className="text-xs text-red-200 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image/Visual */}
          <div className={`hidden lg:block transition-all duration-1000 delay-300 animate-fade-in-right ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative bg-white/10 backdrop-blur-sm border-2 border-yellow-400/30 p-8 hover-3d">
              <div className="bg-white text-gray-800 p-6 shadow-2xl animate-float-slow">
                <div className="border-b-2 border-red-700 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-red-700 uppercase">{config.site.programTitle}</h3>
                  <p className="text-xs text-gray-600">Cập nhật {config.site.currentYear}</p>
                </div>
                <div className="space-y-3">
                  {[
                    'Kế toán tổng hợp thực chiến',
                    'Pháp luật thuế chuyên sâu',
                    'Phần mềm kế toán MISA',
                    'Quyết toán thuế doanh nghiệp',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600 uppercase tracking-wider">Khai giảng</span>
                    <span className="text-sm font-bold text-red-700">Hàng tháng</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f5f5f5"/>
        </svg>
      </div>
    </section>
  );
}
