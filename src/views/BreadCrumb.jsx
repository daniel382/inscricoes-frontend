import React from 'react'
import { Row, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

function ViewBreadCrumb(props) {
	return (
		<Row>
			<Breadcrumb style={{ width: "100%" }}>
				{
					props.breadcrumb.map((item, index) =>
						(item.active)
							? <BreadcrumbItem key={ index } active>{ item.label }</BreadcrumbItem>
							: <BreadcrumbItem key={ index }><Link to={ item.ref }>{ item.label }</Link></BreadcrumbItem>
					)
				}
			</Breadcrumb>
		</Row>
	)
}

export default ViewBreadCrumb