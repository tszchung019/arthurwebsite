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
	useMediaQuery,
    Box,
    TextField,
    Button,
} from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import Paper from '@mui/material/Paper';
import { Translate } from "@mui/icons-material";
import CustomizedDividers from "../Props/CustomizedDividers";

const Post = () => {
    const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const {id} = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

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
        setComments(postsFromAPI.comments.items);
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
                <Paper>
                    <Box>
                        <section>
                            <Heading level={2}>Comment</Heading>
                        </section>
                        {
                            comments.length > 0? comments.map((comment) => (
                                <Text>{comment.content}</Text>
                            )) : (<Text>There is no content</Text>)
                        }
                        <section>
                            <CustomizedDividers/>
                        </section>
                        <section>
                        <TextField
                            id="filled-textarea"
                            label="Multiline Placeholder"
                            placeholder="Placeholder"
                            fullWidth
                            multiline
                            variant="filled"
                        />
                        <Button variant="text">Post</Button>
                        </section>
                    </Box>
                </Paper>
                <NavLink to={'/blogs'}>Return to Blog</NavLink>
            </View>
        </body>
    );
}

export default Post;