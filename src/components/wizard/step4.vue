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
    <h3>Sección 4: Cierre</h3>
    <div class="form-group">
      <label for="details">¿Hay algo más que debamos saber sobre tu evento?</label>
      <textarea id="details" v-model="data.details" placeholder="Ej: temática, colores, alergias, etc."></textarea>
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

  textarea {
    width: 100%;
    min-height: 120px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: $border-radius-main;
    font-size: 16px;
    font-family: $primary-font;
    box-sizing: border-box;
    resize: vertical;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus {
      outline: none;
      border-color: $NICOLE-PURPLE;
      box-shadow: 0 0 0 3px rgba($NICOLE-PURPLE, 0.2);
    }
  }
}
</style>