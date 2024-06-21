import React, { useState, useEffect } from "react";
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListIcon from '@mui/icons-material/List';
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
import {
    createComment as createCommentMutation,
    updateComment as updateCommentMutation,
    deleteComment as deleteCommentMutation,
    createReply as createReplyMutation,
  } from "../../graphql/mutations"
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
import TextEditor from "../Props/TextEditor";
import ReplyComponent from "../Props/ReplyComponent"; 

const Post = () => {
    const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const {id} = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [commentContent, setCommentContent] = useState('');
    const [replyContent, setReplyContent] = useState('');
    const [activeReplyId, setActiveReplyId] = useState(null);

    const toggleReply = (commentId) => {
        setActiveReplyId(activeReplyId === commentId ? null : commentId);
    };

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

    async function handlePostComment() {
        if(commentContent.trim() === '') {
            return; // Prevent posting empty comments
        }
        await createComment({id, content: commentContent});
        // Clear comment content after posting
        setCommentContent('');
        // Refresh comments
        getContentfromPost({ id });
    }

    async function createComment({id, content}) {
        const data = {
        postCommentsId: id,
        content: content,
        };
        await API.graphql({
        query: createCommentMutation,
        variables: { input: data },
        });
    }

    async function handlePostReply() {
        await createReply({id, content: commentContent});
        // Clear comment content after posting
        setCommentContent('');
        // Refresh comments
        getContentfromPost({ id });
    }

    async function createReply({id, content}) {
        const data = {
        commentReplysId: id,
        content: content,
        };
        await API.graphql({
        query: createReplyMutation,
        variables: { input: data },
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
            <View class="content">
                <Paper square className="post-content is-scrollLocked is-momentumScrollable"
                    sx={{backgroundColor: "#a1f0e0"}}
                >
                    <Heading level={2}>{post.title}</Heading>
                </Paper>
                <Paper square className="post-content is-scrollLocked is-momentumScrollable">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </Paper>
                <Paper square className="is-scrollLocked is-momentumScrollable">
                    <Box>
                        <Box className="comment-section">
                            <section>
                            <Heading level={2}>Comment</Heading>
                            </section>
                            {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <Paper key={index} className="comment-box" style={{ backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "8px", marginBottom: "10px" }}>
                                    <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                                        <img src={comment.avatar} alt="Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }} />
                                        <div>
                                            <strong>{comment.author}</strong>
                                            <span style={{ fontSize: "12px", color: "#777", marginLeft: "5px" }}>{comment.timestamp}</span>
                                        </div>
                                    </div>
                                    <Paper>
                                        <div dangerouslySetInnerHTML={{ __html: comment.content }} />
                                    </Paper>
                                    {activeReplyId !== comment.id && <button onClick={() => toggleReply(comment.id)}>Reply</button>}
                                    {activeReplyId === comment.id && <ReplyComponent onSubmit={(content) => handlePostReply(comment.id, content)} />}
                                </Paper>
                            ))
                            ) : (
                            <Text>There is no content</Text>
                            )}
                        </Box>
                        <section>
                            <TextEditor onContentChange={(content) => setCommentContent(content)} />
                        </section>
                        <section>
                        <Button variant="text" onClick={handlePostComment}>Post</Button>
                        </section>
                    </Box>
                </Paper>
                <div id="post-return">
                    <IconButton href="../blogs">
                        <ListIcon className="muiIcon"/>
                    </IconButton>
                </div>
            </View>
        </body>
    );
}

export default Post;
