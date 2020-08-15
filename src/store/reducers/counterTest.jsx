const initialState={
  countTest:10,
}

export default function rootReducer (state=initialState, action){

  switch(action.type){
    case "ADD":
      return {
        countTest:state.countTest+1
      }
    case "SUB":
      return {
        countTest:state.countTest-1
      }
    case "ADD_NUMBER":
      return{
        countTest:state.countTest+action.payload
      }
      default:
        return state
  }
}