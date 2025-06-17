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
    <h3>Sección 3: Preferencias de Dulces</h3>
    <div class="form-group">
      <label>Para tu boda, ¿qué tienes en mente?</label>
      <div class="options-group">
        <div class="option">
          <input type="checkbox" id="pref-table" value="Mesa de Dulces completa" v-model="data.type">
          <label for="pref-table">Una Mesa de Dulces completa y variada.</label>
        </div>
        <div class="option">
          <input type="checkbox" id="pref-specific" value="Bocaditos específicos" v-model="data.type">
          <label for="pref-specific">Solo ciertos tipos de bocaditos específicos.</label>
        </div>
        <div class="option">
          <input type="checkbox" id="pref-souvenirs" value="Recuerdos individuales" v-model="data.type">
          <label for="pref-souvenirs">Recuerdos dulces individuales para cada invitado.</label>
        </div>
        <div class="option">
          <input type="checkbox" id="pref-help" value="Necesito asesoría" v-model="data.type">
          <label for="pref-help">Aún no lo sé, ¡necesito asesoría!</label>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label>De nuestros bocaditos, ¿cuáles te gustaría cotizar?</label>
      <div class="options-group">
        <div class="option"><input type="checkbox" id="prod-brownies" value="Mini Brownies" v-model="data.products"><label for="prod-brownies">Mini Brownies</label></div>
        <div class="option"><input type="checkbox" id="prod-alfajores" value="Alfajores personalizados" v-model="data.products"><label for="prod-alfajores">Alfajores personalizados</label></div>
        <div class="option"><input type="checkbox" id="prod-shots" value="Shots de Tres Leches" v-model="data.products"><label for="prod-shots">Shots de Tres Leches</label></div>
        <div class="option"><input type="checkbox" id="prod-cheesecakes" value="Mini Cheesecakes" v-model="data.products"><label for="prod-cheesecakes">Mini Cheesecakes</label></div>
        <div class="option"><input type="checkbox" id="prod-trufas" value="Trufas de chocolate" v-model="data.products"><label for="prod-trufas">Trufas de chocolate</label></div>
        <div class="option"><input type="checkbox" id="prod-brochetas" value="Brochetas de frutas" v-model="data.products"><label for="prod-brochetas">Brochetas de frutas</label></div>
        <div class="option"><input type="checkbox" id="prod-otro" value="Otro" v-model="data.products"><label for="prod-otro">Otro</label></div>
      </div>
      <input class="other-input" v-if="data.products.includes('Otro')" type="text" v-model="data.otherProductDetails" placeholder="Por favor, especifica qué otro bocadito te interesa">
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

    input[type="checkbox"] {
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

.other-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: $border-radius-main;
  font-size: 16px;
  font-family: $primary-font;
  box-sizing: border-box;
  margin-top: 10px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: $NICOLE-PURPLE;
    box-shadow: 0 0 0 3px rgba($NICOLE-PURPLE, 0.2);
  }
}
</style>