import { Component } from "solid-js";


interface Props {
  class: string;
  number: number;
  // image: {
  //   src: string;
  //   alt: string;
  // };
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
            {/* <img src={props.image.src} alt={props.image.alt} /> */}
            <div class="name">
              {props.name}
            </div>
          </div>
      </div>
  );
};

export default Card;