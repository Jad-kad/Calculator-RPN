import React from 'react'
import PropTypes from 'prop-types'
import * as action from '../actions/actions'
import './CalculatorKey.css' 


export default class CalculatorKey extends React.Component {

	static propTypes = {
		label: PropTypes.string.isRequired,
		keyCode:PropTypes.string.isRequired
	}

	render() {
		const {label, keyCode} = this.props

		return(
			<button className={`CalculatorKey KeyPad-${keyCode}`} onClick={() => action.operations(keyCode ,label)}>
				{label}
			</button>	
			)
	}
}