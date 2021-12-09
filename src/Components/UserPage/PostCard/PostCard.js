import React from "react";
import "./post-card-style.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
export default function PostCard({ data, name }) {
  const { id } = useParams();
  const [postDetails, setPostDetails] = React.useState(data);
  React.useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Link
      to={`/user/${id}/post/${data.id}`}
      key={data.id}
      className="post-card-main"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          setPostDetails({ ...postDetails, wished: !postDetails.wished });
        }}
      >
        {postDetails.wished ? (
          <img
            key="bmd"
            src="https://img.icons8.com/material-rounded/96/000000/bookmark-ribbon--v1.png"
          />
        ) : (
          <img
            key="nbmd"
            src="https://img.icons8.com/material-outlined/96/000000/bookmark-ribbon.png"
          />
        )}
      </button>

      <section className="p-c-m-left">
        <h5>
          <img
            src={
              "https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg"
            }
          />
          {name}
        </h5>
        <h4>{postDetails.title}</h4>
        <div>
          <p>{postDetails.body}</p>
        </div>
      </section>
    </Link>
  );
}
PostCard.protoType = {
  data: PropTypes.any,
  name: PropTypes.string,
};
