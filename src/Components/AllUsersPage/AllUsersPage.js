import React from "react";
import HeaderComponent from "../Common/HeaderComponent/HeaderComponent";
import "./all-users-page.style.scss";
import UsersTable from "./UsersTable/UsersTable";
import { deleteUsers, getAllUsers } from "./../../Services/APIs";
import Confirmation from "../Common/Confirmation/Confirmation";
import { MainContext } from "./../Context/Context";
export default function AllUsersPage() {
  const context = React.useContext(MainContext);
  const { updateState, usersObject, usersList } = context;
  const [openModal, setOpenModal] = React.useState("");
  const handleDelete = async () => {
    try {
      let res = await deleteUsers(openModal);
      let tempObj = usersObject;
      delete tempObj[openModal];
      let temp = usersList.filter((x) => {
        return x.id !== openModal;
      });
      updateState({
        ["usersObject"]: { ...tempObj },
        ["usersList"]: [...temp],
      });
      setOpenModal("");
    } catch (error) {
      alert(error);
      setOpenModal("");
    }
  };
  return (
    <div className="all-users-page-main">
      {openModal && (
        <Confirmation
          handleDelete={handleDelete}
          closeIt={() => setOpenModal("")}
        />
      )}
      <HeaderComponent />
      <UsersTable setOpenModal={setOpenModal} />
    </div>
  );
}
