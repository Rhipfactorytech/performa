<template>
  <div>
    <v-row justify="center" align="center" class="mt-10">
      <v-card height="550" width="600">
        <v-row justify="center" align="center" class="mt-12">
          <p class="tit-fnt text-capitalize text-center">Hello, {{ name }}</p>
        </v-row>

        <v-row justify="center" align="center" class="">
          <v-col>
            <div class="text-center tit-fnt-ft">
              This is the beginning of amazing things for you at RHIP Factory<br />
              and with your role coaches. Cheers to your growth!
            </div>
          </v-col>
        </v-row>

        <v-row justify="center" align="center" class="mb-2 mt-6">
          <v-btn
            class="text-capitalize titl-fnt-ion"
            to="/partners/dashboard/weekly"
            text
          >
            <v-icon color="#5465ff" dark left>mdi-plus-box</v-icon> Do your
            weekly check-in</v-btn
          >
        </v-row>
        <v-row justify="center" align="center" class="mb-2">
          <v-btn
            class="text-capitalize titl-fnt-ion"
            text
            to="/partners/dashboard/growth"
          >
            <v-icon color="#5465ff" dark left class="mr-3">mdi-plus-box</v-icon>
            <span style="margin-right: 47px">set a growth plan</span></v-btn
          >
        </v-row>
        <v-row justify="center" align="center" class="mb-2">
          <v-btn
            class="text-capitalize titl-fnt-ion"
            text
            to="/partners/dashboard/profile"
            disabled
          >
            <v-icon color="#5465ff"  dark left class="">mdi-plus-box</v-icon>
            <span style="margin-right: 145px"> Profile </span></v-btn
          >
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'partner',
  data() {
    return {
      value: 80,
      items: [
        {
          icon: true,
          title: 'Jason Oner',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
        {
          title: 'Travis Howard',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        },
        {
          title: 'Ali Connors',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        },
        {
          title: 'Cindy Baker',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        },
      ],
      name: '',
    }
  },
  methods: {
    async getPartners() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/partner/get`
        )
        console.log(res)
        // this.body = res.data.data
        this.name = res.data.name
      } catch (error) {
        console.log(error.response)
      }
    },
  },
  created() {
    this.getPartners()
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@500&display=swap');
#txt1 {
  color: #abacaf;
}

.v-btn {
  width: 300px;
}

#txt2 {
  color: #5465ff;
}

.tit-fnt {
  font-family: 'Urbanist', sans-serif;
  font-size: 25px;
  color: #abacaf;
}

.tit-fnt-ft {
  font-family: 'Urbanist', sans-serif;
  font-size: 16px;
  color: #abacaf;
}

.titl-fnt-ion {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
}
</style>
