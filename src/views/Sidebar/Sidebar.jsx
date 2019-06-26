import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import './Sidebar.css'

function ViewSidebar(props) {
	if(!props.show)
		return (
			<nav id="sidebar">
				<div id="lab" className="form-group d-flex align-items-center">
					<label>Lab Info</label>
					<input type="checkbox" className="form-control" onChange={ props.handleLab } />
				</div>

				<hr />

				<Nav vertical>
					<NavItem>
						<Link className="nav-link" to="/">Cadastro</Link>
					</NavItem>
					<NavItem>
						<Link className="nav-link" to="/listar">Listar</Link>
					</NavItem>
					<NavItem>
						<Link className="nav-link" to="/classificar">Classificar</Link>
					</NavItem>
					<NavItem>
						<Link className="nav-link" to="#/">Sair</Link>
					</NavItem>
				</Nav>
			</nav>
		)
	
	return null
}

export default ViewSidebar