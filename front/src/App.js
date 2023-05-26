import { Routes, Route } from "react-router-dom";

//Components
import { Layout } from "./components/layout/Layout";
import { HomePage } from "../src/pages/homePage/HomePage";
import { HeroDetails } from "./pages/heroDetails/HeroDetails";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="heroes/:id" element={<HeroDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
