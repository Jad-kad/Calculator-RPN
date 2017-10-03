import store from '../store'
import * as KC from '../calculator-codes/KeyCodes'

export function operations(keyCode) {

  let [x, y, z, t] = store.state.stack,
    localStack = [x, y, z, t],
    operation = store.state.keypressed,
    localLastValue = store.state.lastValue,
    localMemo = store.state.memo,
    recording = store.state.recording,
    progLine = store.state.textAreaValue,
    operationCodes = [KC.SIN,KC.COS,KC.TAN,KC.ADD,KC.MUL,
                      KC.DIV,KC.SQRT,KC.RECIPROCAL,
                      KC.POW,KC.LOG,KC.EXP,KC.LN,KC.PI,
                      KC.STO,KC.RCL,KC.ROLL_DOWN,KC.SWAP]

  if (store.state.keypressed === true) {
    reOrder()
    store.setState({
      keypressed: false
    })
  }
  if ((Number(keyCode) || keyCode === '0') && (operationCodes.indexOf(operation) > -1 )) {
    localStack = [x, x, y, z]
    localStack[0] = '';
    operation = null
  }
  if (store.state.lastValue === 'Error') {
    localLastValue = null
  }
  if (store.state.keypressed === "eex" && (Number(keyCode) || keyCode === '0') && !(Number.isSafeInteger(x))) {
    if ((x.length - x.indexOf('e')) === 4) {
      return
    }
    // if last char in x is 0 replace the 0 with the new value
    if (x[x.length - 1] === '0') {
      let eexValue = x.slice(0, (x.length - 1))
      console.log("eexValue", eexValue)
      localStack = [eexValue, y, z, t]
    }
    localLastValue = '0'
  }

  if ((Number(keyCode) || keyCode === '0') && store.state.lastValue === null) {
    localLastValue = keyCode
    localStack[0] = '';
    localStack[0] = localStack[0] + keyCode.toString()

  } else if ((Number(keyCode) || keyCode === '0') && store.state.lastValue !== null) {

    localStack[0] = localStack[0] + keyCode.toString()
  }
  switch (keyCode) {
    case KC.CLR:
      localStack = [0, 0, 0, 0]
      operation = ''
      localLastValue = null

      break
    case KC.CLX:
      localStack[0] = 0;
      localLastValue = null
      break;
    case KC.ROLL_DOWN:
      localStack = [y, z, t, x];
      localLastValue = null
      operation = keyCode
      break
    case KC.PI:
      localStack = [Math.PI, y, z, t]
      operation = keyCode
      break
    case KC.ENTER:
      if (store.state.keypressed === 'eex') {
        let be = Number(x.slice(0, x.indexOf('e')))
        let ae = Number(x.slice(x.indexOf('e') + 1, x.length))
        let res = (be * (Math.pow(10, ae)))
        localStack = [res, res, y, z]
        localLastValue = null
        operation = 'Enter'
      } else {
        localStack = [x, x, y, z]
        localLastValue = null
      }
    break
    case KC.SWAP:
      localStack = [y, x, z, t]
      localLastValue = null
      operation = keyCode
      break
    case KC.ADD:
      x = parseFloat(y) + parseFloat(x)
      operation = keyCode
      reOrderBasicOperation()
      break
    case KC.SUB:
      x = parseFloat(y) - parseFloat(x)
      operation = keyCode
      reOrderBasicOperation()
      break
    case KC.MUL:
      x = parseFloat(y) * parseFloat(x)
      operation = keyCode
      reOrderBasicOperation()
      break
    case KC.DIV:
      x = parseFloat(y) / parseFloat(x)
      operation = keyCode
      reOrderBasicOperation()
      break
    case KC.DOT:
      var strn = (x).toString()
      if (!(strn).includes('.')) {
        localStack[0] = x + '.'
        console.log(keyCode)
      }
      break
    case 'arc':
      if (operation === 'arc') {
        operation = ''
      } else {
        operation = keyCode
        localStack = [x, y, z, t]
      }
      break
    case KC.COS:
      if (operation === 'arc') {
        localStack[0] = covertToDegree(Math.acos(Number(x)))
      } else {
        localStack[0] = Math.cos(convertToRadians(Number(x)))
      }
      operation = keyCode
      break
    case KC.SIN:
      if (operation === 'arc') {
        localStack[0] = covertToDegree(Math.asin(Number(x)))
      } else {
        localStack[0] = Math.sin(convertToRadians(Number(x)))
      }
      operation = keyCode
      break
    case KC.TAN:
      if (operation === 'arc') {
        localStack[0] = covertToDegree(Math.atan(Number(x)))
      } else {
        localStack[0] = Math.tan(convertToRadians(Number(x)))
      }
      operation = keyCode
      break
    case KC.POW:
      localStack = [Math.pow(y, x), z, t, t]
      operation = keyCode
      break
    case KC.SQRT:
      localStack = [Math.sqrt(x), y, z, t]
      operation = keyCode
      break
    case KC.RECIPROCAL:
      if (x === 0 || x === '0') {
        localStack = ['Error', y, z, t]
      } else {
        localStack = [1 / parseFloat(x), y, z, t]
        store.setState({
          keypressed: keyCode
        })
        operation = keyCode
      }
      break
    case KC.EXP:
      localStack = [Math.exp(Number(x)), y, z, t]
      operation = keyCode
      break
    case KC.LOG:
      localStack = [Math.log10(Number(x)), y, z, t]
      operation = keyCode
      break
    case KC.LN:
      localStack = [Math.log(Number(x)), y, z, t]
      operation = keyCode
      break
    case KC.STO:
      if (store.state.keypressed === 'sto') {
        return
      } else {
        localStack = [x, y, z, t]
        localMemo = x
        operation = keyCode
      }
      break
    case KC.RCL:
      localStack = [store.state.memo, x, y, z]
      operation = keyCode
      break
    case KC.CHS:
      if (store.state.keypressed === 'eex') {
        if (x.indexOf('e') !== -1) {
          let tmp = setCharAt(x, x.indexOf('e') + 1)
          localStack = [tmp, y, z, t]
        }
      } else {
        localStack = [-1 * x, y, z, t]
        operation = keyCode
      }
      break
    case KC.EEX:
      if (store.state.keypressed === 'eex') {
        return
      }
      if (x === 0) {
        localStack = [1 + 'e+0', y, z, t]
        operation = keyCode
        localLastValue = keyCode
      } else {
        localStack = [x + 'e+0', y, z, t]
        operation = keyCode
      }
      break
    default:
  }

  if (recording) {

    if (keyCode === KC.ENTER) {

      console.log(progLine.substring(progLine.length - 1))

      progLine = progLine + x + '\n'

    } if (progLine.substring(progLine.length - 1) === '\n') {

      if (keyCode !== KC.ENTER && (!Number(keyCode) && keyCode !== '0')) {
        progLine = progLine + x + '\n' + keyCode + '\n'
      }
    }

  }

  store.setState({
    stack: localStack,
    keypressed: operation,
    keyStatus: true,
    lastValue: localLastValue,
    memo: localMemo,
    textAreaValue: progLine
  })

  function reOrderBasicOperation() {
    localStack = [x, z, t, 0]
  }
  function reOrder() {
    store.setState({
      lastValue: null
    })
  }
  function convertToRadians(degrees) {
    return (degrees * Math.PI / 180)
  }
  function covertToDegree(radians) {
    return (radians * 180 / Math.PI)
  }
  function setCharAt(str, index) {
    console.log("str:", str, "  Index : ", index)
    if (str[index] === '+') {
      operation = "eex"
      return str.substr(0, index) + '-' + str.substr(index + 1);
    } else {
      operation = "eex"
      return str.substr(0, index) + '+' + str.substr(index + 1);
    }
  }

}