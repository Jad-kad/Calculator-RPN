import React from 'react'
import SaveProgram from './SaveProgram'
import store from '../store'
import '../Css/SaveProgram.css'


export default class SaveButton extends React.Component {

    handleSave() {
        store.setState({ saveProgram: !store.state.saveProgram,programsMenu:false,programLoad:false })
    }
    
    handleLoad() {
        store.setState({ programLoad: !store.state.programLoad,programsMenu:false,saveProgram:false })
    }

    render() {
        let dropDownLoaded
        if (store.state.saveProgram) {
         dropDownLoaded = ( <SaveProgram />)
        } 
        let programLoad
        let loadProgramName = []
        for (let i = 0; i < localStorage.length; i++) {
            loadProgramName = Object.keys(localStorage)
        } console.log('loadProgramName', loadProgramName)

        if (store.state.programLoad) {
            programLoad = loadProgramName.map(function (index) {
                return (
                        <button 
                        className='loaded-programs-button'
                        onClick={() => store.setState({ textAreaValue: localStorage[index] })}>
                            {index}
                        </button>
                    )
            })
        }
        return (
            <div>
            <button 
            className='fa fa-save save-program-button'
            onClick={this.handleSave}></button>
            {dropDownLoaded}
            <button 
            className='load-program-button fa fa-files-o'
            onClick={this.handleLoad}> </button>
            <div className='load-drop-menu'>
            {programLoad}
            </div>
            </div>
        )
    }
}