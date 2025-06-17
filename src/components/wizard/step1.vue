<script setup>
import { computed } from 'vue';
const props = defineProps({ modelValue: Object });
const emit = defineEmits(['update:modelValue']);
const data = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<template>
  <div>
    <h3>Sección 1: Datos de Contacto</h3>
    <div class="form-group">
      <label for="name">Nombre y Apellido *</label>
      <input type="text" id="name" v-model="data.name" placeholder="Ej: Ana Pérez" required>
    </div>
    <div class="form-group">
      <label for="email">Correo Electrónico *</label>
      <input type="email" id="email" v-model="data.email" placeholder="ejemplo@correo.com" required>
    </div>
    <div class="form-group">
      <label for="whatsapp">Número de WhatsApp *</label>
      <input type="tel" id="whatsapp" v-model="data.whatsapp" placeholder="Ej: 0991234567" required>
      <p class="helper-text">Para un contacto más ágil y enviarte detalles.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

h3 {
  margin-bottom: 25px;
  color: darken($NICOLE-PURPLE, 15%);
  font-weight: 600;
}

.form-group {
  margin-bottom: 24px;

  label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    color: darken($NICOLE-PURPLE, 5%);
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: $border-radius-main; // Usando tu variable global
    font-size: 16px;
    font-family: $primary-font; // Usando tu variable global
    box-sizing: border-box;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus {
      outline: none;
      border-color: $NICOLE-PURPLE;
      box-shadow: 0 0 0 3px rgba($NICOLE-PURPLE, 0.2);
    }
  }

  .helper-text {
    font-size: 13px;
    color: #666;
    margin-top: 4px;
  }
}
</style>