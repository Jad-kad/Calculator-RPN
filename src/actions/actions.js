import store from '../components/store'

export function operations(keyCode ,label) {
  checkLabelAndKeyCode()
  let [x, y, z, t] = store.state.stack,
    localStack = [x, y, z, t],
    operation = store.state.keypressed,
    localBuffer = store.state.buffer,
    localLastValue = store.state.lastValue,
    localMemo = store.state.memo

  if (store.state.keypressed === true) {
    reOrder()
    store.setState({
      keypressed: false
    })
  }
  if (Number(keyCode) && store.state.lastValue !== null &&
    (store.state.keypressed === 'sin' ||
    store.state.keypressed === 'cos' ||
    store.state.keypressed === 'tan' ||
    store.state.keypressed === 'add' ||
    store.state.keypressed === 'sub' ||
    store.state.keypressed === 'mul' ||
    store.state.keypressed === 'div' ||
    store.state.keypressed === 'sqrt' ||
    store.state.keypressed === 'reciprocal' ||
    store.state.keypressed === 'pow' ||
    store.state.keypressed === 'log' ||
    store.state.keypressed === 'exp' ||
    store.state.keypressed === 'ln' ||
    store.state.keypressed === 'pi' ||
    store.state.keypressed === 'sto' ||
    store.state.keypressed === 'rcl' ||
    store.state.keypressed === 'rollDown' ||
    store.state.keypressed === 'swap')) {
    localStack = [x, x, y, z]
    localStack[0] = '';
    operation = null
  }
  if (store.state.lastValue === 'Error') {
    localLastValue = null
  }
  if (store.state.keypressed === "eex" && Number(keyCode) && !(Number.isSafeInteger(x))) {
    if ((x.length - x.indexOf('e')) === 4) {
      return
    }
    // operation =value
    // if the last char in the x is 0 replace the 0 with the new value
    if (x[x.length - 1] === '0') {
      let eexValue = x.slice(0, (x.length - 1))
      console.log("eexValue", eexValue)
      localStack = [eexValue, y, z, t]
    }
    localLastValue = 0
  }
  //else if(store.state.keypressed ==="eex" && and )
  checkLabelAndKeyCode()
  if (Number(keyCode) && store.state.lastValue === null) {
    // console.log("++++++++++++++++++++++++++++++")
    localLastValue = label
    localStack[0] = '';
    localStack[0] = localStack[0] + label.toString()
    // console.log('Key Pressed is a number=', label)
  } else if (Number(keyCode) && store.state.lastValue !== null) {
    localStack[0] = localStack[0] + label.toString()
  }
  switch (keyCode) {
    case "clr":
      localStack = [0, 0, 0, 0]
      operation = ''
      localLastValue = null

      break
    case "clx":
      localStack[0] = 0;
      localLastValue = null
      break;
    case "rollDown":
      localStack = [y, z, t, x];
      localLastValue = null
      operation = keyCode
      break
    case 'pi':
      localStack = [Math.PI, y, z, t]   
      operation = keyCode
      break
    case "enter":
      if (store.state.keypressed === 'eex') {
        let be = Number(x.slice(0, x.indexOf('e')))
        let ae = Number(x.slice(x.indexOf('e') + 1, x.length))
        let res = (be * (Math.pow(10, ae)))
        console.log("the number Befor e", be)
        console.log("the number after e", ae)
        console.log("the number rsult", res)
        localStack = [res, res, y, z]
        localLastValue = null
        operation = 'Enter'
        // operation = value
      } else {
        localStack = [x, x, y, z]
        localLastValue = null
      }
      // keyStatus=true;
      break
    case "swap":
        localStack = [y, x, z, t]
        localLastValue = null
        operation = keyCode
      // keyStatus=true                            
      break
    case "add":
      x = parseFloat(y) + parseFloat(x)
        operation = keyCode
      reOrderBasicOperation()
      break
    case "sub":
      x = parseFloat(y) - parseFloat(x)
      operation = keyCode
      reOrderBasicOperation()
      break
    case "mul":
      x = parseFloat(y) * parseFloat(x)
      operation = keyCode
      reOrderBasicOperation()
      break
    case "div":
      x = parseFloat(y) / parseFloat(x)
      operation = keyCode
      reOrderBasicOperation()
      break
    case ".":
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
    case 'cos':
      if (operation === 'arc') {
        localStack[0] = covertToDegree(Math.acos(Number(x)))
      } else {
        localStack[0] = Math.cos(convertToRadians(Number(x)))
      }
      operation = keyCode
      break
    case 'sin':
      if (operation === 'arc') {
        localStack[0] = covertToDegree(Math.asin(Number(x)))
      } else {
        localStack[0] = Math.sin(convertToRadians(Number(x)))
      }
      operation = keyCode
      break
    case 'tan':
      if (operation === 'arc') {
        localStack[0] = covertToDegree(Math.atan(Number(x)))
      } else {
        localStack[0] = Math.tan(convertToRadians(Number(x)))
      }
      operation = keyCode
      break
    case 'pow':
      localStack = [Math.pow(y, x), z, t, t]
      operation = keyCode
      break
    case 'sqrt':
      localStack = [Math.sqrt(x), y, z, t]
      operation = keyCode
      break
    case 'reciprocal':
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
    case 'exp':
      localStack = [Math.exp(Number(x)), y, z, t]
      operation = keyCode
      break
    case 'log':
      localStack = [Math.log10(Number(x)), y, z, t]
      operation = keyCode
      break
    case 'ln':
      localStack = [Math.log(Number(x)), y, z, t]
      operation = keyCode
      break
    case 'sto':
      if (store.state.keypressed === 'sto') {
        return
      } else {
        localStack = [x, y, z, t]
        localMemo = x
        operation = keyCode
      }
      break
    case 'rcl':
      localStack = [store.state.memo, x, y, z]
      operation = keyCode
      break
    case 'chs':
      if (x.indexOf('e') !== -1) {
        let tmp = setCharAt(x, x.indexOf('e') + 1)
        localStack = [tmp, y, z, t]
      } else {
        localStack = [-1 * x, y, z, t]
        operation = keyCode
      }
      break
      // we still didnt figure it out eex 
    case 'eex':
      if (store.state.keypressed === 'eex') {
        return
      }
      if (x === 0) {
        localStack = [1 + 'e+0', y, z, t]
        operation = keyCode
      } else {
        localStack = [x + 'e+0', y, z, t]
        operation = keyCode
      }
      break
    default: //console.log("undefined selction")
  }
  store.setState({
    stack: localStack,
    keypressed: operation,
    keyStatus: true,
    lastValue : localLastValue,
    memo : localMemo
  })
  //to re order the stack ater the basic operators +,-,*,/
  function reOrderBasicOperation() {
    localStack = [x, z, t, 0]
  }
  localBuffer = localStack[0]
  function reOrder() {
    store.setState({
      lastValue: null,
      buffer :localBuffer
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
      // console.log(str.substr(0, index) + '-' + str.substr(index + 1))
      operation = "eex"
      return str.substr(0, index) + '-' + str.substr(index + 1);
    } else {
      // console.log(str.substr(0, index) + '-' + str.substr(index + 1))
      operation = "eex"
      return str.substr(0, index) + '+' + str.substr(index + 1);
    }
  }
  function checkLabelAndKeyCode() {
    // console.log("label=", label, "--keycode", keyCode, "LastValu=", store.state.lastValue)
    // console.log("============================")
  }
  // console.log("The End of Operation File")
}