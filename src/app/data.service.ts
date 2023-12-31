import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Datos de la barra de navegación
  navbarData = {
    brand: 'EcoMoon',
    links: [
      { text: 'Inicio', url: '#' },
      { text: 'Caracteristicas Destacadas', url: '#' },
      { text: 'Sobre Nosotros', url: '#' },
      { text: 'Contacto', url: '#' }
    ]
  };

  // Datos de la sección de bienvenida
  welcomeData = {
    title: 'Bienvenido a EcoMoon',
    description: 'Tu plataforma de agricultura local y sostenible'
  };

  // Datos de la ventana modal
  modalData = {
    title: 'Características Destacadas',
    features: [
      'Compra productos frescos directamente de agricultores locales.',
      'Apoya la sostenibilidad y la reducción de la huella de carbono.',
      'Interfaz de usuario fácil de usar para una experiencia sin complicaciones.',
      'Comunicación directa con los productores para obtener información detallada sobre los productos.',
      'Pago en línea seguro para mayor comodidad.'
    ]
  };

  contactData = {
    correo: 'info@ecomoon.com',
    redesSociales: '@EcoMoon'
  };

  constructor() {}

  // Puedes definir métodos para acceder a estos datos si es necesario.
}
