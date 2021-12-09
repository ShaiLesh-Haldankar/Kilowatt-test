import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.scss";
import AllUsersPage from "./Components/AllUsersPage/AllUsersPage";
import UserPage from "./Components/UserPage/UserPage";
import PostPage from './Components/PostPage/PostPage';

const App = () => {
  return (
    <div className="main-app">
      <Switch>
        <Route path="/user/:id/post/:postId" component={PostPage} />
        <Route path="/user/:id" component={UserPage} />
        <Route path="/" component={AllUsersPage} />
      </Switch>
    </div>
  );
};

export default App;
