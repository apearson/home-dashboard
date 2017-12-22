/* Libraries */
import * as React from 'react';

/* Components */
import {UPS} from './UPS';
import {Sara} from './Sara';

/* Body Class */
export class Body extends React.Component<{}, {}>{
	public render(){
		return(
			<div className={'body'}>
				<UPS/>
				<Sara/>
			</div>
		)
	}
}