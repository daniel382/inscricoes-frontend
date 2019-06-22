import React, { Component } from 'react'
import { Row, Col, Table, Card, FormGroup, Input, Button } from 'reactstrap'

import InscricaoServices from '../Services'
import breadcrumb from './BreadCrumb'
import ViewBreadCrumb from '../../../views/BreadCrumb'
import ModalView from '../../../views/Modal'
import DetailsComponent from './Details';

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            candidatos: [],
            filtro: '',

            title: '',
            message: '',
            showModal: false,
            hasDetail: false
        }

        this.handleModal = this.handleModal.bind(this)
    }

    async componentDidMount() {
        try {
            const response = await InscricaoServices.getAll()
            const candidatos = await response.json()
            
            this.setState({ candidatos })
        } catch(err) {
            let { showModal, title, message } = this.state
            showModal = true
            title = 'Erro'
            message = 'Não foi possível carregar os dados!'

            this.setState({ showModal, title, message })
        }
    }

    setFiltro = event => {
        this.setState({ filtro: event.target.value })
        this.details = null
    }

    filter = candidato => {
        const { filtro } = this.state
        const regex = new RegExp(filtro, 'i')
        
        return regex.test(candidato.nome) || regex.test(candidato.rg)
    }

    handleModal = () => this.setState({ showModal: !this.state.showModal })

    clearDetails = () => this.setState({ hasDetail: false })

    thereAreMessage() {
		const { title, message, showModal } = this.state

		if(title && message && showModal) {
			return (
				<ModalView title={title} message={message} toggle={ this.handleModal } />
			)
		}

		return null
    }

    details = null
    
    moreInfo = id => {
        const { candidatos } = this.state
        const candidato = candidatos.filter(can => can._id === id)
        
        if(candidato.length) {
            this.setState({ showModal: true, hasDetail: true })

            this.details = (
                <DetailsComponent candidato={ candidato } ok={ this.clearDetails } />
            )
        }
    }

    renderTableRow() {
        const { filtro, candidatos } = this.state
        const lista = filtro ? candidatos.filter(this.filter) : candidatos

        return lista.map(candidato => (
                <tr key={ candidato._id}>
                    <td>{ candidato.nome }</td>
                    <td>{ candidato.rg }</td>
                    <td>{ candidato.pontuacao.toFixed(1) }</td>
                    <td>{ candidato.colocacao }</td>
                    <td>
                        <Button color="success">
                            <i className="fa fa-pen"></i>
                        </Button>
                        {' '}
                        <Button onClick={ () => this.moreInfo(candidato._id)} color="primary">
                            <i className="fa fa-info"></i>
                        </Button>
                    </td>
                </tr>
            )
        )
    }

    render() {
        if(!this.state.hasDetail) return (
            <>
                { this.thereAreMessage() }
                
                <ViewBreadCrumb breadcrumb={ breadcrumb } />
                <h1 className='page-title'>Listagem Geral</h1>

                <Row>
                    <Col>
                        <Card body>
                            <Row>
                                <Col lg={6}>
                                    <FormGroup>
                                        <Input 
                                            onChange={ this.setFiltro }
                                            placeholder="Buscar... (Nome ou RG)"
                                            value={ this.state.filtro }
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>RG</th>
                                        <th>Pontuação</th>
                                        <th>Colocação</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    { this.renderTableRow() }
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </>
        )

        return this.details
    }
}

export default ListComponent