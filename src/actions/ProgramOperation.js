import store from '../store'
import * as fn from './actions'
import validKeyCodes from '../calculator-codes/ProgramTextCode'

export default function programOperation() {
    const {textAreaValue} = store.state
    const keyCodes = textAreaValue
        .replace(/^\s*\n/gm, "")
        .split(/\n/)
        .filter(keyCode => keyCode.length > 0)

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
