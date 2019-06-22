import React, { Component, Fragment } from 'react'
import { Container } from 'reactstrap'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ViewHeader from './views/Header'
import ViewSidebar from './views/Sidebar/Sidebar'
import Routes from './components/Routes'

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

				<BrowserRouter>
					<div className="wrapper">
						<ViewSidebar show={ this.state.collapsed } />

						<div className="main">
							<Container fluid>
								<Routes />
							</Container>
						</div>
					</div>
				</BrowserRouter>
			</Fragment>
		)
	}
}

export default App
