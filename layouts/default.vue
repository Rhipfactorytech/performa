<template>
  <v-app dark>
    <v-main id="bg">
      <v-app-bar color="#E5E5E5"  flat>
  
        <v-toolbar-title>
          <nuxt-link to="/">
            
              <v-img class="ml-6" src="/logo.png" contain width="200"></v-img>
            
          </nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
         <nuxt-link to="/">
          <v-btn text class="text-capitalize fnt mr-6 hidden-sm-and-down" 
            > Performance Management System</v-btn
          >
        </nuxt-link>
  
    
      </v-app-bar>
      <v-container>
        <Nuxt />
      </v-container>
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
