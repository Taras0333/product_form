const Error = ({ error }) => {
  return (
    <div className="error-wrapper">
      <span className="errorMessage">{error}</span>
    </div>
  );
};

export default Error;
