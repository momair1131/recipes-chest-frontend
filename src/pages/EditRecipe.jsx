import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditRecipe.css";
import { serverURL } from "../config";

export default function EditRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [detail, setDetail] = useState("");
  const [ingredients, setIngrendients] = useState("");
  const [directions, setDirections] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverURL}/api/recipes/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setImg(response.data.img);
        setDetail(response.data.detail);
        setIngrendients(response.data.ingredients);
        setDirections(response.data.directions);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientArray = String(ingredients).split(",");

    // console.log(ing);
    const recipeData = {
      title,
      description,
      img,
      detail,
      ingredients: ingredientArray,
      directions,
    };
    setLoading(true);
    axios
      .put(`${serverURL}/api/recipes/${id}`, recipeData)
      .then((response) => {
        console.log();
        if (response.statusText === "OK") {
          console.log("Recipe Updated Successfully");
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
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="EditRecipe">
      <h3>Edit Recipe</h3>
      {loading ? <h1>Loading...</h1> : ""}
      <form className="UpdateForm" onSubmit={handleSubmit}>
        <div className="title">
          <label htmlFor="title">Recipe Title:*</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            value={title}
            required
          />
        </div>

        <div className="description">
          <label htmlFor="description">Recipe Description:</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            value={description}
          />
        </div>

        <div className="image">
          <label htmlFor="image">Recipe Image Link:*</label>
          <input
            type="text"
            onChange={(e) => setImg(e.target.value)}
            id="image"
            value={img}
            required
          />
        </div>

        <div className="detail">
          <label htmlFor="detail">Recipe Detail:</label>
          <input
            type="text"
            onChange={(e) => setDetail(e.target.value)}
            id="detail"
            value={detail}
          />
        </div>

        <div className="ingredients">
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

        <div className="directions">
          <label htmlFor="directions">Recipe Directions:</label>
          <textarea
            onChange={(e) => setDirections(e.target.value)}
            value={directions}
            rows={6}
            cols={40}
            id="directions"
          />
        </div>
        <button className="UpdateRecipeBtn">Update Recipe</button>
      </form>
    </div>
  );
}
