<template>
  <div class="container-flow box-all-login">
    <div class="row p-0 m-0">
      <div class="col-6">
        <div class="p-2"><fa icon="snowflake" /> SHV STORE</div>
        <div class="box-form-input p-5">
          <Nuxt />
        </div>
      </div>
      <div class="box-cover-login col-6 p-4">
        <div
          class="cover-login h-100 position-relative rounded d-flex align-items-end justify-content-center pb-2"
        >
          <div class="decoration rounded-pill position-absolute"></div>
          <div class="decoration rounded-pill position-absolute"></div>
          <div class="text-center">
            <p class="text-iklan h4">
              Temukan gaya yang unik dan ekspresikan dirimu dengan koleksi
              terbaru kami.
            </p>
            <p class="text-iklan mb-5 w-75 mx-auto">
              Kami mengajakmu untuk mengeksplorasi dunia fashion yang penuh
              keajaiban. Bersiaplah untuk menarik perhatian semua orang di
              sekitarmu.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "Auth",
};
</script>

<style>
.container-flow.box-all-login {
  background-color: var(--main-color);
}

.cover-login {
  background-image: url("@/assets/img/cover-login.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  border-radius: 8% !important;
}

.box-cover-login {
  height: 100vh;
}

.decoration:nth-of-type(1) {
  background-color: var(--main-color);
  height: 6rem;
  width: 6rem;
  top: -3%;
  left: -3%;
}

.decoration:nth-of-type(2) {
  background-color: var(--main-color);
  height: 6rem;
  width: 6rem;
  bottom: -3%;
  right: -3%;
}

.text-iklan {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.box-form-input {
}
</style>
