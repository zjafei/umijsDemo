import * as React from 'react';

export interface TsdemoProps {
  text: string,
  sex: boolean
}

export default class Tsdemo extends React.Component<TsdemoProps, any> {
  render() {
    const { text } = this.props;
    let isDone: boolean = false;
    isDone = false;
    return (
      <div>
        {text}
      </div>
    );
  };
}
