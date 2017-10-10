import React from 'react'
import store from '../store'
import '../Css/GitButtons.css'

export default class GitButton extends React.Component {

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value,
    })
  }

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove()
  }

  handleGitPrograms() {
    if (store.state.programsMenu === true) {
      if (store.state.gitPrograms.length === 0) {
        const endpoint = 'https://api.github.com/repos/remarcmij/calculator-programs/contents/programs'
        const {gitPrograms} = store.state
        const gitPrograms1 = gitPrograms

        fetch(endpoint)
          .then(blob => blob.json())
          .then(data => gitPrograms.push(...data))
        store.setState({
          gitPrograms: gitPrograms1, programsMenu: false
        })
      } else {
        store.setState({ programsMenu: false })
      }
    }
    else {
      store.setState({ programsMenu: true })
    }
  }

  render() {
    const programsMenuDiv = () => {
      if (store.state.programsMenu === true) {
        const programslinks = store.state.gitPrograms.map((item, index) => {
          return (
            <button className='git-menu-button'
              key={index}
              label={item.name}
              onClick={() => {
                let XMLHTTP = null
                XMLHTTP = new XMLHttpRequest()
                XMLHTTP.onreadystatechange = () => {
                  if (XMLHTTP.readyState === 4 && XMLHTTP.status === 200) {
                    store.setState({ textAreaValue: XMLHTTP.responseText })
                  }
                }
                XMLHTTP.open("GET", item.download_url, false)
                XMLHTTP.send()
                 store.setState({
                programsMenu:false
              })
              }
             }
            >{item.name}</button>
          )
        })
        return programslinks
      } else { console.error('click git') }
    }

    return (
      <div>
        <button onClick={this.handleGitPrograms} className='git-button'> github </button>
        <div className='git-drop-menu'>
          {programsMenuDiv()}
        </div>
      </div>

    )
  }
}
