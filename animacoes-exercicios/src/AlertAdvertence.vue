<template>
  <b-alert variant="warning" show="">{{ message }}</b-alert>
</template>

<script>
export default {
  data() {
    return {
      message: "One important message !",
    };
  },
};
</script>

<style>
</style>