import React from 'react'
import '../Css/ProgramPlatform.css'
import store from '../store'
import programOperation from '../actions/ProgramOperation'
import Checkbox from 'material-ui/Checkbox'
import * as KH from '../help/help'
import GitButton from './GitButton'
import GitMenu from './GitMenu'

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
    let screen
    let text
    let topLabel
    const operation = store.state.operation

    if (store.state.help === true) {
      topLabel = (<label className='top-panel-label-help'>Help panel</label>)
      if (KH.keyCodeHelp.indexOf(operation) > -1) {
        console.log('this is the operation', operation)
        text = KH.helpText[operation]
        screen = (<textarea className='textArea-help'
          rows='30'
          cols="36"
          type='text'
          value={text}
          readOnly ></textarea>)
      } else {
        text = KH.helpMain
        screen = (<textarea className='textArea-help'
          rows='30'
          cols="36"
          type='text'
          value={text}
          readOnly ></textarea>)
      }
    } else if (store.state.programsMenu === true) {
      topLabel = (<label className='top-panel-label-program'>Program panel</label>)
      screen = (<textarea
        className='textArea-menu'
        rows='30'
        cols="36"
        id='textarea'
        value={store.state.textAreaValue}
        onChange={this.handleChange}></textarea>)
    } else {
      topLabel = (<label className='top-panel-label-program'>Program panel</label>)
      screen = (<textarea
        className='textArea'
        rows='30'
        cols="36"
        id='textarea'
        value={store.state.textAreaValue}
        onChange={this.handleChange}></textarea>)
    }
    return (
      <div>
        <div className='programWindow1'>
          <div className='top-bar-div'>
            <GitButton />
            {topLabel}
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className='text-area-div'>
              {screen}
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

