import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { serverURL } from "../config";
import "./DeleteRecipe.css";

export default function DeleteRecipe() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`${serverURL}/api/recipes/${id}`)
      .then((response) => {
        setLoading(false);
        console.log("book deleted successfully");
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const cancelDelete = () => {
    navigate("/");
  };

  return (
    <div className="DeleteRecipe">
      {loading ? <h1>Loading...</h1> : ""}
      <div className="DeleteContainer">
        <h3>Are you sure you want to delete this recipe?</h3>
        <button className="DeleteBtn" onClick={handleDelete}>
          Yes, Delete it
        </button>
        <button onClick={cancelDelete} className="CancelBtn">
          No, Don't Delete it{" "}
        </button>
      </div>
    </div>
  );
}
