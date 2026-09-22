import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Instructors from './components/Instructors';
import Benefits from './components/Benefits';
import TargetAudience from './components/TargetAudience';
import LegalUpdates from './components/LegalUpdates';
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
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  instructors: {
    title: string;
    subtitle: string;
    list: {
      name: string;
      title: string;
      experience: string;
      expertise: string[];
      image: string;
      certifications: string[];
    }[];
  };
  benefits: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  targetAudience: {
    title: string;
    subtitle: string;
    groups: {
      icon: string;
      title: string;
      description: string;
      highlight: string;
    }[];
  };
  legalUpdates: {
    date: string;
    title: string;
    description: string;
    tag: string;
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
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-amber-500 mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <p className="mt-4 text-slate-300 text-lg font-light">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-red-400">Lỗi tải cấu hình</h1>
          <p className="mt-2 text-slate-400">Vui lòng kiểm tra file config.json</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Header config={config} />
      <Hero config={config} />
      <About config={config} />
      <Features config={config} />
      <Instructors config={config} />
      <Benefits config={config} />
      <TargetAudience config={config} />
      <LegalUpdates config={config} />
      <Testimonials config={config} />
      <RegistrationForm config={config} />
      <Contact config={config} />
      <Footer config={config} />
    </div>
  );
}

export default App;
