export default (props) => {
  console.log(props.children);
  const hasAuth = false; // 根据权限的控制来渲染不同的组件
  return (
    <div>
      this is auth components.
    {hasAuth === true ? props.children : <h1>NO AUTH</h1>}
    </div>
  )
};
