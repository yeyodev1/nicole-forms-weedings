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
    <h3>Sección 2: Detalles del Evento</h3>
    <div class="form-group">
      <label for="event-date">Fecha de tu Boda *</label>
      <input type="date" id="event-date" v-model="data.date" required>
      <p class="helper-text">Si no es exacta, puedes poner una fecha aproximada.</p>
    </div>
    <div class="form-group">
      <label>Número aproximado de invitados *</label>
      <div class="options-group">
        <div class="option">
          <input type="radio" id="guests-1" value="Menos de 50" v-model="data.guests">
          <label for="guests-1">Menos de 50</label>
        </div>
        <div class="option">
          <input type="radio" id="guests-2" value="51-100" v-model="data.guests">
          <label for="guests-2">51 - 100</label>
        </div>
        <div class="option">
          <input type="radio" id="guests-3" value="101-150" v-model="data.guests">
          <label for="guests-3">101 - 150</label>
        </div>
        <div class="option">
          <input type="radio" id="guests-4" value="Más de 150" v-model="data.guests">
          <label for="guests-4">Más de 150</label>
        </div>
      </div>
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

  input[type="date"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: $border-radius-main;
    font-size: 16px;
    font-family: $primary-font;
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

.options-group {
  .option {
    display: flex;
    align-items: center;
    background-color: lighten($NICOLE-ORANGE-LIGHT, 2%);
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: $border-radius-main;
    margin-bottom: 10px;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;

    &:hover {
      border-color: darken($NICOLE-PURPLE, 10%);
    }

    input[type="radio"] {
      margin-right: 12px;
      width: 18px;
      height: 18px;
      accent-color: $NICOLE-PURPLE;
    }

    label {
      margin: 0;
      font-weight: 500;
      color: $text-color;
      cursor: pointer;
    }
  }
}
</style>