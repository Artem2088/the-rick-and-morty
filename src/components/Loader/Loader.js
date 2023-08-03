import "./Loader.scss";

const Loader = () => {
  return (
    <div className="spinner">
      <span>Loading...</span>
      <div className="half-spinner"></div>
    </div>
  );
};

export default Loader;
