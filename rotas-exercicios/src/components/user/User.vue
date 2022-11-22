<template>
  <div class="user">
    <h2>Users</h2>
    <hr />
    <router-view></router-view>
    <button success @click="goToHome">Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      // this.$router.push({ path: "/" });
      this.$router.push({ name: "start" });
    },
  },
};
</script>

<style>
</style>