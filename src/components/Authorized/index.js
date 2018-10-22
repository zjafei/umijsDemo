import React from 'react';

export default class Authorized extends React.PureComponent {
  render() {
    const { authority, children, noAuth } = this.props;
    const childrenRender = typeof children === 'undefined' ? null : children;
    return authority === true ? childrenRender : noAuth;
  };
};
