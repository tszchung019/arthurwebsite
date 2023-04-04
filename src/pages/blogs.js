import React, { useState, useEffect } from "react";
import "../css/styles.css";
import DrawerComponent from '../components/Drawer';
import Navbar from '../components/Navbar';
import {
	useTheme,
	useMediaQuery
} from "@mui/material";
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
import { NavLink } from "react-router-dom";
import BlogPost from "../components/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [posts, setPosts] = useState([]);

  const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const apiData = await API.graphql({ query: listBlogsQuery });
    const blogsFromAPI = apiData.data.listBlogs.items;
    setBlogs(blogsFromAPI);
  }

  async function createBlog(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
    };
    await API.graphql({
      query: createBlogMutation,
      variables: { input: data },
    });
    fetchBlogs();
    event.target.reset();
  }

  async function deleteBlog({ id }) {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
    await API.graphql({
      query: deleteBlogMutation,
      variables: { input: { id } },
    });
  }

  return (
    <body>
    <div>
      {isMobile ? (
        <DrawerComponent />
      ) : (
        <Navbar />
      )}
    </div>
      <div class="content">
        <h1>Welcome to Arthur's Blogs</h1>
        <View className="Blog">
          <Heading level={1}>My Blogs</Heading>
          <View as="form" margin="3rem 0" onSubmit={createBlog}>
            <Flex direction="row" justifyContent="center">
              <TextField
                name="name"
                placeholder="Blog Name"
                label="Blog Name"
                labelHidden
                variation="quiet"
                required />
              <Button type="submit" variation="primary">
                Create Blog
              </Button>
            </Flex>
          </View>
          <Heading level={2}>Current Blogs</Heading>
          <View margin="3rem 0">
            {blogs.map((blog) => (
              <Flex
                key={blog.id || blog.name}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <NavLink
                  to={'./' + blog.id}
                  component={BlogPost}
                >
                  {blog.name}
                </NavLink>

                <Button variation="link" onClick={() => deleteBlog(blog)} disabled>
                  Delete blog
                </Button>
              </Flex>
            ))}
          </View>
        </View>
      </div>
      </body>
  );
};

export default Blogs;
