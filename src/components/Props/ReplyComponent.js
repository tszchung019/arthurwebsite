import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const ReplyComponent = ({ onSubmit }) => {
  const [replyContent, setReplyContent] = useState("");

  const handleReplySubmit = () => {
    onSubmit(replyContent);
    setReplyContent(""); // Clear the reply content after submission
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        label="Write your reply"
        value={replyContent}
        onChange={(e) => setReplyContent(e.target.value)}
        multiline
        rows={4}
        style={{ marginBottom: "10px" }}
        fullWidth
      />
      <Button variant="contained" onClick={handleReplySubmit}>
        Reply
      </Button>
    </div>
  );
};

export default ReplyComponent;
