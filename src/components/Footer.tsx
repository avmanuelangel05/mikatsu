import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-bold mb-4">Mikatsu</h2>
            <p className="text-slate-400 mb-6">
              Soluciones empresariales todo en uno impulsadas por IA para encontrar y convertir leads, optimizar y automatizar su trabajo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <ul className="space-y-2">
              <li><a href="#email-crm" className="text-slate-400 hover:text-white transition-colors">Email & CRM</a></li>
              <li><a href="#email-scraper" className="text-slate-400 hover:text-white transition-colors">Social Email Scraper</a></li>
              <li><a href="#verify-emails" className="text-slate-400 hover:text-white transition-colors">Verify Emails</a></li>
              <li><a href="#contact-builder" className="text-slate-400 hover:text-white transition-colors">Contact Builder</a></li>
              <li><a href="#email-extractor" className="text-slate-400 hover:text-white transition-colors">Email Extractor</a></li>
              <li><a href="#chatbot" className="text-slate-400 hover:text-white transition-colors">AI Chatbot</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#blog" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#guias" className="text-slate-400 hover:text-white transition-colors">Guías</a></li>
              <li><a href="#webinars" className="text-slate-400 hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#casos-exito" className="text-slate-400 hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#documentacion" className="text-slate-400 hover:text-white transition-colors">Documentación API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Compañía</h3>
            <ul className="space-y-2">
              <li><a href="#nosotros" className="text-slate-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#carreras" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contacto" className="text-slate-400 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#partners" className="text-slate-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#legal" className="text-slate-400 hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-slate-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Mikatsu. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#terminos" className="text-sm text-slate-500 hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a href="#privacidad" className="text-sm text-slate-500 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#cookies" className="text-sm text-slate-500 hover:text-white transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;