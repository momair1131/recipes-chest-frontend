import axios from "axios";
import React, { useState } from "react";
import "./SearchRecipe.css";

export default function SearchRecipe() {
  const [search, setSearch] = useState([]);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const app_id = "c2654554";
  const app_key = "cfdb371fa9c4787e4a674115a772ca04";

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${app_key}&from=0&to=10`
      )
      .then((response) => {
        setLoading(false);
        console.log(response.data.hits);
        setData(response.data.hits);
      })
      .catch((error) => {
        setLoading(false);

        console.log(error);
      });
  };
  return (
    <div className="SearchRecipe">
      <h1>Recipe Finder</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Find Recipes:</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)} id="search" value={search} />

        <button className="Find">Find Recipes</button>
      </form>
      <div className="RecipeFinder">
        <ul>
          {loading ? <h1 style={{ color: "white" }}>Loading...</h1> : ""}

          {data &&
            data.map((rec, i) => {
              return (
                <a href={rec.recipe.shareAs} target="_blank" rel="noreferrer">
                  <div className="RecipeCards">
                    <li>
                      {console.log(rec.recipe.image)}
                      <img src={`${rec.recipe.image}`} alt="recipe" />
                    </li>
                    <li className="RecipeTitle">{rec.recipe.label}</li>
                    <li></li>
                  </div>
                </a>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
