import { SiteConfig } from '../App';
import { useInView } from '../hooks/useAnimations';
import SectionTitle from './SectionTitle';
import { TestimonialsIcon } from './icons';

interface TestimonialsProps {
  config: SiteConfig;
}

export default function Testimonials({ config }: TestimonialsProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="testimonials" className="gov-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionTitle
            badge="Học viên"
            title="Học viên nói gì về chúng tôi"
            subtitle="Những chia sẻ chân thực từ học viên đã tham gia"
            badgeColor="bg-purple-100 text-purple-700 border-purple-700"
            icon={<TestimonialsIcon className="w-8 h-8" />}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {config.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-8 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 group hover-lift hover-shine card-hover ${isInView ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 150}ms`, animationDelay: `${300 + index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4 group-hover:animate-bounce-subtle">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400 group-hover:animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 italic mb-6 leading-relaxed border-l-4 border-red-700 pl-4 group-hover:border-yellow-400 transition-colors duration-300">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <p className="font-bold text-gray-900 uppercase tracking-wide text-sm group-hover:text-red-700 transition-colors duration-300">{testimonial.name}</p>
                  <p className="text-xs text-gray-600 uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
