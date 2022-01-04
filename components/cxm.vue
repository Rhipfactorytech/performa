<template>
  <div>
    <v-card>
    <v-expansion-panels width="100%" class="mt-4">
      <v-expansion-panel>
        <v-expansion-panel-header class="text-capitalize"
          >On the job growth
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="onthejob">
            <v-radio
              label="No or minimal progress (0%)"
              :value="0"
              :key="0"
            ></v-radio>
            <v-radio
              label="Satisfactory progress (5%)"
              :value="5"
              :key="5"
            ></v-radio>
            <v-radio
              label="Outstanding progress (10%)"
              :value="10"
              :key="10"
            ></v-radio>
          </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="text-capitalize"
          >Domain Knowledge
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="4">
              <v-radio-group v-model="customerAnalysis">
                <template v-slot:label>
                  <div>Customer analysis</div>
                </template>

                <v-radio :value="5">
                  <template v-slot:label> Weak – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Strong – 10% </template>
                </v-radio>

                <v-radio :value="15">
                  <template v-slot:label> Very Strong – 15% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="customerService">
                <template v-slot:label>
                  <div>Customer Service</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Weak – 5% </template>
                </v-radio>
                <v-radio :value="10">
                  <template v-slot:label> Strong – 10% </template>
                </v-radio>
                <v-radio :value="15">
                  <template v-slot:label> Very Strong – 15% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="4">
              <v-radio-group v-model="channelStrategy">
                <template v-slot:label>
                  <div>Channel Strategy</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Weak – 5% </template>
                </v-radio>
                <v-radio :value="10">
                  <template v-slot:label> Strong – 10% </template>
                </v-radio>
                <v-radio :value="15">
                  <template v-slot:label> Very Strong – 15% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="4">
              <v-radio-group v-model="productKnowledge">
                <template v-slot:label>
                  <div>Product Knowledge</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Weak – 5% </template>
                </v-radio>
                <v-radio :value="10">
                  <template v-slot:label> Strong – 10% </template>
                </v-radio>
                <v-radio :value="15">
                  <template v-slot:label> Very Strong – 15% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="dataAnalysis">
                <template v-slot:label>
                  <div>Data Analysis</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Weak – 5% </template>
                </v-radio>
                <v-radio :value="10">
                  <template v-slot:label> Strong – 10% </template>
                </v-radio>
                <v-radio :value="15">
                  <template v-slot:label> Very Strong – 15% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="text-capitalize"
          >Domain Skill
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="4">
              <v-radio-group v-model="research">
                <template v-slot:label>
                  <div>Research / Surveys</div>
                </template>

                <v-radio :value="5">
                  <template v-slot:label> Weak – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Strong – 10% </template>
                </v-radio>

                <v-radio :value="15">
                  <template v-slot:label> Very Strong – 15% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="proposalWritting">
                <template v-slot:label>
                  <div>Proposal Writting</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Weak – 5% </template>
                </v-radio>
                <v-radio :value="10">
                  <template v-slot:label> Strong – 10% </template>
                </v-radio>
                <v-radio :value="15">
                  <template v-slot:label> Very Strong – 15% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="4">
              <v-radio-group v-model="reportWritting">
                <template v-slot:label>
                  <div>Report Writting</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Weak – 5% </template>
                </v-radio>
                <v-radio :value="10">
                  <template v-slot:label> Strong – 10% </template>
                </v-radio>
                <v-radio :value="15">
                  <template v-slot:label> Very Strong – 15% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="4">
              <v-radio-group v-model="productMgt">
                <template v-slot:label>
                  <div>Project Mgt / Documentation</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Weak – 5% </template>
                </v-radio>
                <v-radio :value="10">
                  <template v-slot:label> Strong – 10% </template>
                </v-radio>
                <v-radio :value="15">
                  <template v-slot:label> Very Strong – 15% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="4">
              <v-radio-group v-model="dataVisulization">
                <template v-slot:label>
                  <div>Data Visualization</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Weak – 5% </template>
                </v-radio>
                <v-radio :value="10">
                  <template v-slot:label> Strong – 10% </template>
                </v-radio>
                <v-radio :value="15">
                  <template v-slot:label> Very Strong – 15% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="text-capitalize"
          >Soft Skills
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="4">
              <v-radio-group v-model="teamPlay">
                <template v-slot:label>
                  <div>Team Play</div>
                </template>

                <v-radio :value="5">
                  <template v-slot:label> Poor – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Average – 10% </template>
                </v-radio>

                <v-radio :value="15">
                  <template v-slot:label> Very Good – 15% </template>
                </v-radio>

                <v-radio :value="20">
                  <template v-slot:label> Outsanding – 20% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="communication">
                <template v-slot:label>
                  <div>Communication</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Poor – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Average – 10% </template>
                </v-radio>

                <v-radio :value="15">
                  <template v-slot:label> Very Good – 15% </template>
                </v-radio>

                <v-radio :value="20">
                  <template v-slot:label> Outsanding – 20% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="4">
              <v-radio-group v-model="Leadership">
                <template v-slot:label>
                  <div>Leadership</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Poor – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Average – 10% </template>
                </v-radio>

                <v-radio :value="15">
                  <template v-slot:label> Very Good – 15% </template>
                </v-radio>

                <v-radio :value="20">
                  <template v-slot:label> Outsanding – 20% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="4">
              <v-radio-group v-model="criticalThinking">
                <template v-slot:label>
                  <div>Critical thinking</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Poor – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Average – 10% </template>
                </v-radio>

                <v-radio :value="15">
                  <template v-slot:label> Very Good – 15% </template>
                </v-radio>

                <v-radio :value="20">
                  <template v-slot:label> Outsanding – 20% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="4">
              <v-radio-group v-model="Organization">
                <template v-slot:label>
                  <div>Organization</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Poor – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Average – 10% </template>
                </v-radio>

                <v-radio :value="15">
                  <template v-slot:label> Very Good – 15% </template>
                </v-radio>

                <v-radio :value="20">
                  <template v-slot:label> Outsanding – 20% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="text-capitalize"
          >Work Output
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="4">
              <v-radio-group v-model="deadline">
                <template v-slot:label>
                  <div>(%) of deadline achieved</div>
                </template>

                <v-radio :value="5">
                  <template v-slot:label> Poor – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Average – 10% </template>
                </v-radio>

                <v-radio :value="15">
                  <template v-slot:label> Very Good – 15% </template>
                </v-radio>

                <v-radio :value="20">
                  <template v-slot:label> Outsanding – 20% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="errorFree">
                <template v-slot:label>
                  <div>(%) of error free work</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Poor – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Average – 10% </template>
                </v-radio>

                <v-radio :value="15">
                  <template v-slot:label> Very Good – 15% </template>
                </v-radio>

                <v-radio :value="20">
                  <template v-slot:label> Outsanding – 20% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="4">
              <v-radio-group v-model="newUsers">
                <template v-slot:label>
                  <div>Number of new users</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Poor – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Average – 10% </template>
                </v-radio>

                <v-radio :value="15">
                  <template v-slot:label> Very Good – 15% </template>
                </v-radio>

                <v-radio :value="20">
                  <template v-slot:label> Outsanding – 20% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="4">
              <v-radio-group v-model="numberOfproject">
                <template v-slot:label>
                  <div>Number of project completed</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Poor – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Average – 10% </template>
                </v-radio>

                <v-radio :value="15">
                  <template v-slot:label> Very Good – 15% </template>
                </v-radio>

                <v-radio :value="20">
                  <template v-slot:label> Outsanding – 20% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="4">
              <v-radio-group v-model="retained">
                <template v-slot:label>
                  <div>(%) of client/users retained</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Poor – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Average – 10% </template>
                </v-radio>

                <v-radio :value="15">
                  <template v-slot:label> Very Good – 15% </template>
                </v-radio>

                <v-radio :value="20">
                  <template v-slot:label> Outsanding – 20% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="complianceJd">
                <template v-slot:label>
                  <div>Compliance to JD</div>
                </template>
                <v-radio :value="5">
                  <template v-slot:label> Poor – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Average – 10% </template>
                </v-radio>

                <v-radio :value="15">
                  <template v-slot:label> Very Good – 15% </template>
                </v-radio>

                <v-radio :value="20">
                  <template v-slot:label> Outsanding – 20% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="text-capitalize"
          >Work Values
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="4">
              <v-radio-group v-model="Enthusiasim">
                <template v-slot:label>
                  <div>Enthusiasim</div>
                </template>

                <v-radio :value="0">
                  <template v-slot:label> Poor – 0% </template>
                </v-radio>

                <v-radio :value="5">
                  <template v-slot:label> Average – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Very Good – 10% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="Honesty">
                <template v-slot:label>
                  <div>Honesty</div>
                </template>

                <v-radio :value="0">
                  <template v-slot:label> Poor – 0% </template>
                </v-radio>

                <v-radio :value="5">
                  <template v-slot:label> Average – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Very Good – 10% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="attention">
                <template v-slot:label>
                  <div>Attention to details</div>
                </template>

                <v-radio :value="0">
                  <template v-slot:label> Poor – 0% </template>
                </v-radio>

                <v-radio :value="5">
                  <template v-slot:label> Average – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Very Good – 10% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="Collaboration">
                <template v-slot:label>
                  <div>Collaboration</div>
                </template>

                <v-radio :value="0">
                  <template v-slot:label> Poor – 0% </template>
                </v-radio>

                <v-radio :value="5">
                  <template v-slot:label> Average – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Very Good – 10% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="Innovation">
                <template v-slot:label>
                  <div>Innovation</div>
                </template>

                <v-radio :value="0">
                  <template v-slot:label> Poor – 0% </template>
                </v-radio>

                <v-radio :value="5">
                  <template v-slot:label> Average – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Very Good – 10% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="Discipline">
                <template v-slot:label>
                  <div>Discipline</div>
                </template>

                <v-radio :value="0">
                  <template v-slot:label> Poor – 0% </template>
                </v-radio>

                <v-radio :value="5">
                  <template v-slot:label> Average – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Very Good – 10% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="Teachablity">
                <template v-slot:label>
                  <div>Teachablity</div>
                </template>

                <v-radio :value="0">
                  <template v-slot:label> Poor – 0% </template>
                </v-radio>

                <v-radio :value="5">
                  <template v-slot:label> Average – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Very Good – 10% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="Ownership">
                <template v-slot:label>
                  <div>Ownership</div>
                </template>

                <v-radio :value="0">
                  <template v-slot:label> Poor – 0% </template>
                </v-radio>

                <v-radio :value="5">
                  <template v-slot:label> Average – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Very Good – 10% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="Resourcefulness">
                <template v-slot:label>
                  <div>Resourcefulness</div>
                </template>

                <v-radio :value="0">
                  <template v-slot:label> Poor – 0% </template>
                </v-radio>

                <v-radio :value="5">
                  <template v-slot:label> Average – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Very Good – 10% </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="4">
              <v-radio-group v-model="Confidentiality">
                <template v-slot:label>
                  <div>Confidentiality</div>
                </template>

                <v-radio :value="0">
                  <template v-slot:label> Poor – 0% </template>
                </v-radio>

                <v-radio :value="5">
                  <template v-slot:label> Average – 5% </template>
                </v-radio>

                <v-radio :value="10">
                  <template v-slot:label> Very Good – 10% </template>
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-card-actions class="mt-8">
        <v-btn
          :loading="loading"
          color="#5465ff"
          outlined
          @click="test"
          class="text-capitalize"
        >
          grade
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      loading:false,
      radioGroup: 0,
      marketAnalysis: 5,
      businessModeling: 5,
      competetitveStrategy: 5,
      productKnowledge: 0,
      onthejob: 0,
      customerAnalysis: 0,
      customerService: 0,
      channelStrategy: 0,
      dataAnalysis: 0,
      research: 0,
      proposalWritting: 0,
      reportWritting: 0,
      productMgt: 0,
      dataVisulization: 0,
      teamPlay: 0,
      communication: 0,
      Leadership: 0,
      criticalThinking: 0,
      Organization: 0,
      deadline: 0,
      errorFree: 0,
      newUsers: 0,
      numberOfproject: 0,
      retained: 0,
      complianceJd: 0,
      Enthusiasim: 0,
      Honesty: 0,
      attention: 0,
      Collaboration: 0,
      Innovation: 0,
      Discipline: 0,
      Teachablity: 0,
      Ownership: 0,
      Resourcefulness: 0,
      Confidentiality: 0,
    }
  },
  computed: {
    ...mapState({
      workId: (state) => state.workid,
    }),
  },
  methods: {
    async test() {
      try {
        this.loading = true
        const res = await this.$axios.$post(
          `${this.$config.baseUrl}partner/appraisal/cxm/${this.workId}`,
          {
            enthusiasm: this.Enthusiasim,
            honesty: this.Honesty,
            attentionDetials: this.attention,
            collaboration: this.Collaboration,
            innovation: this.Innovation,
            discipline: this.Discipline,
            teachability: this.Teachablity,
            ownership: this.Ownership,
            resourcefulnes: this.Resourcefulness,
            confidentaility: this.Confidentiality,
            deadlineAchieved: this.deadline,
            errorFreeWork: this.errorFree,
            newClientAcquired: this.newUsers,
            projectsCompleted: this.numberOfproject,
            valueRevenuegenerated: this.retained,
            complienceJD: this.complianceJd,
            teamPlay: this.teamPlay,
            communcation: this.communication,
            leadership: this.Leadership,
            critcalThinking: this.criticalThinking,
            orgaization: this.Organization,
            customerAnalysis: this.customerAnalysis,
            customerService: this.customerService,
            channelStrategy: this.channelStrategy,
            productKnowledge: this.productKnowledge,
            dataAnalysis: this.dataAnalysis,
            onThejob: this.onthejob,
            research: this.research,
            proposalWriting: this.proposalWritting,
            reportWriting: this.reportWritting,
            productMgt: this.productMgt,
            dataVisualization: this.dataVisulization,
          }
        )
        console.log(res)
        this.loading = false
      } catch (error) {
        this.loading = false
        console.log(error.response)
      }
    },
  },
}
</script>
