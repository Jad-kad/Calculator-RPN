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
'switchFn':`
switching functions for dual 
functionality buttons.`,'enter':`
The enter key repeats the number displayed to a
second internal register (place that holds numbers).

When you now enter a new number, it automatically clears
the display of the old one.

If you want to double the old number, just press + after the enter. Or if you want to square It, Just press ×.`
 ,'<>' :`swap the x and y stacks`
 ,'chs':`
Changing sign

Its primary uses are for entering negative numbers and changing the sign of a computed result.`
,'eex':`
ENTER EXPONENT key

You can enter numbers in scientific notation by using the EEX key.
You can save time when entering exact powers of ten
simply by pressing EEX and then the desired power
ten. `


}

export const helpMain = `
Reverse Polish notation (RPN), also known as Polish postfix notation, is a mathematical notation in which
operators follow their operands, in contrast to Polish notation (PN), in which operators 
precede their operands.


Press a key to know about its
functionality and navigation.

To go back to the program panel repress the ? key.
`