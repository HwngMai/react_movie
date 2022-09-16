import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import "antd/dist/antd.min.css";
import DetailMovie from "./Pages/HomePage/DetailMovie";
import Layout from "./Layout/Layout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout Component={HomePage} />} />
          <Route
            path='/detail/:id'
            element={<Layout Component={DetailMovie} />}
          />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
