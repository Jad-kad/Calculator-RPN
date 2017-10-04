import React from 'react'
import CalculatorKey from './CalculatorKey'
import { KC } from '../calculator-codes/KeyCodes'

export default class KeyBoard extends React.Component {
	render() {
		return (
			<div className="mathTable">
				<div className='KeyBoardPad'>
					<div>
						<CalculatorKey label='xʸ' keyCode={KC.POW} />
						<CalculatorKey label='LOG' keyCode={KC.LOG} />
						<CalculatorKey label='LN' keyCode={KC.LN} />
						<CalculatorKey label='eˣ' keyCode={KC.EXP} />
						<CalculatorKey label='CLR' keyCode={KC.CLR} />
					</div>
					<div>
						<CalculatorKey label='√x' keyCode={KC.SQRT} />
						<CalculatorKey label='ARC' keyCode={KC.ARC} />
						<CalculatorKey label='SIN' keyCode={KC.SIN} />
						<CalculatorKey label='COS' keyCode={KC.COS} />
						<CalculatorKey label='TAN' keyCode={KC.TAN} />
					</div>
					<div>
						<CalculatorKey label='¹/x' keyCode={KC.RECIPROCAL} />
						<CalculatorKey label='x↔︎y' keyCode={KC.SWAP} />
						<CalculatorKey label='R↓' keyCode={KC.ROLL_DOWN} />
						<CalculatorKey label='STO' keyCode={KC.STO} />
						<CalculatorKey label='RCL' keyCode={KC.RCL} />
					</div>
					<div>
						<CalculatorKey label='Enter ↑' keyCode={KC.ENTER} />
						<CalculatorKey label='CHS' keyCode={KC.CHS} />
						<CalculatorKey label='EEX' keyCode={KC.EEX} />
						<CalculatorKey label='CLX' keyCode={KC.CLX} />
					</div>
					<div>
						<CalculatorKey label='-' keyCode={KC.SUB} />
						<CalculatorKey label='g' keyCode={KC.SUB} />
						<CalculatorKey label='7' keyCode={KC.D7} />
						<CalculatorKey label='8' keyCode={KC.D8} />
						<CalculatorKey label='9' keyCode={KC.D9} />
					</div>
					<div>
						<CalculatorKey label='+' keyCode={KC.ADD} />
						<CalculatorKey label='c' keyCode={KC.ADD} />
						<CalculatorKey label='4' keyCode={KC.D4} />
						<CalculatorKey label='5' keyCode={KC.D5} />
						<CalculatorKey label='6' keyCode={KC.D6} />
					</div>
					<div>
						<CalculatorKey label='×' keyCode={KC.MUL} />
						<CalculatorKey label='h' keyCode={KC.ADD} />
						<CalculatorKey label='1' keyCode={KC.D1} />
						<CalculatorKey label='2' keyCode={KC.D2} />
						<CalculatorKey label='3' keyCode={KC.D3} />
					</div>
					<div>
						<CalculatorKey label='÷' keyCode={KC.DIV} />
						<CalculatorKey label='?' keyCode={KC.ADD} />
						<CalculatorKey label='0' keyCode={KC.D0} />
						<CalculatorKey label='.' keyCode={KC.DOT} />
						<CalculatorKey label='π' keyCode={KC.PI} />
					</div>
				</div>
			</div>
		)
	}
}