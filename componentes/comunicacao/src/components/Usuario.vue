<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <div class="row justify-content-center">
      <div class="col-4">
        <p>Nome do usuário: {{ nome }}</p>
        <p>Idade do usuário: {{ idade }}</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4">
        <button @click="alterarNome()" class="btn btn-danger fw-bolder fs-4">
          Alterar Nome
        </button>
      </div>
    </div>
    <hr />
    <div class="componentes">
      <app-usuario-info
        :userName="nome"
        @resetName="nome = $event"
        :resetFn="resetUserName"
        :idade="idade"
      />
      <app-usuario-editar :idade="idade" :resetFi="resetIdade" />
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      nome: "Pedro",
      idade: 21,
    };
  },
  methods: {
    alterarNome() {
      this.nome = "Ana";
    },
    resetUserName() {
      this.nome = "Pedro";
    },
    resetIdade() {
      this.idade = 21;
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
