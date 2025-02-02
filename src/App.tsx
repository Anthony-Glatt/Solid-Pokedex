import { ParentComponent } from "solid-js";
import Nav from './components/nav/index';

const navLinks = [
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
    <>
      <Nav links={navLinks} />
      {props.children}
    </>
  );
}

export default App
