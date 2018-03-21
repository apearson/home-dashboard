/* Libraries */
import * as React from 'react';

/* Interfaces */
export interface CardProps{
	title: string;
};
/* Body Class */
export class Card extends React.Component<CardProps, {}>{
	public render(){
		return(
			<div className={'ups card'} style={{backgroundColor: '#222222', width: 300}}>
				<div className={'card-header'}>
					<div style={{fontSize:22}}>{this.props.title}</div>
					<hr/>
				</div>
				<div className={'body'}>
					{this.props.children}
				</div>
			</div>
		)
	}
}