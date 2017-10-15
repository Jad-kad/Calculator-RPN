import store from '../store'
import * as fn from './actions'
import validKeyCodes from '../calculator-codes/ProgramTextCode'

export default function programOperation() {
    const { textAreaValue } = store.state
    const keyCodes1 = filterTextArea(textAreaValue)

    const keyCodes = keyCodes1
        .replace(/^\s*\n/gm, "")
        .split(/\n/)
        .filter(keyCode => keyCode.length > 0)

    function filterTextArea(textAreaValue) {

        if (textAreaValue.indexOf("```") !== -1) {
            textAreaValue = textAreaValue.substring(textAreaValue.indexOf("```") + 4)
            textAreaValue = textAreaValue.substring(-1, textAreaValue.indexOf("```") - 1)
        }
        textAreaValue = textAreaValue.replace(/ |>>/g, "")
        return textAreaValue
    }
    // console.log(filterTextArea(textAreaValue))

    for (let i = 0; i < keyCodes.length; i++) {
        const keyCode = keyCodes[i]
        const [x, y, z] = store.state.stack

        if (Number.isFinite(Number(keyCode))) {
            const localStack = [keyCode, x, y, z]
            store.setState({ ...store.state, stack: localStack })
        } else if (validKeyCodes.indexOf(keyCode) !== -1) {
            fn.otherOperations(keyCode, store.state)
        } else {
            keyCodes[i] = keyCode + ' => syntax error'
            store.setState({ ...store.state, textAreaValue: keyCodes.join('\n') })
            break
        }
    }
}
