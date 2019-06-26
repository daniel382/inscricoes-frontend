import React, { Component } from 'react'
import { Row, Col, Table, Card, FormGroup, Input, Button } from 'reactstrap'

import InscricaoServices from '../Services'
import breadcrumb from './BreadCrumb'
import ViewBreadCrumb from '../../../views/BreadCrumb'
import ModalView from '../../../views/Modal'
import { Link } from 'react-router-dom'

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            candidatos: [],
            filtro: '',

            title: '',
            message: '',
            showModal: false
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
            throw err
        }
    }

    setFiltro = event =>
        this.setState({ filtro: event.target.value })

    filter = candidato => {
        const { filtro } = this.state
        const regex = new RegExp(filtro, 'i')
        
        return regex.test(candidato.nome) || regex.test(candidato.rg)
    }

    handleModal = () =>
        this.setState({ showModal: !this.state.showModal })

    thereAreMessage() {
		const { title, message, showModal } = this.state

		if(title && message && showModal) {
			return (
				<ModalView title={title} message={message} toggle={ this.handleModal } />
			)
		}

		return null
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
                        <Link 
                            to={`/detalhes/${candidato._id}`}
                            className="btn btn-primary"
                        >
                            <i className="fa fa-info"></i>
                        </Link>
                    </td>
                </tr>
            )
        )
    }

    render() {
        return (
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
    }
}

export default ListComponent