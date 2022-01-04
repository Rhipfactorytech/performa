<template>
  <div>
    <v-row justify="center" align="center" class="mt-10">
      <v-col cols="12" sm="8" md="6">
        <v-card height="550">
          <v-row justify="center" align="center" class="pt-8">
            <v-col cols="12" sm="8" md="6">
              <p class="fnt text-capitalize text-center font-weight-bold">
                enter your details to log in
              </p>
            </v-col>
          </v-row>

          <v-row justify="center" align="center" class="pt-10">
            <v-col>
              <v-text-field
                label="Partner Id"
                style="corner"
                outlined
                color="#5465FF"
                class="rad mx-auto"
                v-model="staffId"
                :error-messages="emailErrors"
                @input="$v.staffId.$touch()"
                @blur="$v.staffId.$touch()"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center" align="center" class="mt-n4">
            <v-col>
              <v-text-field
                label="Password"
                type="password"
                outlined
                color="#5465FF"
                class="rad mx-auto"
                v-model="password"
                :error-messages="passwordErros"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center" align="center" class="mt-n2">
            <v-col>
              <v-btn
                color="#5465ff"
                justify="center"
                absolute
                large
                :loading="loading"
                dark
                @click="login"
                class="rad"
                :style="{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '134',
                }"
              >
                log in
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
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
import { mapMutations } from 'vuex'
import axios from 'axios'
import { validationMixin } from 'vuelidate'
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],

  validations: {
    password: { required, minLength: maxLength(9) },

    staffId: { required },
    password: { required },
  },
  data() {
    return {
      timeout: 7000,
      value: 80,
      olu: this.$config.myPublicVariable,
      loading: false,
      staffId: '',
      password: '',
      msg: '',
      snackbar: false,
      snackbarErr: false,
    }
  },
  methods: {
     ...mapMutations({
      getWorkId: 'getWorkId',
    }),
    async login() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        try {
          const res = await axios.post(`${this.$config.baseUrl}partner/signin`, {
            workid: this.staffId,
            password: this.password,
          })
          console.log(res)
          this.loading = false
          this.msg = res.data.msg
          this.$cookies.set('token', res.data.access_token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
          })
          this.snackbar = true
          this.getWorkId(this.staffId)
           this.$router.push({ name: 'partners-dashboard' })
        } catch (error) {
          console.log(error.response)
          this.loading = false
          this.msg = error.response.data.detail
          this.snackbarErr = true
        }
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
    emailErrors() {
      const errors = []
      if (!this.$v.staffId.$dirty) return errors
      !this.$v.staffId.required && errors.push('Your staff ID is required')
      return errors
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

.fnt {
  font-family: 'Lato', sans-serif;
}

.rad.v-text-field {
  border-radius: 8px;
  width: 420px;
}

.rad.v-text-field--outlined >>> fieldset {
  border-color: #5465ff;
}

.rad.v-btn {
  border-radius: 8px;
  width: 134px;
}
</style>
