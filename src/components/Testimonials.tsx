import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Mikatsu ha transformado por completo cómo encontramos y convertimos leads. El sistema de IA realmente entiende nuestro negocio.",
      author: "María Rodríguez",
      position: "CMO, TechSolutions",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      quote: "La cantidad de tiempo que ahorramos con las herramientas de automatización es increíble. Hemos aumentado nuestras conversiones en un 40%.",
      author: "Carlos Mendoza",
      position: "CEO, MarketingPro",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      quote: "El extractor de emails nos ha permitido construir una base de datos de calidad en tiempo récord. El soporte también es excelente.",
      author: "Laura Sánchez",
      position: "Director de Ventas, GrowthCorp",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-slate-600">
            Miles de empresas confían en Mikatsu para acelerar su crecimiento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill={i < testimonial.rating ? "#FFC107" : "none"} 
                    stroke={i < testimonial.rating ? "#FFC107" : "#CBD5E1"}
                    className="mr-1" 
                  />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-slate-900">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                ¿Listo para ver resultados?
              </h3>
              <p className="text-slate-700">
                Únase a más de 10,000 empresas que ya utilizan Mikatsu
              </p>
            </div>
            <a 
              href="#registro" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Comenzar Prueba Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;