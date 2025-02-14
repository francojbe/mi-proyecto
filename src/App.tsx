import React, { useState } from 'react';
import { 
  Menu, X, Shield, Phone, Search, 
  Building2, Scale, Briefcase, 
  BadgeCheck, ArrowRight, Globe2,
  Clock, Users, DollarSign,
  MessageCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showChatTooltip, setShowChatTooltip] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    {
      icon: <Search className="h-12 w-12 text-red-600" />,
      title: "Localización de Activos",
      description: "Utilizamos tecnología avanzada y una red global de investigadores para localizar activos ocultos o transferidos ilegalmente."
    },
    {
      icon: <Scale className="h-12 w-12 text-red-600" />,
      title: "Asesoría Legal",
      description: "Equipo de abogados especializados en derecho internacional y recuperación de activos."
    },
    {
      icon: <Building2 className="h-12 w-12 text-red-600" />,
      title: "Investigación Corporativa",
      description: "Análisis detallado de estructuras corporativas y transacciones financieras sospechosas."
    }
  ];

  const processSteps = [
    {
      icon: <BadgeCheck className="h-8 w-8 text-red-600" />,
      title: "Evaluación Inicial",
      description: "Análisis completo de su caso y evaluación de viabilidad"
    },
    {
      icon: <Search className="h-8 w-8 text-red-600" />,
      title: "Investigación",
      description: "Proceso exhaustivo de localización y documentación"
    },
    {
      icon: <Scale className="h-8 w-8 text-red-600" />,
      title: "Acción Legal",
      description: "Implementación de estrategias legales para la recuperación"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-red-600" />,
      title: "Recuperación",
      description: "Aseguramiento y recuperación de los activos"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios%20de%20recuperación%20de%20activos.', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img src="https://i.pinimg.com/474x/6c/09/0a/6c090a791c16ec09154a2b157ccf77f1.jpg" 
     alt="Escudo" 
     className="h-10 w-10" />

              <span className="ml-3 text-xl font-bold text-gray-900">Franco Recupera</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-200">
                  Contactar
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full text-left bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors duration-200">
                Contactar
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div 
        id="inicio"
        className="relative pt-20 bg-gray-900"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Recuperación de Activos a Nivel Nacional
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expertos en localización y recuperación de activos con presencia nacional y más de 20 años de experiencia.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center">
                Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200">
                Más Información
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Globe2 className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-gray-300">Todo el territorio Nacional</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-gray-300">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-gray-300">Casos Exitosos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="servicios" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios de Recuperación
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales para la recuperación de activos, adaptadas a las necesidades específicas de cada caso.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div id="proceso" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proceso de Recuperación
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Metodología probada para maximizar las posibilidades de recuperación de sus activos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contacto" className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Necesita recuperar sus activos?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contáctenos hoy para una consulta confidencial y gratuita
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200">
              <Briefcase className="mr-2 h-5 w-5 inline" />
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div 
        className="fixed bottom-8 right-8 z-50"
        onMouseEnter={() => setShowChatTooltip(true)}
        onMouseLeave={() => setShowChatTooltip(false)}
      >
        {showChatTooltip && (
          <div className="absolute bottom-16 right-0 bg-white px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap">
            ¡Chatea con nosotros!
          </div>
        )}
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default App;