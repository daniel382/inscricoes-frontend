import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Form from '../inscricao/Form/Form'
import List from '../inscricao/Lista'
import DetailsComponent from '../inscricao/Lista/Details'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact={ true } component={ Form } />
            <Route path="/listar" component={ List } />
            <Route path="/detalhes/:id" component={ DetailsComponent } />
        </Switch>
    )
}

export default Routes