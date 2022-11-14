<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando diretiva v-text'"></p>
    <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
    <p v-destaque="'#C000FF'">Testando diretiva custom</p>
    <p
      v-destaque-local:fundo.atrasar.alternar="{
        cor1: 'green',
        cor2: 'purple',
        atraso: 2000,
        intervalo: 200,
      }"
    >
      Testando diretiva custom
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "red",
    };
  },
  directives: {
    "destaque-local": {
      bind(el, binding) {
        let atraso = 0;

        const aplicarCor = (cor) => {
          if (binding.arg == "fundo") {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
        };

        if (binding.modifiers["atrasar"]) atraso = binding.value.atraso;

        let cor1 = binding.value.cor1;
        let cor2 = binding.value.cor2;
        let corAtual = cor1;

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual);
            }, binding.value.intervalo);
          } else {
            aplicarCor(binding.value.cor1);
          }
        }, atraso);
      },
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
