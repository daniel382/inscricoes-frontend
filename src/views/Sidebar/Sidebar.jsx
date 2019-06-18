import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

import './Sidebar.css'

function ViewSidebar(props) {
	if(!props.show)
		return (
			<nav id="sidebar">
				<hr />

				<Nav vertical>
					<NavItem>
						<NavLink href="#/">Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#/">Inscrições</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#/" disabled>Outros</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#/">Sair</NavLink>
					</NavItem>
				</Nav>
			</nav>
		)
	
	return null
}

export default ViewSidebar