import React from "react";

const SearchMovies = (props) => {
	return (
		<div className="col col-sm-4">
			<input
				className="form-control"
				value={props.search}
				onChange={(event) => props.setSearch(event.target.value)}
				placeholder="Type to search movies....."
			></input>
		</div>
	);
};

export default SearchMovies;
