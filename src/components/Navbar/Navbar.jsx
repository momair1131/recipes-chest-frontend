import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import SearchRecipe from "../../pages/SearchRecipe";

export default function Navbar() {
  return (
    <header>
      <div className="Navbar">
        <div className="CreateRecipe">
          <Link to={`/recipes/create`}>Create Recipe</Link>
        </div>

        <div className="logo">
          <Link to="/">
            <img src="RecipeChest.png" alt="logo" />
          </Link>
        </div>
        <div className="Searchlinks">
          <Link to={`/recipes/search`} className="material-symbols-outlined">
            Search
          </Link>
        </div>
      </div>
    </header>
  );
}
