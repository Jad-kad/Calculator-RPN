import store from '../store'
import * as fn from './actions'
import * as C from '../calculator-codes/ProgramTextCode'

export default function programOperation(newProg) {

    let textValue = store.state.textAreaValue,
        
        newArray1 = textValue.replace(/^\s*\n/gm, ""),
        newArray = newArray1.split(/\n/)

    console.log('text value', newArray)
    for (let i = 0; i < newArray.length; i++) {
        let [x, y, z, t] = store.state.stack
        if ((Number(newArray[i]) || newArray[i] === '0')) {

            console.log('newArray', 'newArray')

            let localStack = [newArray[i], x, y, z]

            store.setState({ stack: localStack, textAreaValue: newProg })
        } else if (C.textObject[newArray[i]]) {
            let codeText = C.textObject[newArray[i]]
            console.log('text code', codeText)
            fn.operations(codeText)
        } else {
            newArray[i] = newArray[i] + ' => syntax error'
            // console.log(newArray[i])
            // console.log('newarray',newArray)
            newProg = newArray.join('\n')

            // console.log(newProg)
            store.setState({ textAreaValue: newProg })
            return
        }
    }

}
