import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <Link to="/">Home</Link>
      <Link to={`/recipes/create`}>Create Recipe</Link>
      <Link to={`/recipes/search`}>Search Recipe</Link>
    </div>
  );
}
