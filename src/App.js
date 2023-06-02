
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div > 
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Homepage/>} />
    {/* <Route path="profile" element={<Profile/>} /> */}
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;

//className="App"