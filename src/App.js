import Main from "./components/Main/";
import Header from "./components/Header/";
import { Route } from "react-router-dom";
import Watch from "./components/Watch/index";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="routers">
        <Route exact path="/" component={Main} />
        <Route path="/anime/watch/:id" component={Watch} />
      </div>
    </>
  );
}

export default App;
