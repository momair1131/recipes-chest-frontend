import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateRecipe.css";
import "nice-forms.css";
import { serverURL } from "../config";

export default function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [detail, setDetail] = useState("");
  let [ingredients, setIngrendients] = useState([]);
  const [directions, setDirections] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    ingredients = String(ingredients).split(",");
    // setIngrendients(ingredients.split(","));

    // console.log(ing);
    const recipeData = {
      title,
      description,
      img,
      detail,
      ingredients,
      directions,
    };
    setLoading(true);
    axios
      .post(`${serverURL}/api/recipes/`, recipeData)
      .then((response) => {
        // console.log(response.statusText === "OK" ? "OK" : "NOT OK");
        if (response.statusText === "OK") {
          console.log("Recipe added successfully");
          console.log(response);

          setLoading(false);
          setTitle("");
          setDescription("");
          setImg("");
          setDetail("");
          setIngrendients("");
          setDirections("");
        }

        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="CreateRecipe">
      <h3>Create A Recipe</h3>
      {loading ? <h1>Loading...</h1> : ""}

      <form className="create" onSubmit={handleSubmit}>
        <div className="title ">
          <label htmlFor="title">Recipe Title:*</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            value={title}
            required
          />
        </div>

        <div className="description ">
          <label htmlFor="description">Recipe Description:</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            value={description}
          />
        </div>

        <div className="image ">
          <label htmlFor="image">Recipe Image Link:*</label>
          <input
            type="text"
            onChange={(e) => setImg(e.target.value)}
            id="image"
            value={img}
            required
          />
        </div>

        <div className="detail ">
          <label htmlFor="detail">Recipe Detail:</label>
          <input
            type="text"
            onChange={(e) => setDetail(e.target.value)}
            id="detail"
            value={detail}
          />
        </div>

        <div className="ingredients ">
          <label htmlFor="ingredients">Recipe Ingredients:*</label>
          <textarea
            onChange={(e) => setIngrendients(e.target.value)}
            id="ingredients"
            value={ingredients}
            rows={6}
            cols={40}
            name="ingredients"
            required
          />
        </div>

        <div className="directions ">
          <label htmlFor="directions">Recipe Directions: </label>
          <textarea
            onChange={(e) => setDirections(e.target.value)}
            value={directions}
            rows={6}
            cols={40}
            id="directions"
          />
        </div>

        <button className="AddRecipeBtn">Add Recipe</button>
      </form>
    </div>
  );
}
