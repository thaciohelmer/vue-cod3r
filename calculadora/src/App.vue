<template>
  <div id="app">
    <Calculator />
  </div>
</template>

<script>
import Calculator from "./main/Calulator";
export default {
  components: { Calculator },
};
</script>

<style>
@font-face {
  font-family: "Roboto-Light";
  src: url("./fonts/Roboto-Light.ttf");
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto-Light", sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #d3d3d3;
}
</style>