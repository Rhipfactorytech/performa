<template>
  <div>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-tabs v-model="tab" background-color="#5465ff" grow dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1" class="text-capitalize"> View partner </v-tab>

      <v-tab href="#tab-2" class="text-capitalize"> Add partner </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <v-simple-table class="mt-4">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Partner Name</th>
                <th class="text-left">Stream</th>
                <th class="text-left">Designation</th>
                <th class="text-left">Status</th>
                <th class="text-left">View profile</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in body" :key="item.workid" class="mt-2">
                <td>{{ item.name }}</td>
                <td>{{ item.tribe }}</td>
                <td>{{ item.designation }}</td>
                <td>{{ item.action | formatdate }}</td>
                <td>
                  <nuxt-link :to="'/admin/dashboard/partner/' + item.workId">
                    view profile
                  </nuxt-link>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-tab-item>
      <v-tab-item value="tab-2">
        <v-card flat>
          <v-row class="mt-4 mx-auto">
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
              <v-select
                item-text="nameOfstream"
                item-value="nameOfstream"
                label="Work stream"
                outlined
                class="text-capitalize"
                color="#13274a"
                v-model="stream"
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
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                label="Role Coach"
                outlined
                class="text-capitalize"
                color="#13274a"
                v-model="rolecoach"
                item-text="name"
                item-value="name"
                :items="listofCoach"
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
                class="mx-auto"
                block
              >
                Add partner
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
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
      selectStream: [],
      listofCoach: [],
      skillset: ['associate specialist', 'specialist'],
      items: [
        {
          text: 'Partners',
          disabled: true,
          to: '/admin/dashboard/partner',
        },
        {
          text: 'Add partner',
          disabled: false,
          to: '/admin/dashboard/partner/add-partner',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }
  },
  computed: {},
  methods: {
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
    async getPartners() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}admin/godmode/emp/viewall`
        )
        console.log(res.data)
        this.body = res.data
      } catch (error) {
        console.log(error.response)
      }
    },
    async add_partner() {
      this.loading = true
      try {
        const res = await this.$axios.$post(
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
        this.msg = res.msg
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
    this.getStream()
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
