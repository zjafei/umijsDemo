export default (props) => {
  console.log(props.children);
  return (
    <h1>
      this is auth components.
    {props.children}
    </h1>
  )
};
