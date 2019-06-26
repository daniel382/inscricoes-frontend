import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Form from '../inscricao/Form/Form'
import List from '../inscricao/Lista'
import DetailsComponent from '../inscricao/Lista/Details'
import Classificar from '../inscricao/Classificar'

function Routes({ lab }) {
    return (
        <Switch>
            <Route path="/" exact={ true } render={ () => <Form lab={ lab } /> } />
            <Route path="/listar" component={ List } />
            <Route path="/detalhes/:id" component={ DetailsComponent } />
            <Route path="/classificar" component={ Classificar } />
        </Switch>
    )
}

export default Routes