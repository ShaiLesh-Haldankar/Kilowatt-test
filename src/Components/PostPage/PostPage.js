import React from "react";
import "./post-page.style.scss";
import { useParams } from "react-router";
import {
  addComment,
  getCommentsForPost,
  getPostDetails,
  getUserDetails,
} from "./../../Services/APIs";
import HeaderComponent from "../Common/HeaderComponent/HeaderComponent";
import nextId from "react-id-generator";
export default function PostPage() {
  const { postId, id } = useParams();
  const [postDetails, setPostDetails] = React.useState(null);
  const [details, setDetails] = React.useState(null);
  const [comments, setComments] = React.useState([]);
  const [comment, setComment] = React.useState("");
  const setUpPostDetails = async () => {
    try {
      let res = await getPostDetails(postId);
      setPostDetails(res.data);
    } catch (error) {}
  };
  const setUpDetails = async () => {
    try {
      let res = await getUserDetails(id);
      if (res.data) {
        setDetails(res.data);
      }
    } catch (error) {
      alert(error);
    }
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
  React.useEffect(() => {
    setUpPostDetails();
    setUpDetails();
    setUpComments();
  }, []);
  return !postDetails || !details ? (
    "Loading..."
  ) : (
    <div className="post-page-main">
      <HeaderComponent />
      <section className="pgm-body">
        <h3>{postDetails.title}</h3>
        <div className="pgm-user-details">
          <img
            src={
              "https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg"
            }
          />
          <p>{details.name}</p>
        </div>
        <figure className="pgm-cover">
          <img src="https://wallpaperaccess.com/full/1376490.jpg" />
        </figure>
        <article>
          <p>{postDetails.body}</p>
        </article>
      </section>
      <section className="pgm-comments">
        <h3>Comments</h3>
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
