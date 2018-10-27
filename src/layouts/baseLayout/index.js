import withRouter from 'umi/withRouter';
import Link from 'umi/link';
import router from 'umi/router';
import Breadcrumbs from '../../components/Breadcrumbs';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default withRouter(
  (props) => {
    console.log('withRouter组件的 props：', props);
    /***
     * children 子级组件
     * history 历史纪录
     * location 当前的url
     * match 匹配的
     */
    return (
      <div>
        <Breadcrumbs />
        <div>
          <Link to="/">home</Link>
        </div>
        <div>
          <a onClick={() => { router.push('/a'); }}>a page</a>
        </div>
        <div>
          <Link to="/dynamic">dynamic</Link>
        </div>
        <div>
          <Link to="/prompt">prompt</Link>
        </div>
        <TransitionGroup>
          <CSSTransition key={props.location.pathname} classNames="fade" timeout={300}>
            {props.children}
          </CSSTransition>
        </TransitionGroup>
      </div>);
  }
)
