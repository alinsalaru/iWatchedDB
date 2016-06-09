import React from 'react';

export default ({onSearch})=>{	
	return (
		<div>
			<input type="text" onKeyUp={(element)=>onSearch(element.target.value)} />
		</div>
	);	
}