import React from 'react'
import { Row, Breadcrumb, BreadcrumbItem } from 'reactstrap'

function ViewBreadCrumb(props) {
	return (
		<Row>
			<Breadcrumb style={{ width: "100%" }}>
				{
					props.breadcrumb.map((item, index) =>
						(item.active)
							? <BreadcrumbItem key={ index } active>{ item.label }</BreadcrumbItem>
							: <BreadcrumbItem key={ index }><a href={ item.ref }>{ item.label }</a></BreadcrumbItem>
					)
				}
			</Breadcrumb>
		</Row>
	)
}

export default ViewBreadCrumb