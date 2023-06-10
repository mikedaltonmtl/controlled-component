

const Button = (props) => {

  return (
    <button onClick={props.reset}>{props.children}</button>
  );
};


export default Button;