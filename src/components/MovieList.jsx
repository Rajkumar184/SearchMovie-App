import React from "react";
import "./MovieList.css";

const MovieList = (props) => {
	return (
		<>
			{props.searching && !props.message ? (
				<h3> loading... </h3>
			) : props.message ? (
				<div> {props.message} </div>
			) : (
				props.movies.map((movie, index) => (
					<div
						style={{ width: "18rem", height: "32rem", borderRadius: "2%" }}
						className="cards pl-4 pt-2 shadow-lg  my-5 bg-white mx-4"
					>
						<div>
							<img src={movie.Poster} alt="movie_img" />
						</div>
						<div className="card-body">
							<h6 className="card-title">Title:{movie.Title}</h6>
							<p className="card-text">Year of Release:{movie.Year}</p>
							<button type="button" class="btn btn-danger">
								Watch Now
							</button>
						</div>
					</div>
				))
			)}
		</>
	);
};

export default MovieList;
