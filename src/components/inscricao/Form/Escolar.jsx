import React from 'react'

import ViewFormGroup from '../../../views/FormGroup'

function FormEscolar(props) {
	const { escolar } = props

	return (
		<>
			<div className="form-row">
				<ViewFormGroup
					col='col-lg-4'
					value={ escolar.escola }
					name="escola"
					label="Escola:"
					placeholder="Escola onde o Candidato Estuda"
					min={5}
					onChange={ props.handle }
				/>

				<ViewFormGroup
					col='col-lg-2'
					value={ escolar.notaPortugues }
					name="notaPortugues"
					type="number"
					label="Português:"
					placeholder="Média de Português"
					min={1} max={2}
					onChange={ props.handle }
				/>

				<ViewFormGroup
					col='col-lg-2'
					value={ escolar.notaMatematica }
					name="notaMatematica"
					type="number"
					label="Matemática:"
					placeholder="Média de Matemática"
					min={1} max={2}
					onChange={ props.handle }
				/>

				<ViewFormGroup
					col='col-lg-2'
					value={ escolar.questionario }
					name="questionario"
					type="number"
					label="Questionário:"
					placeholder="Questionário Cultural"
					min={1} max={2}
					onChange={ props.handle }
				/>

				<ViewFormGroup
					col='col-lg-2'
					value={ escolar.frequencia }
					name="frequencia"
					type="number"
					label="Frequência:"
					placeholder="Ano letivo"
					min={1} max={3}
					onChange={ props.handle }
				/>
			</div>
		</>
	)
}

export default FormEscolar