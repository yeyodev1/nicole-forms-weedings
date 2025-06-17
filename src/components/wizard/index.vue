<script setup>
import { ref, reactive, computed } from 'vue';
import Step1 from './step1.vue';
import Step2 from './step2.vue';
import Step3 from './step3.vue';
import Step4 from './step4.vue';
import Step5 from './step5.vue';

const TOTAL_STEPS = 4; // Sin contar el de éxito
const currentStep = ref(1);

// Objeto reactivo para almacenar todos los datos del formulario.
// Esta es la "única fuente de verdad".
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
  preferences: {
    type: [], // Array para selecciones múltiples
    products: [], // Array para selecciones múltiples
    otherProductDetails: '',
  },
  closing: {
    details: '',
  },
});

const wizardTitle = computed(() => {
  if (currentStep.value <= TOTAL_STEPS) {
    return "Celebra tu Boda con Luis Reyes";
  }
  return "¡Formulario Enviado!";
});

const wizardDescription = computed(() => {
  if (currentStep.value <= TOTAL_STEPS) {
    return "¡Hola! Gracias por visitarnos. Completa estos datos para recibir una cotización especial y participa por un premio sorpresa.";
  }
  return `Gracias, ${formData.contact.name}. Hemos recibido tus datos y te contactaremos pronto.`;
});

// Navegación
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

const submitForm = () => {
  // Aquí iría la lógica para enviar los datos a un servidor/API
  console.log('Formulario enviado:', JSON.parse(JSON.stringify(formData)));
  currentStep.value++; // Avanza al paso de "Éxito"
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
      <Step3 v-if="currentStep === 3" v-model="formData.preferences" />
      <Step4 v-if="currentStep === 4" v-model="formData.closing" />
      <Step5 v-if="currentStep > TOTAL_STEPS" />
    </div>

    <div class="wizard-nav" v-if="currentStep <= TOTAL_STEPS">
      <button class="btn-secondary" @click="prevStep" :disabled="currentStep === 1">
        Atrás
      </button>
      
      <button class="btn-primary" @click="nextStep" v-if="currentStep < TOTAL_STEPS">
        Siguiente
      </button>

      <button class="btn-primary" @click="submitForm" v-if="currentStep === TOTAL_STEPS">
        Enviar y Finalizar
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