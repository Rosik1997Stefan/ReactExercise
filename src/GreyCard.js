import React, { Component } from 'react';
import Card from './Card';


class GreyCard extends Component {

	render() {
		return (
			<div className='GreyCard'>
				<Card color="grey" title={this.props.title}>
					<div className="SomePad">{this.props.text}</div>
				</Card>
				{/*<h1>This one have Children Element </h1>
								</Card>
								<Card color="green" title='Title 2'/>
								<Card color="red" title='Title 3'/>*/}
			</div>
		);
	}
}

export default GreyCard;
