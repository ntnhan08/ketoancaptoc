import { SiteConfig } from '../App';
import { useInView } from '../hooks/useAnimations';

interface LegalUpdatesProps {
  config: SiteConfig;
}

export default function LegalUpdates({ config }: LegalUpdatesProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="legal" className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className="text-center mb-16">
          <span className={`inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Cập nhật pháp luật
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Văn Bản Luật Mới Nhất
          </h2>
          <p className={`text-slate-400 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Luôn cập nhật các quy định pháp luật thuế mới nhất để học viên nắm vững
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {config.legalUpdates.map((update, index) => (
            <div
              key={index}
              className={`group relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-700 hover:-translate-y-1 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                {/* Date badge */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex flex-col items-center justify-center border border-blue-500/20">
                  <span className="text-blue-400 text-xs font-medium">{update.date.split('/')[1] || '2024'}</span>
                  <span className="text-white font-bold text-lg">{update.date.split('/')[0]}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                      {update.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {update.description}
                  </p>
                </div>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="text-slate-400 mb-4">
            Học viên được cập nhật liên tục các thay đổi về luật trong suốt quá trình học
          </p>
          <div className="inline-flex items-center space-x-2 text-amber-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="font-medium">Tài liệu được cập nhật hàng tháng</span>
          </div>
        </div>
      </div>
    </section>
  );
}
