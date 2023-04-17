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

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CreateContent from "../Props/CreateContent";

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

    //Table Properties

    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);
        const [posts, setPosts] = useState([]);

        async function getPostsfromBlog({ id }) {
            const apiData = await API.graphql({
              query: getBlogQuery,
              variables: { id: id },
            });
            const postsFromAPI = apiData.data.getBlog.posts.items;
            setPosts(postsFromAPI);
        }

        async function deletePost({ id }) {
            const newPosts = posts.filter((post) => post.id !== id);
            setPosts(newPosts);
            await API.graphql({
            query: deletePostMutation,
            variables: { input: { id } },
            });
        }

        async function createPost({id, title, content}) {
            const data = {
            blogPostsId: id,
            title: title,
            content: content,
            };
            await API.graphql({
            query: createPostMutation,
            variables: { input: data },
            });
        }
      
        return (
          <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => {
                    getPostsfromBlog(row);
                    setOpen(!open);
                  }}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.updatedAt}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                <CreateContent 
                  callback={(title, content) => {
                    const blogId = row.id;
                    const data = {
                        id: blogId,
                        title: title,
                        content: content
                    };
                    createPost(data);
                  }}
                />
                <AlertDialog 
                  callback={() => deleteBlog(row)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 2 }}>
                    <Typography variant="h6" gutterBottom component="div">
                      Posts
                    </Typography>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">Post Name</TableCell>
                          <TableCell align="center">Last Update At</TableCell>
                          <TableCell align="center">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      {posts.map((post) => (
                          <TableRow key={post.id || post.name}>
                              <TableCell align="center">
                              {post.title}
                              </TableCell>
                              <TableCell align="center">
                              {post.updatedAt}
                              </TableCell>
                              <TableCell align="center">
                                <AlertDialog 
                                  callback={() => deletePost(post)}
                                />
                              </TableCell>
                          </TableRow>
                      ))}
                      </TableBody>
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </React.Fragment>
        );
      }
      
      Row.propTypes = {
        row: PropTypes.shape({
          name: PropTypes.string.isRequired,
          updatedAt: PropTypes.string.isRequired,
          post: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.number.isRequired,
              updatedAt: PropTypes.string.isRequired,
            }),
          ).isRequired,
        }).isRequired,
      };

    return (
        <body>
        <div>
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
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="center">Blog Name</TableCell>
                            <TableCell align="center">Last Updated At</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {blogs.map((blog) => (
                                <Row key={blog.id || blog.name} row={blog} />
                            ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
            </View>
        </div>
        </body>
    );
}