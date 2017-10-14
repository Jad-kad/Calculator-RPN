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
    if (store.state.programsMenu === false) {
      if (store.state.gitPrograms.length === 0) {
        const gitPrograms1 = []
        const endpoint = 'https://api.github.com/repos/remarcmij/calculator-programs/contents/programs'
        // console.log('git programs1', gitPrograms1)
      
        // fetch(endpoint)
        //   .then(blob => blob.json())
        //   .then(data => gitPrograms1.push(...data))
      const fetchAsyncA = async () => 
         await (await fetch(endpoint)).json().then(data => gitPrograms1.push(...data)).then(store.setState({
          gitPrograms: gitPrograms1, programsMenu: true,help:false,saveProgram:false,programLoad:false
        }))
        console.log('gitPrograms1', gitPrograms1)       
        fetchAsyncA()
      } else {
        store.setState({ programsMenu: true,help:false,saveProgram:false,programLoad:false })
      }
    }
    else {
      store.setState({ programsMenu: false })
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
                  programsMenu: false
                })
              }
              }
            >{item.name}</button>
          )
        })
        return programslinks
      } else { console.log('click git') }
    }

    return (
      <div>
        <button onClick={this.handleGitPrograms} className='git-button'> <i className="fa fa-github" ></i> </button>
        <div className='git-drop-menu'>
          {programsMenuDiv()}
        </div>
      </div>

    )
  }
}
