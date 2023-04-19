import React, { useState, useEffect } from "react";
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
import { NavLink, useParams, useNavigate } from "react-router-dom";
import DrawerComponent from '../Drawer';
import Navbar from '../Navbar';
import {
	useTheme,
	useMediaQuery
} from "@mui/material";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'title', label: 'Title', minWidth: 170 },
    {
      id: 'createdAt',
      label: 'Created at',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];

const BlogPost = () => {
    const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const {id} = useParams();
    const [posts, setPosts] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const navigate = useNavigate()

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        getPostsfromBlog({id});
      }, []);

    async function getPostsfromBlog({ id }) {
        const apiData = await API.graphql({
          query: getBlogQuery,
          variables: { id: id },
        });
        const postsFromAPI = apiData.data.getBlog.posts.items;
        setPosts(postsFromAPI);
    }

    async function navigateToPost(post) {
        navigate('../posts/' + post.id);
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
            <View class="content">
                <NavLink to='/blogs'>Return to blog</NavLink>
                <Heading level={2}>Posts</Heading>
                <Paper sx={{ 'margin-top': '2%', width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {posts.map((post) => {
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={post.id} onClick={() => navigateToPost(post)}>
                                    <TableCell>
                                        {post.title}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {post.createdAt}
                                    </TableCell>
                                </TableRow>
                                );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={posts.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </View>
        </body>
    );
}

export default BlogPost;