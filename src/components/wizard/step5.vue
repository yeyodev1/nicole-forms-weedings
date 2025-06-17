<template>
  <div class="success-container">
    <svg class="success-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
    <h3>¡Todo listo!</h3>
    <p>Hemos recibido tu solicitud correctamente. Nos pondremos en contacto contigo a la brevedad con tu cotización y más detalles.</p>
    <p>¡Gracias por considerarnos para tu gran día!</p>
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
</style>