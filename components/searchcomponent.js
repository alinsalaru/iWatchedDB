import React from 'react';

export default ({onSearch})=>{	
	return (
		<div>
			<input type="text" className="form-control" placeholder="Search movie list" 
				   onChange={(element)=>onSearch(element.target.value)} />
		</div>
	);	
}