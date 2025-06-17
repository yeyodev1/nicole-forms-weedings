<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="../../assets/logos/nicole-logo.svg" alt="" srcset="" class="footer-logo-img">
      </div>
      <div class="footer-copy">
        <p>&copy; {{ currentYear }} Nicole Pastry Arts. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
// Importa las variables de color globales
@use '@/styles/index.scss' as *;

.main-footer {
  background-color: $NICOLE-ORANGE-LIGHT;
  padding: 20px 30px;
  margin-top: auto; // Empuja el footer al final de la página si el contenido es corto
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05); // Sombra superior sutil
}

.footer-content {
  max-width: 1200px; // Limita el ancho del contenido para pantallas grandes
  margin: 0 auto; // Centra el contenido
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; // Permite que los elementos se ajusten en pantallas pequeñas
  gap: 20px; // Espacio entre elementos si se apilan
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 18px;
  color: $NICOLE-PURPLE;

  &-img {
    height: 30px;
    width: auto;
  }
}

.footer-copy {
  p {
    margin: 0;
    font-size: 14px;
    color: darken($NICOLE-PURPLE, 10%);
    text-align: right;
  }
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }

  .footer-copy p {
    text-align: center;
  }
}
</style>