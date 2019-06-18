import React from 'react'

import ViewFormGroup from '../../../views/FormGroup'

function FormEndereco(props) {
	const { endereco } = props

	return (
		<>
			<div className="form-row">
				<ViewFormGroup
					col='col-lg-4'
					value={ endereco.rua }
					name="rua"
					label="Rua:"
					placeholder="Rua do Candidato"
					min={5}
					onChange={ props.handle }
				/>

				<ViewFormGroup
					col='col-lg-2'
					value={ endereco.numero }
					name="numero"
					type="number" 
					label="Número:"
					placeholder="Número da Casa"
					min={1}
					onChange={ props.handle }
				/>

				<ViewFormGroup
					col='col-lg-4'
					value={ endereco.bairro }
					name="bairro"
					label="Bairro:" 
					placeholder="Bairro do Candidato"
					min={5}
					onChange={ props.handle }
				/>

				<ViewFormGroup
					col='col-lg-2'
					value={ endereco.cep }
					name="cep"
					label="CEP:"
					placeholder="CEP do Candidato"
					min={9} max={9}
					onChange={ props.handle }
				/>

			</div>

			<div className="form-row">
				<ViewFormGroup
					col='col-lg-6'
					value={ endereco.pontoReferencia }
					name="pontoReferencia" 
					label="Ponto de Referência:"
					min={5}
					placeholder="Local de Referência do Candidato"
					onChange={ props.handle }
				/>

				<ViewFormGroup col='col-lg-6'
					value={ endereco.detalhes }
					name="detalhes"
					label="Detalhes:"
					placeholder="Ex: 'Bloco A, AP 10'"
					min={0}
					onChange={ props.handle }
				/>
			</div>
		</>
	)
}

export default FormEndereco