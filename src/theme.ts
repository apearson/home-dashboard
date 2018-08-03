/* Libraries */
import { createMuiTheme } from "@material-ui/core";

/* Creating theme */
const theme =  createMuiTheme({
	palette: {
		primary: {
			light: '#3f4f76',
			main: '#222222',
			dark: '#000023',
			contrastText: '#ffffff',
		},
		secondary: {
			light: '#5ec3df',
			main: '#1a92ad',
			dark: '#00647e',
			contrastText: '#000000',
		},
	},
});

/* Exporting theme */
export {theme};