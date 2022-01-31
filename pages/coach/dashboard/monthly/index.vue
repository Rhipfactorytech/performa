<template>
  <div>
    <v-simple-table class="mt-4">
      <template v-slot:default>
        <thead>
          <tr class="titl-fnt-mb-b3">
            <th class="text-left">
              <span class="titl-fnt-mb-b3">Partner Name</span>
            </th>
            <th class="text-left">
              <span class="titl-fnt-mb-b3">Stream</span>
            </th>
            <th class="text-left">
              <span class="titl-fnt-mb-b3">SubStream </span>
            </th>
            <th class="text-left">
              <span class="titl-fnt-mb-b3">View monthly check-ins </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in body" :key="item.workid" class="mt-2">
            <td>
              <span class="titl-fnt-mb-b2">{{ item.name }} </span>
            </td>
            <td>
              <span class="titl-fnt-mb-b2">{{ item.tribe }}</span>
            </td>
            <td>
              <span class="titl-fnt-mb-b2">{{ item.designation }}</span>
            </td>
            <!--  <td>
              <span class="titl-fnt-mb-b2">{{ item.action | formatdate }}</span>
            </td> -->
            <td>
              <span class="titl-fnt-mb-b2">
                <nuxt-link :to="'/coach/dashboard/monthly/' + item.workId">
                  view profile
                </nuxt-link>
              </span>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    

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
import Business from '../../../../components/Business.vue'
export default {
  components: { Business },
  layout: 'coach',
  mixins: [validationMixin],
  validations: {
    email: { required },

    phoneNumber: { required },
    name: { required },
  },
  data() {
    return {
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
      body: [],
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
  },
  methods: {
    async getPartners() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/coach/get/partners`
        )
        console.log(res.data)
        var arr = []
        this.body = res.data.asCoach1.concat(res.data.asCoach2)
        console.log(this.body)
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
  },
  created() {
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
  font-size: 20px;
  font-weight: bold;
  color: #5465ff;
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
  font-size: 15px;
  color: #585960;
}

a {
  text-decoration: none;
}
</style>
