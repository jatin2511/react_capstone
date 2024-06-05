import React, { useEffect, useState } from 'react';
import Moviecard from '../../Components/Moviecard';
import moviedata from '../../Apidata/movielist.json'
import './index.css'
import logo from '../../assets/profile.png'
// const genre_list = [{ "id": 28, "name": "Action" }, { "id": 12, "name": "Adventure" }, { "id": 16, "name": "Animation" }, { "id": 35, "name": "Comedy" }, { "id": 80, "name": "Crime" }, { "id": 99, "name": "Documentary" }, { "id": 18, "name": "Drama" }, { "id": 10751, "name": "Family" }, { "id": 14, "name": "Fantasy" }, { "id": 36, "name": "History" }, { "id": 27, "name": "Horror" }, { "id": 10402, "name": "Music" }, { "id": 9648, "name": "Mystery" }, { "id": 10749, "name": "Romance" }, { "id": 878, "name": "Science Fiction" }, { "id": 10770, "name": "TV Movie" }, { "id": 53, "name": "Thriller" }, { "id": 10752, "name": "War" }, { "id": 37, "name": "Western" }]
// "adult": false,
// "backdrop_path": "https://image.tmdb.org/t/p/original/o7JVhqMmrex1TPbmuxl8YXVlcfl.jpg",
// "genre_ids": [
//     28,
//     35,
//     14
// ],
// "id": 287947,
// "original_language": "en",
// "original_title": "Shazam!",
// "overview": "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
// "popularity": 272.68,
// "poster_path": "https://image.tmdb.org/t/p/original/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
// "release_date": "2019-03-29",
// "title": "Shazam!",
// "video": false,
// "vote_average": 7.017,
//  "vote_count": 9239

function Index() {
  const [movies, setMovies] = useState({});
  const selectedmoviesbyuser = JSON.parse(localStorage.getItem("selectedmovies"));
  useEffect(() => {
    selectedmoviesbyuser.forEach((movie) => {
      setMovies((prevMovies) => ({ ...prevMovies, [movie]: moviedata[movie] }));
    });
  }, [])
  // const selectedgenrebyuser = selectedmoviesbyuser.map((movie) => {
  //   return genre_list.find((genre) => genre.name === movie)
  // });

  // useEffect(() => {
  //   async function fetchMovies(id) {
  //     const url = `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${id}&page=1`;
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-key': 'a4ff0161femsh7e0d2364d589881p192a56jsn7ed5794bd21f',
  //         'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com'
  //       }
  //     };


  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       return result.results;
  //     } catch (error) {
  //       console.error(error);
  //       return [];
  //     }
  //   }

  //   async function fetchData() {
  //     for (const genre of selectedgenrebyuser) {
  //       try {
  //         const moviesForGenre = await fetchMovies(genre.id);
  //         setMovies(prevMovies => [...prevMovies, ...moviesForGenre]);
  //       } catch (error) {
  //         console.error(error);
  //       }

  //       await new Promise(resolve => setTimeout(resolve, 5000));
  //     }
  //   }

  //   fetchData();
  // }, [selectedgenrebyuser]);

  return (
    <div className='bg-black m=0 p-0 h-full w-full box-border'>
      <div className='flex justify-between items-center pt-3 px-8'>
        <div id='singleday' className='text-5xl my-3'>Super app</div>
        <div><img src={logo} className='h-16'></img></div>
      </div>
      <div className='text-white text-3xl mx-20 my-5 mt-8'>Entertainment according to your choice</div>
         {Object.keys(movies).map((key)=>{
          return <div className='py-5 mx-10'>
            <div className='text-[#878787] text-2xl font-medium mx-10 my-2'>{key}</div>
            <div className='flex justify-between h-[20vh] overflow-x-auto w-full overflow-y-hidden hide-scrollbar' style={{}}>
            {movies[key].map((movie)=>{
             return <Moviecard movie={movie} />
            })}
            </div>
          </div>
         })}
      </div>
  );
}

export default Index;