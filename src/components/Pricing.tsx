import { SiteConfig } from '../App';
import { useInView } from '../hooks/useAnimations';

interface PricingProps {
  config: SiteConfig;
}

export default function Pricing({ config }: PricingProps) {
  const { ref, isInView } = useInView(0.1);

  const scrollToRegister = () => {
    const element = document.querySelector('#register');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 bg-slate-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <span className={`inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Học phí
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {config.pricing.title}
          </h2>
          <p className={`text-slate-400 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Đầu tư cho kiến thức - Nhận lại sự nghiệp vững chắc
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {config.pricing.items.map((plan, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${index === 1 ? 'md:-translate-y-4' : ''}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Popular badge */}
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-amber-500/20">
                    Phổ biến nhất
                  </span>
                </div>
              )}

              <div className={`h-full rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                index === 1
                  ? 'bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-500/50 shadow-xl shadow-amber-500/10'
                  : 'bg-slate-800/50 border-slate-700/50 hover:border-amber-500/30'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm">{plan.duration}</p>
                </div>

                <div className="text-center mb-8">
                  {plan.originalPrice && (
                    <span className="text-slate-500 line-through text-lg block mb-1">
                      {plan.originalPrice}đ
                    </span>
                  )}
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {plan.price === 'Liên hệ' ? (
                      <span className="text-amber-400">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-amber-400">{plan.price}</span>
                        <span className="text-slate-400 text-lg">đ</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToRegister}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 hover:shadow-lg hover:shadow-amber-500/30'
                      : 'border border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-amber-500/50'
                  }`}
                >
                  {plan.price === 'Liên hệ' ? 'Liên hệ tư vấn' : 'Đăng ký ngay'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="text-slate-500 text-sm">
            * Học phí có thể thay đổi theo chương trình ưu đãi. Liên hệ để nhận báo giá chi tiết.
          </p>
        </div>
      </div>
    </section>
  );
}
