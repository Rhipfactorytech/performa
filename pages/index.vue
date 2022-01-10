<template>
  <div id="bg">
    <v-row class="mt-0 hidden-sm-and-down">
      <v-col cols="6">
        <v-row justify="start" align="start" class="mt-8 ml-10">
          <p class="titl-fnt">Welcome to PERFOMA</p>
        </v-row>
        <v-row justify="start" id="cent">
          <v-col align="start" class="ml-10">
            <div class="mb-4 text-left sub-fnt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quam pulvinar massa lorem nunc. Mattis sed ut amet,
              eget pretium.
            </div>
            <div class="mb-4">
              <v-btn
                color="#2E2F38"
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
                color="#9854FF"
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
                color="#5465FF"
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
      <v-col cols="6">
        <v-row justify="center" align="center" class="xsx">
          <v-img src="per.png" height="300" width="535" contain />
        </v-row>
      </v-col>
    </v-row>

    <!-- mobile version -->
    <v-row class="hidden-md-and-up mt-0" >
      <v-col cols="12">
        <v-row justify="center" align="center" class="mt-6 mx-auto">
          <p class="titl-fnt-mb">Welcome to PERFOMA</p>
        </v-row>
        <v-row justify="center" align="center" id="cent-mb">
          <v-col align="center" class="mx-auto">
            <div class="mb-8 text-justify sub-fnt-mb mx-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quam pulvinar massa lorem nunc. Mattis sed ut amet,
              eget pretium.
            </div>
            <div class="mb-4">
              <v-btn
                color="#2E2F38"
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
                color="#9854FF"
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
                color="#5465FF"
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
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@500&display=swap');

.xsx {
  margin-top: 20%;
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
  margin-top: 6%;
}

#cent-mb {
  margin-top: 4%;
}
.titl-fnt {
  font-family: 'Urbanist', sans-serif;
  font-size: 52px;
  font-weight: bold;
}

.sub-fnt {
  font-family: 'Urbanist', sans-serif;
  font-size: 22px;
  font-weight: lighter;
}

.titl-fnt-mb {
  font-family: 'Urbanist', sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.sub-fnt-mb {
  font-family: 'Urbanist', sans-serif;
  font-size: 12px;
  font-weight: lighter;
}
</style>
