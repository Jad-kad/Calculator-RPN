import React from 'react'
import './ProgramPlatform.css'
import store from './store'
import programOperation from './ProgramOperation'

export default class ProgramPlatform extends React.Component {
  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove()
  }

  handleChange(event) {
    store.setState({
      textAreaValue: event.target.value
    })
  }

  handleSubmit(event) {
    programOperation(store.state.textAreaValue)
    event.preventDefault()
  }

  handleClear() {
    store.setState({
      textAreaValue: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='programWindow1'>
          <textarea className='textArea' rows='30' cols="36" id='textarea' value={store.state.textAreaValue} onChange={this.handleChange}></textarea>
          <div>
            <input type="submit" value="Run" className='run-button' />
            <button className='clear-button' onClick={this.handleClear}> Clear </button>
            <a className='button' > Clear </a>
          </div>
        </div>
      </form>
    )
  }
}

