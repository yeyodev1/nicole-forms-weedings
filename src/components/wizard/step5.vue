<script setup>
/**
 * Define la función que se ejecutará al hacer clic en el botón.
 * window.location.reload() es el comando estándar del navegador para recargar la página,
 * lo que efectivamente reinicia el estado del formulario.
 */
const refreshPage = () => {
  window.location.reload();
};
</script>

<template>
  <div class="success-container">
    <svg class="success-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
    <h3>¡Todo listo!</h3>
    <p>Hemos recibido tu solicitud correctamente. Nos pondremos en contacto contigo a la brevedad con tu cotización y más detalles.</p>
    <p>¡Gracias por considerarnos para tu gran día!</p>

    <button class="btn-refresh" @click="refreshPage">
      Llenar Otra Solicitud
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.success-container {
  text-align: center;
  padding: 40px 20px;
}

.success-icon {
  width: 80px;
  height: 80px;
  fill: $NICOLE-PURPLE;
  margin-bottom: 20px;
}

h3 {
  color: $NICOLE-PURPLE;
  font-size: 24px;
}

p {
  color: #555;
  line-height: 1.6;
}

// Estilos para el nuevo botón, consistentes con el resto del wizard
.btn-refresh {
  margin-top: 30px; // Añade espacio sobre el botón
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: $NICOLE-PURPLE; // Usa tu variable de color principal
  color: $white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken($NICOLE-PURPLE, 10%);
  }
}
</style>