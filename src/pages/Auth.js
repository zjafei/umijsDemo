import Authorized from '../components/Authorized';

export default (props) => {
  // 根据路由权限的控制来渲染不同的组件
  return (
    <Authorized
      authority={props.children.props.route.authority}
      noAuth={<h1>NO AUTH</h1>}
    >
      {props.children}
    </Authorized>
  )
};
