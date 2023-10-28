<template>
  <div>
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: "Auth",
};
</script>
