/* Libraries */
import * as React from 'react';

/* Components */
import { Page } from '../components/Page';
import { UPS } from '../components/UPS';

/* Page Class */
export class PowerPage extends React.PureComponent{
	/* React Render */
	public render(){
		return(
			<Page>
				<UPS/>
			</Page>
		);
	}
}