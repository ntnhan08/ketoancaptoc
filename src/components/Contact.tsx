import { SiteConfig } from '../App';
import { useInView } from '../hooks/useAnimations';

interface ContactProps {
  config: SiteConfig;
}

export default function Contact({ config }: ContactProps) {
  const { ref, isInView } = useInView(0.1);

  const contactItems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Điện thoại',
      content: config.contact.phone,
      link: `tel:${config.contact.phone}`,
      color: 'amber',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: config.contact.email,
      link: `mailto:${config.contact.email}`,
      color: 'blue',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Địa chỉ',
      content: config.contact.address,
      link: '#',
      color: 'purple',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Giờ làm việc',
      content: config.contact.workingHours,
      link: '#',
      color: 'green',
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    amber: { bg: 'bg-amber-500', text: 'text-amber-400', border: 'border-amber-500' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-400', border: 'border-purple-500' },
    green: { bg: 'bg-green-500', text: 'text-green-400', border: 'border-green-500' },
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <span className={`inline-block bg-green-500/10 border border-green-500 text-green-400 px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Liên hệ
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Thông Tin Liên Hệ
          </h2>
          <p className={`text-slate-400 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Hãy liên hệ với chúng tôi nếu bạn cần tư vấn thêm
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-700">
          {contactItems.map((item, index) => {
            const colors = colorMap[item.color];
            return (
              <div
                key={index}
                className={`bg-slate-800 border-r border-b border-slate-700 p-6 text-center group hover:bg-slate-700 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${colors.bg} flex items-center justify-center mx-auto mb-4 text-slate-900 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-2 uppercase tracking-wider">{item.title}</h3>
                <a href={item.link} className={`${colors.text} hover:underline text-sm`}>
                  {item.content}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
