<script setup>
import { ref, reactive, computed } from 'vue';
import Step1 from './step1.vue';
import Step2 from './step2.vue';
import Step4 from './step4.vue';
import Step5 from './step5.vue';
import weddingService from '../services/weedingService';

// 1. Se importa el servicio para conectar con el backend


const TOTAL_STEPS = 3;
const currentStep = ref(1);

// 2. Se añade una variable para controlar el estado de "cargando"
const isLoading = ref(false);

const formData = reactive({
  contact: {
    name: '',
    email: '',
    whatsapp: '',
  },
  event: {
    date: '',
    guests: null,
  },
  closing: {
    details: '',
  },
});

const wizardTitle = computed(() => {
  if (currentStep.value <= TOTAL_STEPS) {
    return "Celebra tu Boda con Nicole Pastry Arts";
  }
  return "¡Formulario Enviado!";
});

const wizardDescription = computed(() => {
  if (currentStep.value <= TOTAL_STEPS) {
    return "¡Hola! Gracias por visitarnos. Completa estos datos para recibir una cotización especial y participa por un premio sorpresa.";
  }
  return `Gracias, ${formData.contact.name}. Hemos recibido tus datos y te contactaremos pronto.`;
});


const nextStep = () => {
  if (currentStep.value < TOTAL_STEPS) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

// 3. La función submitForm ahora es asíncrona y usa el servicio
const submitForm = async () => {
  if (isLoading.value) return; // Previene múltiples envíos si ya está cargando

  isLoading.value = true; // El envío comienza, activamos el estado de carga

  try {
    // Llamamos al método de nuestro servicio, pasándole los datos del formulario
    await weddingService.submitInquiry(formData);

    console.log('Formulario enviado exitosamente al backend.');

    // Si la petición fue exitosa, avanzamos al paso de agradecimiento
    currentStep.value++;

  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    // Mostramos un mensaje de error simple al usuario
    alert('Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo más tarde.');

  } finally {
    // Ya sea que falle o tenga éxito, desactivamos el estado de carga
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="wizard-container">
    <div class="wizard-header">
      <h2>{{ wizardTitle }}</h2>
      <p>{{ wizardDescription }}</p>
    </div>

    <div class="progress-bar" v-if="currentStep <= TOTAL_STEPS">
      <div class="progress-bar-fill" :style="{ width: ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100 + '%' }"></div>
    </div>

    <div class="wizard-body">
      <Step1 v-if="currentStep === 1" v-model="formData.contact" />
      <Step2 v-if="currentStep === 2" v-model="formData.event" />
      <Step4 v-if="currentStep === 3" v-model="formData.closing" />
      <Step5 v-if="currentStep > TOTAL_STEPS" />
    </div>

    <div class="wizard-nav" v-if="currentStep <= TOTAL_STEPS">
      <button class="btn-secondary" @click="prevStep" :disabled="currentStep === 1">
        Atrás
      </button>
      
      <button class="btn-primary" @click="nextStep" v-if="currentStep < TOTAL_STEPS">
        Siguiente
      </button>

      <button class="btn-primary" @click="submitForm" v-if="currentStep === TOTAL_STEPS" :disabled="isLoading">
        <span v-if="isLoading">Enviando...</span>
        <span v-else>Enviar y Finalizar</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/styles/index.scss' as *;

.wizard-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  background-color: $white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
}

.wizard-header {
  text-align: center;
  margin-bottom: 30px;

  h2 {
    color: $NICOLE-PURPLE;
    margin-bottom: 10px;
  }

  p {
    color: #555;
    font-size: 16px;
    line-height: 1.5;
  }
}

.progress-bar {
  background-color: $NICOLE-ORANGE-LIGHT;
  height: 8px;
  border-radius: 4px;
  margin-bottom: 30px;
  overflow: hidden;

  .progress-bar-fill {
    width: 0%;
    height: 100%;
    background-color: $NICOLE-PURPLE;
    transition: width 0.4s ease;
  }
}

.wizard-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  border-top: 1px solid #eee;
  padding-top: 20px;

  button {
    padding: 12px 28px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .btn-primary {
    background-color: $NICOLE-PURPLE;
    color: $white;

    &:hover:not(:disabled) {
      background-color: darken($NICOLE-PURPLE, 10%);
    }
  }

  .btn-secondary {
    background-color: #e0e0e0;
    color: #333;

    &:hover:not(:disabled) {
      background-color: #ccc;
    }
  }
}
</style>