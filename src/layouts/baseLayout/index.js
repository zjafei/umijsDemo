import withRouter from 'umi/withRouter';
import Link from 'umi/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default withRouter(
  ({ location, children }) =>
    <div>
      <Breadcrumbs/>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/a">a page</Link>
      </div>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          {children}
        </CSSTransition>
      </TransitionGroup>
    </div>
)
