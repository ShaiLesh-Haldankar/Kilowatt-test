import React from "react";
import "./add-post.style.scss";
export default function AddPost({ closeIt, handleSubmit, loading }) {
  const [details, setDetails] = React.useState({
    title: "",
    body: "",
  });
  return (
    <div onClick={() => closeIt()} className="add-post-main">
      <div onClick={(e) => e.stopPropagation()} className="add-post-card">
        <h4>Add New Post</h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(details);
          }}
          className="add-post-form"
        >
          <div className="input-wrapper">
            <p>Title</p>
            <input
              title={details.title}
              onChange={(e) =>
                setDetails({ ...details, [e.target.name]: e.target.value })
              }
              name="title"
              placeholder="Title"
              required
            />
          </div>

          <div className="input-wrapper">
            <p>Body</p>
            <textarea
              onChange={(e) =>
                setDetails({ ...details, [e.target.name]: e.target.value })
              }
              name="body"
              title={details.title}
              placeholder="Enter"
              required
            />
          </div>
          <button>{loading ? "Submitting...." : "Submit"}</button>
        </form>
      </div>
    </div>
  );
}
