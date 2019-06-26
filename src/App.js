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
			collapsed: false,
			lab: false
		}
	}

	handleLab = () => this.setState({ lab: !this.state.lab })
	toggle = () => this.setState({ collapsed: !this.state.collapsed })

	render() {
		const { collapsed, lab } = this.state
		return (
			<Fragment>
				<ViewHeader toggle={ this.toggle } />

				<BrowserRouter>
					<div className="wrapper">
						<ViewSidebar show={ collapsed } handleLab={ this.handleLab } />

						<div className="main">
							<Container fluid>
								<Routes lab={ lab }/>
							</Container>
						</div>
					</div>
				</BrowserRouter>
			</Fragment>
		)
	}
}

export default App
