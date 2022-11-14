<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p class="fw-bolder fs-2">Nome do usuário: {{ inverterNome() }}</p>
    <p class="fw-bolder fs-2">Idade do usuário: {{ idade }}</p>
    <button class="btn btn-warning fw-bolder fs-3" @click="reiniciarNome()">
      Reiniciar Nome
    </button>
    <button class="btn btn-success fw-bolder fs-3" @click="resetFn()">
      Reiniciar Nome
    </button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    userName: {
      type: String,
      required: true,
      //default: "Anônimo",
    },
    resetFn: Function,
    idade: Number,
  },
  data() {
    return {};
  },
  methods: {
    inverterNome() {
      return this.userName.split("").reverse().join("");
    },
    reiniciarNome() {
      this.userName = "Pedro";
      this.$emit("resetName", this.userName);
    },
  },
  created() {
    barramento.quandoIdadeMudar((idade) => {
      this.idade = idade;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
