import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import RegistrationForm from './components/RegistrationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export interface SiteConfig {
  site: {
    title: string;
    logo: string;
    tagline: string;
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
  };
  about: {
    title: string;
    description: string;
    stats: { number: string; label: string }[];
  };
  courses: {
    id: number;
    name: string;
    description: string;
    price: string;
    originalPrice: string;
    duration: string;
    lessons: string;
    level: string;
    features: string[];
    image: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    content: string;
    avatar: string;
  }[];
  contact: {
    phone: string;
    email: string;
    address: string;
    workingHours: string;
    facebook: string;
    youtube: string;
  };
  googleSheet: {
    scriptURL: string;
  };
  registration: {
    title: string;
    subtitle: string;
    successMessage: string;
    errorMessage: string;
  };
}

function App() {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/config.json')
      .then((res) => res.json())
      .then((data) => {
        setConfig(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading config:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-red-600">Lỗi tải cấu hình</h1>
          <p className="mt-2 text-gray-600">Vui lòng kiểm tra file config.json</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header config={config} />
      <Hero config={config} />
      <About config={config} />
      <Courses config={config} />
      <Testimonials config={config} />
      <RegistrationForm config={config} />
      <Contact config={config} />
      <Footer config={config} />
    </div>
  );
}

export default App;
