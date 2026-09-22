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

  const scrollToFeatures = () => {
    const element = document.querySelector('#features');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Floating numbers background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['%', '₿', '₫', '∑', '∫', '√', '%', '₿'].map((char, i) => (
          <div
            key={i}
            className="absolute text-amber-500/5 font-mono text-6xl font-bold animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i}s`
            }}
          >
            {char}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
              {config.site.tagline}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className={`block transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                {config.site.heroTitle}
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-400 mb-8 max-w-lg transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              {config.site.heroSubtitle}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <button
                onClick={scrollToRegister}
                className="group bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300"
              >
                Đăng ký tư vấn
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={scrollToFeatures}
                className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/5 hover:border-amber-500/50 transition-all duration-300"
              >
                Tìm hiểu thêm
              </button>
            </div>

            {/* Trust indicators */}
            <div className={`mt-12 flex items-center space-x-8 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 3, 5, 7].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/32?img=${i}`} className="w-8 h-8 rounded-full border-2 border-slate-800" alt="" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-amber-400 font-semibold">5,000+</span>
                  <span className="text-slate-400 ml-1">học viên</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-slate-400 text-sm ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right - Professional visual */}
          <div className={`hidden lg:block transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
                {/* Calculator-like display */}
                <div className="bg-slate-950 rounded-xl p-6 mb-6 border border-slate-700/30">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-500 text-sm">BÁO CÁO TÀI CHÍNH</span>
                    <span className="text-amber-400 text-xs font-mono">Q4/2024</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Doanh thu</span>
                      <span className="text-white font-mono">12,500,000,000₫</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Chi phí</span>
                      <span className="text-white font-mono">8,750,000,000₫</span>
                    </div>
                    <div className="border-t border-slate-700 pt-3 flex justify-between">
                      <span className="text-amber-400 font-semibold">Lợi nhuận</span>
                      <span className="text-amber-400 font-mono font-bold">3,750,000,000₫</span>
                    </div>
                  </div>
                </div>

                {/* Chart bars */}
                <div className="flex items-end space-x-2 h-32">
                  {[65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-sm animate-grow" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-500 font-mono">
                  <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>CN</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-xl animate-float-slow">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Thuế TNDN</p>
                    <p className="text-sm text-green-400 font-semibold">-15.2%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-xl animate-float-slow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Tuân thủ</p>
                    <p className="text-sm text-amber-400 font-semibold">100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}
