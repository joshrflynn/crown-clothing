import { Routes, Route } from "react-router-dom";

import "./categories.scss";
import Home from "./components/routes/Home/Home.jsx";
import Navigation from "./components/routes/Navigation/Navigation";
import SignIn from "./components/routes/SignIn/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
