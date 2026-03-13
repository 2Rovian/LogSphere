import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LainLookingAbove from "./components/LainLookingAbove.tsx";
import MoviesPage from "./pages/MoviesPage.tsx";

function App() {

  return (
    <BrowserRouter>
      <div className="background">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />}/>
        </Routes>
        <LainLookingAbove />
      </div>
     </BrowserRouter>  
  )
}

export default App
