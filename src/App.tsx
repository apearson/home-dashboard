/* Libraries */
import * as React from "react";
import * as ReactDOM from "react-dom";

/* Components */
import { Header } from './components/Header';
import { Body } from './components/Body';
import { UPS } from "./components/cards/UPS";

/* CSS */
import './css/main.css';
import { Light } from "./components/cards/Light";

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
				<Body>
					<UPS/>
					<Light name="Living Room" id="living-room" />
					<Light name="Bedroom" id="bedroom" />
					<Light name="Kitchen Sink" id="kitchen-sink" />
					<Light name="Oven" id="oven" />
					<Light name="Kitchen Overhead" id="kitchen-overhead" />
					<Light name="Dining" id="dining" />
				</Body>
			</>
		);
	}
}

/* Rendering to page */
ReactDOM.render(<App/>, document.getElementById("app") );