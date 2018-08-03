/* Libraries */
import * as React from 'react';

/* Styles */
const pageStyle: React.CSSProperties = {
	padding: 10,
	height: 'calc(100vh - 50px - 50px)'
};

/* Page Class */
export class Page extends React.PureComponent{
	/* React Render */
	public render(){
		return(
			<div style={pageStyle}>
				{this.props.children}
			</div>
		);
	}
}