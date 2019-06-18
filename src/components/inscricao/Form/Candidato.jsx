import React from 'react'

import ViewFormGroup from '../../../views/FormGroup'

function FormCandidato(props) {
	const { candidato } = props
	const dataNascimento =
			(candidato.dataNascimento) 
				? candidato.dataNascimento.toJSON().substring(0, 10) : ''

	return (
		<>
			<div className="form-row">
				<ViewFormGroup
					col="col-lg-4"
					value={ candidato.nome }
					name="nome" label="Nome:" 
					placeholder="Nome do Candidato"
					min={10}
					onChange={ props.handle }
				/>

				<ViewFormGroup
					col="col-lg-2"
					value={ candidato.rg }
					name="rg" label="RG:"
					placeholder="RG do Candidato"
					min={12} max={12}
					onChange={ props.handle }
				/>

				<ViewFormGroup
					col="col-lg-2"
					value={ dataNascimento }
					name="dataNascimento" label="Data de Nascimento:"
					type="date"
					onChange={ props.handleDate }
				/>

				<ViewFormGroup
					col="col-lg-2"
					value={ candidato.sexo }
					name="sexo" label="Sexo:" 
					type="select"
					onChange={ props.handle }
				>
					<option value={ null }></option>
					<option value="Feminino">Feminino</option>
					<option value="Masculino">Masculino</option>
				</ViewFormGroup>

				<ViewFormGroup
					col="col-lg-2"
					value={ candidato.naturalidade }
					name="naturalidade" label="Naturalidade:"
					placeholder="Onde o Candidato Nasceu"
					onChange={ props.handle }
				/>
			</div>

			<div className="form-row">
				<ViewFormGroup
					col="col-lg-5"
					value={ candidato.nomePai }
					name="nomePai" label="Pai:"
					placeholder="Nome do Pai do Candidato"
					onChange={ props.handle }
				/>
				<ViewFormGroup
					col="col-lg-5"
					value={ candidato.nomeMae }
					name="nomeMae" label="Mãe:"
					placeholder="Nome da Mãe do Candidato"
					min={10}
					onChange={ props.handle }
				/>

				<ViewFormGroup
					col="col-lg-2"
					value={ candidato.rendaFamiliar }
					name="rendaFamiliar" label="Renda Familiar:"
					type="number"
					placeholder="Renda Mensal"
					min={1}
					onChange={ props.handle }
				/>
			</div>

			<div className="form-row">
				<ViewFormGroup
					col="col-lg-3"
					value={ candidato.ptr }
					name="ptr" label="Recebe PTR?"
					type="select"
					onChange={ props.handle }
				>
					<option value={ null }></option>
					<option value={true}>Sim</option>
					<option value={false}>Não</option>
				</ViewFormGroup>

				<ViewFormGroup
					col="col-lg-3"
					value={ candidato.publicidade }
					name="publicidade" label="Como soube da Guarda Mirim?" 
					type="select"
					onChange={ props.handle }
				>
					<option value={ null }></option>
					<option value="Site">Site da GMS</option>
					<option value="Jornal">Jornal</option>
					<option value="Escola">Divulgação na Escola</option>
					<option value="Facebook">Facebook</option>
					<option value="Instagran">Instagran</option>
					<option value="Conhece a GMS">Conheço a Guarda Mirim</option>
				</ViewFormGroup>

				<ViewFormGroup 
					col="col-lg-3"
					value={ candidato.moradia }
					name="moradia" label="Moradia:" 
					type="select"
					onChange={ props.handle }
				>
					<option value={ null }></option>
					<option value="Casa Própria">Casa Própria</option>
					<option value="Aluguel">Aluguel</option>
					<option value="Cedida">Cedida</option>
					<option value="Outros">Outros</option>
				</ViewFormGroup>

				{
					(candidato.moradia === 'Outros')
					? 
						<ViewFormGroup
							col="col-lg-3"
							value={ candidato.moradiaDetalhes }
							name="moradiaDetalhes" label="Qual?"
							placeholder="Descreva a moradia..."
							onChange={ props.handle }
						/>
					: null
				}
			</div>

			<div className="form-row">
				<ViewFormGroup 
					col="col-lg-12"
					value={ candidato.observacoes }
					name="observacoes" label="Observações:"
					placeholder="Ex. 'RG Vencido'"
					type="textarea"
					min={0}
					onChange={ props.handle }
				/>
			</div>
		</>
	)
}

export default FormCandidato