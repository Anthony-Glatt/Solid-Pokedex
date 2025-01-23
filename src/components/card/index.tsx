import { Component } from "solid-js";
import { A } from "@solidjs/router";


interface Props {
  name: string;
  title: string;
  text: string;
}

const Card: Component<Props> = (props) => {
  const cardClasses = `card ${props.name ? `card-${props.name}` : ''}`;

  return (
    <A href="pokemon">
      <div class={cardClasses}>
          <div class="body">
            <div class="title">
              {props.title}
            </div>
            <div class="text">
              {props.text}
            </div>
          </div>
      </div>
    </A>
  );
};

export default Card;