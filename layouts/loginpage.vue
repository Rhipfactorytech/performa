<template>
  <v-app dark>
    <v-main id="bg">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

.fnt {
  font-family: 'Lato', sans-serif;
  font-size: 25px;
}
#bg {
  background: #e5e5e5;
}

a {
  text-decoration: none;
}
</style>
