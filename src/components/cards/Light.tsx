/* Libraries */
import * as React from 'react';

/* Components */
import { Card } from '../base/Card';

/* Interfaces */
interface LightProps{
	name: string;
	id: string;
}

/* Body Class */
export class Light extends React.Component<LightProps>{
	private switch(state: boolean){
		fetch(`https://home.apearson.io/api/devices/${this.props.id}`, {
			method: 'put',
			headers:{
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({status: state?'on':'off'}),
		});
	}

	public render(){
		console.log(this.state);
		return(
			<Card title={`Light ${this.props.name}`}>
				<div style={{display: 'flex'}}>
					<button style={{flexGrow: 1, height: 120, margin: 5}} onClick={()=> this.switch(true)}>On</button>
					<button style={{flexGrow: 1, height: 120, margin: 5}} onClick={()=> this.switch(false)}>Off</button>
				</div>
			</Card>
		)
	}
}