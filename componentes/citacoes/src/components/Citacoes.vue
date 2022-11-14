<template>
  <div class="citacoes">
    <citacao class="mb-3">
      <h1 class="fw-bolder text-center" slot="autor">
        {{ citacoes[indice].autor }}
      </h1>
      <p class="text-center" slot="texto">{{ citacoes[indice].texto }}</p>
      <h6 class="text-center">{{ citacoes[indice].fonte }}</h6>
    </citacao>
    <span>
      <button @click="numero--">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </button>
      <button @click="numero++">
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </button>
    </span>
    <!-- {{ numero }} {{ indice }} -->
  </div>
</template>

<script>
import Citacao from "./Citacao.vue";

export default {
  components: { Citacao },
  data() {
    return {
      numero: 0,
      citacoes: [
        {
          fonte: "Jornal do Empreendedor",
          texto:
            "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          autor: "Margaret Mead",
        },
        {
          fonte: "Frases de Mãe",
          texto: "Isso não é um quarto, é um chiqueiro.",
          autor: "Roberta",
        },
        {
          fonte: "Frases de Pai",
          texto: "Vou contar até 3! 1, 2, 2...",
          autor: "Gustavo",
        },
      ],
    };
  },
  computed: {
    indice() {
      return Math.abs(this.numero % 3);
    },
  },
};
</script>

<style scoped>
.citacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
