<template>
  <div>
    <v-select
      :items="items"
      label="Knowledge Area"
      outlined
      class="titl-fnt-mb-b3"
      v-model="KA"
      @change="pickone"
    ></v-select>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  data: () => ({
    KA: '',
    items: [
      'Problem Analysis',
      'User Research',
      'Usability Testing',
      'Wire Framing',
      'Prototyping',
      'Road mapping',
      'Information Architecture',
      'Miro',
      'Figma',
      'Adobe Xd',
      'Wordpress',
      'Html/Css',
      'Scrum Methodology',
    ],
  }),
 methods: {
    ...mapMutations({
      getKA: 'getKA',
    }),
    pickone(){
        this.getKA(this.KA)
    }
 }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@500&display=swap');
.titl-fnt-mb-b3 {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
}
</style>
