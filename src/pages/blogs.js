import React, { useState, useEffect } from "react";
import "../css/styles.css";
import DrawerComponent from '../components/Drawer';
import Navbar from '../components/Navbar';
import {
	useTheme,
	useMediaQuery,
  Paper,
  Box,
  Grid,
  styled,
} from "@mui/material";
import { generateClient } from 'aws-amplify/api';
import {
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
} from "../graphql/queries"
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
} from "../graphql/mutations"
import { NavLink, useNavigate } from "react-router-dom";
import BlogPost from "../components/Blog";
import { S3, GetObjectCommand, S3Client } from '@aws-sdk/client-s3';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const client = generateClient();
  const navigate = useNavigate();

  // TODO: Avoid require links to AWS service on client side
  /*
    1, Make a HTTP call to invoke a Lambda function
    2, In the Lambda function, get the object and return as a WebStream content
  */
  const s3bucket = process.env.REACT_APP_S3_BUCKET;

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const apiData = await client.graphql({ query: listBlogsQuery });
    const blogsFromAPI = apiData.data.listBlogs.items;
    setBlogs(blogsFromAPI);
  }

  async function createBlog(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
    };
    await client.graphql({
      query: createBlogMutation,
      variables: { input: data },
    });
    fetchBlogs();
    event.target.reset();
  }

  async function deleteBlog({ id }) {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
    await client.graphql({
      query: deleteBlogMutation,
      variables: { input: { id } },
    });
  }

  async function navigateToBlog(blog) {
    navigate('./' + blog.id);
  }

  return (
    <div>
    <div>
      {isMobile ? (
        <DrawerComponent />
      ) : (
        <Navbar />
      )}
    </div>
      <div className="content">
        <h1>Welcome to Arthur's Blogs</h1>
        <View className="Blog">
          <Heading level={2}>Categories</Heading>
          <Grid item xs={6}>
            <Box
              sx={{
                p: 2,
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr 1fr' },
                gap: 2,
              }}
            >
              {blogs.map((blog) => (
                <div onClick={() => navigateToBlog(blog)}>
                  <Paper className="blogBox" key={blog.id || blog.name} elevation={6}>
                    <div className="blogBox-title">
                      <Text>
                        {blog.name}
                      </Text>
                    </div>
                    <div className="blogBox-summary">
                      <Text>
                        {blog.summary}
                      </Text>
                    </div>
                    <div>
                      <img style={{maxWidth: '100%', maxHeight: '100%', bottom:0}} src={ s3bucket + blog.imgPath }/>
                    </div>
                  </Paper>
                </div>
              ))}
            </Box>
          </Grid>
        </View>
      </div>
      </div>
  );
};

export default Blogs;
