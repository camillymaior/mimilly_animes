import "./popularAnime.css";
import React, { useEffect, useState } from 'react';

const PopularAnime = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimeData = async () => {
      const url = 'https://animes5.p.rapidapi.com/?fields=title%2C%20main_picture%2C%20rank&limit=6';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b1dafb57d0mshe3a9b1b73042a8ep13fab3jsncbfe99d57d17',
          'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        setAnimes(data?.animes || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimeData();
  }, []);

  return (
    <div className="popular-wrapper">
      <h2 className="popular-title">Popular Animes</h2>
      <ul className="grid">
        {animes.map((anime) => (
          <li className="anime-wrapper" key={anime.id}>
            <img src={anime.main_picture.medium} alt={anime.title} />
            <div>
              <h3>{anime.title}</h3>
              <p>Rank: {anime.rank}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularAnime;

