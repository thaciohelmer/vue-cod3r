<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Name">
        <b-form-input
          size="lg"
          type="text"
          v-model="user.name"
          placeholder="Enter your name"
        />
      </b-form-group>
      <b-form-group label="Email">
        <b-form-input
          size="lg"
          type="email"
          v-model="user.email"
          placeholder="Enter your name"
        />
      </b-form-group>
      <hr />
      <b-button @click="save" size="lg" variant="primary">Save</b-button>
      <b-button @click="getUsers" size="lg" variant="success" class="ml-2"
        >Load user</b-button
      >
    </b-card>
    <hr />
    <b-list-group>
      <transition name="fade">
        <b-list-group-item v-for="(user, id) in users" :key="id">
          <strong>ID: </strong>{{ id }} <br />
          <strong>NAME: </strong>{{ user.name }} <br />
          <strong>EMAIL: </strong>{{ user.email }}
        </b-list-group-item>
      </transition>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataBase: "usuarios.json",
      user: {
        name: "",
        email: "",
      },
      users: [],
    };
  },
  methods: {
    save() {
      this.$http.post(this.dataBase, this.user).then(() => {
        this.user.name = "";
        this.user.email = "";
      });
    },
    getUsers() {
      this.$http.get(this.dataBase).then((res) => {
        this.users = res.data;
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5;
  position: absolute;
  width: 100%;
}

.fade-move {
  transition: transform 2s;
}
</style>
