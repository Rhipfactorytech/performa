<template>
  <div>
    <v-tabs v-model="tab" background-color="#5465ff" grow dark icons-and-text>
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
        <!-- end of edit profile -->
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
    </v-tabs-items>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  layout: 'coach',
  mixins: [validationMixin],
  validations: {
    email: { required },

    phoneNumber: { required },
    name: { required },
  },

  data() {
    return {
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
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
      weekreport: [],
      appraisal: [],
      monthly: [],
      growth:[]
    }
  },
  computed: {
    
  },
  methods: {
    ...mapMutations({
      getWorkId: 'getWorkId',
    }),
    getColor(status) {
      if (status >= 80 && status <= 100) return 'success'
      else if (status >= 50 && status <= 80) return 'warning'
      else return 'error'
    },
    async getWeekly() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/weeklyreport/check/${this.id}`
        )
        console.log(res.data)
        this.weekreport = res.data
      } catch (error) {
        console.log(error.response)
      }
    },
      async getGrowth() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/growthplan/coach/get/${this.id}`
        )
        console.log(res.data)
        this.growth = res.data.growthplans
      } catch (error) {
        console.log(error.response)
      }
    },
    async getMonth() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}admin/godmode/evaluation/get/${this.id}`
        )
        console.log(res.data)
        this.monthly = res.data
      } catch (error) {
        console.log(error.response)
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
      } catch (error) {
        console.log(error.response)
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

    async switchTab() {
      this.getAppraisal()
    },
  },
  created() {
    this.getPartners()
    this.getWeekly()
    // this.getAppraisal()
    this.getMonth()
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
