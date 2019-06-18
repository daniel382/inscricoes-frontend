import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const ModalView = props =>
	<Modal isOpen={ true }>
		<ModalHeader>{ props.title }</ModalHeader>
		<ModalBody>{ props.message }</ModalBody>
		<ModalFooter>
			<Button color='primary' onClick={ props.toggle }>Ok</Button>
		</ModalFooter>
	</Modal>

export default ModalView