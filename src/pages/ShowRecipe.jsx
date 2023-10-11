import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowRecipe.css";
import { serverURL } from "../config";

export default function ShowRecipe() {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverURL}/api/recipes/${id}`)
      .then((response) => {
        // console.log("Response Data:", response.data);
        setRecipe(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [id]);

  const formatDate = (dateString) => {
    const date = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, date);
  };

  return (
    <div className="ShowRecipe">
      {loading ? <h1 style={{ color: "white" }}>Loading...</h1> : ""}
      <div className="RecipeContainer">
        <div className="titleImg">
          <h3> {recipe.title}</h3>

          <img src={`${recipe.img}`} alt="recipe" />
        </div>
        <div className="RecipeDetail">
          <h3>Description</h3>
          {recipe.description ? <p>{recipe.description}</p> : ""}
          <h3>Detail</h3>
          {recipe.detail ? <p>{recipe.detail}</p> : ""}
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients
              ? recipe.ingredients.map((ing) => {
                  return <li key={ing._id}>{ing}</li>;
                })
              : ""}
          </ul>
          <h3>Directions</h3>
          {recipe.directions ? <p>{recipe.directions}</p> : ""}
        </div>
        <div className="dates">
          <p>
            <span>Created At: </span>
            {recipe.createdAt ? formatDate(recipe.createdAt) : ""}
          </p>
          <p>
            {recipe.updatedAt && recipe.updatedAt !== recipe.createdAt ? (
              <span>Updated At: {formatDate(recipe.updatedAt)}</span>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
