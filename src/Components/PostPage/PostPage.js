import React from "react";
import "./post-page.style.scss";
import { useHistory, useParams } from "react-router";
import {
  addComment,
  deletePosts,
  editThePost,
  getCommentsForPost,
  getPostDetails,
} from "./../../Services/APIs";
import HeaderComponent from "../Common/HeaderComponent/HeaderComponent";
import nextId from "react-id-generator";
import { MainContext } from "./../Context/Context";
import Confirmation from "../Common/Confirmation/Confirmation";
import EditPost from "./EditPost/EditPost";
export default function PostPage() {
  const history = useHistory();
  const context = React.useContext(MainContext);
  const { usersObject } = context;
  const { postId, id } = useParams();
  const [postDetails, setPostDetails] = React.useState(null);
  const [details, setDetails] = React.useState(null);
  const [comments, setComments] = React.useState([]);
  const [comment, setComment] = React.useState("");
  const [editing, setEditing] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const setUpPostDetails = async () => {
    try {
      let res = await getPostDetails(postId);
      setPostDetails(res.data);
    } catch (error) {}
  };

  const setUpComments = async () => {
    let res = await getCommentsForPost(postId);
    if (res.data) {
      let temp = res.data.map((obj) => {
        return { ...obj, key: nextId() };
      });
      setComments([...temp]);
    }
  };
  const addCommentCall = async () => {
    try {
      let tempObj = {
        name: details.name,
        email: details.email,
        body: comment,
        postId: postId,
      };
      let res = await addComment({ ...tempObj });
      let temp = [{ ...tempObj, id: res.data.id, key: nextId() }, ...comments];
      setComments([...temp]);
      setComment("");
    } catch (error) {}
  };

  const handleDelete = async () => {
    try {
      let res = await deletePosts(postId);
      setDeleteModal(false);
      history.push(`/user/${id}`);
    } catch (error) {
      alert(error);
      setDeleteModal(false);
    }
  };

  const handleEditPost = async (data) => {
    try {
      let temp = { ...data, id: id, postId: postId };
      let res = await editThePost({ ...temp });
      if (res.data) {
        setPostDetails({ ...postDetails, ...data });
      }
      setEditing(false);
    } catch (error) {}
  };

  React.useEffect(() => {
    setUpPostDetails();
    setUpComments();
  }, []);

  React.useEffect(() => {
    setDetails(usersObject[id]);
  }, [usersObject]);
  return !postDetails || !details ? (
    "Loading..."
  ) : (
    <div className="post-page-main">
      {editing && (
        <EditPost
          handleEditPost={handleEditPost}
          data={postDetails}
          closeIt={() => setEditing(false)}
        />
      )}
      {deleteModal && (
        <Confirmation
          closeIt={() => setDeleteModal(false)}
          handleDelete={handleDelete}
        />
      )}
      <HeaderComponent />
      <section className="pgm-body">
        <h3>{postDetails.title}</h3>
        <div className="pgm-user-details">
          <p>
            <img
              src={
                "https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg"
              }
            />
            {details.name}
          </p>
          <div>
            <button onClick={() => setEditing(true)} title="Edit Post">
              <img src="https://img.icons8.com/ios-glyphs/60/64b464/edit--v1.png" />
            </button>
            <button onClick={() => setDeleteModal(true)} title="Delete Post">
              <img src="https://img.icons8.com/material-rounded/48/ce392f/filled-trash.png" />
            </button>
          </div>
        </div>
        <figure className="pgm-cover">
          <img src="https://wallpaperaccess.com/full/1376490.jpg" />
        </figure>
        <article>
          <p>{postDetails.body}</p>
        </article>
      </section>
      <section className="pgm-comments">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!comment) return;
            addCommentCall();
          }}
          className="pgm-c-add"
        >
          <img
            src={
              "https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg"
            }
          />
          <div>
            <textarea
              required
              placeholder="Comment Here"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
            <button>Comment</button>
          </div>
        </form>
        <h3>Comments</h3>
        <ul>
          {comments.map((obj) => (
            <li key={obj.key} className="comment-wrapper">
              <h5>
                <img
                  src={
                    "https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg"
                  }
                />
                {obj.name}
              </h5>
              <div>
                <p>{obj.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
