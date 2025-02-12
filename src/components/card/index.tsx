import { Component } from "solid-js";


interface Props {
  class: string;
  number: number;
  images: {
    back_default: string,
    back_shiny: string,
    front_default: string,
    front_shiny: string,
  };
  name: string;
}

const Card: Component<Props> = (props) => {
  const cardClasses = `card ${props.class ? `card-${props.class}` : ''}`;

  return (
      <div class={cardClasses}>
          <div class="body">
            <div class="number">
              {props.number}
            </div>
            <img src={props.images.front_default} />
            <div class="name">
              {props.name}
            </div>
          </div>
      </div>
  );
};

export default Card;