import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import "antd/dist/antd.min.css";
import DetailMovie from "./Pages/DetailPage/DetailMovie";
import Layout from "./Layout/Layout";
import Spinner from "./Components/Spinner/Spinner";
import ScrollToTop from "./Utils/ScrollToTop";

function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Layout Component={HomePage} />} />
            <Route
              path='/detail/:id'
              id={123}
              element={<Layout Component={DetailMovie} />}
            />
            <Route path='/login' element={<Layout Component={LoginPage} />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
