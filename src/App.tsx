import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { Header } from "./Components/Header/Header";
import { Home } from "./Pages/Home";

export function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
