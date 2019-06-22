import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Form from '../inscricao/Form/Form'
import List from '../inscricao/Lista'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact={ true } component={ Form } />
            <Route path="/listar" component={ List } />
        </Switch>
    )
}

export default Routes