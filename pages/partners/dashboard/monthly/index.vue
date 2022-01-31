<template>
  <div>
    <div>
      <v-row class="mt-4 mx-1">
        <v-btn
          class="titl-fnt-mb-b2"
          text
          to="/partners/dashboard/monthly/take-checkin"
          >take monthly check-in</v-btn
        >
        <v-spacer></v-spacer>
      </v-row>
      <v-simple-table class="mt-4">
        <template v-slot:default>
          <thead>
            <tr class="titl-fnt-mb-b3">
              <th class="text-left">
                <span class="titl-fnt-mb-b3">Year </span>
              </th>
              <th class="text-left">
                <span class="titl-fnt-mb-b3">Month </span>
              </th>
              <th class="text-left">
                <span class="titl-fnt-mb-b3"> Date </span>
              </th>
              <th class="text-left">
                <span class="titl-fnt-mb-b3"> Action </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in messages" :key="index">
              <td>
                <span class="titl-fnt-mb-b2"> {{ item.year }} </span>
              </td>
              <td>
                <span class="titl-fnt-mb-b2"> {{ item.month }} </span>
              </td>
              <td>
                <span class="titl-fnt-mb-b2">{{ item.date }}</span>
              </td>
              <td>
                <nuxt-link
                  :to="'/partners/dashboard/monthly/' + item.monthlyId"
                >
                  view
                </nuxt-link>
              </td>
              <td></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <v-dialog v-model="dialog" width="800px">
      <v-card width="800px" height="350px">
        <v-row class="mx-4 pt-8">
          <v-textarea
            outlined
            name="input-7-4"
            label="Input weekly update here."
            class="titl-fnt-mb-b3"
            v-model="weekUP"
            :error-messages="weekErrors"
            @input="$v.weekUP.$touch()"
            @blur="$v.weekUP.$touch()"
          ></v-textarea>
        </v-row>
        <v-row class="mx-4 mt-4">
          <span class="text-capitalize titl-fnt-mb-b-x"> date of entry </span>

          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-model="date"
                label="Picker in dialog"
                v-bind="attrs"
                v-on="on"
                outlined
                dark
              >
                <v-icon left color="#5465ff" class="mt-n3">
                  mdi-calendar
                </v-icon>
                <span class="titl-fnt mt-n3 text-capitalize">{{ date }}</span>
              </v-btn>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-row>
        <v-row class="mx-auto mt-4">
          <v-btn
            @click="sendMessage"
            color="#5465ff"
            large
            :loading="loading"
            dark
            class="ml-4 titl-fnt-mb-b3"
            :style="{
              width: '134',
            }"
          >
            save update
          </v-btn>
        </v-row>
      </v-card>
    </v-dialog>

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
  mixins: [validationMixin],
  validations: {
    weekUP: { required },
  },

  data() {
    return {
      modal: false,
      weekUP: '',
      timeout: 7000,
      msg: '',
      selectKA: 'general',
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

      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
      appraisal: [],
      body: [],
      messages: [],
      dates: [],
    }
  },
  computed: {
    dateRangeText() {
      return this.dates.join(' - ')
      console.log(this.dates)
    },
  },
  methods: {
    getweek() {
      var getweeknum = this.$moment(this.date, 'YYYYMMDD').week()
      if (getweeknum == 1) {
        var weeknum = 'week1'
      } else if (getweeknum == 2) {
        var weeknum = 'week2'
      } else if (getweeknum == 3) {
        var weeknum = 'week3'
      } else if (getweeknum == 4) {
        var weeknum = 'week4'
      } else if (getweeknum == 5) {
        var weeknum = 'week5'
      } else {
        alert('invalid date')
      }
      return weeknum
    },
    async getmessages() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/monthlycheckin/getall`
        )
        console.log(res)
        this.messages = res.data
      } catch (error) {
        console.log(error.response)
      }
    },
    async getPartnerT() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/coach/get/partner`
        )
        console.log(res.data)
        this.body = res.data
      } catch (error) {
        console.log(error.response)
      }
    },
    async switchTab() {
      this.getAppraisal()
    },
    async getAppraisal() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}admin/godmode/appraisal/${this.stream}/${this.workid}`
          //`${this.$config.baseUrl}admin/godmode/appraisal/Business stream/string`
        )
        // console.log(res.data)
        this.appraisal = res.data
      } catch (error) {
        console.log(error.response)
      }
    },
    async sendMessage() {
      const month = [
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
      ]

      const d = new Date()
      let name = month[d.getMonth()]
      let weeknumber = this.getweek()
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        try {
          const res = await this.$axios.$post(
            `${this.$config.baseUrl}partner/weeklyupdate/create`,
            {
              month: name,
              date: this.date,
              update: this.weekUP,
              week: weeknumber,
            }
          )
          console.log(res)
          this.msg = res.msg
          this.loading = false
          this.snackbar = true
          this.dialog = false
          location.reload()
        } catch (error) {
          console.log(error.response)
          this.loading = false
          this.msg = error.response.data.detail
          this.snackbarErr = true
        }
      }
    },
  },
  created() {
    this.getmessages()
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
  computed: {
    passwordErros() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Your password is required.')
      return errors
    },
    goalErrors() {
      const errors = []
      if (!this.$v.goal.$dirty) return errors
      !this.$v.goal.required && errors.push('required')
      return errors
    },
    pathErrors() {
      const errors = []
      if (!this.$v.path.$dirty) return errors
      !this.$v.path.required && errors.push('required')
      return errors
    },
    kErrors() {
      const errors = []
      if (!this.$v.knowledgeArea.$dirty) return errors
      !this.$v.knowledgeArea.required && errors.push('required')
      return errors
    },
    weekErrors() {
      const errors = []
      if (!this.$v.weekUP.$dirty) return errors
      !this.$v.weekUP.required && errors.push('required')
      return errors
    },
    ...mapState({
      getKA: (state) => state.knowledgeArea,
    }),
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@500&display=swap');

a {
  text-decoration: none;
}

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
  color: #5465ff;
}

.titl-fnt-mb-b2 {
  font-family: 'Urbanist', sans-serif;
  font-size: 12px;
}

.titl-fnt-mb-b3 {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
}
.titl-fnt {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
  color: #585960;
}

.titl-fnt-mb-b-x {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #5465ff;
}
</style>
