import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Home.css";
import { serverURL } from "../config";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLeading] = useState(false);

  useEffect(() => {
    setLeading(true);
    axios
      .get(`${serverURL}/api/recipes`)
      .then((data) => {
        console.log(data.data);
        setRecipes(data?.data.recipes);
        setLeading(false);
      })
      .catch((error) => {
        console.log(error);
        setLeading(false);
      });
  }, []);

  return (
    <div className="Home">
      {loading ? <h1>Loading...</h1> : ""}

      <ul>
        {recipes.map((recipe) => {
          return (
            <Link to={`/recipes/details/${recipe._id}`}>
              <div className="RecipeCards">
                {recipe.img ? (
                  <li>
                    <img src={`${recipe.img}`} alt="recipe" />
                  </li>
                ) : (
                  ""
                )}
                <li className="RecipeTitle">{recipe.title}</li>

                <div className="ModifyRecipe">
                  <Link to={`/recipes/edit/${recipe._id} `} className="material-symbols-outlined">
                    Edit
                  </Link>
                  <Link to={`/recipes/delete/${recipe._id} `} className="material-symbols-outlined">
                    Delete
                  </Link>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
