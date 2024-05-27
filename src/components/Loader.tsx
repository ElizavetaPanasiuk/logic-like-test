import classes from "./Loader.module.scss";

const Loader = () => (
  <div className={classes.loaderContainer}>
    <span className={classes.loader} />
  </div>
);

export default Loader;
