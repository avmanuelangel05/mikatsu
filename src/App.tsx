import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FeatureSection from './components/FeatureSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

import { featuresData, emailSectionData, socialSectionData, enrichmentSectionData, 
         emailFinderSectionData, extractorSectionData, domainsData, seoWriterData,
         reviewManagementData, chatbotData, socialProofData, emailApiData } from './data/featureData';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Navbar />
      <Hero />
      <Features />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
        <FeatureSection 
          title="Automatice su Alcance con Secuencias Inteligentes de Email"
          subtitle="Herramienta de Campaña de Secuencia (Cadencia) / Newsletter Impulsada por IA"
          data={emailSectionData}
          imageUrl="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          isImageRight={false}
        />
        
        <FeatureSection 
          title="Encuentre Emails B2B desde Redes Sociales en Segundos"
          subtitle="Extractor de Emails B2B desde Redes Sociales con IA"
          data={socialSectionData}
          imageUrl="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          isImageRight={true}
        />
        
        <FeatureSection 
          title="15M+ empresas y 700M+ contactos a su alcance"
          subtitle="Software de Enriquecimiento de Datos para Encontrar Emails"
          data={enrichmentSectionData}
          imageUrl="https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          isImageRight={false}
        />

        <FeatureSection 
          title="Encuentre Cualquier Email con Solo un Nombre y Compañía"
          subtitle="Búsqueda de Emails con Nombre, Apellido y Nombre de Compañía"
          data={emailFinderSectionData}
          imageUrl="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          isImageRight={true}
        />

        <FeatureSection 
          title="Extraiga Toda la Información de Contacto de Cualquier Sitio Web"
          subtitle="Extractor de Email, Teléfono y Redes Sociales"
          data={extractorSectionData}
          imageUrl="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          isImageRight={false}
        />

        <FeatureSection 
          title="Obtenga Nuevos Leads de Dominios Recién Registrados"
          subtitle="Dominios Registrados Diariamente con Información de Leads"
          data={domainsData}
          imageUrl="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          isImageRight={true}
        />

        <FeatureSection 
          title="Genere Contenido SEO que se Posiciona"
          subtitle="Generador de Artículos Optimizados para SEO con IA"
          data={seoWriterData}
          imageUrl="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          isImageRight={false}
          comingSoon={true}
        />

        <FeatureSection 
          title="Obtenga Más Reseñas Online Automáticamente"
          subtitle="Gestión de Reseñas Online para Aumentar su Calificación"
          data={reviewManagementData}
          imageUrl="https://images.pexels.com/photos/7709452/pexels-photo-7709452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          isImageRight={true}
        />

        <FeatureSection 
          title="Convierta Visitantes con un Chatbot IA"
          subtitle="Solución de Chatbot para Capturar y Convertir Visitantes en Leads"
          data={chatbotData}
          imageUrl="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          isImageRight={false}
        />

        <FeatureSection 
          title="Aumente las Conversiones con Prueba Social en Tiempo Real"
          subtitle="Herramienta de Widget de Notificación de Prueba Social"
          data={socialProofData}
          imageUrl="https://images.pexels.com/photos/6804605/pexels-photo-6804605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          isImageRight={true}
        />

        <FeatureSection 
          title="Detenga Emails Falsos Desde la Fuente"
          subtitle="API para Prevenir el Registro de Emails Falsos en su Servicio"
          data={emailApiData}
          imageUrl="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          isImageRight={false}
        />
      </div>

      <Testimonials />
      <Pricing />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;