import React from 'react'
import store from '../store'
import GitButton from './GitButton'

export default class GitMenu extends React.Component {

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
                console.log('test')
                const endpoint = 'https://api.github.com/repos/remarcmij/calculator-programs/contents/programs'
                const {gitPrograms} = store.state
                const gitPrograms1 = gitPrograms

                fetch(endpoint)
                    .then(blob => blob.json())
                    .then(data => gitPrograms.push(...data))
                store.setState({
                    gitPrograms: gitPrograms1
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

        return (
            <div>
                <button onClick={this.handleGitPrograms} className='git-button'> github </button>
                <div className='git-drop-menu'>
                    <GitButton />
                </div>
            </div>

        )
    }
}