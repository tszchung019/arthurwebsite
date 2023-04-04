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
import { NavLink, useParams } from "react-router-dom";
import DrawerComponent from '../Drawer';
import Navbar from '../Navbar';
import {
	useTheme,
	useMediaQuery
} from "@mui/material";

const BlogPost = () => {
    const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const {id} = useParams();
    const [posts, setPosts] = useState([]);

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
                <NavLink to='/blogs'>Return to Blogs</NavLink>
                {posts.map((post) => (
                    <View key={post.id}>
                        <Heading level={3}>{post.title}</Heading>
                        <Text>{post.content}</Text>
                    </View>
                ))}
            </View>
        </body>
    );
}

export default BlogPost;