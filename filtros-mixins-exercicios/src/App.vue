<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <p>{{ usuarioLogado }}</p>
    <p>{{ cpf | cpf }}</p>
    <!-- <p>{{ 998028302 | celular }}</p>
    <p>{{ celular | celular }}</p>
    <p>{{ celular2 | celular }}</p>
    <p>{{ celular3 | celular }}</p>
    <p>{{ celular2 | inverter | celular }}</p> -->
    <input type="text" :value="cpfDoAluno | inverter | cpf" />
    <hr />
    <frutas></frutas>
  </div>
</template>

<script>
import frutasMixin from "./frutasMixin";
import usuarioMixin from "./usuarioMixin";
import Frutas from "./Frutas.vue";
export default {
  components: {
    Frutas,
  },
  mixins: [frutasMixin, usuarioMixin],
  filters: {
    cpf(valor) {
      const arr = `${valor}`.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
    celular(valor) {
      const arr = `${valor}`.split("");
      if (`${valor}`.length == 9) {
        arr.splice(5, 0, " - ");
        arr.unshift("27");
        arr.splice(1, 0, " ");
        return arr.join("");
      } else if (`${valor}`.length == 11) {
        arr.splice(2, 0, " ");
        arr.splice(8, 0, " - ");
        return arr.join("");
      } else {
        return "número de celular inválido";
      }
    },
  },
  data() {
    return {
      cpf: "18351728730",
      celular: "995036276",
      celular2: "27995036276",
      celular3: "95036276",
      cpfDoAluno: "09644308731",
    };
  },
  created() {
    console.log("Created - App.vue");
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
