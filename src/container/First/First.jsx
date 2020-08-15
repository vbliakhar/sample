import React from 'react'

import {connect} from 'react-redux'

class First extends React.Component {

  render(){
    console.log(this.props)
  return(
    <div style={{textAlign: 'center'}}>
      <h1 style={{color:"violet"}}>First page</h1>
      <button onClick={this.props.onAdd}>+</button><hr/>
      <button onClick={this.props.onSub}>-</button><hr/>
      <button onClick={()=>this.props.onAddNumber(-10)}>addNumber</button><hr/>
      {this.props.counter}
    </div>
  )
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    counter: state.counterTest.countTest
  }
}
function mapDispatchToProps(dispatch){
  return{
    onAdd: ()=>dispatch({type:"ADD"}),
    onSub: ()=>dispatch({type:"SUB"}),
    onAddNumber: (number) => dispatch({type:"ADD_NUMBER", payload:number})
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (First)