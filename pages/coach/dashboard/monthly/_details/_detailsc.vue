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
      <v-card width="100%" outlined height="450">
        <v-row class="pt-8 mx-4">
          <v-textarea
            outlined
            name="input-6-4"
            label="My feedback"
            class="titl-fnt-mb-b3"
            v-model="coach1f"
          ></v-textarea>
        </v-row>
        <v-row class="mt-2 mx-4">
          <v-textarea
            outlined
            name="input-6-4"
            label="My Recommendation"
            class="titl-fnt-mb-b3"
            v-model="coach1R"
          ></v-textarea>
        </v-row>
        <v-row class="mt-2 mx-4">
          <v-btn
            class="text-capitalize"
            color="#5465ff"
            @click="sendFeedback"
            x-large
            dark
            style="border-radius: 8px"
            :loading="loading"
            >save feedback</v-btn
          >
        </v-row>
      </v-card>
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
  layout: 'coach',
  mixins: [validationMixin],
  validations: {
    //  weekUP: { required },
    //dateRangeText: { required },
  },

  data() {
    return {
      coach1f: '',
      coach1R: '',
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
      id: this.$route.params.detailsc,
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
      getCoach1: '',
      getCoach2: '',
      monthlyid: '',
      coachname: '',
    }
  },
  methods: {
    async sendFeedback() {
      this.loading = true
      if (this.coachname == this.getCoach1) {
        try {
          const res = await axios.post(
            `${this.$config.baseUrl}admin/godmode/monthlycheckin/coach/review/${this.$route.query.monthid}`,
            {
              feedbackCoach1: this.coach1f,
              recommendationCoach1: this.coach1R,
            }
          )
          console.log(res)
          this.loading = false
          this.msg = res.data.msg
          this.snackbar = true
        } catch (error) {
          console.log(error.response.data.detail)
          this.loading = false
          this.msg = error.response.data.detail
          this.snackbarErr = true
        }
      } else if (this.coachname == this.getCoach2) {
        try {
          const res = await axios.post(
            `${this.$config.baseUrl}admin/godmode/monthlycheckin/coach/review/${this.$route.query.monthid}`,
            {
              feedbackCoach2: this.coach1f,
              recommendationCoach2: this.coach1R,
            }
          )
          console.log(res)
          this.loading = false
          this.msg = res.data.msg
          this.snackbar = true
        } catch (error) {
          console.log(error.response.data.detail)
          this.loading = false
          this.msg = error.response.data.detail
          this.snackbarErr = true
        }
      }
    },
    async getmessages() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/monthlycheck/get/${this.$route.query.monthid}`
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
        this.monthlyid = res.data.monthlyId
      } catch (error) {
        console.log(error.response)
      }
    },
    async getPartners() {
      try {
        const res = await axios.get(
          `${this.$config.baseUrl}admin/godmode/emp/view/${this.$route.query.partnerId}`
        )
        console.log(res)
        // this.body = res.data.data
        this.name = res.data.data.name
        this.workid = res.data.data.workid
        this.getWorkId = res.data.data.workid
        this.resumption = res.data.data.dateofresumption
        this.stream = res.data.data.tribe
        this.designation = res.data.data.designation
        this.getCoach1 = res.data.data.rolecoach1
        this.getCoach2 = res.data.data.rolecoach2
      } catch (error) {
        console.log(error.response)
      }
    },
    async getCoach() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/coach/viewprofile`
        )
        console.log(res)
        // this.body = res.data.data
        this.coachname = res.data.name
      } catch (error) {
        console.log(error.response)
      }
    },
    test() {
      console.log(this.getCoach1)
      if (this.coachname == this.getCoach1) {
        console.log('na role coach 1 be this')
      } else if (this.coachname == this.getCoach2) {
        console.log('na role coach 2 be this')
      }
    },
  },
  created() {
    this.getmessages()
    this.getPartners()
    this.getCoach()
    // this.test()
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
