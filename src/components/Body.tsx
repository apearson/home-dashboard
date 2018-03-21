/* Libraries */
import * as React from 'react';

/* Components */
import {UPS} from './cards/UPS';

/* Body Class */
export class Body extends React.Component<{}, {}>{
	public render(){
		return(
			<div className={'body'}>
				<UPS/>
			</div>
		)
	}
}