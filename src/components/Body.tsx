/* Libraries */
import * as React from 'react';

/* Body Class */
export class Body extends React.Component<{}, {}>{
	public render(){
		return(
			<main>
				{this.props.children}
			</main>
		)
	}
}