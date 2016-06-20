import React from 'react';

export default ({onSearch})=>{	
	return (
		<div>
			<input type="text" onChange={(element)=>onSearch(element.target.value)} />
		</div>
	);	
}