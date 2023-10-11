import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import CreateRecipe from "./pages/CreateRecipe";
import ShowRecipe from "./pages/ShowRecipe";
import EditRecipe from "./pages/EditRecipe";
import DeleteRecipe from "./pages/DeleteRecipe";

import "./App.css";
import SearchRecipe from "./pages/SearchRecipe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/create" element={<CreateRecipe />} />
          <Route path="/recipes/details/:id" element={<ShowRecipe />} />
          <Route path="/recipes/edit/:id" element={<EditRecipe />} />
          <Route path="/recipes/delete/:id" element={<DeleteRecipe />} />
          <Route path="/recipes/search/" element={<SearchRecipe />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
