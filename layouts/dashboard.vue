<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-avatar>
            <v-img class="" src="/logo.png" contain width="150"></v-img>
          </v-list-item-avatar>
        </v-list-item-content>
      </v-list-item>

      <v-list shaped class="mt-4">
        <v-list-item-group v-model="selectedItem" color="#5465ff">
          <v-list-item v-for="(item, i) in items" :key="i" class="mt-2" :to="item.to" router
          exact>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text" class=" "></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-4">
          <v-btn text color="#828288" @click="logout"> <v-icon left>
        mdi-logout
      </v-icon> Log out </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar fixed app color="#FFFFFF" flat>
      <v-toolbar-title
        ><span class="txtC font-weight-bold"
          >Admin Portal</span
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>
     
      <v-badge color="red" dot class="mr-4">
        <v-icon color="#5465ff" small> mdi-bell </v-icon>
      </v-badge>
    </v-app-bar>
    <v-main id="bg">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      selectedItem: 1,
      items: [
        { text: 'Dashboard', icon: 'mdi-view-dashboard', to: '/admin' },
        { text: 'Streams', icon: 'mdi-account-group', to: '/admin/dashboard/stream'},
        
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
   methods:{
    logout(){
      this.$cookies.removeAll()
      this.$router.push({ name: 'admin' })
    }
  }
}
</script>

<style>
#bg {
  background: #e5e5e5;
}
.txtC {
  color: #5465ff;
}
</style>
