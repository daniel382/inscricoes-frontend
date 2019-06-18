import React, { Component, Fragment } from 'react'
import { Row, Col, Card, Form, Button } from 'reactstrap'

import './Form.css'
import ViewBreadCrumb from '../../../views/BreadCrumb'
import ViewFormGroup from '../../../views/FormGroup'
import breadcrumb from './BreadCrumb'
import InscricaoServices from '../Services'
import CandidatoModel from '../Model'

class FormInscricao extends Component {
	constructor(props) {
		super(props)
		this.state = {
			candidato: new CandidatoModel()
		}

		this.save = this.save.bind(this)
		this.clear = this.clear.bind(this)
		this.handleCandidato = this.handleCandidato.bind(this)
		this.handleEndereco = this.handleEndereco.bind(this)
		this.handleContato = this.handleContato.bind(this)
		this.handleEscolar = this.handleEscolar.bind(this)
	}

	save() {
		InscricaoServices.post(this.state.candidato)
		this.clear()
	}

	clear() {
		this.setState({ candidato: new CandidatoModel() })
		document.querySelectorAll('.form-control').forEach(item => {
				item.classList.remove('is-valid')
				item.classList.remove('is-invalid')
			})
	}

	handleCandidato(event) {
		const name = event.target.name
		const value = event.target.value
		const { candidato } = this.state

		candidato[name] = (name === 'dataNascimento' && value)
			? new Date(value) : (/^(\d+)$/.test(value)) 
				? parseInt(value, 10) : value

		this.setState({ candidato })
	}

	handleEndereco(event) {
		const name = event.target.name
		const value = event.target.value
		const { candidato } = this.state
		
		candidato.endereco[name] = (/^(\d+)$/.test(value)) ? parseInt(value, 10) : value
		this.setState({ candidato })
	}

	handleContato(event) {
		const name = event.target.name
		const value = event.target.value
		const { candidato } = this.state
		
		candidato.contato[name] = value
		this.setState({ candidato })
	}

	handleEscolar(event) {
		const name = event.target.name
		const value = event.target.value
		const { candidato } = this.state

		candidato.escolar[name] = (/^(\d+)$/.test(value)) ? parseInt(value, 10) : value
		this.setState({ candidato })
	}

	render() {
		const { candidato } = this.state
		const { endereco, contato, escolar } = candidato
		const dataNascimento =
			(candidato.dataNascimento) 
				? candidato.dataNascimento.toJSON().substring(0, 10) : ''

		return (
			<Fragment>
				<ViewBreadCrumb breadcrumb={ breadcrumb }/>

				<Row>
					<Col>
						<Card body>
							<h3>Cadastro de Candidatos</h3>
							<Form>
								<Row>
									<Col lg={4}>
										<ViewFormGroup value={ candidato.nome } name="nome" label="Nome:" 
											placeholder="Nome do Candidato" min={10} onChange={ this.handleCandidato }
										/>
										<ViewFormGroup value={ candidato.nomePai } name="nomePai" label="Pai:"
											placeholder="Nome do Pai do Candidato" onChange={ this.handleCandidato }
										/>
										<ViewFormGroup value={ candidato.nomeMae } name="nomeMae" label="Mãe:"
											placeholder="Nome da Mãe do Candidato" min={10} onChange={ this.handleCandidato }
										/>
										<ViewFormGroup value={ endereco.rua } name="rua" label="Rua:"
											placeholder="Rua do Candidato" onChange={ this.handleEndereco }
										/>
										<ViewFormGroup value={ endereco.bairro } name="bairro" label="Bairro:" 
											placeholder="Bairro do Candidato" onChange={ this.handleEndereco }
										/>
										<ViewFormGroup value={ endereco.pontoReferencia } name="pontoReferencia" 
											label="Ponto de Referência:" placeholder="Local de Referência do Candidato"
											onChange={ this.handleEndereco }
										/>
										<ViewFormGroup value={ endereco.detalhes } name="detalhes" label="Detalhes:"
											placeholder="Ex: 'Bloco A, AP 10'" onChange={ this.handleEndereco } min={0}
										/>
									</Col>

									<Col lg>
										<ViewFormGroup value={ dataNascimento } name="dataNascimento" label="Data de Nascimento:"
											type="date" onChange={ this.handleCandidato }
										/>
										<ViewFormGroup value={ candidato.rg } name="rg" label="RG:"
											placeholder="RG do Candidato" onChange={ this.handleCandidato }
										/>
										<ViewFormGroup value={ candidato.naturalidade } name="naturalidade" label="Naturalidade:"
											placeholder="Onde o Candidato Nasceu" onChange={ this.handleCandidato }
										/>

										<ViewFormGroup value={ candidato.sexo } name="sexo" label="Sexo:" 
											type="select" onChange={ this.handleCandidato }>
											<option value={ null }></option>
											<option value="Feminino">Feminino</option>
											<option value="Masculino">Masculino</option>
										</ViewFormGroup>
										
										<ViewFormGroup value={ endereco.numero } name="numero" type="number" 
											label="Número:" placeholder="Número da Casa" onChange={ this.handleEndereco }
										/>
										<ViewFormGroup value={ endereco.cep } name="cep" label="CEP:"
											placeholder="CEP do Candidato" max='10' onChange={ this.handleEndereco }
										/>
										<ViewFormGroup value={ candidato.rendaFamiliar } name="rendaFamiliar"
											type="number" label="Renda Familiar:" placeholder="Renda Mensal"
											max='7' onChange={ this.handleCandidato }
										/>
									</Col>

									<Col lg>
										<ViewFormGroup value={ contato.telefone } name="telefone" label="Tel. Principal:"
											placeholder="Telefone Principal" max='10' onChange={ this.handleContato }
										/>
										<ViewFormGroup value={ contato.telefoneRecado } name="telefoneRecado" label="Tel. Recados:"
											placeholder="Telefone para Recados" min={0} max='10' onChange={ this.handleContato }
										/>
										<ViewFormGroup value={ contato.celular } name="celular" label="Celular:"
											placeholder="Telefone Celular" min={0} max='10' onChange={ this.handleContato }
										/>
										
										
										<ViewFormGroup value={ escolar.escola } name="escola" label="Escola:"
											placeholder="Escola onde o Candidato Estuda" onChange={ this.handleEscolar }
										/>

										<ViewFormGroup value={ '' } name="ptr" label="Como soube da Guarda Mirim?" 
											type="select" onChange={ this.handleCandidato }
											multiple={ true }
										>
											<option value="Site">Site da GMS</option>
											<option value="Jornal">Jornal</option>
											<option value="Escola">Divulgação na Escola</option>
											<option value="Facebook">Facebook</option>
											<option value="Instagran">Instagran</option>
										</ViewFormGroup>
									</Col>

									<Col lg>
										<ViewFormGroup value={ escolar.notaPortugues } name="notaPortugues"
											type="number" label="Português:" placeholder="Média de Português"
											onChange={ this.handleEscolar }
										/>
										<ViewFormGroup value={ escolar.notaMatematica } name="notaMatematica"
											type="number" label="Matemática:" placeholder="Média de Matemática"
											onChange={ this.handleEscolar }
										/>
										<ViewFormGroup value={ escolar.questionario } name="questionario"
											type="number" label="Questionário:" placeholder="Nota do Questionário Cultural"
											onChange={ this.handleEscolar }
										/>
										<ViewFormGroup value={ escolar.frequencia } name="frequencia"
											type="number" label="Frequência:" placeholder="Frequência do ano letivo"
											onChange={ this.handleEscolar }
										/>
										<ViewFormGroup value={ candidato.observacao } name="observacao"
											label="Observações:" placeholder="Ex. 'RG Vencido'" type="textarea"
											onChange={ this.handleCandidato } min={0}
										/>
										<ViewFormGroup value={ '' } name="ptr" label="Recebe PTR?" 
											type="select" onChange={ this.handleCandidato }>
											<option value={ null }></option>
											<option value={ true }>Sim</option>
											<option value={ false }>Não</option>
										</ViewFormGroup>
									</Col>
								</Row>

								<Row>
									<Col>
										<Button color="primary" onClick={ this.save }>Cadastrar</Button>{' '}
										<Button color="warning" onClick={ this.clear }>Cancelar</Button>
									</Col>
								</Row>
							</Form>
						</Card>
					</Col>
				</Row>
			</Fragment>
		)
	}
}

export default FormInscricao