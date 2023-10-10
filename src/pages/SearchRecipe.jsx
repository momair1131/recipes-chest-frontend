import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SearchRecipe() {
  const [search, setSearch] = useState([]);

  const handleSearch = async () => {
    const options = {
      method: "GET",
      url: "https://recipe-generator2.p.rapidapi.com/Recipes/GenerateRecipe",
      params: {
        ingredients: search,
      },
      headers: {
        "X-RapidAPI-Key": "fbfcd0f93amshe7a0607938b57e1p1e1019jsn7260ab59734a",
        "X-RapidAPI-Host": "recipe-generator2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="SearchRecipe">
      <h1>Search A Recipe</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search a Recipe:</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)} id="search" value={search} />

        <button>Search</button>
      </form>
    </div>
  );
}
