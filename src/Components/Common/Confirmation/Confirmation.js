import React from "react";
import ReactDOM from "react-dom";
import "./confirmation.style.scss";
import { Images } from "./../../../Assets/0a-export";
export default function Confirmation({ closeIt, handleDelete }) {
  const [loading, setLoading] = React.useState(false);
  return ReactDOM.createPortal(
    <div className="confirmation-modal-main">
      <section className="confirmation-modal">
        <h4>Are you sure?</h4>
        <img src={Images.delete} />
        {loading ? (
          ""
        ) : (
          <div>
            <button
              onClick={() => {
                handleDelete();
                setLoading(true);
              }}
            >
              Yes
            </button>
            <button onClick={()=>closeIt()}>No</button>
          </div>
        )}
      </section>
    </div>,
    document.body
  );
}
