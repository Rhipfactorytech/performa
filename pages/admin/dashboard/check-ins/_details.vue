<template>
  <div>
    <!--  <v-tabs v-model="tab" background-color="#5465ff" grow dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1" class="text-capitalize"> Weekly report </v-tab>

      <v-tab href="#tab-2" class="text-capitalize"> Monthly feedbacks </v-tab>

      <v-tab href="#tab-3" class="text-capitalize">Quarterly appraisal </v-tab>

      <v-tab @click="switchTab" href="#tab-4" class="text-capitalize">
        Quarterly Appraisal result
      </v-tab>
       <v-tab @click="getGrowth" href="#tab-5" class="text-capitalize">
        view growth plan
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-3">
        <productdev v-if="stream == 'Product stream'" />
        <Business v-if="stream == 'Business stream'" />
        <cxm v-if="stream == 'CXM stream'" />
         end of edit profile 
      </v-tab-item>
      <v-tab-item value="tab-1">
        <v-row class="mt-4 mx-auto mb-6">
          <v-col cols="4">
            <v-card width="700">
              <v-list-item>
                <v-list-item-content
                  v-for="(item, index) in weekreport"
                  :key="index"
                >
                  <v-list-item-title class="mb-1">
                    {{ index }}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >week1: {{ item[0] }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    >week2: {{ item[1] }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    >week3: {{ item[2] }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    >week4: {{ item[3] }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item value="tab-4">
        <v-row class="mt-4 mx-auto mb-6">
          <v-col cols="4" v-for="(item, index) in appraisal" :key="index">
            <v-card width="300">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1">
                  Quarter  {{ index + 1 }} 
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-row class="ml-4 pb-4">
                <v-progress-circular
                  :size="100"
                  :width="15"
                  :value="item.finalScore"
                  :color="getColor(item.finalScore)"
                >
                  {{ item.finalScore }}
                </v-progress-circular>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item value="tab-2">
        <v-row class="mt-4 mx-auto mb-6">
          <v-col cols="10">
            <v-card
              width="700"
              v-for="(item, index) in monthly"
              :key="index"
              class="mb-4"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="mb-1 text-capitalize">
                    {{ item.month }}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    ><span class="font-weight-black">Are you happy?:</span>
                    {{ item.areyouhappy }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    ><span class="font-weight-black"
                      >What have you accomplished thus far:</span
                    >
                    {{ item.accomplishment }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    ><span class="font-weight-black"
                      >What are your challenges and concerns:</span
                    >
                    {{ item.challenges }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    ><span class="font-weight-black"
                      >How would you rate your performance till date and
                      why?:</span
                    >
                    {{ item.performance }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="font-weight-black">
                      How do you suggest your role coach(es) can help you get
                      better:
                    </span>
                    {{ item.suggestion }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="font-weight-black"> Other Feedback: </span>
                    {{ item.feedback }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="font-weight-black">
                      Preferable mode of communication: </span
                    >{{ item.review }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item value="tab-5">
        <v-row class="mt-4 mx-auto mb-6">
          <v-col cols="10">
            <v-card
              width="700"
              v-for="(item, index) in growth"
              :key="index"
              class="mb-4"
            >
               <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="mb-1 text-capitalize">
                    <span class="font-weight-black">Plan name: </span>
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >
                    {{ item.title }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    ><span class="font-weight-black">Duration: </span
                    >
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    {{item.duration}}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="font-weight-black">Objective: </span
                    >
                  </v-list-item-subtitle>
                   <v-list-item-subtitle>
                    {{item.objective}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items> -->

    <v-card outlined height="700">
      <v-row class="pt-6 ml-4 titl-fnt-mb-b3">
        <v-col cols="6"
          ><span class="text-capitalize">{{ name }}</span
          >'s weekly update
        </v-col>
        <v-col cols="5">
          <v-row>
            <v-select
              :items="months"
              label="Month"
              outlined
              style="width: 20px"
              class="mr-2"
              dense
              v-model="selectMonth"
              prepend-inner-icon="mdi-calendar"
            ></v-select>

            <v-select
              v-model="selectWeek"
              :items="week"
              label="Week"
              outlined
              style="width: 40px"
              dense
              prepend-inner-icon="mdi-calendar"
              @change="getweekUPdate"
            ></v-select>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-8">
        <v-col cols="4">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                ><span class="titl-fnt-mb-b3"
                  >Work Stream:
                </span></v-list-item-title
              >
              <v-list-item-subtitle
                ><span class="titl-fnt-mb-b2"
                  >{{ stream }}
                </span></v-list-item-subtitle
              >
              <v-list-item-title
                ><span class="titl-fnt-mb-b3"
                  >Designation:
                </span></v-list-item-title
              >
              <v-list-item-subtitle
                ><span class="titl-fnt-mb-b2">{{
                  designation
                }}</span></v-list-item-subtitle
              >
              <v-list-item-title
                ><span class="titl-fnt-mb-b3"
                  >Weekly Update date:
                </span></v-list-item-title
              >
              <v-list-item-subtitle
                ><span class="titl-fnt-mb-b2"
                  >{{ weekupdateDate }}
                </span></v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="8">
          <v-textarea
            outlined
            name="input-7-7"
            label="Update"
            class="titl-fnt-mb-b3 mr-4 mt-4"
            v-model="weekUP"
            readonly
          ></v-textarea
        ></v-col>
      </v-row>

      <v-row class="ml-4 mt-6 titl-fnt"> Feedback </v-row>
      <v-row class="ml-4 mr-4">
        <v-textarea
          outlined
          name="input-7-7"
          label="Update"
          class="titl-fnt-mb-b3 mt-4"
          v-model="weekFeedback"
        ></v-textarea>
      </v-row>

     <!-- <v-row class="class ml-4">
        <v-btn
          class="text-capitalize"
          color="#5465ff"
          @click="sendFeedback"
          x-large
          dark
          style="border-radius: 8px"
          :disabled="disable"
          :loading="loading"
          >save feedback</v-btn
        >
      </v-row> -->
    </v-card>

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
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  layout: 'dashboard',
  mixins: [validationMixin],
  validations: {
    email: { required },

    phoneNumber: { required },
    name: { required },
  },

  data() {
    return {
      disable: false,
      selectMonth: 'January',
      selectWeek: 'week1',
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      week: ['week1', 'week2', 'week3', 'week4'],
      editmode: true,
      id: this.$route.params.details,

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
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
      weekreport: '',
      appraisal: [],
      monthly: [],
      growth: [],
      weekupdateDate: '',
      weekFeedback: '',
      feedbackId: '',
      weekUP: '',
      coachname: '',
      role: '',
      getCoach1: '',
      getCoach2: '',
    }
  },
  computed: {},
  methods: {
    ...mapMutations({
      getWorkId: 'getWorkId',
    }),
    test() {
      if (this.coachname == this.getCoach1) {
        console.log('na role coach 1 be this')
      } else if (this.coachname == this.getCoach2) {
        console.log('na role coach 2 be this')
      }
    },

    getColor(status) {
      if (status >= 80 && status <= 100) return 'success'
      else if (status >= 50 && status <= 80) return 'warning'
      else return 'error'
    },
    async getweekUPdate() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/weeklyreport/coach/check/${this.id}/${this.selectMonth}/${this.selectWeek}`
        )
        console.log(res)
        this.weekupdateDate = res.data.date
        this.selectMonth = res.data.month
        this.weekFeedback = res.data.review
        this.feedbackId = res.data.reviewId
        this.weekUP = res.data.update
        this.selectWeek = res.data.week
        this.disable = false
      } catch (error) {
        this.msg = error.response.data.detail
        console.log(error.response.data.detail)
        this.disable = true
        this.weekupdateDate = null
        this.weekFeedback = null
        this.feedbackId = null
        this.weekUP = null
        this.snackbarErr = true
      }
    },

    async getPartners() {
      try {
        const res = await axios.get(
          `${this.$config.baseUrl}admin/godmode/emp/view/${this.id}`
        )
        console.log(res)
        // this.body = res.data.data
        this.name = res.data.data.name
        this.workid = res.data.data.workid
        this.getWorkId(res.data.data.workid)
        this.resumption = res.data.data.dateofresumption
        this.stream = res.data.data.tribe
        this.designation = res.data.data.designation
        this.getCoach1 = res.data.data.rolecoach1
        this.getCoach2 = res.data.data.rolecoach2
      } catch (error) {
        console.log(error.response)
      }
    },
    async sendFeedback() {
      this.loading = true
      if (this.coachname == this.getCoach1) {
        try {
          const res = await axios.post(
            `${this.$config.baseUrl}partner/weeklyreport/coach/review/${this.feedbackId}`,
            {
              feedbackCoach1: this.weekFeedback,
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
            `${this.$config.baseUrl}partner/weeklyreport/coach/review/${this.feedbackId}`,
            {
              feedbackCoach2: this.weekFeedback,
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

    async getAppraisal() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}admin/godmode/appraisal/${this.stream}/${this.id}`
          //`${this.$config.baseUrl}admin/godmode/appraisal/Business stream/string`
        )
        // console.log(res.data)
        // console.log(this.stream)
        this.appraisal = res.data
      } catch (error) {
        console.log(error.response)
      }
    },
  /*  async getCoach() {
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
    }, */
    async switchTab() {
      this.getAppraisal()
    },
  },
  created() {
    this.getPartners()
    
    // this.getAppraisal()
    this.getweekUPdate()
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
  font-size: 20px;
  font-weight: bold;
}

.titl-fnt-mb-b2 {
  font-family: 'Urbanist', sans-serif;
  font-size: 13px;
}

.titl-fnt-mb-b3 {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
}
.titl-fnt {
  font-family: 'Urbanist', sans-serif;
  font-size: 20px;
  color: #585960;
}

a {
  text-decoration: none;
}
</style>
