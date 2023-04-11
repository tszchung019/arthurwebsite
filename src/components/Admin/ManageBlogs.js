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

export default function ManageBlogs() {
    const [blogs, setBlogs] = useState([]);

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
        <div class="content">
            <View className="Blog">
            <Heading level={3}>Create New Blog</Heading>
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
            <Heading level={3}>Current Blogs</Heading>
            <View margin="3rem 0">
                {blogs.map((blog) => (
                <Flex
                    key={blog.id || blog.name}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <NavLink>
                    {blog.name}
                    </NavLink>

                    <Button variation="link" onClick={() => deleteBlog(blog)}>
                    Delete blog
                    </Button>
                </Flex>
                ))}
            </View>
            </View>
        </div>
        </body>
    );
}