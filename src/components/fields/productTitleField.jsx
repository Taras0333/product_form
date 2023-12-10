import Error from "../errorMessage";

const ProductTitle = ({ register, error }) => {
  const { message } = error || {};
  return (
    <div className="field_wrapper">
      <label>Product Title</label>
      <input
        className="input-filed"
        style={message && { border: "1px solid #ff6a6a" }}
        {...register("product_title")}
      />
      <Error error={message} />
    </div>
  );
};

export default ProductTitle;
