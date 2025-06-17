// src/services/weedingService.ts

import APIBase from './httBase'

// 1. Definimos una interfaz para asegurar que los datos que enviamos son correctos.
// Es una buena práctica mantener esto sincronizado con el backend.
export interface WeddingFormData {
  contact: { name: string; email: string; whatsapp: string }
  event: { date: string; guests: string | null }
  preferences: { type: string[]; products: string[]; otherProductDetails: string }
  closing: { details: string }
}

class WeedingService extends APIBase {
  constructor() {
    // Llama al constructor de la clase padre (APIBase)
    super()
  }

  /**
   * Envía los datos del formulario de bodas al backend.
   * @param formData Los datos recolectados del formulario.
   */
  public async submitInquiry(formData: WeddingFormData) {
    // Usamos el método `post` heredado de APIBase.
    // El primer argumento es el 'endpoint' de la API que quieres llamar.
    // El segundo argumento son los datos que quieres enviar.
    // La clase APIBase se encargará de añadir la URL base, los headers y hacer la petición.
    return this.post('client/weeding', formData)
  }
}

// Patrón Singleton: Creamos y exportamos una única instancia del servicio
// para que sea usada en toda la aplicación.
const weddingService = new WeedingService()
export default weddingService
