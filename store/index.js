

export const state = () => {
    workid:[]
    partner:''
    
  }
  
  
  export const mutations = {
    getWorkId(state, payload){
      state.workid = payload
    },
    getName(state, payload){
      state.partner = payload
    }

  }