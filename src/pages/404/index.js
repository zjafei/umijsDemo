import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class e404 extends PureComponent {
  constructor(props, context){
    console.log(context);
    super();
  }

  static contextTypes = {
    test: PropTypes.string
  }

  render() {
    console.log(this.context);
    return (
      <>{/* 空标签作为不渲染的根节点 */}
        <h1>
          404 page
      </h1>
        <p>this is a 404 page</p>
      </>
    );
  }
}

export default e404;
