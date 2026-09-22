import { SiteConfig } from '../App';
import { useInView } from '../hooks/useAnimations';

interface InstructorsProps {
  config: SiteConfig;
}

export default function Instructors({ config }: InstructorsProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="instructors" className="py-24 bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <span className={`inline-block bg-indigo-500/10 border border-indigo-500 text-indigo-400 px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Đội ngũ giảng viên
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {config.instructors.title}
          </h2>
          <p className={`text-slate-400 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {config.instructors.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-700">
          {config.instructors.list.map((instructor, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800 border-r border-b border-slate-700 overflow-hidden hover:bg-slate-700 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-slate-700">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Experience badge */}
                <div className="absolute top-0 right-0 bg-amber-500 px-3 py-1">
                  <span className="text-xs text-slate-900 font-bold uppercase tracking-wider">{instructor.experience}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors uppercase tracking-wide">
                  {instructor.name}
                </h3>
                <p className="text-amber-400 text-sm font-bold mb-4 uppercase tracking-wider">{instructor.title}</p>

                {/* Expertise */}
                <div className="mb-4">
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Chuyên môn</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="px-2 py-1 bg-slate-900 text-slate-300 text-xs border border-slate-700 uppercase tracking-wide"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Chứng chỉ</p>
                  <div className="space-y-1">
                    {instructor.certifications.map((cert, cIndex) => (
                      <div key={cIndex} className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-amber-500 flex-shrink-0"></div>
                        <span className="text-xs text-slate-400">{cert}</span>
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
