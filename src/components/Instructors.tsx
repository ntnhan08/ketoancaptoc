import { SiteConfig } from '../App';
import { useInView } from '../hooks/useAnimations';

interface InstructorsProps {
  config: SiteConfig;
}

export default function Instructors({ config }: InstructorsProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="instructors" className="py-24 bg-slate-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <span className={`inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Đội ngũ giảng viên
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {config.instructors.title}
          </h2>
          <p className={`text-slate-400 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {config.instructors.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.instructors.list.map((instructor, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-700 hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                
                {/* Experience badge */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-indigo-500/30 px-3 py-1 rounded-full">
                  <span className="text-xs text-indigo-400 font-medium">{instructor.experience}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                  {instructor.name}
                </h3>
                <p className="text-indigo-400 text-sm font-medium mb-4">{instructor.title}</p>

                {/* Expertise */}
                <div className="mb-4">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Chuyên môn</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Chứng chỉ</p>
                  <div className="space-y-1">
                    {instructor.certifications.map((cert, cIndex) => (
                      <div key={cIndex} className="flex items-center space-x-2">
                        <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
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
