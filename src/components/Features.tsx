import React from 'react';
import { Cpu, Mails, Users, Search, Shield, LineChart } from 'lucide-react';

const Features = () => {
  const featuresData = [
    {
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      title: 'Email & CRM',
      description: 'Comunicación automatizada y gestión de relaciones de clientes integradas en una sola plataforma.'
    },
    {
      icon: <Mails className="h-6 w-6 text-purple-600" />,
      title: 'Social Email Scraper',
      description: 'Extraiga emails de contactos profesionales desde plataformas de redes sociales B2B.'
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: 'Verify Emails & Lists',
      description: 'Verifique la validez de emails y listas para mejorar las tasas de entrega y conversión.'
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: 'Contact Builder',
      description: 'Construya bases de datos de contactos enriquecidos con información precisa y actualizada.'
    },
    {
      icon: <Search className="h-6 w-6 text-amber-600" />,
      title: 'Email Extractor',
      description: 'Extraiga emails de cualquier sitio web o página para ampliar su base de contactos.'
    },
    {
      icon: <LineChart className="h-6 w-6 text-rose-600" />,
      title: 'SEO Writer',
      description: 'Genere contenido optimizado para SEO que mejore su posicionamiento en buscadores.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Todo lo que Necesita en Una Solución
          </h2>
          <p className="text-xl text-slate-600">
            Mikatsu integra todas las herramientas esenciales para el crecimiento de su negocio en una única plataforma potenciada por IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="rounded-lg p-3 inline-block bg-slate-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#ver-todos" 
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            Ver todos los productos
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;