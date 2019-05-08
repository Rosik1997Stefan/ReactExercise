import React from 'react';

const Search = (props) => {
  return (
			<div className="Search">
				<input onChange={props.search} type="text" placeholder='Enter title'/>
			</div>
		);
}

export default Search;