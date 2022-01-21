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
              This is the beginning of amazing things with you and the<br />
              and the partners assigned to you. Happy coaching!
            </div>
          </v-col>
        </v-row>

        <v-row justify="center" align="center" class="mb-2 mt-6">
          <v-btn
            class="text-capitalize"
            color="#5465ff"
            to="/coach/dashboard/check-ins"
            x-large
            dark
            style="border-radius:8px;"
            >view partners</v-btn
          >
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'coach',
  data() {
    return {
    name:""
     
    }
  },
  methods: {
    async getPartners() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/coach/viewprofile`
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
