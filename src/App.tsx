import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";

function App() {

  return (
    <BrowserRouter>
      <div className="background">
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </div>
     </BrowserRouter>  
  )
}

export default App
