<template>
  <div>
    <v-row class="mt-0">
      <v-col cols="6" id="bg">
        <v-row justify="center" align="center" class="mt-8">
          <p class="text-h3">Welcome to PERFOMA</p>
        </v-row>
        <v-row justify="center" id="cent">
          <v-col align="center">
            <div class="mb-4">
            <v-btn
              color="#5465ff"
              large
              dark
              class="rad text-capitalize"
              to="/admin"
              
            >
              Company login
            </v-btn>
            </div>
             <div class="mb-4">
            <v-btn
              color="#5465ff"
              large
              dark
              class="rad text-capitalize"
              to="/coach"
            
            >
              Coach login
            </v-btn>
            </div>
            <div class="mb-4">
            <v-btn
              color="#5465ff"
              large
              dark
              class="rad text-capitalize"
              to="/partners"
            >
              partner login
            </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" >
        <v-row justify="center" align="center" class="xsx">
  <v-list-item-avatar
        tile
        size="200"
        color="grey"
      ></v-list-item-avatar>
        </v-row>
       
           </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'loginpage',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');


.xsx{
   margin-top: 28%;
}
.fnt {
  font-family: 'Lato', sans-serif;
}
#sht {
  padding-top: 80px;
}
.rad.v-text-field {
  border-radius: 8px;
  width: 420px;
}

.rad.v-text-field--outlined >>> fieldset {
  border-color: #5465ff;
}

.rad.v-btn {
  border-radius: 6px;
  width: 160px;
}
#bg {
  background: #ffffff;
  height: 100vh;
}

#cent {
  
  margin-top: 15%;

  
}
</style>
