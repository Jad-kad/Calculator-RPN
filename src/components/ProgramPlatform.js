import React from 'react'
import '../Css/ProgramPlatform.css'
import store from '../store'
import programOperation from '../actions/ProgramOperation'
import Checkbox from 'material-ui/Checkbox'

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
    event.preventDefault()
    programOperation()
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
      <div>
      <div className='programWindow1'>                
        <form onSubmit={this.handleSubmit}>
          <div className='text-area-div'>
            <textarea className='textArea' rows='30' cols="36" id='textarea' value={store.state.textAreaValue} onChange={this.handleChange}></textarea>
          </div>
          <div className='bottom-bar-div'>
            <label className='rec-label'> Rec </label>
            <span>
            <Checkbox
              className='rec-check'
              checked={store.state.recording} onCheck={this.handleCheckboxRec}
            />
            </span>
            <input type="submit" value="Run" className='run-button' />
            <button className='clear-button' onClick={this.handleClear}> Clear </button>
          </div>
        </form>
      </div>
      </div>
    )
  }
}

