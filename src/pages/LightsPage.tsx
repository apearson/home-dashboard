/* Libraries */
import * as React from 'react';

/* Library Components */
import { Card } from '@material-ui/core';

/* Components */
import { LightSwitch } from '../components/LightSwitch';
import { Page } from '../components/Page';

/* Page Class */
export class LightsPage extends React.PureComponent{
	/* React Render */
	public render(){
		return(
			<Page>
				<Card style={{display: 'flex', flexDirection: 'column', padding: 15}}>
					<div style={{fontSize: 22}}>
						Lights
					</div>
					<hr style={{width: '100%'}}/>
					<LightSwitch name="Living Room" id="living-room" />
					<LightSwitch name="Living Room Lamp" id="living-room-lamp" />
					<LightSwitch name="Bedroom" id="bedroom" />
					<LightSwitch name="Kitchen Sink" id="kitchen-sink" />
					<LightSwitch name="Oven" id="oven" />
					<LightSwitch name="Kitchen Overhead" id="kitchen-overhead" />
					<LightSwitch name="Dining" id="dining" />
				</Card>
			</Page>
		);
	}
}