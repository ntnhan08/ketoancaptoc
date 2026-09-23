import { useState } from 'react';
import { SiteConfig } from '../App';
import { useInView } from '../hooks/useAnimations';
import SectionTitle from './SectionTitle';
import { RegisterIcon } from './icons';

interface RegistrationFormProps {
  config: SiteConfig;
}

export default function RegistrationForm({ config }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { ref, isInView } = useInView(0.1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const scriptURL = config.googleSheet.scriptURL;
      
      if (!scriptURL || scriptURL.includes('YOUR_SCRIPT_ID')) {
        console.log('Demo mode - Form ', formData);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        setFormData({ name: '', phone: '', email: '' });
        return;
      }

      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          timestamp: new Date().toISOString(),
        }),
      });

      setStatus('success');
      setFormData({ name: '', phone: '', email: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="register" className="gov-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionTitle
            badge="Đăng ký ngay"
            title={config.registration.title}
            subtitle={config.registration.subtitle}
            badgeColor="bg-red-100 text-red-700 border-red-700"
            icon={<RegisterIcon className="w-8 h-8" />}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide border-b-2 border-red-700 pb-3">
                Tại sao chọn chúng tôi?
              </h3>
              <div className="space-y-6">
                {[
                  { icon: 'clock', title: 'Phản hồi nhanh chóng', desc: 'Liên hệ trong vòng 30 phút' },
                  { icon: 'shield', title: 'Tư vấn miễn phí', desc: 'Lộ trình học phù hợp nhất' },
                  { icon: 'gift', title: 'Ưu đãi đặc biệt', desc: 'Giảm đến 30% khi đăng ký hôm nay' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <div className="w-12 h-12 bg-red-700 flex items-center justify-center flex-shrink-0">
                      {item.icon === 'clock' && (
                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {item.icon === 'shield' && (
                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {item.icon === 'gift' && (
                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg uppercase tracking-wide">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className={`transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white border border-gray-200 shadow-lg">
              <div className="bg-red-700 text-white px-6 py-4">
                <h3 className="text-xl font-bold uppercase tracking-wide">Đăng ký tư vấn miễn phí</h3>
                <p className="text-red-100 text-sm">Điền thông tin bên dưới để bắt đầu</p>
              </div>
              
              <div className="p-6">
                {status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-500 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Đăng ký thành công!</h3>
                    <p className="text-gray-600 mb-6">{config.registration.successMessage}</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-red-700 font-bold uppercase tracking-wider hover:underline"
                    >
                      Đăng ký khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-all duration-300 outline-none input-animate"
                    />
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="0901 234 567"
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-all duration-300 outline-none input-animate"
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-all duration-300 outline-none input-animate"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-red-700 text-white py-4 font-bold uppercase tracking-wider hover:bg-red-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md btn-ripple hover-lift hover-glow"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Đang gửi...
                      </span>
                    ) : (
                      'Đăng ký ngay'
                    )}
                  </button>
                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-700 text-red-700 px-4 py-3 text-sm">
                        {config.registration.errorMessage}
                      </div>
                    )}

                    <p className="text-xs text-gray-500 text-center uppercase tracking-wider">
                      Bằng việc đăng ký, bạn đồng ý với điều khoản dịch vụ
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
