<template>
  <div>
    <div v-if="hide">
      <v-tabs v-model="tab" background-color="#5465ff" grow dark icons-and-text>
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1" class="text-capitalize">
          create growth plan
        </v-tab>
        <!--   <v-tab href="#tab-2" class="text-capitalize"> Weekly report </v-tab> -->
        <v-tab href="#tab-3" class="text-capitalize" @click="switchTab">
          view growth plans
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-1">
          <v-row class="mx-6 mt-4">
            <v-text-field
              label="Name of plan:"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="name"
            ></v-text-field>
          </v-row>
          <v-row class="mx-6 mt-4">
            <v-text-field
              label="Duration:"
              outlined
              class="text-capitalize"
              color="#13274a"
              v-model="duration"
            ></v-text-field>
          </v-row>
          <v-row class="mx-6 mt-4">
            <v-textarea
              outlined
              name="input-7-4"
              label="Objective:"
              v-model="objective"
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
              create plan
            </v-btn>
          </v-row>
        </v-tab-item>

        <v-tab-item value="tab-3">
          <v-row class="mt-4 mx-auto mb-6">
            <v-col cols="10" v-for="(item, index) in messages" :key="index">
              <v-card width="700" class="mb-4">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="mb-1 text-capitalize">
                      <span class="font-weight-black">Plan name: </span>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.title }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle
                      ><span class="font-weight-black">Duration: </span>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      {{ item.duration }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      <span class="font-weight-black">Objective: </span>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      {{ item.objective }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </div>
    <div>
      <v-row>
        <v-col>
          <v-btn text class="text-capitalize mb-2 " @click="dialog=true">
            <span class="titl-fnt pl-n2"> add a new growth plan </span>
          </v-btn>
        </v-col>
      </v-row>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">The Goal</th>
              <th class="text-left">Timeline</th>
              <th class="text-left">Knowledge Area</th>
              <th class="text-left">learning plan</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in messages" :key="index">
              <td>{{ item.Goal }}</td>
              <td>{{ item.Timeline }}</td>
              <td>{{ item.knowledgeArea }}</td>
              <td>{{ item.learningPath }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <v-dialog v-model="dialog" width="800px">
      <v-card width="800px" height="450px">
        <v-row justify="center" align="center" class="pt-2">
          <v-card-title>
            <span class="text-capitalize titl-fnt-mb-b">new growth plan</span>
          </v-card-title>
        </v-row>
        <v-row class="mx-6 mt-4">
          <v-text-field
            label="The Goal"
            outlined
            class="text-capitalize titl-fnt-mb"
            color="#13274a"
            v-model="goal"
            hint="what is the goal you intend to achieve"
            :error-messages="goalErrors"
            @input="$v.goal.$touch()"
            @blur="$v.goal.$touch()"
          ></v-text-field>
        </v-row>
        <v-row class="mx-6 mt-4">
          <v-text-field
            label="Learning Path"
            outlined
            class="text-capitalize titl-fnt-mb"
            color="#13274a"
            v-model="path"
            :error-messages="pathErrors"
            @input="$v.path.$touch()"
            @blur="$v.path.$touch()"
            hint="E.g to learn html or to learn how to use canva."
          ></v-text-field>
        </v-row>
        <v-row class="mx-2 mt-4">
          <v-col>
            <v-text-field
              label="Knowledge Area"
              outlined
              class="text-capitalize titl-fnt-mb"
              color="#13274a"
              v-model="knowledgeArea"
              hint="E.g web design or digital marketing or how to use CRM"
              :error-messages="kErrors"
              @input="$v.knowledgeArea.$touch()"
              @blur="$v.knowledgeArea.$touch()"
            ></v-text-field>
          </v-col>
          <v-col>
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
                  v-model="dates"
                  label="Timeline"
                  class="text-capitalize titl-fnt-mb"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="dates"
                @input="menu2 = false"
                range
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row class="mx-2 mt-2 mb-4">
          <v-col>
            <v-btn
              color="#5465ff"
              large
              :loading="loading"
              dark
              @click="sendMessage"
              class="mx-auto titl-fnt-mb-b2 text-capitalize"
            >
              add growth plan
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
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
    goal: { required },
    path: { required },
    knowledgeArea: { required },
    //dateRangeText: { required },
  },

  data() {
    return {
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
    async getmessages() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/growthplan/partner/get/`
        )
        console.log(res)
        this.messages = res.data.growthplans
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
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        try {
          const res = await this.$axios.$post(
            `${this.$config.baseUrl}partner/growthplan/create`,
            {
              goal: this.goal,
              learningPath: this.path,
              knowledgeArea: this.knowledgeArea,
              timeline: this.dates,
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
  font-size: 15px;
}
</style>
