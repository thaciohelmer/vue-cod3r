<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert
      show
      dismissible
      v-for="message in messages"
      :key="message.text"
      :variant="message.type"
      >{{ message.text }}</b-alert
    >
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
    <hr class="my-4" />
    <b-list-group class="mb-4">
      <b-list-group-item v-for="(user, id) in users" :key="id">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex flex-column">
            <p><strong>ID:</strong> {{ id }}</p>
            <p><strong>NAME:</strong> {{ user.name }}</p>
            <p><strong>EMAIl:</strong> {{ user.email }}</p>
          </div>
          <b-row>
            <b-col>
              <b-button variant="primary" size="lg" @click="loadUser(id)"
                >Details</b-button
              ></b-col
            >
            <b-col>
              <b-button variant="danger" size="lg" @click="deleteUser(id)"
                >Delete</b-button
              >
            </b-col>
          </b-row>
        </div>
      </b-list-group-item>
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
      id: null,
      messages: [],
    };
  },
  methods: {
    loadUser(id) {
      this.id = id;
      this.user = { ...this.users[id] };
    },
    deleteUser(id) {
      this.$http
        .delete(`/usuarios/${id}.json`)
        .then((_) => this.clear())
        .catch((_) => {
          this.messages.push({
            text: "Transaction processing problem",
            type: "warning",
          });
        });
    },
    clear() {
      this.user.name = "";
      this.user.email = "";
      this.id = null;
    },
    save() {
      const method = this.id ? "patch" : "post";
      const endUrl = this.id ? `${this.id}.json` : ".json";
      this.$http[method](`/usuarios/${endUrl}`, this.user).then((_) => {
        this.clear();
        this.messages.push({
          text: "Operation performed successfully",
          type: "success",
        });
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
  margin: 1rem;
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
