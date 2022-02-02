<template>
  <div>
    <v-tabs v-model="tab" background-color="#5465ff" grow dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1" class="text-capitalize">partner Profile </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <!-- edit profile -->
        <v-row class="mt-4 mx-auto" v-if="editmode">
          <v-col cols="6">
            <v-text-field
              label="Partner name"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="name"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="work Id"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="workid"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Work Email"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="email"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Phone number"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="phone"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Date of resumption"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="resumption"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Work stream"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="stream"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Designation"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="designation"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Current Skill"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="currentSkill"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Next Skill"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="nextskill"
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-select
              :items="listofCoach"
              item-text="name"
              item-value="name"
              v-model="roleCoach1"
              label="Role Coach 1"
              outlined
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
              :items="listofCoach"
              item-text="name"
              item-value="name"
              v-model="roleCoach2"
              label="Role Coach 2"
              outlined
            ></v-select>
          </v-col>
         
        </v-row>
        <v-row class="mt-4 mb-4 mx-6" v-if="editmode">
          <v-col cols="12">
            <v-btn
              color="#5465ff"
              large
              :loading="loading"
              dark
              @click="add_partner"
              class="mx-auto"
              block
            >
              add role coach
            </v-btn>
          </v-col>
        </v-row>

        <!-- end of edit profile -->
      </v-tab-item>
    </v-tabs-items>
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
  layout: 'dashboard',
  mixins: [validationMixin],
  validations: {
    email: { required },

    phoneNumber: { required },
    name: { required },
  },
  data() {
    return {
      snackbar: false,
      snackbarErr: false,
      timeout: 7000,
      msg: '',
      roleCoach1: '',
      roleCoach2: '',
      password: '',
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
      action: '',
      listofCoach: '',
    }
  },
  computed: {},
  methods: {
    async getCoach() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}admin/godmode/coach/all`
        )
        console.log(res.data)
        this.listofCoach = res.data
      } catch (error) {
        console.log(error.response)
      }
    },
    getColor(status) {
      if (status >= 80 && status <= 100) return 'success'
      else if (status >= 50 && status <= 80) return 'warning'
      else return 'error'
    },
    async switchTab() {
      this.getAppraisal()
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
        this.resumption = res.data.data.dateofresumption
        this.stream = res.data.data.tribe
        this.designation = res.data.data.designation
        this.tribe = res.data.data.tribe
        this.phone = res.data.data.phonenumber
        this.email = res.data.data.workemail
        this.rolecoach = res.data.data.rolecoach
        this.currentSkill = res.data.data.currentskill
        this.nextskill = res.data.data.nextSkill
        this.password = res.data.data.password
        this.roleCoach1 = res.data.data.rolecoach1
        this.roleCoach2 = res.data.data.rolecoach2
      } catch (error) {
        console.log(error.response)
      }
    },
    async add_partner() {
      this.loading = true
      try {
        const res = await axios.post(
          `${this.$config.baseUrl}admin/godmode/emp/edit/${this.id}`,
          {
            roleCoach1: this.roleCoach1,
            roleCoach2: this.roleCoach2,
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
    async takeAction() {
      try {
        const res = await this.$axios.$post(
          `${this.$config.baseUrl}admin/godmode/action/${this.id}`
        )
        console.log(res)
        this.action = res.msg
      } catch (error) {
        console.log(error.response)
      }
    },
    async getAppraisal() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}admin/godmode/appraisal/${this.tribe}/${this.workid}`
          //`${this.$config.baseUrl}admin/godmode/appraisal/Business stream/string`
        )
        // console.log(res.data)
        this.appraisal = res.data
      } catch (error) {
        console.log(error.response)
      }
    },
  },
  created() {
    // this.getPartners()
    this.getPartners()
    this.getWeekly()
    this.getCoach()
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
