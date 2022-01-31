<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-row justify="center" align="center" class="pt-5 text-capitalize"
            ><span class="tit-fnt">1. </span>
            <span class="tit-fnt-ft ml-2"
              >are you happy here and why?</span
            ></v-row
          >
          <v-row class="mx-4 mt-10 mb-4">
            <v-textarea
              solo
              outlined
              name="input-7-4"
              placeholder="Type in your response here.."
              v-model="happy"
            ></v-textarea>
          </v-row>

          <v-btn color="#5465ff" dark @click="e1 = 2" class="titl-fnt-ion">
            next
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-row justify="center" align="center" class="pt-5 text-capitalize"
            ><span class="tit-fnt">2.</span>
            <span class="tit-fnt-ft ml-2"
              >what have you accomplished thus far and what are you most proud
              of?</span
            ></v-row
          >
          <v-row class="mx-4 mt-10 mb-4">
            <v-textarea
              solo
              outlined
              name="input-7-4"
              placeholder="type in your response here.."
              v-model="accomp"
            ></v-textarea>
          </v-row>

          <v-btn color="#5465ff" dark @click="e1 = 3" class="titl-fnt-ion">
            next
          </v-btn>

          <v-btn text @click="e1 = 1" class="titl-fnt-ion"> previous </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-row justify="center" align="center" class="pt-5 text-capitalize"
            ><span class="tit-fnt">3.</span>
            <span class="tit-fnt-ft ml-2"
              >what are your challenges and concerns</span
            ></v-row
          >
          <v-row class="mx-4 mt-10 mb-4">
            <v-textarea
              solo
              outlined
              name="input-7-4"
              placeholder="type in your response here.."
              v-model="chall"
            ></v-textarea>
          </v-row>

          <v-btn color="#5465ff" dark @click="e1 = 4" class="titl-fnt-ion">
            next
          </v-btn>

          <v-btn text @click="e1 = 2" class="titl-fnt-ion"> previous </v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-row justify="center" align="center" class="pt-5 text-capitalize"
            ><span class="tit-fnt">4.</span>
            <span class="tit-fnt-ft ml-2"
              >how would you rate your performace till date and why?</span
            ></v-row
          >
          <v-row class="mx-4 mt-10 mb-4">
            <v-textarea
              solo
              outlined
              name="input-7-4"
              placeholder="type in your response here.."
              v-model="perf"
            ></v-textarea>
          </v-row>

          <v-btn color="#5465ff" dark @click="e1 = 5" class="titl-fnt-ion">
            next
          </v-btn>

          <v-btn text @click="e1 = 3" class="titl-fnt-ion"> previous </v-btn>
        </v-stepper-content>
        <v-stepper-content step="5">
          <v-row justify="center" align="center" class="pt-5 text-capitalize"
            ><span class="tit-fnt">5.</span
            ><span class="tit-fnt-ft ml-2"
              >How do you suggest your role coaches help you get better</span
            ></v-row
          >
          <v-row class="mx-4 mt-10 mb-4">
            <v-textarea
              solo
              outlined
              name="input-7-4"
              placeholder="type in your response here.."
              v-model="sugg"
            ></v-textarea>
          </v-row>

          <v-btn color="#5465ff" dark @click="e1 = 6" class="titl-fnt-ion">
            next
          </v-btn>

          <v-btn text @click="e1 = 4" class="titl-fnt-ion"> previous </v-btn>
        </v-stepper-content>
        <v-stepper-content step="6">
          <v-row justify="center" align="center" class="pt-5 text-capitalize"
            ><span class="tit-fnt">6.</span
            ><span class="tit-fnt-ft ml-2">and other feedback?</span></v-row
          >
          <v-row class="mx-4 mt-10 mb-4">
            <v-textarea
              solo
              outlined
              name="input-7-4"
              placeholder="type in your response here.."
              v-model="feedb"
            ></v-textarea>
          </v-row>

          <v-btn
            color="#5465ff"
            dark
            class="titl-fnt-ion"
            @click="monthreview"
            :loading="loading"
          >
            submit entries
          </v-btn>

          <v-btn text @click="e1 = 5" class="titl-fnt-ion"> previous </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-snackbar v-model="snackbar" :timeout="timeout" color="success" top>
      {{ msg }}
    </v-snackbar>
    <v-snackbar v-model="snackbarErr" :timeout="timeout" color="error" top>
      {{ msg }}
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  layout: 'partner',
  data() {
    return {
      snackbar: false,
      snackbarErr: false,
      e1: 1,
      timeout: 7000,
      msg: '',
      happy: '',
      accomp: '',
      chall: '',
      perf: '',
      sugg: '',
      feedb: '',
      date: '',
      month: '',
      year: '',
      loading: false,
    }
  },
  methods: {
    test() {
      this.month = this.$moment().format('MMMM')
      this.date = this.$moment().format('MMMM Do YYYY')
      this.year = this.$moment().format('YYYY')
    },
    async monthreview() {
      this.loading = true
      try {
        const res = await this.$axios.$post(
          `${this.$config.baseUrl}admin/godmode/monthlycheckin/create`,
          {
            date: this.date,
            month: this.month,
            areyouhappy: this.happy,
            accomplishment: this.accomp,
            challenges: this.chall,
            performance: this.perf,
            suggestion: this.sugg,
            feedback: this.feedb,
            year: this.year,
          }
        )
        console.log(res)
        // this.body = res.data.data
         this.msg = res.data.msg
        this.snackbar = true
        this.loading = false
      } catch (error) {
        console.log(error.response)
        this.loading = false
        this.msg = error.response.data.detail
        this.snackbarErr = true
      }
    },
    async add_partner() {
      this.loading = true
      try {
        const res = await axios.post(
          `${this.$config.baseUrl}admin/godmode/emp/create`,
          {
            name: this.name,
            workid: this.workid,
            workemail: this.email,
            designation: this.designation,
            tribe: this.stream,
            phonenumber: this.phone,
            dateOfresumption: this.resumption,
            currentSkill: this.currentSkill,
            nextSkill: this.nextskill,
            roleCoach: this.rolecoach,
          }
        )
        console.log(res)
        this.loading = false
        this.msg = res.data.msg
        this.snackbar = true
      } catch (error) {
        console.log(error.response)
        this.loading = false
        this.msg = error.response.data.detail
        this.snackbarErr = true
      }
    },
  },
  created() {
    this.test()
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@500&display=swap');

#txt1 {
  color: #abacaf;
}

#txt2 {
  color: #5465ff;
}

.tit-fnt {
  font-family: 'Urbanist', sans-serif;
  font-size: 30px;
  color: #abacaf;
}

.tit-fnt-ft {
  font-family: 'Urbanist', sans-serif;
  font-size: 16px;
}

.titl-fnt-ion {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
}
</style>
