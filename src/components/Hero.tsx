import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'rgba(255,255,255,0.07)\'/%3E%3C/svg%3E')] opacity-60"></div>
      </div>

      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-8 animate-pulse">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Impulsado por IA • Todo en Uno
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 mb-8 leading-tight">
                Trabajo optimizado y automatizado
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Herramientas de IA para encontrar y convertir leads. Use la inteligencia artificial para trabajar 2 veces más rápido.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <a 
                  href="https://app.mikatsu.es/register" 
                  className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 flex items-center justify-center"
                >
                  Comenzar Prueba Gratuita
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#demo" 
                  className="flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-medium py-4 px-8 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm border border-white/10"
                >
                  <Play size={20} className="mr-2" /> Ver Demo
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-2 backdrop-blur-xl border border-white/10 shadow-2xl transform hover:-rotate-2 transition-transform duration-500">
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg px-4 py-2 shadow-lg">
                  <div className="font-bold text-white text-sm">Nuevo: SEO Writer</div>
                </div>
                
                <img 
                  src="https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Mikatsu Dashboard" 
                  className="rounded-xl w-full shadow-2xl"
                />
                
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg p-3 shadow-lg">
                  <div className="font-bold text-white text-sm">Impulsado por IA</div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">2,500+ empresas confían en nosotros</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24">
            <p className="text-blue-200 text-center mb-10 text-sm uppercase tracking-wider font-medium">
              Utilizado y confiado por empresas líderes
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center">
              {[1, 2, 3, 4, 5, 6].map(index => (
                <div key={index} className="h-12 w-32 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;