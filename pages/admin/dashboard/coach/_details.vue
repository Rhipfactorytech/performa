<template>
  <div>
    <v-tabs v-model="tab" background-color="#5465ff" grow dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1" class="text-capitalize"> Coach Profile </v-tab>
      <v-tab
        href="#tab-2"
        class="text-capitalize"
        @click="getWeekly"
        v-if="!editmode"
      >
        Weekly report
      </v-tab>
      <v-tab
        @click="switchTab"
        href="#tab-3"
        class="text-capitalize"
        v-if="!editmode"
      >
        Quaterly Appraisal
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <v-row class="mt-4 mx-auto" v-if="!editmode">
          <v-card width="100%">
            <v-list-item three-line>
              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                  {{ name }}'s profile
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-row class="mt-6 mx-auto">
              <v-col cols="4">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1">
                      Wordk ID
                    </v-list-item-title>
                    <v-list-item-subtitle> {{ workid }} </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="4">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1">
                      Engagement date
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ resumption }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>

              <v-col cols="4">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1">
                      Work Stream
                    </v-list-item-title>
                    <v-list-item-subtitle> {{ stream }} </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>

              <v-col cols="4">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1">
                      Sub-stream
                    </v-list-item-title>
                    <v-list-item-subtitle> afgsz </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>

              <v-col cols="4">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1">
                      Skill level
                    </v-list-item-title>
                    <v-list-item-subtitle> afgsz </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>

              <v-col cols="4">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1">
                      Next Skill level
                    </v-list-item-title>
                    <v-list-item-subtitle> afgsz </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>

              <v-col cols="4">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1">
                    </v-list-item-title>
                    <v-list-item-subtitle> afgsz </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
        <!-- edit profile -->
        <v-row class="mt-4 mx-auto" v-if="editmode">
          <v-col cols="6">
            <v-text-field
              label="Coach name"
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
            <v-select :items="items" label="Role Coach 1" outlined></v-select>
          </v-col>
          <v-col cols="6">
            <v-select :items="items" label="Role Coach 2" outlined></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Password"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="password"
              readonly
            ></v-text-field>
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
              update profile
            </v-btn>
          </v-col>
        </v-row>

        <!-- end of edit profile -->
      </v-tab-item>
      <v-tab-item value="tab-2" v-if="!editmode">
        <v-row class="mt-4 mx-auto mb-6">
          <v-col cols="4">
            <v-card width="400">
              <!--   <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1">
                    December
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item> -->
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
      <v-tab-item value="tab-3" v-if="!editmode">
        <v-row class="mt-4 mx-auto mb-6">
          <v-col cols="4" v-for="(item, index) in appraisal" :key="index">
            <v-card width="300">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1"> </v-list-item-title>
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
    </v-tabs-items>
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
      password: '',
    }
  },
  computed: {},
  methods: {
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
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}admin/godmode/coach/view/${this.id}`
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
        this.password = res.data.password
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
    this.getPartners()
    this.getWeekly()
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
