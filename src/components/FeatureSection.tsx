import React, { useEffect, useRef } from 'react';
import { Shield, CheckCircle } from 'lucide-react';

interface FeaturePoint {
  text: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  data: {
    tagline: string;
    points: FeaturePoint[];
  };
  imageUrl: string;
  isImageRight: boolean;
  comingSoon?: boolean;
}

const FeatureSection = ({ 
  title, 
  subtitle, 
  data, 
  imageUrl, 
  isImageRight,
  comingSoon = false
}: FeatureSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="opacity-0 transition-opacity duration-1000 ease-in-out"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isImageRight ? '' : 'lg:flex-row-reverse'}`}>
        <div className={`order-2 ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
          {comingSoon && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 mb-3">
              <Shield size={14} className="mr-1" /> Próximamente
            </div>
          )}
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-blue-600 font-medium mb-6">{subtitle}</p>
          <p className="text-lg text-slate-700 mb-6">{data.tagline}</p>
          
          <div className="space-y-4">
            {data.points.map((point, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-slate-700">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`order-1 ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-auto object-cover"
              style={{ aspectRatio: '16/9' }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;