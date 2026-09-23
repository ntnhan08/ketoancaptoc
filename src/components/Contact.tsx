import { SiteConfig } from '../App';
import { useInView } from '../hooks/useAnimations';
import SectionTitle from './SectionTitle';
import { ContactIcon } from './icons';

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
    },
  ];

  return (
    <section id="contact" className="gov-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionTitle
            badge="Liên hệ"
            title="Thông tin liên hệ"
            subtitle="Hãy liên hệ với chúng tôi nếu bạn cần tư vấn thêm"
            badgeColor="bg-green-100 text-green-700 border-green-700"
            icon={<ContactIcon className="w-8 h-8" />}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-6 border border-gray-200 shadow-sm hover:shadow-2xl text-center group transition-all duration-500 hover-lift hover-shine card-hover ${isInView ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 100}ms`, animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-red-700 flex items-center justify-center mx-auto mb-4 text-yellow-400 group-hover:bg-red-800 group-hover:rotate-12 transition-all duration-500 icon-bounce">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-wider group-hover:text-red-700 transition-colors duration-300">{item.title}</h3>
              <a href={item.link} className="text-red-700 hover:underline text-sm font-medium text-highlight">
                {item.content}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
