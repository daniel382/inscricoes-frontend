import React, { Component, Fragment } from 'react'
import { Row, Col, Card, Form, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

import './Form.css'
import FormCandidato from './Candidato'
import FormEndereco from './Endereco'
import FormContato from './Contato'
import FormEscolar from './Escolar'

import ViewBreadCrumb from '../../../views/BreadCrumb'
import breadcrumb from './BreadCrumb'
import ModalView from '../../../views/Modal'
import InscricaoServices from '../Services'
import CandidatoModel from '../Model'

class FormInscricao extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: null,
			message: null,

			showModal: false,

			candidato: new CandidatoModel(),
			activeTab: '1'
		}

		this.save = this.save.bind(this)
		this.clear = this.clear.bind(this)
		this.handle = this.handle.bind(this)
		this.handleCandidato = this.handleCandidato.bind(this)
		this.handleDate = this.handleDate.bind(this)
		this.handleEndereco = this.handleEndereco.bind(this)
		this.handleContato = this.handleContato.bind(this)
		this.handleEscolar = this.handleEscolar.bind(this)
		this.handleModal = this.handleModal.bind(this)
	}

	toggle(tab) {
		if(this.state.activeTab !== tab)
			this.setState({ activeTab: tab })
	}

	save() {
		const response = InscricaoServices.post(this.state.candidato)
		console.log(response)
		let { showModal, title, message, activeTab } = this.state
		showModal = true

		if(response.status === 201) {
			this.clear()

			title = 'Sucesso!'
			message = 'Os dados foram salvos com sucesso.'
			activeTab = '1'
		} else {
			title = 'Ops!'
			message = 'Parece que algo deu errado.'
		}

		this.setState({ showModal, title, message, activeTab })
	}

	clear() {
		this.setState({ candidato: new CandidatoModel() })
		document.querySelectorAll('.form-control').forEach(item => {
			item.classList.remove('is-valid')
			item.classList.remove('is-invalid')
		})
	}

	isInt = n => Number(n) === n && n % 1 === 0
	isFloat = n => Number(n) === n && n % 1 !== 0

	handle(event) {
		const name = event.target.name
		let value = event.target.value
		const { candidato } = this.state

		value = (this.isInt(value) || this.isFloat(value)) ? Number(value) : value

		switch(name) {
			case 'rua':
			case 'numero':
			case 'bairro':
			case 'cep':
			case 'pontoReferencia':
			case 'detalhes':
				candidato.endereco[name] = value
			break

			case 'telefone1':
			case 'telefone2':
			case 'telefone3':
				candidato.contato[name] = value
			break

			case 'escola':
			case 'notaPortugues':
			case 'notaMatematica':
			case 'questionario':
			case 'frequencia':
				candidato.escolar[name] = value
			break
			
			default:
				candidato[name] = value
		}

		this.setState({ candidato })
	}

	handleCandidato(event) {
		const name = event.target.name
		let value = event.target.value
		const { candidato } = this.state

		if(name === 'rg') {
			value = value.replace(/\D/, '')
			value = value.replace(/^(\d{2})/g, '$&.')
			value = value.replace(/^(\d{2}).(\d{3})$/g, '$1.$2.')
			value = value.replace(/(\d{3})(\d{1})$/, '$1-$2')
		}

		candidato[name] =
			(this.isInt(value) || this.isFloat(value)) ? Number(value) : value

		this.setState({ candidato })
	}

	handleDate(event) {
		const { candidato } = this.state
		const name = event.target.name
		const value = event.target.value

		candidato[name] = (value) ? new Date(value) : value

		this.setState({ candidato })
	}

	handleEndereco(event) {
		const name = event.target.name
		let value = event.target.value
		const { candidato } = this.state

		if(name === 'cep') {
			value = value.replace(/\D/, '')
			value = value.replace(/\d{5}/, '$&-')
		}
		
		candidato.endereco[name] =
			(this.isInt(value) || this.isFloat(value)) ? Number(value) : value

		this.setState({ candidato })
	}

	handleContato(event) {
		const name = event.target.name
		let value = event.target.value
		const { candidato } = this.state

		value = value.replace(/\D/g, '')
		value = value.replace(/^(\d{2})(\d)/g, '($1) $2')
		value = value.replace(/(\d)(\d{4})$/, '$1-$2')
		
		candidato.contato[name] = value
		this.setState({ candidato })
	}

	handleEscolar(event) {
		const name = event.target.name
		const value = event.target.value
		const { candidato } = this.state

		candidato.escolar[name] =
			(this.isInt(value) || this.isFloat(value)) ? Number(value) : value
			
		this.setState({ candidato })
	}

	handleModal() {
		this.setState({ showModal: !this.state.showModal })
	}

	thereAreMessage() {
		const { title, message, showModal } = this.state

		if(title && message && showModal) {
			return (
				<ModalView title={title} message={message} toggle={ this.handleModal } />
			)
		}

		return null
	}

	render() {
		const { candidato } = this.state
		const { endereco, contato, escolar } = candidato
		const isValid = candidato.validar()

		return (
			<Fragment>
				{ this.thereAreMessage() }
				<ViewBreadCrumb breadcrumb={ breadcrumb }/>
				<h1 className='page-title'>Cadastro de Candidatos</h1>

				<Row>
					<Col>
						<Card body>
							<Form>
								<Nav tabs>
									<NavItem>
										<NavLink
											className={ this.state.activeTab === '1' ? 'active' : '' }
              								onClick={() => { this.toggle('1'); }}
										><h4>Candidato</h4></NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											className={ this.state.activeTab === '2' ? 'active' : '' }
              								onClick={() => { this.toggle('2'); }}
										><h4>Endereço</h4></NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											className={ this.state.activeTab === '3' ? 'active' : '' }
              								onClick={() => { this.toggle('3'); }}
										><h4>Contato</h4></NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											className={ this.state.activeTab === '4' ? 'active' : '' }
              								onClick={() => { this.toggle('4'); }}
										><h4>Escolar</h4></NavLink>
									</NavItem>
								</Nav>
								<TabContent activeTab={ this.state.activeTab }>
									<TabPane tabId='1'>
										<FormCandidato candidato={ candidato } handle={ this.handleCandidato } handleDate={ this.handleDate } />
									</TabPane>
									<TabPane tabId='2'>
										<FormEndereco endereco={ endereco } handle={ this.handleEndereco } />
									</TabPane>
									<TabPane tabId='3'>
										<FormContato contato={ contato } handle={ this.handleContato } />
									</TabPane>
									<TabPane tabId='4'>
										<FormEscolar escolar={ escolar } handle={ this.handle } />
									</TabPane>
								</TabContent>

								<Row>
									<Col>
										{
											isValid
												? <Button color="primary" onClick={ this.save } >Cadastrar</Button>
												: <Button color="primary" disabled >Cadastrar</Button>
										}
										{' '}
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