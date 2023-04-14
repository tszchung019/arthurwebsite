import React, { useState, useEffect } from "react";
import "../../css/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  Link,
} from "@aws-amplify/ui-react";
import { 
  getBlog as getBlogQuery, 
  listBlogs as listBlogsQuery, 
  getPost, 
  listPosts, 
  getComment, 
  listComments 
} from "../../graphql/queries"
import {
  createBlog as createBlogMutation,
  updateBlog as updateBlogMutation,
  deleteBlog as deleteBlogMutation,
  createPost as createPostMutation,
  updatePost as updatePostMutation,
  deletePost as deletePostMutation,
  createComment as createCommentMutation,
  updateComment as updateCommentMutation,
  deleteComment as deleteCommentMutation,
} from "../../graphql/mutations"
import { NavLink } from "react-router-dom";
import AlertDialog from "../Props/AlertDialog";

export default function ManagePosts() {
    const [blogs, setBlogs] = useState([]);
}