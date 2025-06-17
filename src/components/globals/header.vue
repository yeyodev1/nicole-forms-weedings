<script setup>
// No se necesita lógica de JavaScript para este componente estático.
// <script setup> es la sintaxis recomendada para Composition API en Vue 3.
</script>

<template>
  <header class="main-header">
    <div class="logo">
      <img 
        src="../../assets/logos/nicole-logo.svg"
        alt="" 
        srcset=""
        class="logo-img">
    </div>
  </header>
</template>

<style lang="scss">
@use '@/styles/index.scss' as *;

.main-header {
  background-color: $NICOLE-ORANGE-LIGHT;
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

// Estilos para el contenedor del logo
.logo {
  display: flex;
  align-items: center;
  gap: 10px;

  .logo-text {
    color: $NICOLE-PURPLE;
    font-size: 24px;
    font-weight: bold;
  }

  &-img {
    height: 120px;
    width: 100%;
  }
}

// Estilos para la navegación
.main-nav {
  display: flex;
  gap: 25px; // Espacio entre los enlaces

  a {
    color: $NICOLE-PURPLE;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    position: relative;
    padding-bottom: 5px;

    // Efecto de línea inferior al pasar el cursor
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $NICOLE-PURPLE;
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
}
</style>