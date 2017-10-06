import { KC } from '../calculator-codes/KeyCodes'

export const keyCodeHelp = [
    KC.SIN, KC.COS, KC.ARC, KC.ASIN, KC.CLX, KC.DOT, KC.D0, KC.D1,
    KC.D2, KC.D3, KC.D4, KC.D5, KC.D6, KC.D7, KC.D8, KC.D9, KC.DIV, KC.EEX, KC.LN,
    KC.LOG, KC.MUL, KC.PI, KC.POW, KC.RCL, KC.RECIPROCAL, KC.ROLL_DOWN, KC.SQRT, KC.STO,
    KC.ACOS, KC.ADD, KC.ATAN, KC.CHS, KC.CLR, KC.ENTER, KC.EXP, KC.SUB, KC.SWAP, KC.ALOG, KC.PCT, KC.HELP
]

export const helpText = {
    'alog': `
Antilog: 
    Ten to the power of x
    (10^x). 
`
    , '%': `
calculates (y * x) / 100 
and show the answer in the x stack. `,
'chs':`
changing sign for stack x
`,'switchFn':`
switching functions for dual 
functionality buttons.`,'enter':`
Every time you hit the enter key you push the 
number into the stack above.
 `
}

export const helpMain = `
Reverse Polish notation (RPN), also known as Polish postfix notation, is a mathematical notation in which
operators follow their operands, in contrast to Polish notation (PN), in which operators 
precede their operands.


Press a key to know about its
functionality and navigation.

To go back to the program panel repress the ? key.
`