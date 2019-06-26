import React, { useState } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

function ViewFormGroup(props) {
	const [ cls, setCls ] = useState('')

	const verifyField = (value, min) =>
		value.length < min ? setCls('is-invalid') : setCls('is-valid')

	const {
		col,
		type,
		label,
		placeholder,
		name,
		value,
		children,
		multiple,
		onChange

	} = props

	let { min, max } = props
	min = min >= 0 ? min : 3
	max = max ? max : 45

	if(children) {
		let select
		if(multiple)
			select = (
				<Input className={ cls }
					type={ type } value={ value } name={ name }
					maxLength={ max } onChange={ onChange }
					onBlur={ () => verifyField(value, min) }
					multiple
				>
					{ children }
				</Input>
			)
		else
			select = (
				<Input className={ cls }
					type={ type } value={ value } name={ name }
					maxLength={ max } onChange={ onChange }
					onBlur={ () => verifyField(value, min) }
				>
					{ children }
				</Input>
			)
		
		
		return (
			<FormGroup className={ col }>
				<Label>{ label }</Label>
				{ select }
			</FormGroup>
		)
	}
	
	return (	
		<FormGroup className={ col }>
			<Label>{ label }</Label>
			<Input
				className={ cls }
				type={ type ? type : 'text' } value={ value } name={ name }
				placeholder={ placeholder }  maxLength={ max }
				onChange={ onChange }
				onBlur={ () => verifyField(value, min) }
				
			/>
		</FormGroup>
	)
}

export default ViewFormGroup