<script setup lang="ts"></script>
<template>
  <article>
    <section>
      <h1>propuesta solución prueba concepto</h1>
      <h2>solucion realizada por felipe gómez</h2>
      <p>
        para esta prueba concepto se decide realizar el textarea tal cual como
        se solicitaba con un par de adaptaciónes añadiendo traducción a la
        descripción y un placeholder, se decide usar
        <a href="https://vuejs.org/guide/introduction.html#composition-api"
          >Composition API</a
        >
        en lugar de
        <a href="https://vuejs.org/guide/introduction.html#options-api"
          >Options API</a
        >, tambien debido al desconocimiento y no uso de la tecnología
        <a href="https://tailwindcss.com">Tailwind</a> se tomo la desición de
        realizar los estilos en <a href="https://sass-lang.com">SCSS</a> en un
        principio e intentar realizarlos con tailwind posteriormente con la
        documentación e implementando la aplicación de esta tecnología como esta
        en el archivo <span>HelloWorld.vue</span> usando la palabra reservada
        @apply, se dejan los dos ejemplos en la correspondientes por separado en
        el archivo <span>TextAreaMultilanguage.vue</span>, se debe descomentar
        y comentar el style que se quiera visualizar con el fin de evitar
        sobreescrituras.
      </p>
    </section>
  </article>
</template>
<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 70vw;
  h1,
  h2,
  p::first-letter {
    text-transform: capitalize;
  }
  a {
    color: $t40;
    font-weight: 600;
  }
  span {
    color: $s40;
    font-weight: 600;
  }
}
</style>
