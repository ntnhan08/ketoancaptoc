import { SiteConfig } from '../App';
import { useInView } from '../hooks/useAnimations';

interface TestimonialsProps {
  config: SiteConfig;
}

export default function Testimonials({ config }: TestimonialsProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="testimonials" className="py-24 bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <span className={`inline-block bg-purple-500/10 border border-purple-500 text-purple-400 px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Học viên
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Học Viên Nói Gì Về Chúng Tôi
          </h2>
          <p className={`text-slate-400 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Những chia sẻ chân thực từ học viên đã tham gia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-l border-slate-700">
          {config.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative bg-slate-800 border-r border-b border-slate-700 p-8 hover:bg-slate-700 transition-all duration-500 group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-amber-500"></div>
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 italic mb-6 leading-relaxed border-l-2 border-amber-500 pl-4">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-700">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover grayscale"
                />
                <div>
                  <p className="font-bold text-white uppercase tracking-wide text-sm">{testimonial.name}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
