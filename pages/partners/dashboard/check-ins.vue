<template>
  <div>
    <v-tabs v-model="tab" background-color="#5465ff" grow dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1" class="text-capitalize"> weekly review </v-tab>

      <v-tab href="#tab-2" class="text-capitalize"> monthly check-ins </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <v-row
          justify="center"
          align="center"
          class="mx-auto my-5"
          v-if="week_available"
        >
          <v-col>
            <v-textarea
              outlined
              name="input-7-4"
              label="What new thing did you learn this week?"
              v-model="summary"
            ></v-textarea>

            <v-btn
              color="#5465ff"
              large
              :loading="loading"
              dark
              class="mx-auto"
              block
              @click="weeksum"
            >
              submit
            </v-btn>
          </v-col>
        </v-row>

        <v-row
          justify="center"
          align="center"
          class="mx-auto my-5"
          v-if="!week_available"
        >
          <v-card class="py-6 px-6"> weekly review not yet available </v-card>
        </v-row>
      </v-tab-item>
      <v-tab-item value="tab-2">
        <v-row class="mt-4 mx-auto mb-6" v-if="month_available">
          <v-col cols="4">
            <v-textarea
              outlined
              name="input-7-4"
              label="Are you happy here and why?"
              v-model="happines"
            ></v-textarea>
          </v-col>
          <v-col cols="4">
            <v-textarea
              outlined
              name="input-7-4"
              label="What have you accomplished thus far and what are you most proud of?"
              value="What have you accomplished thus far and what are you most proud of?"
              v-model="accomplishment"
            ></v-textarea>
          </v-col>
          <v-col cols="4">
            <v-textarea
              outlined
              name="input-7-4"
              label="What are your challenges and concerns?"
              v-model="challenges"
            ></v-textarea>
          </v-col>
          <v-col cols="4">
            <v-textarea
              outlined
              name="input-7-4"
              label="How would you rate your performance till date and why?"
              value="How would you rate your performance till date and why?"
              v-model="performance"
            ></v-textarea>
          </v-col>
          <v-col cols="4">
            <v-textarea
              outlined
              name="input-7-4"
              label="How do you suggest your role coach(es) can help you get better?"
              value="How do you suggest your role coach(es) can help you get better?"
              v-model="suggestion"
            ></v-textarea>
          </v-col>
          <v-col cols="4">
            <v-textarea
              outlined
              name="input-7-4"
              label="Other Feedback"
              v-model="feedback"
            ></v-textarea>
          </v-col>
          <v-col cols="4">
            <v-select
              :items="items"
              label="review"
              v-model="review"
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="mx-4 mb-6" v-if="month_available">
          <v-btn
            color="#5465ff"
            large
            :loading="loading"
            dark
            class="mx-auto"
            block
            @click="monthreview"
          >
            submit review
          </v-btn>
        </v-row>

        <v-row
          justify="center"
          align="center"
          class="mx-auto my-5"
          v-if="!month_available"
        >
          <v-card class="py-6 px-6">
            monthly check-ins not yet available
          </v-card>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  layout: 'partner',
  mixins: [validationMixin],
  validations: {
    email: { required },

    phoneNumber: { required },
    name: { required },
  },

  data() {
    return {
      feedback: '',
      suggestion: '',
      performance: '',
      challenges: '',
      accomplishment: '',
      happines: '',
      review: '',
      items: ['Physical meeting', 'Virtual meeting'],
      summary: [],
      week_available: true,
      month_available: true,
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
    }
  },
  computed: {
    nameError() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('name is required')
      return errors
    },
    emailError() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('email is required')
      return errors
    },
    addressError() {
      const errors = []
      if (!this.$v.address.$dirty) return errors
      !this.$v.address.required && errors.push('Address is required')
      return errors
    },
    phoneNumberError() {
      const errors = []
      if (!this.$v.phoneNumber.$dirty) return errors
      !this.$v.phoneNumber.required && errors.push('Phone number is required')
      return errors
    },

    ...mapState({
      workId: (state) => state.workid,
    }),
  },
  methods: {
    async weeksum() {
      this.loading = true
      try {
        const res = await this.$axios.$post(
          `${this.$config.baseUrl}partner/weeklyreport/${this.workId}`,
          {
            message: [this.summary],
          }
        )
        console.log(res)
        // this.body = res.data.data
        this.loading = false
      } catch (error) {
        console.log(error.response)
        this.loading = false
      }
    },
    async monthreview() {
      this.loading = true
      try {
        const res = await this.$axios.$post(
          `${this.$config.baseUrl}admin/godmode/evaluation/partners/${this.workId}`,
          {
            month: 'january',
            review: this.review,
            areyouhappy: this.happines,
            accomplishment: this.accomplishment,
            challenges: this.challenges,
            performance: this.performance,
            suggestion: this.suggestion,
            feedback: this.feedback,
          }
        )
        console.log(res)
        // this.body = res.data.data
        this.loading = false
      } catch (error) {
        console.log(error.response)
        this.loading = false
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
  created() {},
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
