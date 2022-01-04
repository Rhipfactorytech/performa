<template>
  <div>
    <v-row justify="center" align="center" class="mt-10">
      <v-card height="550" width="600">
        <v-row justify="center" align="center" class="mt-12">
          <p class="fnt text-capitalize text-center font-weight-bold">
            Hello, RHIP Factory
          </p>
        </v-row>

        <v-row justify="center" align="center" class="">
          <v-col>
            <div class="text-center">
              Click on the item below to begin your setup processs <br />
              cheers to a great start
            </div>
          </v-col>
        </v-row>

        <v-row justify="center" align="center" class="mb-2 mt-6">
          <v-btn class="text-capitalize" outlined to="/coach/dashboard/check-ins">checkings</v-btn>
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
#txt1 {
  color: #abacaf;
}

.v-btn {
  width: 300px;
}

#txt2 {
  color: #5465ff;
}
</style>
