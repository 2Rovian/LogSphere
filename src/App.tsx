import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LainLookingAbove from "./components/LainLookingAbove.tsx";
import MoviesPage from "./pages/MoviesPage.tsx";
import BooksPage from "./pages/BooksPage.tsx";
import AnimesPage from "./pages/AnimesPage.tsx";
import GamesPage from "./pages/GamesPage.tsx";

function App() {

  return (
    <BrowserRouter>
      <div className="background">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />}/>
          <Route path="/books" element={<BooksPage />}/>
          <Route path="/animes" element={<AnimesPage />}/>
          <Route path="/games" element={<GamesPage />}/>
        </Routes>
        <LainLookingAbove />
      </div>
     </BrowserRouter>  
  )
}

export default App
