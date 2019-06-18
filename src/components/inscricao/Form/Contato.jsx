import React from 'react'

import ViewFormGroup from '../../../views/FormGroup'

function FormContato(props) {
	const { contato } = props

	return (
		<>
			<div className="form-row">
				<ViewFormGroup
					col='col-lg-3'
					value={ contato.telefone1 }
					name="telefone1"
					label="Tel. Principal:"
					placeholder="Telefone Principal"
					min={14} max={15}
					onChange={ props.handle }
				/>

				<ViewFormGroup
					col='col-lg-3'
					value={ contato.telefone2 }
					name="telefone2"
					label="Tel. Recados:"
					placeholder="Telefone para Recados"
					min={0} max={15}
					onChange={ props.handle }
				/>

				<ViewFormGroup
					col='col-lg-3'
					value={ contato.telefone3 }
					name="telefone3"
					label="Tel. Recados:"
					placeholder="Telefone para Recados"
					min={0} max={15}
					onChange={ props.handle }
				/>
			</div>
		</>
	)
}

export default FormContato