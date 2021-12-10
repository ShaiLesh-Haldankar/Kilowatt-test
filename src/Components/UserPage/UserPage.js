import React from "react";
import { useParams } from "react-router";
import { AddNewPost, getUserDetails } from "../../Services/APIs";
import HeaderComponent from "../Common/HeaderComponent/HeaderComponent";
import "./user-page.style.scss";
import { getUserPosts } from "./../../Services/APIs";
import PostCard from "./PostCard/PostCard";
import AddPost from "./AddPost/AddPost";
import nextId from "react-id-generator";
import { MainContext } from "./../Context/Context";
export default function UserPage() {
  const context = React.useContext(MainContext);
  const { usersObject } = context;
  const [details, setDetails] = React.useState({});
  const { id } = useParams();
  const [postList, setPostList] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [loader, setLoader] = React.useState(true);

  const setUpPostList = async () => {
    try {
      let res = await getUserPosts(id);
      if (res.data) {
        let temp = res.data.map((obj) => {
          return { ...obj, wished: false, key: nextId() };
        });
        setPostList([...temp]);
      }
      setLoader(false)
    } catch (error) {
      alert(error);
    }
  };
  const handleSubmit = async (obj) => {
    try {
      setLoading(true);
      let res = await AddNewPost({ ...obj, userId: id });
      if (res.data) {
        setLoading(false);
        setOpenModal(false);
        let tempObj = {
          ...obj,
          userId: id,
          id: res.data.id,
          wished: false,
          key: nextId(),
        };
        let temp = [tempObj, ...postList];
        console.log(temp);
        setPostList([...temp]);
      } else {
        alert("Something went wrong!");
        setLoading(false);
        setOpenModal(false);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
      setLoading(false);
      setOpenModal(false);
    }
  };
  React.useEffect(() => {
    console.log("LIST", postList);
  }, [postList]);
  React.useEffect(() => {
    setUpPostList();
  }, []);
  React.useEffect(() => {
    let temp = usersObject[id];
    setDetails(temp);
  }, [usersObject]);

  return !details ? (
    "Loading"
  ) : (
    <div className="user-page-main">
      {openModal && (
        <AddPost
          loading={loading}
          handleSubmit={handleSubmit}
          closeIt={() => setOpenModal(false)}
        />
      )}
      <HeaderComponent />

      <section className="user-page-body">
        <aside className="upb-user-info">
          <img
            src={
              "https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg"
            }
          />
          <h5>{details.name}</h5>
          <p>{details.username}</p>
          <div>
            {" "}
            <button>Follow</button>
            <button
              onClick={() => setOpenModal(!openModal)}
              title="Add New Post"
            >
              <img src="https://img.icons8.com/ios-filled/50/64b464/add--v1.png" />
            </button>
          </div>
        </aside>
        <aside className="upb-user-posts">
          {loader
            ? [1, 2, 3, 4, 5, 6].map((obj) => (
                <div className="post-card-loader">
                  <h6>
                    <button />
                    <span>XXXXXXXXXXXXXXXXXXXX</span>
                  </h6>
                  <h5>XXXXXXXXXXXXXXXXXXXXX</h5>
                  <p>
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </p>
                </div>
              ))
            : postList.map((obj) => (
                <div key={obj.key}>
                  <PostCard name={details.name} data={obj} />
                </div>
              ))}
        </aside>
      </section>
    </div>
  );
}
