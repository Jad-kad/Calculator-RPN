import store from '../store'
import { KC } from '../calculator-codes/KeyCodes'

const operationCodes = [KC.SIN, KC.COS, KC.TAN, KC.ADD, KC.MUL,
KC.DIV, KC.SQRT, KC.RECIPROCAL,
KC.POW, KC.LOG, KC.EXP, KC.LN, KC.PI,
KC.STO, KC.RCL, KC.ROLL_DOWN, KC.SWAP, KC.SUB, KC.ALOG,KC.PCT]

const inputDigit = digit => state => {
  const [x, ...rest] = state.stack
  const operation = state.operation
  const lastValue = state.lastValue
  if (operation === '') {
    if (x === 0) {
      const stack = [digit, ...rest]
      store.setState({ ...state, stack })
    } else {
      const stack = [x.toString().concat(digit), ...rest]
      store.setState({ ...state, stack })
    }
  } if (operation === KC.ENTER) {
    const stack = [digit, ...rest]
    const operation = ''
    store.setState({ ...state, stack, operation })
  } if (operationCodes.indexOf(operation) > -1) {
    const [x, y, z] = store.state.stack
    const stack = [digit, x, y, z]
    const operation = ''
    store.setState({ ...state, stack, operation })
  } if (lastValue === KC.EEX) {
    const [x, y, z, t] = store.state.stack
    if (x[x.length - 1] === '0') {
      const eexValue = x.replace('+0', '+' + digit)
      const stack = [eexValue, y, z, t]
      console.log("eexValue", eexValue)
      store.setState({ ...state, stack, operation })
    } else if (x.indexOf('e') === x.length - 3) {
      console.log('in', x.indexOf('e'))
      const eexValue2 = x + digit
      const stack = [eexValue2, y, z, t]
      store.setState({ ...state, stack, operation })
    }
  }
}


const clear = state => {
  const stack = [0, 0, 0, 0]
  const operation = ''
  const lastValue = null
  store.setState({ ...state, stack, operation, lastValue })
}

const clearX = state => {
  const [x, ...rest] = store.state.stack
  const stack = [0, ...rest]
  const lastValue = null
  store.setState({ ...state, stack, lastValue })
}

const rollDown = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [y, z, t, x]
  const lastValue = null
  const operation = KC.ROLL_DOWN
  store.setState({ ...state, stack, operation, lastValue })
}

const swap = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [y, x, z, t]
  const lastValue = null
  const operation = KC.SWAP
  store.setState({ ...state, stack, operation, lastValue })
}

const enter = state => {
  const [x, y, z] = store.state.stack
  if (store.state.keyPressed === 'eex') {
    const be = Number(x.slice(0, x.indexOf('e')))
    const ae = Number(x.slice(x.indexOf('e') + 1, x.length))
    const res = (be * (Math.pow(10, ae)))
    const stack = [res, res, y, z]
    const lastValue = null
    const operation = KC.ENTER
    store.setState({ ...state, stack, operation, lastValue })
  } else {
    const stack = [x, x, y, z]
    const lastValue = null
    const operation = KC.ENTER
    store.setState({ ...state, operation, stack, lastValue })
  }
}

const add = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [parseFloat(y) + parseFloat(x), z, t, 0]
  const operation = KC.ADD
  store.setState({ ...state, stack, operation })
}

const sub = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [parseFloat(y) - parseFloat(x), z, t, 0]
  const operation = KC.SUB
  store.setState({ ...state, stack, operation })
}

const mul = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [parseFloat(y) * parseFloat(x), z, t, 0]
  const operation = KC.MUL
  store.setState({ ...state, stack, operation })
}

const div = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [parseFloat(y) / parseFloat(x), z, t, 0]
  const operation = KC.DIV
  store.setState({ ...state, stack, operation })
}

const dot = state => {
  const [x, y, z, t] = store.state.stack
  const string = (x).toString()
  if (!(string).includes('.')) {
    const stack = [x + '.', y, z, t]
    store.setState({ ...state, stack })
  }
}

const pow = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [Math.pow(y, x), z, t, t]
  const operation = KC.POW
  store.setState({ ...state, stack, operation })
}

const sqrt = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [Math.sqrt(x), y, z, t]
  const operation = KC.SQRT
  store.setState({ ...state, stack, operation })
}

const reciprocal = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [1 / parseFloat(x), y, z, t]
  const operation = KC.RECIPROCAL
  store.setState({ ...state, stack, operation })
}

const exp = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [Math.exp(Number(x)), y, z, t]
  const operation = KC.EXP
  store.setState({ ...state, stack, operation })
}

const log = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [Math.log10(Number(x)), y, z, t]
  const operation = KC.LOG
  store.setState({ ...state, stack, operation })
}

const ln = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [Math.log(Number(x)), y, z, t]
  const operation = KC.LN
  store.setState({ ...state, stack, operation })
}

const sto = state => {
  if (store.state.keyPressed === 'sto') {
    return
  } else {
    const [x, y, z, t] = store.state.stack
    const memo = x
    const stack = [x, y, z, t]
    const operation = KC.STO
    store.setState({ ...state, stack, operation, memo })
  }
}

const rcl = state => {
  const [x, y, z] = store.state.stack
  const stack = [store.state.memo, x, y, z]
  const operation = KC.RCL
  store.setState({ ...state, stack, operation })
}

function setCharAt(str, index) {
  if (str[index] === '+') {
    return str.substr(0, index) + '-' + str.substr(index + 1)
  } else {
    return str.substr(0, index) + '+' + str.substr(index + 1)
  }
}

const chs = state => {
  const [x, y, z, t] = store.state.stack
  if (store.state.lastValue === 'eex') {
    if (x.indexOf('e') !== -1) {
      const temp = setCharAt(x, x.indexOf('e') + 1)
      const stack = [temp, y, z, t]
      store.setState({ ...state, stack })
    }
  } else {
    const stack = [-1 * x, y, z, t]
    const operation = KC.CHS
    store.setState({ ...state, stack, operation })
  }
}

const eex = state => {
  const [x, y, z, t] = store.state.stack
  if (store.state.lastValue === 'eex') {
    return
  }
  if (x === 0) {
    const stack = [1 + 'e+0', y, z, t]
    const operation = KC.EEX
    const lastValue = KC.EEX
    store.setState({ ...state, stack, operation, lastValue })
  } else {
    const stack = [x + 'e+0', y, z, t]
    const operation = KC.EEX
    const lastValue = KC.EEX
    store.setState({ ...state, stack, operation, lastValue })
  }
}

const arc = state => {
  if (store.state.operation === KC.ARC) {
    const operation = ''
    store.setState({ ...state, operation })
  } else {
    const operation = 'arc'
    store.setState({ ...state, operation })
  }
}

function convertToRadians(degrees) {
  return (degrees * Math.PI / 180)
}
function covertToDegree(radians) {
  return (radians * 180 / Math.PI)
}

const sin = state => {
  const [x, y, z, t] = store.state.stack
  if (store.state.operation === KC.ARC) {
    const operation = KC.SIN
    const stack = [covertToDegree(Math.asin(Number(x))), y, z, t]
    store.setState({ ...state, stack, operation })
  } else {
    const operation = KC.SIN
    const stack = [Math.sin(convertToRadians(Number(x))), y, z, t]
    store.setState({ ...state, stack, operation })
  }
}

const cos = state => {
  const [x, y, z, t] = store.state.stack
  if (store.state.operation === KC.ARC) {
    const operation = KC.COS
    const stack = [covertToDegree(Math.acos(Number(x))), y, z, t]
    store.setState({ ...state, stack, operation })
  } else {
    const operation = KC.COS
    const stack = [Math.cos(convertToRadians(Number(x))), y, z, t]
    store.setState({ ...state, stack, operation })
  }
}

const tan = state => {
  const [x, y, z, t] = store.state.stack
  if (store.state.operation === KC.ARC) {
    const operation = KC.TAN
    const stack = [covertToDegree(Math.atan(Number(x))), y, z, t]
    store.setState({ ...state, stack, operation })
  } else {
    const operation = KC.TAN
    const stack = [Math.tan(convertToRadians(Number(x))), y, z, t]
    store.setState({ ...state, stack, operation })
  }
}

const pi = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [Math.PI, y, z, t]
  const operation = KC.PI
  store.setState({ ...state, stack, operation })
}

const switchFN = state => {
  let switchKey = store.state.switchKey
  switchKey === false ? switchKey = true : switchKey = false
  store.setState({ ...state, switchKey })
}

const alog = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [Math.pow(10, Number(x)), y, z, t]
  const operation = KC.ALOG
  store.setState({ ...state, stack, operation })
}

const pct = state => {
  const [x, y, z, t] = store.state.stack
  const stack = [Number(y)*Number(x)/100, z, t, 0]
  const operation = KC.PCT
  store.setState({ ...state, stack, operation })
}

const help = state => {
  let help = store.state.help
  help === false ? help = true : help = false
  store.setState({ ...state, help })
}
const instructions = {
  [KC.D0]: inputDigit(0),
  [KC.D1]: inputDigit(1),
  [KC.D2]: inputDigit(2),
  [KC.D3]: inputDigit(3),
  [KC.D4]: inputDigit(4),
  [KC.D5]: inputDigit(5),
  [KC.D6]: inputDigit(6),
  [KC.D7]: inputDigit(7),
  [KC.D8]: inputDigit(8),
  [KC.D9]: inputDigit(9),
  [KC.CLR]: clear,
  [KC.CLX]: clearX,
  [KC.ROLL_DOWN]: rollDown,
  [KC.SWAP]: swap,
  [KC.ENTER]: enter,
  [KC.ADD]: add,
  [KC.SUB]: sub,
  [KC.MUL]: mul,
  [KC.DIV]: div,
  [KC.DOT]: dot,
  [KC.POW]: pow,
  [KC.SQRT]: sqrt,
  [KC.RECIPROCAL]: reciprocal,
  [KC.EXP]: exp,
  [KC.LOG]: log,
  [KC.LN]: ln,
  [KC.STO]: sto,
  [KC.RCL]: rcl,
  [KC.CHS]: chs,
  [KC.EEX]: eex,
  [KC.ARC]: arc,
  [KC.COS]: cos,
  [KC.SIN]: sin,
  [KC.TAN]: tan,
  [KC.PI]: pi,
  [KC.SWITCH_FN]: switchFN,
  [KC.ALOG]: alog,
  [KC.PCT]: pct,
  [KC.HELP]: help
}

export function otherOperations(keyCode, state) {
  const fn = instructions[keyCode]
  if (fn) {
    console.log('fn called', keyCode)
    fn(state)
  } if (store.state.recording) {
    const [x, ...rest] = store.state.stack
    let textAreaValue = store.state.textAreaValue
    if (keyCode === KC.CLR || keyCode === KC.SWITCH_FN) {
      return
    }
    if (keyCode === KC.ENTER) {
      if (textAreaValue === '') {
        textAreaValue = textAreaValue + x + '\n'
        store.setState({ ...state, textAreaValue })
      } else {
        textAreaValue = textAreaValue + '\n'
        store.setState({ ...state, textAreaValue })
      }

    } if ((Number(keyCode) || keyCode === '0') && textAreaValue !== '') {
      textAreaValue = textAreaValue + keyCode
      store.setState({ ...state, textAreaValue })
    }
    if (keyCode !== KC.ENTER && (!Number(keyCode) && keyCode !== '0')) {
      if (Number(textAreaValue.substring(textAreaValue.length - 1)) || (textAreaValue.substring(textAreaValue.length - 1) === '0')) {
        textAreaValue = textAreaValue + '\n' + keyCode + '\n'
        store.setState({ ...state, textAreaValue })
      } else {
        textAreaValue = textAreaValue + keyCode + '\n'
        store.setState({ ...state, textAreaValue })
      }
    }
  }
}




