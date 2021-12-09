import React from "react";
import HeaderComponent from "../Common/HeaderComponent/HeaderComponent";
import "./all-users-page.style.scss";
import UsersTable from "./UsersTable/UsersTable";
import { getAllUsers } from "./../../Services/APIs";
export default function AllUsersPage() {
  const [userList, setUserList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const setUpUserList = async () => {
    try {
      let res = await getAllUsers();
      setUserList(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert(error);
      //   setLoading(false)
    }
  };
  React.useEffect(() => {
    setUpUserList();
  }, []);
  return (
    <div className="all-users-page-main">
      <HeaderComponent />
      <UsersTable loading={loading} userList={userList} />
    </div>
  );
}
