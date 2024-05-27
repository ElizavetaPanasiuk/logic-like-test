import classes from "./Error.module.scss";

const Error = () => {
  return (
    <div className={classes.errorContainer}>
      <p>При загрузке страницы произошла ошибка!</p>
      <p>Перезагрузите страницу</p>
    </div>
  );
};

export default Error;
