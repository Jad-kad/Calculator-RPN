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
 ,'<>' :`
 Swap the x and y stacks`
 ,'chs':`
Changing sign

Its primary uses are for entering negative numbers and changing the sign of a computed result.`
,'eex':`
Enter exponent key

You can enter numbers in scientific notation by using the EEX key.

You can save time when entering exact powers of ten
simply by pressing EEX and then the desired power
ten. `,
'sto':`
has an additional memory register for storing
constants. It is not affected by computations. However, a
keyboard entry or RCL immediately following STO
does not raise the stack. 
`,
'rcl':`
It recalls the value of the stored constant (when pressing STO) and raise the stack`,
'rollDown':`
The roll down button is used to reposition the data within the stack.
Example: Load the stack by x=4, y=3, z=2, t=1.

press R four times.
    The fourth R↓ returns the stack to its original
    position 
    (X=4, y=3, Z=2 and t=1)

NOTE: Pressing m after  entering a series of digits to form a number terminates the composition of the number (i. e. , no additional digits can
be appended)

NOTE: The stack is raised and t is lost when a keyboard entry or RCL follows R↓.`,
'clx':`
Clears the x stack only.`,
'arc':`
Inverse trigonometric functions are computed by preceding the desired trigonometric keys with the arc key.
Answers are returned in decimal degrees.`,



}

export const helpMain = `
Reverse Polish notation (RPN), also known as Polish postfix notation, is a mathematical notation in which
operators follow their operands, in contrast to Polish notation (PN), in which operators 
precede their operands.


Press a key to know about its
functionality and navigation.

To go back to the program panel repress the ? key.
`