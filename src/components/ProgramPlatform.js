import React from 'react'
import '../Css/ProgramPlatform.css'
import store from '../store'
import programOperation from '../actions/ProgramOperation'

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

  handleCheckboxRec() {
    store.setState({
      recording: !store.state.recording
    })
  }

  render() {
    return (
      <div className='programWindow1'>
        <form onSubmit={this.handleSubmit}>
          <textarea className='textArea' rows='30' cols="36" id='textarea' value={store.state.textAreaValue} onChange={this.handleChange}></textarea>
          <span>
            <input type="submit" value="Run" className='run-button' />
          </span>
        </form>
        <span>
          <button className='clear-button' onClick={this.handleClear}> Clear </button>
        </span>
        <div className='rec-div'>
          <label className='rec-label'> Record </label>
          <input type='checkbox' className='rec-check' checked={store.state.recording} onChange={this.handleCheckboxRec} />
        </div>
      </div>
    )
  }
}

