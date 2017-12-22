/* Libraries */
import * as React from 'react';

/* Body Class */
export class Sara extends React.Component<{}, {}>{
	constructor(props: {}){
		super(props);
	}

	public render(){
		return(
			<div className={'card'} style={{backgroundColor: '#222222', maxWidth: 300}}>
				<h1>Sara is beautiful</h1>
			</div>
		)
	}
}