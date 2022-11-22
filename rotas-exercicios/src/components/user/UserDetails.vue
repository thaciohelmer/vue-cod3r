<template>
  <div class="user-details">
    <h3>User Details</h3>
    <hr />
    <p><strong>Code:</strong> {{ id }}</p>
    <!-- <router-link tag="button" primary :to="`/user/${id}/edit`"
      >Edit</router-link
    > -->
    <router-link
      tag="button"
      primary
      :to="{
        name: 'editUser',
        params: { id },
        query: { complete: true, language: 'pt' },
        hash: '#footer',
      }"
      >Edit</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    console.log("inner component");
    next((vm) => {
      console.log(vm.id);
    });
  },
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   },
  // },
};
</script>

<style>
</style>