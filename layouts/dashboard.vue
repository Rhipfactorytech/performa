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
        <v-list-item-group
          v-model="selectedItem"
          color="#5465ff"
          class="titl-fnt-mb"
        >
          <v-list-item
            v-for="(item, i) in items1"
            :key="i"
            class="mt-2"
            :to="item.to"
            router
            exact
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.text"
                class=""
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-group
          v-model="selectedItem"
          color="#5465ff"
          class="titl-fnt-mb"
          prepend-icon="mdi-account-group"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Partners</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            class="mt-2"
            :to="item.to"
            router
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.text"
                class=""
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-4">
          <v-btn text color="#828288" @click="logout">
            <v-icon left> mdi-logout </v-icon> Log out
          </v-btn>
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
      items1: [
        {
          text: 'Dashboard',
          icon: 'mdi-view-dashboard',
          to: '/admin/dashboard',
        },
      ],
      items: [
        {
          text: 'Add a Partner',
          icon: 'mdi-plus-box',
          to: '/admin/dashboard/partner/add-partner',
        },
        {
          text: 'Weekly Updates',
          icon: 'mdi-refresh',
          to: '/admin/dashboard/check-ins',
        },
        {
          text: 'Monthly Checkin',
          icon: 'mdi-checkbox-marked-outline',
          to: '/admin/dashboard/monthly',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods: {
    logout() {
      this.$cookies.removeAll()
      this.$router.push({ name: 'admin' })
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@500&display=swap');
.titl-fnt-mb {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
}
#bg {
  background: #e5e5e5;
}
.txtC {
  color: #5465ff;
}
</style>
