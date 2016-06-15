import React from 'react';

export default class SearchComponent extends React.Component{	
	render() {
		return (
			<div>
				<input ref="inp" type="text" onChange={(element)=>this.props.onSearch(element.target.value)} />
			</div>
		);	
	}
}