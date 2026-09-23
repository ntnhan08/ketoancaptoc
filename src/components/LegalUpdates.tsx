import { SiteConfig } from '../App';
import { useInView } from '../hooks/useAnimations';
import SectionTitle from './SectionTitle';
import { LegalIcon } from './icons';

interface LegalUpdatesProps {
  config: SiteConfig;
}

export default function LegalUpdates({ config }: LegalUpdatesProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="legal" className="gov-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionTitle
            badge="Cập nhật pháp luật"
            title="Văn bản luật mới nhất"
            subtitle="Luôn cập nhật các quy định pháp luật thuế mới nhất để học viên nắm vững"
            badgeColor="bg-blue-100 text-blue-700 border-blue-700"
            icon={<LegalIcon className="w-8 h-8" />}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {config.legalUpdates.map((update, index) => (
            <div
              key={index}
              className={`group bg-white p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                {/* Date badge */}
                <div className="flex-shrink-0 w-16 h-16 bg-red-700 flex flex-col items-center justify-center text-white">
                  <span className="text-xs font-bold uppercase">{update.date.split('/')[1] || '2024'}</span>
                  <span className="text-lg font-bold">{update.date.split('/')[0]}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-0.5 bg-blue-100 border border-blue-700 text-blue-700 text-xs uppercase tracking-wider font-bold">
                      {update.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors uppercase tracking-wide">
                    {update.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {update.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="inline-block bg-white border-l-4 border-red-700 px-6 py-4 shadow-sm">
            <p className="text-gray-700 font-medium">
              Học viên được cập nhật liên tục các thay đổi về luật trong suốt quá trình học
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
