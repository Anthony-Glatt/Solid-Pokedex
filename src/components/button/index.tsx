import { ParentComponent } from "solid-js";

interface Props {
  name: string;
  onClick: () => void;
}

const Button: ParentComponent<Props> = (props) => {
  const btnClasses = `btn ${props.name ? `btn-${props.name}` : ''}`;

  return (
    <button class={btnClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;