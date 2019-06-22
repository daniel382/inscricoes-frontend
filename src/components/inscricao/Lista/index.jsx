import React, { Component } from 'react'
import { Row, Col, Table, Card, FormGroup, Input, Button } from 'reactstrap'

import InscricaoServices from '../Services'
import breadcrumb from './BreadCrumb'
import ViewBreadCrumb from '../../../views/BreadCrumb'

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            candidatos: [],
            filtro: ''
        }
    }

    async componentDidMount() {
        const response = await InscricaoServices.getAll()
        const candidatos = await response.json()
        
        this.setState({ candidatos })
    }

    setFiltro = event => this.setState({ filtro: event.target.value })

    filter = candidato => {
        const { filtro } = this.state
        const regex = new RegExp(filtro, 'i')
        
        return regex.test(candidato.nome) || regex.test(candidato.rg)
    }

    renderTableRow() {
        const { filtro, candidatos } = this.state
        const lista = filtro ? candidatos.filter(this.filter) : candidatos
        const edit = <Button color="success"><i className="fa fa-pen"></i></Button>
        const detalhes = <Button color="primary"><i className="fa fa-trash"></i></Button>

        return lista.map((candidato, index) => (
            <tr key={ candidato._id}>
                <th>{ index + 1 }</th>
                    <td>{ candidato.nome }</td>
                    <td>{ candidato.rg }</td>
                    <td>{ candidato.pontuacao.toFixed(1) }</td>
                    <td>{ candidato.colocacao }</td>
                    <td>{ edit } { detalhes }</td>
                </tr>
            )
        )
    }

    render() {
        return (
            <>
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
                                        <th>#</th>
                                        <td>Nome</td>
                                        <td>RG</td>
                                        <td>Pontuação</td>
                                        <td>Colocação</td>
                                        <td>Ações</td>
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