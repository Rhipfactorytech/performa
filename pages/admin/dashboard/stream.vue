<template>
<div>
    
<v-tabs
      v-model="tab"
      background-color="#5465ff"
      grow
      dark
      icons-and-text
      
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1" class="text-capitalize">
        view streams
        
      </v-tab>

      <v-tab href="#tab-2" class="text-capitalize">
        Add stream
      </v-tab>

      <v-tab href="#tab-3" class="text-capitalize">
       view Knowledge Area
      </v-tab>

       <v-tab href="#tab-4" class="text-capitalize">
       Add Knowledge Area
      </v-tab>

      
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        value="tab-1"
      >
        <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Stream
          </th>
          <th class="text-left">
            Sub stream
          </th>
          <th class="text-left">
            Role coaches
          </th>
           <th class="text-left">
            Partners
          </th>
        </tr>
      </thead>
        <tbody>
        <tr
        >
          <td>product dev</td>
          <td>ui,ux</td>
            <td>list of coaches</td>
            <td>list of partners</td>
        </tr>
         <tr
        >
          <td>business dev</td>
          <td>ui,ux</td>
            <td>list of coaches</td>
            <td>list of partners</td>
        </tr>
        
      </tbody>
    </template>
  </v-simple-table>







      </v-tab-item>
          <v-tab-item
            value="tab-2"
      >
        <v-card flat>
          <v-card-text>second</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    

  </diV>
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
   head() {
    return {
      script: [{ src: 'https://js.paystack.co/v1/inline.js' }],
    }
  },
  data() {
    return {
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
  created() {
    //console.log(this.new_data)
    console.log(this.$route.query.page_data)
    if (this.$route.query.page_data == undefined) {
      this.ref = 'undefined'
    } else {
      this.ref = this.$route.query.page_data
    }
  },
  methods: {
    confirmDetails() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.e1 = 3
      }
    },
      openPaystack() {
      
        console.log(this.details)
        var name = this.name
        var email = this.email
        var phone = this.phoneNumber
        
        var date = this.picker
        var carName = this.$route.query.name
        var ref = this.ref
        var amount = "500000"
        var key = "pk_test_20beb29a9cd24d4c35105da9ac30711fd5978f3b"

        //  var key ="pk_test_20beb29a9cd24d4c35105da9ac30711fd5978f3b"

        var handler = PaystackPop.setup({
          key: key,
          email: email,
          amount: amount,
          ref: '' + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
          metadata: {
            custom_fields: [
              {
                display_name: 'Mobile Number',
                variable_name: 'mobile_number',
                value: '+2348012345678',
              },
            ],
          },
          callback: async function (response) {
            //  alert('success. transaction ref is ' + response.reference);
            console.log(response.reference)
            axios
              .post(
                `https://mrkayenterprise.herokuapp.com/api/v1/users/bookings`,
                {
                  referenceCode: response.reference,
                  name: name,
                  email: email,
                  phone: phone,
                  carName: carName,
                  ref: ref,
                  date: date,
                }
              )
              .then((res) => {
                console.log(res)
              })

        
          },
          onClose: function () {},
        })
        handler.openIframe()
      
      }
  },

}
</script>
