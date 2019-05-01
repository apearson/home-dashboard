/* Libraries */
import * as React from 'react';
import { Paper, Tabs, Tab, Icon } from '@material-ui/core';

/* Interfaces */
interface FooterProps{
	tabIndex: number;
	onChange: (event: React.ChangeEvent<{}>, tab: number)=> void;
}

/* Page Class */
export class Footer extends React.PureComponent<FooterProps>{
	/* React Render */
	public render(){
		return(
			<Paper style={{position: 'absolute', bottom: 0, left: 0, width: '100%'}} square>
				<Tabs
					value={this.props.tabIndex}
					onChange={this.props.onChange}
					variant="fullWidth"
					indicatorColor="secondary"
					textColor="secondary"
				>
					<Tab icon={<Icon>highlight</Icon>} />
					<Tab icon={<Icon>power_input</Icon>} />
				</Tabs>
			</Paper>
		);
	}
}