/* Libraries */
import * as React from 'react';

/* Library Component */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

/* Interfaces */
interface HeaderState{
	time: string;
}

/* Header Class */
export class Header extends React.PureComponent<{}, HeaderState>{
	constructor(props: {}){
		super(props);

		this.state = {
			time: new Date().toLocaleTimeString(),
		};

		/* Updating time every sec */
		setInterval(this.updateTime.bind(this), 1000);
	}

	private updateTime(){
		this.setState({time: new Date().toLocaleTimeString()});
	}

	/* React Render */
	public render(){
		return(
			<AppBar position="sticky">
				<Toolbar>
					<IconButton style={{marginLeft: -12, marginRight: 20}} color="inherit" aria-label="Menu">
						<img src={'images/logo-only.svg'} style={{height: 50, paddingTop: 7}} />
					</IconButton>
					<div style={{flexGrow: 1}}>
						aPearson Dashboard
					</div>
					{this.state.time}
				</Toolbar>
			</AppBar>
		)
	}
}