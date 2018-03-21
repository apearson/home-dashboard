/* Libraries */
import * as React from 'react';

/* Components */
import { Card } from '../Base/Card';

/* Interfaces */
interface UPSState{
	lastUpdated: Date;
	charge: number;
	timeLeft: number;
	load: number;
	timeOnBattery: number;
	lineVoltage: number;
};

/* Body Class */
export class UPS extends React.Component<{}, UPSState>{
	constructor(props: {}){
		super(props);

		this.state = {
			lastUpdated: new Date(0),
			charge: 0,
			timeLeft: 0,
			load: 0,
			timeOnBattery: 0,
			lineVoltage: 0
		};

		/* Inital update of info */
		this.updateInfo();

		/* Updating info every 10 secs */
		setInterval(this.updateInfo.bind(this), 10000);
	}

	private async updateInfo(){
		const response = await fetch('https://home.apearson.io/api/ups');
		const data = await response.json();

		this.setState({
			lastUpdated: new Date(),
			charge: data.BCHARGE,
			timeLeft: data.TIMELEFT,
			load: data.LOADPCT,
			timeOnBattery: data.CUMONBATT,
			lineVoltage: data.LINEV,
		})
	}

	public render(){
		return(
			<Card title="UPS">
				<div><div>Last update:</div><div>{this.state.lastUpdated.toLocaleString()}</div></div>
				<div><div>Charge:</div><div>{this.state.charge}</div></div>
				<div><div>Time left:</div><div>{this.state.timeLeft}</div></div>
				<div><div>Load:</div><div>{this.state.load}</div></div>
				<div><div>Time on Battery:</div><div>{this.state.timeOnBattery}</div></div>
				<div><div>Line Voltage:</div><div>{this.state.lineVoltage}</div></div>
			</Card>
		)
	}
}