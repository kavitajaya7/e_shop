import { Routes, Route } from "react-router";

import Home from "./routes/Home/Home.comonent";

import Navigation from "./routes/Navigation/Navigation.component";
import Auth from'./routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component'

  

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
