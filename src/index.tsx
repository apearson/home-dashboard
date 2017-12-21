/* Libraries */
import * as React from "react";
import * as ReactDOM from "react-dom";

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
			<h1>{this.state.msg}</h1>
		);
	}
}

/* Rendering to page */
ReactDOM.render(<App/>, document.getElementById("app") );