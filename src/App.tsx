import { ParentComponent, lazy } from "solid-js";
import { Router, Route } from "@solidjs/router";
import { StoreProvider } from "./store";
import Nav from './components/nav/index';

const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/home/index"))
  },
  {
    path: "pokemon",
    component: lazy(() => import("./pages/pokemon/index"))
  },
  {
    path: "locations",
    component: lazy(() => import("./pages/locations/index"))
  },
  {
    path: "games",
    component: lazy(() => import("./pages/games/index"))
  }
]

const navProps = [
  {
    href: "/",
    text: "Home"
  },
  {
    href: "/pokemon",
    text: "Pokemon"
  },
  {
    href: "/locations",
    text: "Locations"
  },
  {
    href: "/games",
    text: "Games"
  }
]

const App: ParentComponent = (props) => {
  return (
    <StoreProvider>
      <Router>
        {routes}
        {/* <Route path="*404" component={NotFound} /> */}
      </Router>
      <Nav props={navProps} />
      {props.children}
    </StoreProvider>
  );
}

export default App
