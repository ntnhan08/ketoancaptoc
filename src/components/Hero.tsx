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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden border-b border-slate-700">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-amber-500/10 border border-amber-500 text-amber-400 px-4 py-2 text-sm font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 bg-amber-400 mr-3"></span>
              {config.site.tagline}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className={`block transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                {config.site.heroTitle}
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-400 mb-8 max-w-lg leading-relaxed transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              {config.site.heroSubtitle}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <button
                onClick={scrollToRegister}
                className="group bg-amber-500 text-slate-900 px-8 py-4 font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors duration-200"
              >
                Đăng ký tư vấn
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={scrollToFeatures}
                className="border-2 border-slate-600 text-slate-300 px-8 py-4 font-bold uppercase tracking-wider hover:bg-slate-800 hover:border-amber-500 transition-colors duration-200"
              >
                Tìm hiểu thêm
              </button>
            </div>

            {/* Stats row */}
            <div className={`mt-12 grid grid-cols-3 gap-6 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              {[
                { value: '5000+', label: 'Học viên' },
                { value: '15+', label: 'Năm KN' },
                { value: '98%', label: 'Hài lòng' },
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-amber-500 pl-4">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Professional visual */}
          <div className={`hidden lg:block transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-slate-800 border border-slate-700 p-8">
                {/* Calculator-like display */}
                <div className="bg-slate-950 border border-slate-700 p-6 mb-6">
                  <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-3">
                    <span className="text-slate-500 text-xs uppercase tracking-widest">Báo cáo tài chính</span>
                    <span className="text-amber-400 text-xs font-mono">Q4/2024</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Doanh thu</span>
                      <span className="text-white font-mono">12,500,000,000₫</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Chi phí</span>
                      <span className="text-white font-mono">8,750,000,000₫</span>
                    </div>
                    <div className="border-t border-slate-700 pt-3 flex justify-between">
                      <span className="text-amber-400 font-bold uppercase text-sm">Lợi nhuận</span>
                      <span className="text-amber-400 font-mono font-bold">3,750,000,000₫</span>
                    </div>
                  </div>
                </div>

                {/* Chart bars */}
                <div className="flex items-end space-x-1 h-32">
                  {[65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-amber-500 animate-grow" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-500 font-mono uppercase">
                  <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>CN</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-slate-800 border border-slate-700 p-4 animate-float-slow">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Thuế TNDN</p>
                    <p className="text-sm text-green-400 font-bold">-15.2%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-700 p-4 animate-float-slow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-amber-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Tuân thủ</p>
                    <p className="text-sm text-amber-400 font-bold">100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
