<template>
  <div>
    <v-tabs v-model="tab" background-color="#5465ff" grow dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1" class="text-capitalize"> Send feedback </v-tab>
      <!--   <v-tab href="#tab-2" class="text-capitalize"> Weekly report </v-tab> -->
      <v-tab href="#tab-3" class="text-capitalize" @click="switchTab">
        view feedback
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <v-row class="mx-6 mt-4">
          <v-select
            label="To:"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="sendto"
            item-text="name"
            item-value="workId"
            :items="body"
          ></v-select>
        </v-row>
        <v-row class="mx-6 mt-4">
          <v-text-field
            label="Subject:"
            outlined
            class="text-capitalize"
            color="#13274a"
            v-model="subject"
          ></v-text-field>
        </v-row>
        <v-row class="mx-6 mt-4">
          <v-textarea
            outlined
            name="input-7-4"
            label="Message:"
            v-model="message"
          ></v-textarea>
        </v-row>
        <v-row class="mx-6 mt-4 mb-4">
          <v-btn
            color="#5465ff"
            large
            :loading="loading"
            dark
            @click="sendMessage"
            class="mx-auto"
            block
          >
            Send Message
          </v-btn>
        </v-row>
      </v-tab-item>

      <v-tab-item value="tab-3">
        <v-row class="mt-4 mx-auto mb-6">
          <v-col cols="10" v-for="(item, index) in messages" :key="index">
            <v-card
              width="700"
              v-for="(getmessage, index) in item.messages"
              :key="index"
              class="mb-4"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="mb-1 text-capitalize">
                    <span class="font-weight-black">To: </span>
                    {{ getmessage.to }}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    ><span class="font-weight-black">Date: </span>  {{getmessage.date}}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    ><span class="font-weight-black">Subject: </span>{{ getmessage.subject }}
                  </v-list-item-subtitle>
                    <v-list-item-subtitle>
                  <span class="font-weight-black">Body: </span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    {{ getmessage.body }}
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
      message: '',
      subject: '',
      sendto: '',
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
      appraisal: [],
      body: [],
      messages: [],
    }
  },
  computed: {},
  methods: {
    async getmessages() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/message/view`
        )
        console.log(res.data)
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
    async getPartners() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/coach/viewprofile`
        )
        console.log(res)
        // this.body = res.data.data
        this.name = res.data.name
        this.workid = res.data.workid
        this.resumption = res.data.dateofresumption
        this.stream = res.data.tribe
        this.designation = res.data.designation
        this.tribe = res.data.tribe
        this.phone = res.data.phonenumber
        this.email = res.data.workemail
        this.rolecoach = res.data.rolecoach
        this.currentSkill = res.data.currentskill
        this.nextskill = res.data.nextSkill
      } catch (error) {
        console.log(error.response)
      }
    },
    async sendMessage() {
      this.loading = true
      const d = new Date()
      var month = d.getMonth() + 1
      var day = d.getDate()
      var year = d.getFullYear()
      var date = day + '/' + month + '/' + year
      try {
        const res = await this.$axios.$post(
          `${this.$config.baseUrl}partner/message/partner/${this.sendto}`,
          {
            date: date,
            subject: this.subject,
            body: this.message,
          }
        )
        console.log(res)
        this.loading = false
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
    this.getPartnerT()
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
}
</script>
