<template>
  <div>
    <rotulo nome="Nome">
      <input type="text" @input="alterarNome" :value="value.nome" />
    </rotulo>
    <rotulo nome="Sobrenome">
      <input type="text" @input="alterarSobreNome" :value="value.sobrenome" />
    </rotulo>
  </div>
</template>

<script>
import Rotulo from "./Rotulo.vue";
export default {
  components: { Rotulo },
  methods: {
    alterarNome(event) {
      this.$emit("input", {
        nome: event.target.value,
        sobrenome: this.value.sobrenome,
      });
    },
    alterarSobreNome(event) {
      this.$emit("input", {
        nome: this.value.nome,
        sobrenome: event.target.value,
      });
    },
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>