import { Component, For } from "solid-js";

interface Props {
  links:
    {
      href: string,
      text: string
    } []
}

const Nav: Component<Props> = (props) => {
  return (
      <div class="navbar">
          <ul>
            <For each={props.links}>
              {(link) => <li><a href={link.href}>{link.text}</a></li>}
            </For>
          </ul>
      </div>
  );
};

export default Nav;