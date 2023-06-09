import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function CreateContent({callback}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCallback = () => {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    if(typeof callback === 'function') {
        callback(title, content);
    }
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Post
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Create Post
            </Typography>
            <Button autoFocus color="inherit" onClick={() => {
                handleCallback();
                handleClose();
            }}>
              save & update
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <TextField
                id="title"
                label="Post title"
                placeholder="Post title"
                helperText="The title of the post"
                variant="standard"
                required
            />
          </ListItem>
          <Divider />
          <ListItem>
            < TextField
              id="content"
              label="Content"
              placeholder="Content"
              helperText="The content of the post"
              variant="standard"
              multiline
              rows={20}
              fullWidth
              required
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
