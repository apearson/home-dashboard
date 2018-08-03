/* Libraries */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {MuiThemeProvider as Themer } from '@material-ui/core/styles';

/* Library Components */
import SwipeableViews from 'react-swipeable-views';

/* Components */
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';

/* Pages */
import { LightsPage } from './pages/LightsPage';
import { PowerPage } from './pages/PowerPage';

/* Theme */
import {theme} from './theme';

/* CSS */
import './css/main.css';

/* Interfaces */
interface AppProps{}
interface AppState{
	tab: number;
}

/* App Class */
export class App extends React.Component<AppProps, AppState> {
	constructor(props: {}){
		super(props);

		/* Creating state */
		this.state = {
			tab: 0,
		}
	}

	/* React Render */
	public render() {
		return(
			<>
				<Header />

				<Body>
					<SwipeableViews style={{width: '100%'}} index={this.state.tab} onChangeIndex={(tab)=> this.setState({tab})}>
						<LightsPage />
						<PowerPage />
					</SwipeableViews>
				</Body>

				<Footer tabIndex={this.state.tab} onChange={(event, tab)=> this.setState({tab})} />
			</>
		);
	}
}

/* Rendering to page */
ReactDOM.render(<Themer theme={theme}><App/></Themer>, document.getElementById("app") );