import { SiteConfig } from '../App';
import { useInView, useCountUp } from '../hooks/useAnimations';

interface AboutProps {
  config: SiteConfig;
}

function StatCard({ stat, index, isVisible }: { stat: { number: string; label: string }; index: number; isVisible: boolean }) {
  const numericValue = parseInt(stat.number.replace(/\D/g, ''));
  const suffix = stat.number.replace(/[\d]/g, '');
  const count = useCountUp(numericValue, 2000, isVisible);

  return (
    <div
      className="relative bg-slate-800 border border-slate-700 p-6 group hover:border-amber-500 transition-colors duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative">
        <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 font-mono">
          {isVisible ? count : 0}{suffix}
        </div>
        <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
      </div>
    </div>
  );
}

export default function About({ config }: AboutProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="about" className="py-24 bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Description */}
          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block bg-amber-500/10 border border-amber-500 text-amber-400 px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-6">
              Giới thiệu
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {config.about.title}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              {config.about.description}
            </p>
            <div className="space-y-4">
              {[
                'Đội ngũ giảng viên là Kế toán trưởng, Luật sư thuế',
                'Chương trình cập nhật theo luật thuế mới nhất 2024',
                'Thực hành trên chứng từ của doanh nghiệp thực',
                'Hỗ trợ học viên đến khi thành thạo công việc',
                'Cam kết hoàn tiền nếu không hài lòng',
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {config.about.stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} isVisible={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
