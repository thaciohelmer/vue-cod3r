<template>
  <div class="user-edit">
    <h3>Edit User</h3>
    <hr />
    <p><strong>Code:</strong> {{ id }} / {{ $route.params.id }}</p>
    <p><strong>Complete:</strong> {{ $route.query.complete ? "Yes" : "No" }}</p>
    <p><strong>Language:</strong> {{ $route.query.language }}</p>
    <button primary @click="confirmed = true">Confirm</button>
    <div id="footer">
      <h3>Vue Course</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmed: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Do you want to leave?")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style>
#footer {
  margin-top: 1000px;
}
</style>