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
     "Proposal Writing",
     "Business Plan",
     "Bid and Tenders",
     "Information Memorandum",
     "Concept Document",
     "Feasibility Study",
     "Pitch Deck",
     "Bussiness Model",
     "Competitive Analysis",
     "SWOT Analysis",
     "Value Proposition Design",
     "Business Model Design",
     "Pricing Development",
     "Negotiation Skills",
     "Selling Skills",
     "Social Media Marketing (SMM)",
     "Social Media Optimization (SMO)",
     "Search Engine Optimization (SEO)",
     "Copy Writing",
     "Email Marketing",
     "Content Marketing",
     "Ad Campaign Management",
     "WordPress",
     "Photo Editing",
     "Video Editing",
     "Canva",
     "Doodle",
     "Growth Hacking",
     "Digital Analytics"

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
