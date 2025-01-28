import { ParentComponent, lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { StoreProvider } from "./store";

const Home = lazy(() => import("./pages/home/index"));
const Pokemon = lazy(() => import("./pages/pokemon/index"));
const Games = lazy(() => import("./pages/games/index"));
const Locations = lazy(() => import("./pages/locations/index"));

const App: ParentComponent = (props) => {
  return (
    <>
      <nav>
        <a href="/">Home</a>
      </nav>
      {props.children}
    </>
  );
}


render(() => (
  <StoreProvider>
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/pokemon" component={Pokemon} />
      <Route path="/games" component={Games} />
      <Route path="/locations" component={Locations} />
      {/* <Route path="*404" component={NotFound} /> */}
    </Router>
  </StoreProvider>
), document.getElementById("app")!);

export default App
