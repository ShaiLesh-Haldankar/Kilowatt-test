import React from "react";
import PropTypes from "prop-types";
import "./users-table.style.scss";
import nextId from "react-id-generator";
import { Link } from "react-router-dom";
export default function UsersTable({ userList = [], loading }) {
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
        {loading
          ? [1, 2, 3, 4, 5, 7].map((obj) => (
              <div className="utr-loader">
                <h6 ><span>xxxxxxxx</span> </h6>
                <h6 ><span>xxxxxxxx</span> </h6>
                <h6 ><span>xxxxxxxx</span> </h6>
                <h6 ><span>xxxxxxxx</span> </h6>
              </div>
            ))
          : userList.map((obj) => (
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
];
