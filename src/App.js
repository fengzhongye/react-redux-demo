// @flow

import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { changeTextAction, buttonClickAction } from './actions';

type Props = {
  text: string,
  foo: number,
  onButtonClick(): void,
  onChangeText(): void
}

type State = {
  count: number,
};

class App extends Component<Props, State> {
  state = {
    count: 0
  }
  static defaultProps = {
    foo: 42
  }
  componentDidMount(){
    setInterval(() => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        }
      })
    }, 1000);
  }
  render() {
    const {
      text,
      onChangeText,
      onButtonClick
    } = this.props;
    return (
      <div>
        <div>{this.state.count}</div>
        <span>{this.props.foo}</span>
        <h1 onClick={onChangeText}>{text}</h1>
        <button onClick={onButtonClick}>点击</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => dispatch(buttonClickAction),
    onChangeText: () => dispatch(changeTextAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
