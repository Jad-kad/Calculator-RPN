import store from '../store'
import * as fn from './actions'
import {textObject1} from '../calculator-codes/ProgramTextCode'

export default function programOperation(newProg) {

    let textValue = store.state.textAreaValue,

        newArray1 = textValue.replace(/^\s*\n/gm, ""),
        newArray = newArray1.split(/\n/)

    // console.log('text value', newArray)

    for (let i = 0; i < newArray.length; i++) {

        let [x, y, z, t] = store.state.stack

        if ((Number(newArray[i]) || newArray[i] === '0')) {

            let localStack = [newArray[i], x, y, z]

            store.setState({ stack: localStack, textAreaValue: newProg })
            
        } else if (textObject1.indexOf(newArray[i])) {
            console.log('2222',textObject1.indexOf(newArray[i]))
            let codeText = newArray[i]
             console.log('text code', codeText)

            fn.operations(codeText)

        } else {

            newArray[i] = newArray[i] + ' => syntax error'

            if (newArray.indexOf('') !== -1) {

                newArray.pop()

                newProg = newArray.join('\n')

                store.setState({ textAreaValue: newProg })
            }
        }

    }
}
