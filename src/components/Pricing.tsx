import React, { useState } from 'react';
import { Check, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Trial",
      description: "Prueba todas las funcionalidades gratis",
      monthlyPrice: "0",
      annualPrice: "0",
      period: "prueba gratuita",
      features: [
        "1 usuario",
        "200 Enriquecimientos",
        "200 Extracciones de email",
        "200 Búsquedas de email",
        "1 Chatbot activo",
        "20 Leads recolectados",
        "3,000 Emails para enviar",
        "1 Campaña activa",
        "5 Artículos SEO",
        "Soporte por email"
      ],
      isPopular: false,
      ctaText: "Comenzar Gratis",
      ctaLink: "https://app.mikatsu.es/register",
      highlight: "Prueba Gratuita"
    },
    {
      name: "Small",
      description: "Para pequeñas empresas y profesionales",
      monthlyPrice: "29",
      annualPrice: "290",
      period: isAnnual ? "año" : "mes",
      features: [
        "1 usuario",
        "2,000 Enriquecimientos",
        "2,000 Extracciones de email",
        "2,000 Búsquedas de email",
        "1 Chatbot activo",
        "500 Leads recolectados",
        "5,000 Emails para enviar",
        "5 Campañas activas",
        "Artículos SEO ilimitados",
        "Soporte prioritario"
      ],
      isPopular: false,
      ctaText: "Elegir Plan Small",
      ctaLink: "https://app.mikatsu.es/register",
      highlight: "Más Económico"
    },
    {
      name: "Starter",
      description: "Para equipos pequeños en crecimiento",
      monthlyPrice: "49",
      annualPrice: "490",
      period: isAnnual ? "año" : "mes",
      features: [
        "2 usuarios",
        "2,000 Enriquecimientos",
        "2,000 Extracciones de email",
        "2,000 Búsquedas de email",
        "1 Chatbot activo",
        "500 Leads recolectados",
        "5,000 Emails para enviar",
        "5 Campañas activas",
        "Artículos SEO ilimitados",
        "Soporte prioritario 24/7"
      ],
      isPopular: true,
      ctaText: "Elegir Plan Starter",
      ctaLink: "https://app.mikatsu.es/register",
      highlight: "Más Popular"
    },
    {
      name: "Unlimited",
      description: "Para empresas que necesitan escalar",
      monthlyPrice: "99",
      annualPrice: "880",
      period: isAnnual ? "año" : "mes",
      features: [
        "Usuarios ilimitados",
        "Enriquecimientos ilimitados",
        "Extracciones ilimitadas",
        "Búsquedas ilimitadas",
        "Chatbots ilimitados",
        "Leads ilimitados",
        "Emails ilimitados",
        "Campañas ilimitadas",
        "Artículos SEO ilimitados",
        "Gerente de cuenta dedicado"
      ],
      isPopular: false,
      ctaText: "Elegir Plan Unlimited",
      ctaLink: "https://app.mikatsu.es/register",
      highlight: "Todo Ilimitado"
    }
  ];

  return (
    <section id="precios" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Precios Transparentes
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Elija el Plan Perfecto para su Negocio
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Todos nuestros planes incluyen lo necesario para llevar su empresa al siguiente nivel
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="relative flex p-1 space-x-2 bg-white rounded-full shadow-lg border border-slate-200">
              <button
                className={`relative px-8 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                  !isAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:text-blue-600'
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Mensual
              </button>
              <button
                className={`relative px-8 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                  isAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:text-blue-600'
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Anual
                <span className="absolute -top-2 -right-2 px-3 py-1 text-xs font-semibold tracking-wide text-white bg-green-500 rounded-full shadow-lg">
                  Ahorre 20%
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl ${
                plan.isPopular 
                  ? 'bg-gradient-to-b from-blue-600 to-indigo-700 text-white shadow-2xl scale-105 border border-blue-400/20' 
                  : 'bg-white text-slate-900 shadow-xl hover:shadow-2xl border border-slate-200'
              } p-8 transition-all duration-300`}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className={`px-4 py-1 rounded-full text-sm font-semibold shadow-lg ${
                  plan.isPopular 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' 
                    : 'bg-gradient-to-r from-slate-800 to-slate-900 text-white'
                }`}>
                  {plan.highlight}
                </div>
              </div>
              
              <div className={`text-sm font-semibold ${plan.isPopular ? 'text-blue-200' : 'text-blue-600'} mb-4`}>
                {plan.name}
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$</span>
                  <span className="text-6xl font-bold">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-lg ml-2">/{plan.period}</span>
                </div>
                <p className={`mt-3 ${plan.isPopular ? 'text-blue-100' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.isPopular ? 'text-blue-200' : 'text-green-500'}`} />
                    <span className={plan.isPopular ? 'text-blue-100' : 'text-slate-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={plan.ctaLink}
                className={`flex items-center justify-center w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.ctaText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 shadow-2xl text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">
                  ¿Necesita un plan personalizado?
                </h3>
                <p className="text-blue-100">
                  Contáctenos para crear un plan a medida para su empresa
                </p>
              </div>
              <a 
                href="#contacto" 
                className="inline-flex items-center bg-white text-blue-600 font-medium px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Contactar con Ventas
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;