import { SiteConfig } from '../App';
import { useInView } from '../hooks/useAnimations';

interface LegalUpdatesProps {
  config: SiteConfig;
}

export default function LegalUpdates({ config }: LegalUpdatesProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="legal" className="py-24 bg-slate-800 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <span className={`inline-block bg-blue-500/10 border border-blue-500 text-blue-400 px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Cập nhật pháp luật
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Văn Bản Luật Mới Nhất
          </h2>
          <p className={`text-slate-400 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Luôn cập nhật các quy định pháp luật thuế mới nhất để học viên nắm vững
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border-t border-l border-slate-700">
          {config.legalUpdates.map((update, index) => (
            <div
              key={index}
              className={`group relative bg-slate-900 border-r border-b border-slate-700 p-6 hover:bg-slate-800 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                {/* Date badge */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 flex flex-col items-center justify-center">
                  <span className="text-slate-900 text-xs font-bold uppercase">{update.date.split('/')[1] || '2024'}</span>
                  <span className="text-white font-bold text-lg">{update.date.split('/')[0]}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500 text-blue-400 text-xs uppercase tracking-wider font-bold">
                      {update.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-wide">
                    {update.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {update.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="text-slate-400 mb-4">
            Học viên được cập nhật liên tục các thay đổi về luật trong suốt quá trình học
          </p>
          <div className="inline-flex items-center space-x-2 text-amber-400 border-t-2 border-amber-500 pt-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="font-bold uppercase tracking-wider text-sm">Tài liệu được cập nhật hàng tháng</span>
          </div>
        </div>
      </div>
    </section>
  );
}
