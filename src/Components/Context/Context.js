import React, { Component, createContext } from "react";
import { getAllUsers } from "./../../Services/APIs";
import nextId from "react-id-generator";

export const MainContext = createContext();

export default class ContextProvider extends Component {
  state = {
    usersList: [],
    usersObject: null,
  };
  updateState = (data) => {
    this.setState({ ...data });
  };

  initialRender = async () => {
    try {
      let res = await getAllUsers();
      let temp = res.data.map((obj) => {
        return { ...obj, key: nextId() };
      });
      let tempObj = {};
      res.data.forEach((element) => {
        tempObj = {
          ...tempObj,
          [element.id]: element,
        };
      });
      this.setState({ usersList: [...temp], usersObject: { ...tempObj } });
    } catch (error) {
      console.error(error);
      alert(error);
      //   setLoading(false)
    }
  };

  componentDidMount() {
    this.initialRender();
  }
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
