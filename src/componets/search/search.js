import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { anime_api_url, animeApiOptions } from "../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
        `${anime_api_url}?fields=synopsis%2C%20title%2C%20main_picture%2C%20related_anime&q=${inputValue}`, 
        animeApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response); // Log the response to check its structure
        const options = response?.animes.map((anime) => ({
          value: anime,
          label: anime.title,
        }));


        return {
            options,
            hasMore: false
        }
      })
      .catch((error) => console.log(error));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  if (loadOptions === undefined) {
    return ;
  }

  return (
    <AsyncPaginate
      placeholder="Search for anime"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
    
  );
};

export default Search;

