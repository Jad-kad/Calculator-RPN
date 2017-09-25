import React from 'react'
import './App.css'
import store from './components/store'
import DisplayScreen from './components/DisplayScreen'
import KeyBoard from './components/KeyBoard'
import ProgramPlatform from './components/ProgramPlatform'


class App extends React.Component {
  componentWillMount(){
    store.subscription = store.subscribe(state=>{
      this.setState(state)
    })
  }
  componentWillUnmount(){
   store.subscription.remove();
 }

  render() {
    return (
      <div className="calculatorBody">
        <div>
       <DisplayScreen />
       <KeyBoard />
        </div>
          <ProgramPlatform /> 
      </div>  
    )
  }
}

export default App;