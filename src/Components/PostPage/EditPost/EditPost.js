import React from "react";
import "./edit-post.style.scss";
export default function EditPost({ data, closeIt, handleEditPost }) {
  const [newDetails, setNewDetails] = React.useState({
    title: "",
    body: "",
  });
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setNewDetails({
      title: data.title,
      body: data.body,
    });
  }, []);
  return (
    <div onClick={() => closeIt()} className="edit-post-main">
      <div onClick={(e) => e.stopPropagation()} className="epm-modal">
        <h4>Edit the Post</h4>
        <div className="input-wrapper">
          <p>Title</p>
          <input
            name="title"
            onChange={(e) =>
              setNewDetails({ ...newDetails, [e.target.name]: e.target.value })
            }
            value={newDetails.title}
          />
        </div>

        <div className="input-wrapper">
          <p>Body</p>
          <textarea
            onChange={(e) =>
              setNewDetails({ ...newDetails, [e.target.name]: e.target.value })
            }
            name="body"
            value={newDetails.body}
          />
        </div>
        <button
          onClick={() => {
            handleEditPost(newDetails);
            setLoading(true);
          }}
        >
          {loading ? "Editing..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
