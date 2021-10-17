import "./App.css";
import VendingMachine from "./VendingMachine";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Soda from "./Soda";
import Chips from "./Chips";
import TrailMix from "./TrailMix";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/trailmix">
          <TrailMix />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
