import React from 'react'
import './DisplayScreen.css'
import store from './store'

export default class DisplayScreen extends React.Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

	render() {

		return (
			<div className="calculator-display1">
          <div className="calculator-display">
            <div className="stackDiv">{store.state.stack[3]}</div>
            <div className="stackDiv">{store.state.stack[2]}</div>
            <div className="stackDiv">{store.state.stack[1]}</div>
            <div className="stackDiv">{store.state.stack[0]}</div>
         </div>
        </div>
			)
	}
}