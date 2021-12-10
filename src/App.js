import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.scss";
import { Images } from "./Assets/0a-export";
// import AllUsersPage from "./Components/AllUsersPage/AllUsersPage";
// import UserPage from "./Components/UserPage/UserPage";
// import PostPage from "./Components/PostPage/PostPage";
import { MainContext } from "./Components/Context/Context";

const AllUsersPage = React.lazy(() =>
  import("./Components/AllUsersPage/AllUsersPage")
);
const UserPage = React.lazy(() => import("./Components/UserPage/UserPage"));
const PostPage = React.lazy(() => import("./Components/PostPage/PostPage"));

const App = () => {
  const context = React.useContext(MainContext);
  const { usersObject } = context;
  return !usersObject ? (
    ""
  ) : (
    <div className="main-app">
      <Suspense fallback={<div>Loading.....</div>}>
        <Switch>
          <Route path="/user/:id/post/:postId" component={PostPage} />
          <Route path="/user/:id" component={UserPage} />
          <Route path="/" component={AllUsersPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
