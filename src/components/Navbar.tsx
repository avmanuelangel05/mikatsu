import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className={`text-2xl font-bold ${scrolled ? 'text-blue-700' : 'text-white'}`}>
                Mikatsu
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks scrolled={scrolled} />
            <div className="flex items-center space-x-4">
              <a 
                href="#iniciar-sesion" 
                className={`font-medium text-sm ${
                  scrolled ? 'text-slate-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
                }`}
              >
                Iniciar Sesión
              </a>
              <a 
                href="#registro" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105"
              >
                Empezar Gratis
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-800' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#productos" className="block px-3 py-2 text-slate-700 hover:text-blue-700 font-medium">
              Productos
            </a>
            <a href="#precios" className="block px-3 py-2 text-slate-700 hover:text-blue-700 font-medium">
              Precios
            </a>
            <a href="#nosotros" className="block px-3 py-2 text-slate-700 hover:text-blue-700 font-medium">
              Nosotros
            </a>
            <a href="#blog" className="block px-3 py-2 text-slate-700 hover:text-blue-700 font-medium">
              Blog
            </a>
            <a href="#iniciar-sesion" className="block px-3 py-2 text-slate-700 hover:text-blue-700 font-medium">
              Iniciar Sesión
            </a>
            <a 
              href="#registro" 
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-all"
            >
              Empezar Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ scrolled }: { scrolled: boolean }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };
  
  return (
    <div className="flex items-center space-x-8">
      <div className="relative group">
        <button 
          onClick={() => toggleDropdown('productos')}
          className={`flex items-center font-medium text-sm ${
            scrolled ? 'text-slate-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
          }`}
        >
          Productos <ChevronDown size={16} className="ml-1" />
        </button>
        {activeDropdown === 'productos' && (
          <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-4 z-10">
            <div className="grid gap-2">
              <a href="#email-crm" className="px-3 py-2 hover:bg-slate-100 rounded-md">
                <span className="font-medium text-slate-800">Email & CRM</span>
                <p className="text-xs text-slate-500">Automatice y optimice su comunicación</p>
              </a>
              <a href="#email-scraper" className="px-3 py-2 hover:bg-slate-100 rounded-md">
                <span className="font-medium text-slate-800">Social Email Scraper</span>
                <p className="text-xs text-slate-500">Extraiga emails de redes sociales</p>
              </a>
              <a href="#verify-emails" className="px-3 py-2 hover:bg-slate-100 rounded-md">
                <span className="font-medium text-slate-800">Verificador de Emails</span>
                <p className="text-xs text-slate-500">Mantenga su lista de emails limpia</p>
              </a>
            </div>
          </div>
        )}
      </div>
      
      <a 
        href="#precios" 
        className={`font-medium text-sm ${
          scrolled ? 'text-slate-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
        }`}
      >
        Precios
      </a>
      
      <a 
        href="#nosotros" 
        className={`font-medium text-sm ${
          scrolled ? 'text-slate-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
        }`}
      >
        Nosotros
      </a>
      
      <a 
        href="#blog" 
        className={`font-medium text-sm ${
          scrolled ? 'text-slate-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
        }`}
      >
        Blog
      </a>
    </div>
  );
};

export default Navbar;