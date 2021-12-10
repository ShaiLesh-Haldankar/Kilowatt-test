import axios from "axios";
let baseUrl = "https://jsonplaceholder.typicode.com/";

export const getAllUsers = () => {
  let config = {
    method: "get",
    url: `${baseUrl}users`,
  };
  return axios(config);
};
export const getUserDetails = (id) => {
  let config = {
    method: "get",
    url: `${baseUrl}users/${id}`,
  };
  return axios(config);
};
export const getUserPosts = (id) => {
  let config = {
    method: "get",
    url: `${baseUrl}users/${id}/posts`,
  };
  return axios(config);
};
export const AddNewPost = (data) => {
  let config = {
    method: "post",
    url: `${baseUrl}users/${data.userId}/posts`,
    data: JSON.stringify(data),
  };
  return axios(config);
};
export const editThePost = (data) => {
  let config = {
    method: "PUT",
    url: `${baseUrl}posts/${data.id}`,
    data: JSON.stringify(data),
  };
  return axios(config);
};
export const getPostDetails = (id) => {
  let config = {
    method: "get",
    url: `${baseUrl}posts/${id}`,
  };
  return axios(config);
};
export const getCommentsForPost = (id) => {
  let config = {
    method: "get",
    url: `${baseUrl}posts/${id}/comments`,
  };
  return axios(config);
};
export const addComment = (data) => {
  let config = {
    method: "post",
    url: `${baseUrl}posts/${data.postId}/comments`,
    data: JSON.stringify(data),
  };
  return axios(config);
};
export const deleteUsers = (id) =>{
  let config = {
    method: "delete",
    url: `${baseUrl}users/${id}`
  };
  return axios(config);

}
export const deletePosts = (id) =>{
  let config = {
    method: "delete",
    url: `${baseUrl}posts/${id}`
  };
  return axios(config);

}