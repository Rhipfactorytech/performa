

export const state = () => {
    workid:[]
    
  }
  
  
  export const mutations = {
    getWorkId(state, payload){
      state.workid = payload
    }
  }