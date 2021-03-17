import React, {Component} from 'react';
import {connect} from "react-redux"

class App extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div>
      <div>
        你点击了<span id="value">{this.props.n}</span> 次
        <div>
          <button id="add1" onClick={()=>{this.props.add1()}}>+1</button>
          <button id="minus1" onClick={()=>{this.props.minus1()}}>-1</button>
          <button id="add1IfOdd">如果是单数+2</button>
          <button id="add1After2Sec">两秒后+1</button>
        </div>
      </div>
    </div>

    )
  }
}

function mapStateToProps(state){
  return {
    n: state.n
  }
}

function mapDispatchToProps (dispatch) {
  return{
    add1: ()=>{dispatch({type:"add",payload:1})},
    minus1: ()=>{dispatch({type:"add",payload:-1})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//  难点：connect组件接受两个函数(mapStateToProps 和 mapDispatchToProps)为参数，然后把他俩合并起来，作为props传给App
//  connect 解决的问题：不用一层一层传store/调用回调
