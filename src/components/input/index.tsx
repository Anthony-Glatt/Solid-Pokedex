import { Component } from "solid-js";

interface Props {
  name: string;
  type: string;
  onChange: (e: Event) => void;
  placeholder: string;
}

const Input: Component<Props> = (props) => {
  const inputClasses = `input ${props.name ? `input-${props.name}` : ''}`;

  return (
    <>
      <input 
        class={inputClasses}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange} 
      />
    </>
  );
};

export default Input;