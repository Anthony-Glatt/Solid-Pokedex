import { lazy } from 'solid-js';
import { render } from 'solid-js/web'
import { Router, Route } from "@solidjs/router";
import App from './App'

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

const wrapper = document.getElementById("root");

if (!wrapper) {
  throw new Error("Wrapper div not found")
}

render(() => (
  <Router root={App}>
    {routes}
  </Router>
), wrapper as HTMLElement)
