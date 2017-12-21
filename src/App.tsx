/* Libraries */
import * as React from "react";
import * as ReactDOM from "react-dom";

/* Components */
import {Header} from './components/Header';
import {Body} from './components/Body';

/* CSS */
import './css/main.css';

/* Interfaces */
interface AppProps{}
interface AppState{
	msg: string;
}

/* App Class */
export class App extends React.Component<AppProps, AppState> {
	constructor(props: {}){
		super(props);

		this.state = {
			msg: 'Hello React',
		}
	}

	public render() {
		return(
			<>
				<Header />
				<Body />
			</>
		);
	}
}

/* Rendering to page */
ReactDOM.render(<App/>, document.getElementById("app") );