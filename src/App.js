import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super()
  }
  add1(){
    this.props.onAdd1()
  }
  minus1(){
    this.props.onMinus1()
  }
  addIf(){
    this.props.onAddIf()
  }
  add2(){
    this.props.onAdd2()
  }
  render(){
    return (
      <div>
      <div>
        你点击了<span id="value">{this.props.value}</span> 次
        <div>
          <button id="add1" onClick={()=>{this.add1()}}>+1</button>
          <button id="minus1" onClick={()=>{this.minus1()}}>-1</button>
          <button id="add1IfOdd" onClick={()=>{this.addIf()}}>如果是单数+2</button>
          <button id="add1After2Sec" onClick={()=>{this.add2()}}>两秒后+1</button>
        </div>
      </div>
    </div>

    )
  }
}
export default App;
