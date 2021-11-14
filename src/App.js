import "./App.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
         {routes.map((route)=>(
           <Route {...route}/>
         ))}
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
