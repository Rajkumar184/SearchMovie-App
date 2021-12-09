import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import MovieList from "./components/MovieList.jsx";
import SearchMovies from "./components/SearchMovies.jsx";
import "./App.css";

const App = () => {
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState("");
	const [searching, setSearching] = useState(false);
	const [message, setMessage] = useState(null);

	useEffect(() => {
		const getData = async () => {
			setSearching(true);
			try {
				const setHeader = {
					headers: {
						Accept: "application/json",
					},
				};
				const res = await fetch(
					`http://www.omdbapi.com/?s=${search}&apikey=a55b8020`,
					setHeader
				);
				const data = await res.json();
				setMessage(null);
				setSearching(false);
				setMovies(data.Search);
			} catch (err) {
				// Handle Error Here
				console.error(err);
				setMessage("An unexpected error occured.");
				setSearching(false);
			}
		};

		getData(search);
	}, [search]);

	return (
		<div className="container-fluid ">
			<div
				style={{ padding: "2%" }}
				className="row d-flex align-items-center  bg-dark text-white"
			>
				<Header heading="Movies" />
				<SearchMovies search={search} setSearch={setSearch} />
			</div>
			{movies ? (
				<div className="row">
					<MovieList movies={movies} searching={searching} message={message} />
				</div>
			) : (
				<div className="alert alert-danger pl-2 pr-2" role="alert">
					Search for the Movies...
				</div>
			)}
		</div>
	);
};

export default App;
