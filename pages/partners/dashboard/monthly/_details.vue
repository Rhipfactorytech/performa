<template>
  <div>
    <v-row class="mt-4 mx-auto">
      <v-card width="100%" outlined height="1100">
        <v-row class="mx-4 mt-4">
          <v-textarea
            outlined
            name="input-7-4"
            label="are you happy here and why?"
            class="titl-fnt-mb-b3"
            v-model="happy"
            readonly
          ></v-textarea>
        </v-row>
        <v-row class="mx-4 mt-2">
          <v-textarea
            outlined
            name="input-7-4"
            label="what have you accomplished thus far and what are you most proud
              of?"
            class="titl-fnt-mb-b3"
            v-model="accomp"
            readonly
          ></v-textarea>
        </v-row>
        <v-row class="mx-4 mt-2">
          <v-textarea
            outlined
            name="input-7-4"
            label="what are your challenges and concerns?"
            class="titl-fnt-mb-b3"
            v-model="chall"
            readonly
          ></v-textarea>
        </v-row>
        <v-row class="mx-4 mt-2">
          <v-textarea
            outlined
            name="input-7-4"
            label="how would you rate your performace till date and why?"
            class="titl-fnt-mb-b3"
            v-model="perf"
            readonly
          ></v-textarea>
        </v-row>
        <v-row class="mx-4 mt-2">
          <v-textarea
            outlined
            name="input-7-4"
            label="How do you suggest your role coaches help you get better"
            class="titl-fnt-mb-b3"
            v-model="sugg"
            readonly
          ></v-textarea>
        </v-row>
        <v-row class="mx-4 mt-2">
          <v-textarea
            outlined
            name="input-7-4"
            label="and other feedback?"
            class="titl-fnt-mb-b3"
            v-model="feedb"
            readonly
          ></v-textarea>
        </v-row>
      </v-card>
    </v-row>

    <v-row class="mt-10 mx-auto mb-4">
      <v-col cols="6" class="mr-auto">
        <v-row>
          <span class="titl-fnt-mb-b3"> Role Coach 1: {{ getcoach1 }} </span>
        </v-row>
        <v-row>
          <v-card width="98%" outlined height="400">
            <v-row class="pt-8">
              <v-textarea
                outlined
                name="input-6-4"
                label="feedback"
                class="titl-fnt-mb-b3 mx-8"
                v-model="fcoach1"
                readonly
              ></v-textarea>
            </v-row>
            <v-row class="mt-4">
              <v-textarea
                outlined
                name="input-6-4"
                label="Recommendation"
                class="titl-fnt-mb-b3 mx-8"
                v-model="fcoach1R"
                readonly
              ></v-textarea>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="6" class="ml-auto">
        <v-row>
          <span class="titl-fnt-mb-b3"> Role Coach 2: {{ getcoach2 }} </span>
        </v-row>
        <v-row>
          <v-card width="100%" outlined height="400">
            <v-row class="pt-8">
              <v-textarea
                outlined
                name="input-6-4"
                label="feedback"
                class="titl-fnt-mb-b3 mx-8"
                v-model="fcoach2"
                readonly
              ></v-textarea>
            </v-row>
            <v-row class="mt-4">
              <v-textarea
                outlined
                name="input-6-4"
                label="Recommendation"
                class="titl-fnt-mb-b3 mx-8"
                v-model="fcoach2R"
                readonly
              ></v-textarea>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" :timeout="timeout" color="success" top>
      {{ msg }}
    </v-snackbar>
    <v-snackbar v-model="snackbarErr" :timeout="timeout" color="error" top>
      {{ msg }}
    </v-snackbar>
  </div>
</template>

<script>
import moment from 'moment'
import { format, parseISO } from 'date-fns'
import axios from 'axios'
import { mapState } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  layout: 'partner',
  mixins: [validationMixin],
  validations: {
    weekUP: { required },

    //dateRangeText: { required },
  },

  data() {
    return {
      happy: '',
      accomp: '',
      chall: '',
      perf: '',
      sugg: '',
      feedb: '',
      fcoach1: '',
      fcoach2: '',
      fcoach1R: '',
      fcoach2R: '',
      timeout: 7000,
      msg: '',
      modal: false,
      weekUP: '',
      menu1: false,
      menu2: false,
      goal: '',
      path: '',
      knowledgeArea: '',
      dateRangeText: '',
      dialog: false,
      hide: false,
      name: '',
      duration: '',
      objective: '',
      editmode: true,
      id: this.$route.params.details,
      headers: [
        {
          text: 'Partner name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Stream', value: 'tribe' },
        { text: 'Designation', value: 'designation' },
        { text: 'Status', value: 'status' },
        { text: 'view profile' },
      ],
      body: [
        {
          name: 'olumide',
        },
      ],
      loading: false,
      msg: '',
      timeout: 7000,
      snackbar: false,
      snackbarErr: false,
      name: '',
      workid: '',
      email: '',
      resumption: '',
      phone: '',
      stream: '',
      designation: '',
      currentSkill: '',
      nextskill: '',
      rolecoach: '',
      tab: null,
      ref: '',
      new_data: '',
      e1: 1,
      email: '',
      address: '',
      phoneNumber: '',
      name: '',
      date: '',
      menu2: false,
      appraisal: [],
      body: [],
      messages: [],
      dates: [],
      getcoach1: '',
      getcoach2: '',
    }
  },
  methods: {
    async getmessages() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/monthlycheck/get/${this.id}`
        )
        console.log(res)
        this.happy = res.data.areyouhappy
        this.accomp = res.data.accomplishment
        this.chall = res.data.challenges
        this.perf = res.data.performance
        this.sugg = res.data.suggestion
        this.feedb = res.data.feedback
        this.fcoach1 = res.data.feedbackCoach1
        this.fcoach2 = res.data.feedbackCoach2
        this.fcoach1R = res.data.recommendationCoach1
        this.fcoach2R = res.data.recommendationCoach2
      } catch (error) {
        console.log(error.response)
      }
    },
    async getPartners() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/partner/get`
        )
        console.log(res)
        // this.body = res.data.data
        this.name = res.data.name
        this.getcoach1 = res.data.rolecoach1
        this.getcoach2 = res.data.rolecoach2
      } catch (error) {
        console.log(error.response)
      }
    },
  },
  created() {
    this.getmessages()
    this.getPartners()
  },
  filters: {
    formatdate(value) {
      if (value == true) {
        return 'Active'
      } else {
        return 'disabled'
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@500&display=swap');
.titl-fnt-mb {
  font-family: 'Urbanist', sans-serif;
  font-size: 20px;
  font-weight: lighter;
  color: #5465ff;
}

.titl-fnt-mb-b {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #5465ff;
}

.titl-fnt-mb-b2 {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
}

.titl-fnt-mb-b3 {
  font-family: 'Urbanist', sans-serif;
  font-size: 12px;
}
.titl-fnt {
  font-family: 'Urbanist', sans-serif;
  font-size: 10px;
  color: #5465ff;
}
.v-text-field {
  width: 20px;
}
</style>
