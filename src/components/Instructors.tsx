import { SiteConfig } from '../App';
import { useInView } from '../hooks/useAnimations';
import SectionTitle from './SectionTitle';
import { InstructorsIcon } from './icons';

interface InstructorsProps {
  config: SiteConfig;
}

export default function Instructors({ config }: InstructorsProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="instructors" className="gov-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionTitle
            badge="Đội ngũ giảng viên"
            title={config.instructors.title}
            subtitle={config.instructors.subtitle}
            badgeColor="bg-blue-100 text-blue-700 border-blue-700"
            icon={<InstructorsIcon className="w-8 h-8" />}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.instructors.list.map((instructor, index) => (
            <div
              key={index}
              className={`group bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift card-hover ${isInView ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 150}ms`, animationDelay: `${300 + index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Experience badge */}
                <div className="absolute top-0 right-0 bg-red-700 px-3 py-1 group-hover:bg-yellow-400 transition-colors duration-300">
                  <span className="text-xs text-white font-bold uppercase tracking-wider group-hover:text-red-900">{instructor.experience}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-700 transition-colors uppercase tracking-wide">
                  {instructor.name}
                </h3>
                <p className="text-red-700 text-sm font-bold mb-4 uppercase tracking-wider">{instructor.title}</p>

                {/* Expertise */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">Chuyên môn</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs border border-gray-200 uppercase tracking-wide"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">Chứng chỉ</p>
                  <div className="space-y-1">
                    {instructor.certifications.map((cert, cIndex) => (
                      <div key={cIndex} className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-700 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
