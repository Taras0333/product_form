import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import Error from "../errorMessage";

const ProductDescription = ({ error, setValue }) => {
  const { message } = error || {};
  const fieldName = "product_description";
  const options = [["bold", "italic", "underline"]];
  const modules = {
    toolbar: options,
  };

  const handleContentChange = (editorContent) => {
    setValue(fieldName, editorContent);
  };

  return (
    <div className="field_wrapper">
      <label>Product Description</label>
      <ReactQuill
        modules={modules}
        className="input-filed quill-container"
        style={message && { border: "1px solid #ff6a6a" }}
        theme="bubble"
        onChange={handleContentChange}
      />
      <Error error={message} />
    </div>
  );
};

export default ProductDescription;
