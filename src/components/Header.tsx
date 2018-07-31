/* Libraries */
import * as React from 'react';

/* Interfaces */
interface HeaderState{
	time: string;
}

/* Header Class */
export class Header extends React.Component<{}, HeaderState>{
	constructor(props: {}){
		super(props);

		this.state = {
			time: new Date().toLocaleTimeString(),
		};

		/* Inital update of time */
		this.updateTime();

		/* Updating time every sec */
		setInterval(this.updateTime.bind(this), 1000);
	}

	private updateTime(){
		this.setState({time: new Date().toLocaleTimeString()});
	}

	public render(){
		return(
			<nav>
				<div className={'logo'}>
					<img src={'images/logo-only.svg'} />
					aPearson Dashboard
				</div>
				{this.state.time}
			</nav>
		)
	}
}