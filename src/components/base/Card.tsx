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
			<div className={'card'} style={{backgroundColor: '#222222'}}>
				<div className={'header'}>
					{this.props.title}
					<hr/>
				</div>
				<div className={'body'}>
					{this.props.children}
				</div>
			</div>
		)
	}
}