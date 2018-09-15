/* Libraries */
import * as React from 'react';

/* Components */
import { FormControlLabel, Switch } from '@material-ui/core';

/* Interfaces */
interface GroupSwitchProps{
	name: string;
	id: string;
}
interface GroupSwitchState{
	state: boolean;
}

/* Body Class */
export class GroupSwitch extends React.PureComponent<GroupSwitchProps, GroupSwitchState>{
	constructor(props: GroupSwitchProps){
		super(props);

		this.state = {
			state: false,
		};
	}

	private switch(state: boolean){
		fetch(`https://home.apearson.io/api/devices/groups/${this.props.id}`, {
			method: 'put',
			headers:{
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({status: state?'on':'off'}),
		});

		this.setState({state});
	}

	/* React Render */
	public render(){
		console.log('Rendering Light', this.props.name);
		return(
			<FormControlLabel
				label={`${this.props.name} Light`}
				classes={{label: '.white'}}
				color="secondary"
				control={
					<Switch
						checked={this.state.state}
						color="secondary"
						onChange={(event: object, checked: boolean)=> this.switch(checked)}
						value={this.state.state? 'On':'Off'}
					/>
				}
			/>
		)
	}
}