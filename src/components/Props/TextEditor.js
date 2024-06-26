import React, { Component } from "react";
import 'quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from "quill-image-uploader";

const url = process.env.REACT_APP_IMAGE_UPLOAD;

Quill.register("modules/imageUploader", ImageUploader);

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  handleProcedureContentChange = (content) => {
    this.setState({ content });
    const { onContentChange } = this.props;
    if (typeof onContentChange === 'function') {
      onContentChange(content);
    }
  };

  modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ],
    imageUploader: {
        upload: (file) => {
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("image", file);
      
            fetch(
              url,
              {
                method: "POST",
                body: formData,
              }
            )
            .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error('Request failed with status ' + response.status);
              }
            })
            .then((result) => {
              console.log(result);
              resolve(result.imageUrl);
            })
            .catch((error) => {
              reject("Upload failed");
              console.error("Error:", error);
            });
          });
        }
      }
  };

  formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];

  render() {
    const { content } = this.state;

    return (
      <ReactQuill
        theme="snow"
        modules={this.modules}
        formats={this.formats}
        placeholder="write your content ...."
        onChange={this.handleProcedureContentChange}
        value={content}
      />
    );
  }
}

export default TextEditor;
