import React, { Component, Fragment } from 'react'
import { Container } from 'reactstrap'

import './App.css'
import ViewHeader from './views/Header'
import ViewSidebar from './views/Sidebar/Sidebar'

import FormInscricao from './components/inscricao/Form/Form'
import ListComponent from './components/inscricao/Lista';

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			collapsed: false
		}

		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		const collapsed = !this.state.collapsed
		this.setState({ collapsed })
	}

	render() {
		return (
			<Fragment>
				<ViewHeader toggle={ this.toggle } />
				<div className="wrapper">
					<ViewSidebar show={ this.state.collapsed } />

					<div className="main">
						<Container fluid>
							{/* <FormInscricao /> */}
							<ListComponent />
						</Container>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default App
