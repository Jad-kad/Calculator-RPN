import store from './store'
import * as fn from '../actions/actions'
import * as C from './ProgramTextCode'

export default function programOperation(newProg) {
    let textValue = store.state.textAreaValue.split(/\n/),
        newArray = []

        newArray = newProg.split(/\n/)
        
        console.log('text value',textValue)
        for(let i=0 ; i < textValue.length; i++){
          let [x,y,z,t] = store.state.stack 
            if (Number(textValue[i])) {   
            
            console.log('newArray',newArray) 

             let localStack = [textValue[i],x,y,z]

            store.setState({stack:localStack,textAreaValue:newProg})
        }  else  if (C.textObject[newArray[i]]){ 
            let codeText = C.textObject[newArray[i]]
            console.log('text code',codeText)
            fn.operations(codeText)
        } else {
          // need to add error handler for syntax error
            console.log('invalid')
        }
        }
    
}
