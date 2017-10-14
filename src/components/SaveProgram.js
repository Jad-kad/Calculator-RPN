import React from 'react'
import store from '../store'
import '../Css/SaveProgram.css'

export default class saveProgram extends React.Component {
    handleSaveButton() {
        if (document.getElementById('inputValue').value.length !== 0) {
            console.log(document.getElementById('inputValue').value)
            const programArea = store.state.textAreaValue
            const programName = document.getElementById('inputValue').value
            localStorage.setItem(programName, programArea)
        } else {
            console.log('please enter a value')
        }
    }


    render() {
        return (
            <div className='save-drop-down'>
                <input type='text' name='program name' id='inputValue'></input>
                <button type="submit" value="Submit" onClick={this.handleSaveButton} className='save-program-submit-button'>submit</button>
            </div>
        )
    }
}


{/* <button onClick={this.handleSaveButton()} className='saveProgram-button'>
save
</button> */}
