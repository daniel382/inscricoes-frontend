import React, { Component } from 'react'
import { Row, Col, Table, Card } from 'reactstrap'

import InscricaoServices from '../Services'
import breadcrumb from './BreadCrumb'
import ViewBreadCrumb from '../../../views/BreadCrumb';

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

    renderTableBody() {
        return this.state.candidatos.map((candidato, index) => (
            <tr key={ candidato._id}>
                <th>{ index + 1 }</th>
                    <td>{ candidato.nome }</td>
                    <td>{ candidato.rg }</td>
                    <td>{ candidato.pontuacao.toFixed(1) }</td>
                    <td>{ candidato.colocacao }</td>
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
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nome</th>
                                        <th>RG</th>
                                        <th>Pontuação</th>
                                        <th>Colocação</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    { this.renderTableBody() }
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