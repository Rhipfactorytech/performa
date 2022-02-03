<template>
  <div>
    <v-row justify="center" align="center" class="mt-10">
      <v-card height="550" width="600">
        <v-row justify="center" align="center" class="mt-12">
          <p class="tit-fnt text-capitalize text-center">Hello, RFIP Factory</p>
        </v-row>

        <v-row justify="center" align="center" class="">
          <v-col>
            <div class="text-center tit-fnt-ft">
              Click on the items below to begin your setup processes<br />
              cheers to a great start.
            </div>
          </v-col>
        </v-row>

        <v-row justify="center" align="center" class="mb-2 mt-6">
          <v-btn
            class="text-capitalize titl-fnt-ion"
            to="/admin/dashboard/partner/add-partner"
            text
          >
            <v-icon color="#5465ff" dark left>mdi-plus-box</v-icon><span class="partner-push"> Add a partner</span></v-btn
          >
        </v-row>
       
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
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
    }
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
  font-size: 30px;
  color: #5465ff;
  font-weight: bold;
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

.partner-push{
  margin-right: 80px;
}
</style>
