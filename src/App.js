import React, { useEffect, useState } from "react";
import './App.css';
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total =>>
      let list = await Tmdb.getHomelist();
      setMovieList(list);

      //pegando o fetarued
      
    }

    loadAll();
  }, []);

  return (
    <div className="page">

     {featuredData &&
      <FeaturedMovie item={featuredData}/>
     }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}