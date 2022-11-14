<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <p>{{ name | substituteComma }}</p>
    <p>{{ name | commaSpace }}</p>

    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o 

valor na string final -->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <p>{{ name | wordLength }}</p>
    <p>{{ name | wordLengthMap }}</p>

    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <p>{{ substituteCommaC }}</p>
    <p>{{ wordLengthC }}</p>

    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
    <p>{{ substituteCommaCG }}</p>
    <p>{{ wordLengthCG }}</p>
  </div>
</template>

<script>
import functionMixin from "./functionsMixins";
export default {
  data() {
    return {
      name: "Thacio          vitor  helmer netto     ",
    };
  },
  mixins: [functionMixin],
  filters: {
    substituteComma(text) {
      return text
        .replaceAll(" ", ",")
        .split(",")
        .filter((e) => e.length !== 0)
        .join(",");
    },
    commaSpace(text) {
      return text.replace(/\s/g, ",");
    },
  },
  computed: {
    substituteCommaC: function () {
      return this.name
        .replaceAll(" ", ",")
        .split(",")
        .filter((e) => e.length !== 0)
        .join(",");
    },
    wordLengthC: function () {
      var wordsWithLength = [];
      const singleWords = this.name.split(" ").filter((e) => e.length !== 0);
      singleWords.forEach((e) => {
        wordsWithLength.push(`${e} (${e.length})`);
      });
      return wordsWithLength.join(" ");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
