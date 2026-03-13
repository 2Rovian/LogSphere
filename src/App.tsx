import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LainLookingAbove from "./components/LainLookingAbove.tsx";

function App() {

  return (
    <BrowserRouter>
      <div className="background">
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
        <LainLookingAbove />
      </div>
     </BrowserRouter>  
  )
}

export default App
