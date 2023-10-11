import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <div class="FooterLogo">
          <Link to="/">
            <img src="RecipeChest.png" alt="logo" />
          </Link>
        </div>
        <div class="FooterContent">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Recipes Chest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
