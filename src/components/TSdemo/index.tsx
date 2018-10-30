import * as React from 'react';

export interface TsdemoProps {
  text: string,
  sex: boolean
}

export interface TsdemoStates {
  stateA: string,
  stateB: string
}

export default class Tsdemo extends React.Component<TsdemoProps, TsdemoStates> {
  constructor(props: TsdemoProps) {
    super(props);
    this.state = {
      stateA: 'stateA',
      stateB: 'stateA'
    };
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        {text}
      </div>
    );
  };
}
