import { Routes, Route } from "react-router-dom";

import "./categories.scss";
import Home from "./components/routes/Home/Home.jsx";
import Navigation from "./components/routes/Navigation/Navigation";
import Authentication from "./components/routes/Authentication/Authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
