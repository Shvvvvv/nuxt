<template>
  <div class="p-2">
    <p class="h2">Dashboard</p>
    <div class="row gap-2 p-3">
      <div
        class="bg-primary rounded col-2 p-2"
        v-for="data in datas"
        :key="data.id"
      >
        <p class="m-0">{{ data.namaBarang }}</p>
        <p class="m-0">Harga: {{ data.harga.toLocaleString("Id-ID") }}</p>
        <p class="m-0">Stok: {{ data.stok }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      payload: {
        limit: 10,
        offset: 1,
        search: "",
      },
      datas: [],
    };
  },
  mounted() {
    //Encrypted using AES
    // this.encryptedText = localStorage.getItem("token");
    // this.secret = process.env.SECRET_KEY;
    // //Decrypted using AES
    // console.log(localStorage.getItem("token"));
    // console.log(process.env.SECRET_KEY);
    // this.decryptedText = this.$CryptoJS.AES.decrypt(
    //   this.encryptedText,
    //   process.env.SECRET_KEY
    // ).toString(this.$CryptoJS.enc.Utf8);
    // console.log("decrypted: " + this.decryptedText);
    this.getAllData();
  },
  methods: {
    getAllData() {
      this.$axios
        .get(`${process.env.BASE_URL}/barang/find-all`, {
          params: this.payload,
        })
        .then((res) => {
          this.datas = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
