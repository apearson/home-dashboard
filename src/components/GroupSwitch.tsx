/* Libraries */
import * as React from 'react';

/* Components */
import { Button } from '@material-ui/core';

/* Interfaces */
interface GroupSwitchProps{
	name: string;
	id: string;
	style?: React.CSSProperties;
}
interface GroupSwitchState{
	state: boolean;
}

/* Styles */
const componentStyle: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center'
};

const buttonStyle: React.CSSProperties = {
	marginLeft: 5,
	marginRight: 5
};

/* Body Class */
export class GroupSwitch extends React.PureComponent<GroupSwitchProps, GroupSwitchState>{
	constructor(props: GroupSwitchProps){
		super(props);

		this.state = {
			state: false,
		};
	}

	private switch(state: boolean){
		fetch(`https://home.apearson.io/api/devices/scenes/${this.props.id}`, {
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
		console.log('Rendering Group', this.props.name);
		return(
			<div style={{...componentStyle, ...this.props.style}}>
				{/* Name */}
				<label>{this.props.name}</label>

				{/* Buttons */}
				<div>
					<Button variant='contained' color='primary' onClick={()=> this.switch(true)} style={buttonStyle}>
						On
					</Button>
					<Button variant='contained' color='primary' onClick={()=> this.switch(false)} style={buttonStyle}>
						Off
					</Button>
				</div>
			</div>
		)
	}
}