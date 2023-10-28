<template>
  <div class="w-100 bg-primary p-3 d-flex justify-content-between">
    <p>This is Header</p>
    <button class="btn btn-danger" @click="tryLogout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    tryLogout() {
      alert("Anda berhasil logout!");
      this.$router.replace("/");
    },
  },
};
</script>
