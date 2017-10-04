import React from 'react'
import './App.css'
import store from './store'
import DisplayScreen from './components/DisplayScreen'
import KeyBoard from './components/KeyBoard'
import ProgramPlatform from './components/ProgramPlatform'
import AppBar from 'material-ui/AppBar'


class App extends React.Component {
  componentWillMount() {
    store.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }
  componentWillUnmount() {
    store.subscription.remove()
  }

  render = () =>

    <div className="calculatorBody">
      <div>
        {/*<AppBar title="My Calculator " />*/}
        <DisplayScreen />
        <KeyBoard />
      </div>
      <ProgramPlatform />
    </div>

}

export default App