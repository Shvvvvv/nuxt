<template>
  <div class="row">
    <form class="col-7 mx-auto">
      <div class="text-center">
        <p class="h4">Selamat Datang di Toko</p>
      </div>
      <div class="text-center">
        <p class="fs-6">Silahkan masuk ke akun anda.</p>
      </div>
      <div class="mt-5">
        <label class="form-label">Username </label>
        <input
          class="input-login form-control"
          type="text"
          v-model="username"
        />
      </div>
      <div>
        <label class="form-label">Password</label>
        <input
          type="password"
          class="input-login form-control"
          v-model="password"
        />
      </div>
      <button
        class="btn mt-4 btn-login form-control"
        type="button"
        @click="tryLogin"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "empty",
  data() {
    return {
      username: "",
      password: "",
      tokenEncrypt: "",
      dataUser: "",
    };
  },
  methods: {
    async tryLogin() {
      await this.$axios
        .post(`${process.env.BASE_URL}/auth/login`, {
          password: this.password,
          username: this.username,
        })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.message == "LOGIN SUCCESS") {
              // set localstorage dan mengencrypt tokennya
              console.log(process.env.SECRET_KEY);
              this.tokenEncrypt = this.$CryptoJS.AES.encrypt(
                res.data.data.token,
                process.env.SECRET_KEY
              ).toString();
              localStorage.setItem("token", this.tokenEncrypt);
              this.$router.replace({ name: "dashboard" });
            } else {
              alert(res.data.message);
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
.input-login.form-control {
  background: var(--second-color);
  border: none;
  border-radius: 20px;
  font-size: 12px !important;
}

.btn-login.form-control {
  background: var(--fourth-color) !important;
  border: none;
  border-radius: 20px;
}

.btn-login.form-control:hover {
  background: var(--second-color) !important;
}
</style>
