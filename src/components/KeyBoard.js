import React from 'react'
import CalculatorKey from './CalculatorKey'
import * as C from './KeyCodes'

export default class KeyBoard extends React.Component {
	render() {
		return (
		<div className="mathTable">	
			<div className='KeyBoardPad'>
			  <div>
			  	<CalculatorKey label='xʸ' keyCode={C.POW}/>
			  	<CalculatorKey label='LOG' keyCode={C.LOG} />
			  	<CalculatorKey label='LN' keyCode={C.LN} />
			  	<CalculatorKey label='eˣ' keyCode={C.EXP} />
			  	<CalculatorKey label='CLR' keyCode={C.CLR} />
			  </div>
			  <div>
			  	<CalculatorKey label='√x' keyCode={C.SQRT} />
			  	<CalculatorKey label='ARC' keyCode={C.ARC} />
			  	<CalculatorKey label='SIN' keyCode={C.SIN} />
			  	<CalculatorKey label='COS' keyCode={C.COS} />
			  	<CalculatorKey label='TAN' keyCode={C.TAN} />
			  </div>
			  <div>
			  	<CalculatorKey label='¹/x' keyCode={C.RECIPROCAL} />
			  	<CalculatorKey label='x↔︎y' keyCode={C.SWAP} />
			  	<CalculatorKey label='R↓' keyCode={C.ROLL_DOWN} />
			  	<CalculatorKey label='STO' keyCode={C.STO} />
			  	<CalculatorKey label='RCL' keyCode={C.RCL} />
			  </div>
			  <div>
			  	<CalculatorKey label='Enter ↑' keyCode={C.ENTER} />
			  	<CalculatorKey label='CHS' keyCode={C.CHS} />
			  	<CalculatorKey label='EEX' keyCode={C.EEX} />
			  	<CalculatorKey label='CLX' keyCode={C.CLX} />
			  </div>
			  <div>
			  	<CalculatorKey label='-' keyCode={C.SUB} />
				<CalculatorKey label='g' keyCode={C.SUB} />  
			  	<CalculatorKey label='7' keyCode={C.D7} />
			  	<CalculatorKey label='8' keyCode={C.D8} />
			  	<CalculatorKey label='9' keyCode={C.D9} />
			  </div>
			  <div>
			  	<CalculatorKey label='+' keyCode={C.ADD} />
				<CalculatorKey label='c' keyCode={C.ADD} />   
			  	<CalculatorKey label='4' keyCode={C.D4} />
			  	<CalculatorKey label='5' keyCode={C.D5} />
			  	<CalculatorKey label='6' keyCode={C.D6} />
			  </div>
			  <div>
			  	<CalculatorKey label='×' keyCode={C.MUL} />
				<CalculatorKey label='h' keyCode={C.ADD} />  
			  	<CalculatorKey label='1' keyCode={C.D1} />
			  	<CalculatorKey label='2' keyCode={C.D2} />
			  	<CalculatorKey label='3' keyCode={C.D3} />
			  </div>
			  <div>
			  	<CalculatorKey label='÷' keyCode={C.DIV} />
				<CalculatorKey label='?' keyCode={C.ADD} />  
			  	<CalculatorKey label='0' keyCode={C.D0} />
			  	<CalculatorKey label='.' keyCode={C.DOT} />
			  	<CalculatorKey label='π' keyCode={C.PI} />
			  </div>
			</div>
		   </div>
			)
	}
}