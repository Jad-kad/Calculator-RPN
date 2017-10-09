import React from 'react'
import CalculatorKey from './CalculatorKey'
import { KC } from '../calculator-codes/KeyCodes'
import store from '../store'

export default class KeyBoard extends React.Component {
	componentWillMount() {
		this.subscription = store.subscribe(state => {
			this.setState(state)
		})
	}

	componentWillUnmount() {
		this.subscription.remove()
	}
	render() {
		let switchKey1,
			switchKey2
		let switchLabel1,
			switchLabel2
		if (store.state.switchKey === true) {
			switchKey1 = (<CalculatorKey label='ALOG' keyCode={KC.ALOG} />)
			switchLabel1 = (<label className='seconday-function-label1'>LOG</label>)
			switchKey2 = (<CalculatorKey label='%' keyCode={KC.PCT} />)
			switchLabel2 = (<label className='seconday-function-label1'>xʸ</label>)
		} else {
			switchKey1 = (<CalculatorKey label='LOG' keyCode={KC.LOG} />)
			switchLabel1 = (<label className='seconday-function'>ALOG</label>)
			switchKey2 = (<CalculatorKey label='xʸ' keyCode={KC.POW} />)
			switchLabel2 = (<label className='seconday-function'>%</label>)
		}
		return (
			<div className="mathTable">
				<div className='KeyBoardPad'>
					<div>
						<div className='secondary-function-row1'>
							{switchLabel2}
							{switchLabel1}				
						</div>
						{switchKey2}
						{switchKey1}
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
						<CalculatorKey label='Enter &#x21a9;' keyCode={KC.ENTER} />
						<CalculatorKey label='CHS' keyCode={KC.CHS} />
						<CalculatorKey label='EEX' keyCode={KC.EEX} />
						<CalculatorKey label='CLX' keyCode={KC.CLX} />
					</div>
					<div>
						<CalculatorKey label='-' keyCode={KC.SUB} />
						<CalculatorKey label='S' keyCode={KC.SWITCH_FN} />
						<CalculatorKey label='7' keyCode={KC.D7} />
						<CalculatorKey label='8' keyCode={KC.D8} />
						<CalculatorKey label='9' keyCode={KC.D9} />
					</div>
					<div>
						<CalculatorKey label='+' keyCode={KC.ADD} />
						<CalculatorKey label='c' keyCode={KC.ABS} />
						<CalculatorKey label='4' keyCode={KC.D4} />
						<CalculatorKey label='5' keyCode={KC.D5} />
						<CalculatorKey label='6' keyCode={KC.D6} />
					</div>
					<div>
						<CalculatorKey label='×' keyCode={KC.MUL} />
						<CalculatorKey label='h' keyCode={KC.ABS} />
						<CalculatorKey label='1' keyCode={KC.D1} />
						<CalculatorKey label='2' keyCode={KC.D2} />
						<CalculatorKey label='3' keyCode={KC.D3} />
					</div>
					<div>
						<CalculatorKey label='÷' keyCode={KC.DIV} />
						<CalculatorKey label='?' keyCode={KC.HELP} />
						<CalculatorKey label='0' keyCode={KC.D0} />
						<CalculatorKey label='.' keyCode={KC.DOT} />
						<CalculatorKey label='π' keyCode={KC.PI} />
					</div>
				</div>
			</div>
		)
	}
}