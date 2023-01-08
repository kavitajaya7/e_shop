import { Routes, Route } from "react-router";

import Home from "./routes/Home/Home.comonent";

import Navigation from "./routes/Navigation/Navigation.component";
import SignIn from'./routes/sign-in/sign-in.component';

const Shop = () => {
  return <h1>I am Here to Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
