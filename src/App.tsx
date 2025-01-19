import { ParentComponent, lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

const Home = lazy(() => import("./components/home/index"));

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
  <Router root={App}>
    <Route path="/" component={Home} />
    {/* <Route path="*404" component={NotFound} /> */}
  </Router>
), document.getElementById("app")!);

export default App
