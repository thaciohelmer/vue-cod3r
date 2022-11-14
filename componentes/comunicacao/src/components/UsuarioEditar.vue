<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p class="fw-bolder fs-2">Idade do usuário: {{ idade }}</p>
    <button class="btn btn-success fw-bolder fs-3" @click="alterarIdade">
      Alterar Idade
    </button>
    <button class="btn btn-primary fs-3 fw-bolder" @click="resetFi()">
      Reiniciar Idade
    </button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    idade: Number,
    resetFi: Function,
  },

  methods: {
    alterarIdade() {
      this.idade += 1;
      //this.$emit("idadeMudou", this.idade);
      barramento.alterarIdade(this.idade);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
