/* Libraries */
import * as React from 'react';

/* Body Class */
export class Body extends React.Component<{}, {}>{
	/* React Render */
	public render(){
		return(
			<main>
				{this.props.children}
			</main>
		)
	}
}