import { SiteConfig } from '../App';
import { useInView } from '../hooks/useAnimations';
import SectionTitle from './SectionTitle';
import { AudienceIcon } from './icons';

interface TargetAudienceProps {
  config: SiteConfig;
}

const iconMap: Record<string, JSX.Element> = {
  student: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zM12 14v7" />
    </svg>
  ),
  newbie: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  accountant: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  manager: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  business: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  freelancer: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function TargetAudience({ config }: TargetAudienceProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="audience" className="gov-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionTitle
            badge="Đối tượng tham gia"
            title={config.targetAudience.title}
            subtitle={config.targetAudience.subtitle}
            badgeColor="bg-yellow-100 text-yellow-700 border-yellow-700"
            icon={<AudienceIcon className="w-8 h-8" />}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.targetAudience.groups.map((group, index) => (
            <div
              key={index}
              className={`group bg-white p-8 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover-lift hover-shine card-hover ${isInView ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 100}ms`, animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-red-700 flex items-center justify-center text-yellow-400 mb-5 group-hover:bg-red-800 group-hover:-rotate-6 transition-all duration-500 icon-bounce">
                  {iconMap[group.icon] || iconMap.student}
                </div>

                {/* Highlight badge */}
                <div className="inline-block mb-3 group-hover:animate-bounce-subtle">
                  <span className="px-3 py-1 bg-yellow-100 border border-yellow-700 text-yellow-700 text-xs font-bold uppercase tracking-widest">
                    {group.highlight}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-300 uppercase tracking-wide text-highlight">
                  {group.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {group.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
