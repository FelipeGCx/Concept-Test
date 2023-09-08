<template>
  <div class="flex flex-row gap-4 mb-12">
    <img src="/code.webp" class="mx-auto w-60 mb-4" />

    <h1 class="title">Prueba de <br /><span>concepto</span></h1>
  </div>

  <p>
    La finalidad de esta prueba es la de evaluar de forma rápida tu nivel
    técnico relacionado con el proyecto objetivo.
  </p>

  <p>
    El objetivo trata sobre crear un componente textarea con
    <span class="badge green">Vue3</span> y
    <span class="badge blue">Typescript</span>
    el cual pueda contener distintos valores según el idioma seleccionado.
  </p>

  <div class="example">
    <img src="/final_component.gif" />
  </div>

  <hr class="border-2 border-blue-700 border-opacity-20 border-dashed my-10" />

  <section>
    <h2 class="subtitle">Anotaciones</h2>

    <p>
      El componente puede estar desarrollado tanto con
      <span class="badge gray">Options API</span> o
      <span class="badge gray">Composition API</span> y no deberá utilizar otros
      frameworks como Bootstrap, Vuetify o similares.
    </p>

    <p>
      Puedes instalar otras dependencias si lo consideras necesario pero en
      principio no debería hacer falta.
    </p>

    <p>
      El componente debe disponer de un <strong>v-model</strong> que almacene la
      información del textarea en cada idioma.
    </p>

    <p>
      El tipo de idioma objetivo no es relevante. Se precisa que al menos
      existan 3 distintos. Puedes usar los mismos que en el ejemplo.
    </p>
  </section>

  <section>
    <h2 class="subtitle">Se valorará</h2>

    <ul>
      <li>Calidad del código</li>
      <li>Tipado del componente</li>
      <li>Estilos aplicados</li>
      <li>Conocimiento de SASS</li>
      <li>Uso de TailwindCSS</li>
    </ul>
  </section>

  <hr class="border-2 border-blue-700 border-opacity-20 border-dashed my-10" />

  <section>
    <h2 class="subtitle">¿Como empezar?</h2>

    <p>
      Crea un fork de este proyecto. Una vez listo crea tu componente en la
      carpeta correspondiente para poder empezar a trabajar. Este proyecto
      dispone de todo lo necesario para poder desarrollar la tarea.
    </p>

    <p>
      Una vez completada la prueba facilitanos la url del proyecto para que
      podamos analizarlo.
    </p>

    <p>Nos vemos en un rato 😁</p>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const count = ref(0);

    return {};
  },
});
</script>

<style scoped lang="scss">
.example {
  @apply text-center p-8;

  img {
    box-shadow: 0px 0px 20px #97e349;

    @apply rounded-xl mx-auto;
  }
}

.badge {
  @apply px-2 py-0.5 text-xs rounded-full;

  &.gray {
    @apply bg-gray-300 bg-opacity-20 text-gray-300;
  }

  &.green {
    @apply bg-secondary bg-opacity-20 text-secondary;
  }

  &.blue {
    @apply bg-blue-700 bg-opacity-20 text-blue-700;
  }
}

.title {
  @apply text-primary text-8xl font-bold uppercase;

  span {
    @apply text-secondary;
  }
}

.subtitle {
  @apply text-2xl font-bold mb-2 text-secondary font-consola uppercase;
}

ul {
  @apply list-disc mb-4 pl-4 font-consola;
}

section {
  @apply mb-8;
}

P {
  @apply mb-4 font-consola;
}
</style>
