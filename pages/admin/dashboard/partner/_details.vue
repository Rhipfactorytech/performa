<template>
  <div>
    <!-- edit profile -->
    <v-card class="pt-5 mb-4" v-if="!editmode">
      <v-row class="ml-4 mt-4 mb-4">
        <span class="text-capitalize titl-fnt">{{ name }}'s profile</span>
        <v-spacer />
        <v-btn class="mr-6 text-capitalize titl-fnt-mb-b2" text @click="edit">
          <v-icon color="#5465ff" left>mdi-pencil-outline</v-icon>edit
        </v-btn>
      </v-row>
      <v-row class="mt-4 mx-auto">
        <v-col cols="6">
          <v-text-field
            label="work Id"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="workid"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Work Email"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="email"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Phone number"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="phone"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Password"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model=" password"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Date of resumption"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="date"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Work stream"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="stream"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Designation"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="designation"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Current Skill"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="currentSkill"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Next Skill"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="nextskill"
            readonly
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
            readonly
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
            readonly
          ></v-select>
        </v-col>
      </v-row>
    </v-card>

    <!-- end of edit profile -->

    <v-card class="pt-5" v-if="editmode">
      <v-row class="ml-4 mt-4 mb-4">
        <v-spacer />
        <v-btn class="mr-6 text-capitalize titl-fnt-mb-b2" text @click="edit">
          <v-icon color="#5465ff" left>mdi-close-circle-outline</v-icon>close
        </v-btn>
      </v-row>
      <v-row class="mt-4 mx-auto">
        <v-col cols="6">
          <v-text-field
            label="Partner name"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="name"
            :error-messages="nameErrors"
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="work Id"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="workid"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Work Email"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="email"
            :error-messages="emailErrors"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Phone number"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="phone"
            :error-messages="phoneErrors"
            @input="$v.phone.$touch()"
            @blur="$v.phone.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                outlined
                class="text-capitalize"
                color="#13274a"
                v-model="date"
                label="Date of resumption"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                :error-messages="dateErrors"
                @input="$v.date.$touch()"
                @blur="$v.date.$touch()"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="6">
          <v-select
            item-text="nameOfstream"
            item-value="nameOfstream"
            label="Work stream"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="stream"
            :error-messages="streamErrors"
            @input="$v.stream.$touch()"
            @blur="$v.stream.$touch()"
            :items="selectStream"
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Designation"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="designation"
            :error-messages="designationErrors"
            @input="$v.designation.$touch()"
            @blur="$v.designation.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-select
            :items="skillset"
            label="Current Skill"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="currentSkill"
            :error-messages="currentskillErrors"
            @input="$v.currentSkill.$touch()"
            @blur="$v.currentSkill.$touch()"
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-select
            :items="skillset"
            label="Next Skill"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="nextskill"
            :error-messages="nextskillErrors"
            @input="$v.nextskill.$touch()"
            @blur="$v.nextskill.$touch()"
          ></v-select>
        </v-col>

        <v-col cols="6">
          <v-select
            :items="listofCoach"
            item-text="name"
            item-value="name"
            v-model="roleCoach1"
            label="Role Coach 1"
            outlined
            :error-messages="roleCoachErrors"
            @input="$v.roleCoach1.$touch()"
            @blur="$v.roleCoach1.$touch()"
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
            :error-messages="roleCoach2Errors"
            @input="$v.roleCoach2.$touch()"
            @blur="$v.roleCoach2.$touch()"
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="mt-4 mb-4 mx-6">
        <v-col cols="12">
          <v-btn
            color="#5465ff"
            large
            :loading="loading"
            dark
            @click="add_partner"
            class="mx-auto text-capitalize mb-4"
            block
          >
            update {{ name }}'s profile
          </v-btn>
        </v-col>
      </v-row>
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
import { mapState } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  layout: 'dashboard',
  mixins: [validationMixin],
  validations: {
    email: { required },

    date: { required },
    phone: { required },
    name: { required },

    stream: { required },
    designation: { required },
    currentSkill: { required },
    nextskill: { required },
    roleCoach1: { required },
    roleCoach2: { required },
  },
  data() {
    return {
      date: '',
      snackbar: false,
      snackbarErr: false,
      timeout: 7000,
      msg: '',
      roleCoach1: '',
      roleCoach2: '',
      password: '',
      editmode: false,
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
      skillset: [
        'Associate Specialist',
        'Specialist',
        'Snr. Specialist',
        'Asst. Manager',
        'Manager',
        'Snr. Manager',
        'Vice President',
        'Snr. Vice President',
        'Group Vice President',
        'Executive Vice President',
      ],
      selectStream:'',
    }
  },
  computed: {},
  methods: {
    edit() {
      if (this.editmode == true) {
        this.editmode = false
      } else if (this.editmode == false) {
        this.editmode = true
      }
    },
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
        this.date = res.data.data.dateofresumption
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
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        try {
          const res = await axios.post(
            `${this.$config.baseUrl}admin/godmode/emp/edit/${this.id}`,
            {
              name: this.name,
              workid: this.workid,
              workemail: this.email,
              designation: this.designation,
              tribe: this.stream,
              phonenumber: this.phone,
              dateOfresumption: this.date,
              currentSkill: this.currentSkill,
              nextSkill: this.nextskill,
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
      async getStream() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}admin/godmode/workstream/getstreams`
        )
        console.log(res.data)
        this.selectStream = res.data
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
    this.getStream()
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
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('required.')
      return errors
    },
    workidErrors() {
      const errors = []
      if (!this.$v.workid.$dirty) return errors
      !this.$v.workid.required && errors.push('required')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('required')
      return errors
    },
    phoneErrors() {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.required && errors.push('required')
      return errors
    },
    dateErrors() {
      const errors = []
      if (!this.$v.date.$dirty) return errors
      !this.$v.date.required && errors.push('required')
      return errors
    },
    streamErrors() {
      const errors = []
      if (!this.$v.stream.$dirty) return errors
      !this.$v.stream.required && errors.push('required')
      return errors
    },
    designationErrors() {
      const errors = []
      if (!this.$v.designation.$dirty) return errors
      !this.$v.designation.required && errors.push('required')
      return errors
    },
    currentskillErrors() {
      const errors = []
      if (!this.$v.currentSkill.$dirty) return errors
      !this.$v.currentSkill.required && errors.push('required')
      return errors
    },
    nextskillErrors() {
      const errors = []
      if (!this.$v.nextskill.$dirty) return errors
      !this.$v.nextskill.required && errors.push('required')
      return errors
    },
    roleCoachErrors() {
      const errors = []
      if (!this.$v.roleCoach1.$dirty) return errors
      !this.$v.roleCoach1.required && errors.push('required')
      return errors
    },
    roleCoach2Errors() {
      const errors = []
      if (!this.$v.roleCoach2.$dirty) return errors
      !this.$v.roleCoach2.required && errors.push('required')
      return errors
    },
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
  font-size: 20px;
  color: #585960;
  font-weight: bold;
}

.titl-fnt-mb-b-x {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #5465ff;
}
</style>
