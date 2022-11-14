<template>
  <div id="app">
    <div class="container d-flex justify-content-center">
      <button class="btn btn-warning" @click="componente = 'Citacoes'">
        <i class="fa fa-arrow-left me-2" aria-hidden="true"></i>Citacões
      </button>
      <button class="btn btn-warning" @click="componente = 'Sobre'">
        Sobre
        <i class="fa fa-arrow-right ms-2" aria-hidden="true"></i>
      </button>
    </div>
    <keep-alive>
      <component :is="componente" />
    </keep-alive>
  </div>
</template>

<script>
import Citacoes from "./components/Citacoes";
import Sobre from "./components/Sobre";

export default {
  components: { Citacoes, Sobre },
  data() {
    return {
      componente: "Citacoes",
    };
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.6rem;
}

button {
  outline: none;
  padding: 5px 15px 10px;
  margin: 10px 5px;
  border-radius: 3px;
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>