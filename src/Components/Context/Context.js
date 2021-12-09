import React, { Component, createContext } from "react";

export const MainContext = createContext();

export default class ContextProvider extends Component {
  state = {};
  updateState = (field, val) => {
    this.setState({ [field]: val });
  };
  componentDidMount() {}
  render() {
    return (
      <MainContext.Provider
        value={{ ...this.state, updateState: this.updateState }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}
