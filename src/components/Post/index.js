import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import {
    Heading,
    Text,
    View,
} from "@aws-amplify/ui-react";
import { 
    getPost as getPostQuery, 
    getComment as getCommentQuery, 
    listComments as listCommentsQuery 
} from "../../graphql/queries"
import DrawerComponent from '../Drawer';
import Navbar from '../Navbar';
import {
	useTheme,
	useMediaQuery
} from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import Paper from '@mui/material/Paper';
import { Translate } from "@mui/icons-material";

const Post = () => {
    const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const {id} = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        getContentfromPost({id});
      }, []);

    async function getContentfromPost({ id }) {
        const apiData = await API.graphql({
          query: getPostQuery,
          variables: { id: id },
        });
        const postsFromAPI = apiData.data.getPost;
        console.log(postsFromAPI);
        setPost(postsFromAPI);
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
                <Paper sx={{
                    padding: '10px 20px',
                    height: '80vh',
                }}>
                    <section>
                        <Heading level={2}>{post.title}</Heading>
                    </section>
                    <section>
                        <p>{post.content}</p>
                    </section>
                </Paper>
                <NavLink to={'/blogs'}>Return to Blog</NavLink>
            </View>
        </body>
    );
}

export default Post;