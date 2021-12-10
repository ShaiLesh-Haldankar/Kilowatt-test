import React from "react";
import PropTypes from "prop-types";
import "./users-table.style.scss";
import nextId from "react-id-generator";
import { Link } from "react-router-dom";
import { MainContext } from "./../../Context/Context";
export default function UsersTable({ setOpenModal }) {
  const context = React.useContext(MainContext);
  const { usersList } = context;
  return (
    <div className="user-table-main">
      <header>
        {header.map((obj) => (
          <div key={obj.keyId}>
            <h6>{obj.title}</h6>
          </div>
        ))}
      </header>
      <section>
        {!usersList.length
          ? [1, 2, 3, 4, 5, 7].map((obj) => (
              <div className="utr-loader">
                <h6>
                  <span>xxxxxxxx</span>{" "}
                </h6>
                <h6>
                  <span>xxxxxxxx</span>{" "}
                </h6>
                <h6>
                  <span>xxxxxxxx</span>{" "}
                </h6>
                <h6>
                  <span>xxxxxxxx</span>{" "}
                </h6>
              </div>
            ))
          : usersList.map((obj) => (
              <div className="user-table-row">
                <div>
                  <h6>{obj.name}</h6>
                </div>
                <div>
                  <h6>{obj.email}</h6>
                </div>
                <div>
                  <h6>{obj.company.name}</h6>
                </div>
                <div>
                  <Link to={`/user/${obj.id}`}>View</Link>
                </div>
                <div>
                  {/* <button>
                    <img src="https://img.icons8.com/ios-glyphs/60/64b464/edit.png" />
                  </button> */}
                  <button onClick={() => setOpenModal(obj.id)}>
                    <img src="https://img.icons8.com/material-sharp/48/ce392f/filled-trash.png" />
                  </button>
                </div>
              </div>
            ))}
      </section>
    </div>
  );
}
UsersTable.propTypes = {
  userList: PropTypes.array,
  loading: PropTypes.bool,
};
const header = [
  { keyId: nextId(), title: "Name" },
  { keyId: nextId(), title: "Email" },
  { keyId: nextId(), title: "Company" },
  { keyId: nextId(), title: "Action" },
  { keyId: nextId(), title: "Others" },
];
