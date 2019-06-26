import React, { Component } from 'react'

/* import loading from '../../../assets/img/loading.gifs' */
import InscricaoServices from '../Services'

class Classificar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            candidatos: [],
            pwd: null
        }

    }

    async componentWillMount() {
        const pwd = prompt('Sua Senha!')
        if(pwd === 'GMSInscrições?classificar=true') {
            const response = await InscricaoServices.getAll('sort=pontuacao')
            const candidatos = await response.json()

            candidatos.forEach(async function (candidato, index) {
                candidato.colocacao = index + 1
                if(index + 1 <= 200) {
                    candidato.classificado = true
                }

                await InscricaoServices.updateOne(candidato)
            })

            this.setState({ candidatos })
        }
    }

    render() {
        const { pwd } = this.state
        const text = {
            fontSize: '50px',
            textAlign: 'center'
        }

        const div = {
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

        

        if(!pwd) return <div style={ div }><p style={ text }>Você não está autorizado a acessar essa página</p></div>
        /* if(candidatos.length < 1) return <img src={ loading } /> */

        return <div style={ div }>
            <p style={ text }>
            Ok
            </p>
        </div>
    }
}

export default Classificar