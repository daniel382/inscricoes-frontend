import React, { Component } from 'react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap';

import breadcrumb from './BreadCrumb'
import ViewBreadCrumb from '../../../../views/BreadCrumb'

import InscricaoServices from '../../Services'
import { Link } from 'react-router-dom/cjs/react-router-dom'

class DetailsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.match.params.id,
            candidato: null
        }
    }

    async componentWillMount() {
        const response = await InscricaoServices.getById(this.state.id)
        const candidato = await response.json()

        this.setState({candidato})
    }

    
    formatData(data) {
        const d = data.match(/\d{4}-\d{2}-\d{2}/)[0]
        return d.split('-').reverse().join('/')
    }
    
    render() {
        const { candidato } = this.state

        if(!candidato) return null

        return (
            <>
            <ViewBreadCrumb breadcrumb={ breadcrumb } />
            <h1 className='page-title'>Detalhes</h1>
            
            <Row>
                <Col lg={12}>
                    <Card style={{ background: '#0000'}}>
                        <CardHeader>
                            <CardTitle><h2>{ candidato.nome }</h2></CardTitle>
                        </CardHeader>

                        <CardBody>
                            {/* CANDIDATO */}
                            <Row>
                                <Table style={{ background: '#fff'}}>
                                    <thead>
                                        <tr>
                                            <th>Nome da Mãe</th>
                                            <th>Nome do Pai</th>
                                            <th>RG</th>
                                            <th>Data de Nascimento</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{ candidato.nomeMae }</td>
                                            <td>{ candidato.nomePai }</td>
                                            <td>{ candidato.rg }</td>
                                            <td>{ this.formatData(candidato.dataNascimento) }</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>

                            <Row>
                                <Table style={{ background: '#fff'}}>
                                    <thead>
                                        <tr>
                                            <th>Naturalidade</th>
                                            <th>Renda Familiar</th>
                                            <th>Moradia</th>
                                            <th>Sexo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{ candidato.naturalidade }</td>
                                            <td>{ `R$${candidato.rendaFamiliar}` }</td>
                                            <td>{ candidato.moradia }</td>
                                            <td>{ candidato.sexo }</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>

                            <Row>
                                <Table style={{ background: '#fff'}}>
                                    <thead>
                                        <tr>
                                            <th>Recebe beneficios sociais</th>
                                            <th>Como soube da GMS</th>
                                            <th>Observações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{ candidato.ptr ? 'Sim' : 'Não' }</td>
                                            <td>{ candidato.publicidade }</td>
                                            <td>{ candidato.observacoes }</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>

                            {/* ENDEREÇO */}
                            <Row>
                                <Table style={{ background: '#fff'}}>
                                    <thead>
                                        <tr>
                                            <th>Rua</th>
                                            <th>Número</th>
                                            <th>Bairro</th>
                                            <th>CEP</th>
                                            <th>Ponto de Referência</th>
                                            <th>Detalhes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{ candidato.endereco.rua }</td>
                                            <td>{ candidato.endereco.numero }</td>
                                            <td>{ candidato.endereco.bairro }</td>
                                            <td>{ candidato.endereco.cep }</td>
                                            <td>{ candidato.endereco.pontoReferencia }</td>
                                            <td>{ candidato.endereco.detalhes }</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>

                            {/* CONTATO */}
                            <Row>
                                <Table style={{ background: '#fff'}}>
                                    <thead>
                                        <tr>
                                            <th>Telefone</th>
                                            <th>Recados</th>
                                            <th>Recados</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{ candidato.contato.telefone1 }</td>
                                            <td>{ candidato.contato.telefone2 }</td>
                                            <td>{ candidato.contato.telefone3 }</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>

                            {/* ESCOLAR */}
                            <Row>
                                <Table style={{ background: '#fff'}}>
                                    <thead>
                                        <tr>
                                            <th>Escola</th>
                                            <th>Nota de Português</th>
                                            <th>Nota de Matemática</th>
                                            <th>Questionário Cultural</th>
                                            <th>Frequência Escolar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{ candidato.escolar.escola }</td>
                                            <td>{ candidato.escolar.notaPortugues }</td>
                                            <td>{ candidato.escolar.notaMatematica }</td>
                                            <td>{ candidato.escolar.questionario }</td>
                                            <td>{ `${candidato.escolar.frequencia}%` }</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>

                            {/* CLASSIFICAÇÃO */}
                            <Row>
                                <Table style={{ background: '#fff'}}>
                                    <thead>
                                        <tr>
                                            <th>Pontuação</th>
                                            <th>Colocação</th>
                                            <th>Classificado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{ candidato.pontuacao.toFixed(1) }</td>
                                            <td>{ candidato.colocacao }</td>
                                            <td>{ candidato.classificado ? 'Sim' : 'Não' }</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>

                            <Row>
                                <Link to="/listar" className="btn btn-primary">
                                    Ok
                                </Link>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            </>
        )
    }
}

export default DetailsComponent