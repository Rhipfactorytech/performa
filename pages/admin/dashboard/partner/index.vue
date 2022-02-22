<template>
  <div>
    <v-breadcrumbs :items="items"></v-breadcrumbs>

    <v-simple-table class="mt-4">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Partner Name</th>
            <th class="text-left">Stream</th>
            <th class="text-left">Designation</th>
            <th class="text-left">Status</th>
            <th class="text-left">View profile</th>
            <th class="text-left">Action</th>
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
            <td>
              <v-btn
                text
                class="text-capitalize"
                x-small
                @click="setDeteleteid(item.workId , item.name)"
                 color="red"
              >
                delete partner
              </v-btn>
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

    <v-dialog v-model="dialogDelete" persistent width="400">
      <v-card>
        <v-card-title class="text-h6 pt-4">
          Delete {{deletename}}?
        </v-card-title>
      
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialogDelete = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="deletePartner()">
            Agree
          </v-btn>
        </v-card-actions>
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
      deleteid : "",
      deletename:'',
      loading: false,
      msg: '',
      dialogDelete: false,
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
          text: 'View all partners',
          disabled: true,
          to: '/admin/dashboard/partner',
        },
        {
          text: 'Add a partner',
          disabled: false,
          to: '/admin/dashboard/partner/add-partner',
        },
      ],
    }
  },
  computed: {},
  methods: {
    setDeteleteid(id, name){
        this.deleteid = id
        this.deletename = name
        this.dialogDelete = true
    },
    async deletePartner(){
        try {
        const res = await axios.delete(
          `${this.$config.baseUrl}admin/godmode/delete/partner/${this.deleteid}`
        )
        console.log(res)
         this.msg = res.data.message
         this.dialogDelete = false
          location.reload()
        this.snackbar = true
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

<style scoped>
a {
  text-decoration: none;
}
</style>
