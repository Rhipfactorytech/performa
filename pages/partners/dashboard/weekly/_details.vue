<template>
  <div>
    <v-row class="mt-4 mx-auto">
      <v-card width="100%" outlined height="250">
        <v-row class="mx-4 mt-4">
          <v-textarea
            outlined
            name="input-7-4"
            label="Input weekly update here."
            class="titl-fnt-mb-b3"
            v-model="weekUP"
            readonly
          ></v-textarea>
        </v-row>
        <v-row class="mx-4 mt-1">
          <v-btn outlined dark>
           
            <span class="titl-fnt text-capitalize">{{ date }}</span>
             <v-icon right small color="#5465ff" class=""> mdi-calendar </v-icon>
          </v-btn>
        </v-row>
      </v-card>
    </v-row>

    <v-row class="mt-10 mx-auto">
      <v-col cols="6" class="mr-auto">
        <v-row>
          <span class="titl-fnt-mb-b3"> Role Coach 1: null </span>
        </v-row>
        <v-row>
          <v-card width="98%" outlined height="50">
            <v-chip class="ml-4 mt-2 titl-fnt-mb-b3" color="#5465ff" dark small>
              no fedback yet
            </v-chip></v-card
          >
        </v-row>
      </v-col>
      <v-col cols="6" class="ml-auto">
        <v-row>
          <span class="titl-fnt-mb-b3"> Role Coach 2: null </span>
        </v-row>
        <v-row>
          <v-card width="100%" outlined height="50"
            ><v-chip
              class="ml-4 mt-2 titl-fnt-mb-b3"
              color="#5465ff"
              dark
              small
            >
              no fedback yet
            </v-chip>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" :timeout="timeout" color="success" top>
      {{ msg }}
    </v-snackbar>
    <v-snackbar v-model="snackbarErr" :timeout="timeout" color="error" top>
      {{ msg }}
    </v-snackbar>
  </div>
</template>

<script>
import moment from 'moment'
import { format, parseISO } from 'date-fns'
import axios from 'axios'
import { mapState } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  layout: 'partner',
  mixins: [validationMixin],
  validations: {
    weekUP: { required },

    //dateRangeText: { required },
  },

  data() {
    return {
      timeout: 7000,
      msg: '',
      modal: false,
      weekUP: '',
      menu1: false,
      menu2: false,
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
      date: '',
      menu2: false,
      appraisal: [],
      body: [],
      messages: [],
      dates: [],
    }
  },
  methods: {
    async getmessages() {
      try {
        const res = await this.$axios.$get(
          `${this.$config.baseUrl}partner/weeklyupdate/get/${this.id}`
        )
        console.log(res)
        this.weekUP = res.data.update
        this.date = res.data.date
      } catch (error) {
        console.log(error.response)
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
  font-size: 15px;
  font-weight: bold;
  color: #5465ff;
}

.titl-fnt-mb-b2 {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
}

.titl-fnt-mb-b3 {
  font-family: 'Urbanist', sans-serif;
  font-size: 12px;
}
.titl-fnt {
  font-family: 'Urbanist', sans-serif;
  font-size: 10px;
  color: #5465ff;
}
.v-text-field {
  width: 20px;
}
</style>
