import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'

const stateChanger = (state, action)=>{
  if(state === undefined){
    return 0
  }else{
    if(action.type === 'add'){
      var newState = state + action.payload
      return newState
    }else{
      return state
    }
  }
}

const store = createStore(stateChanger)
render()
store.subscribe(()=>{render()})

function addIf(){
  if(store.getState() % 2 === 1){
    store.dispatch({type:'add',payload:2})
  }
}

function add2(){
  setTimeout(()=>{
    store.dispatch({type:'add',payload:1})
  },2000)
}

function render(){
  ReactDOM.render(
    <React.StrictMode>
      <App value={store.getState()} store={store}
      onAdd1={()=>{store.dispatch({type:'add',payload:1})}}
      onMinus1={()=>{store.dispatch({type:'add',payload:-1})}}
      onAddIf={addIf}
      onAdd2={add2}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
