import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'

//const toggleNavbar = () => collapsed = !collapsed

function ViewHeader(props) {
	return (
		<header>
			<Navbar color="dark" dark>
				<NavbarBrand href="/" className="mr-auto">GMS</NavbarBrand>
				<NavbarToggler onClick={ () => props.toggle() } className="mr-2" />
			</Navbar>
		</header>
	)
}
export default ViewHeader