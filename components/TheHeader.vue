<template>
  <div class="w-100 bg-primary p-3 d-flex justify-content-between">
    <p>This is Header</p>
    <button class="btn btn-danger" @click="tryLogout">Logout</button>
  </div>
</template>

<script>
import popUp from '~/plugin/sweet_alert';
export default {
  methods: {
    tryLogout() {
      localStorage.clear()
      popUp.fire({
        icon: 'success',
        title: 'Logout',
        text: 'Anda berhasil logout'
      }).then(() => {
        this.$router.replace("/");
      })
    },
  },
};
</script>
