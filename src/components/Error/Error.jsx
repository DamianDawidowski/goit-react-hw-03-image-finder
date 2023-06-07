import css from './Error.module.css';
import errImage from './error.png';

const Error = ({ errorText }) => {
  return (
    <div role="alert" className={css.wrapper}>
      <img src={errImage} width="251" alt="error" />
      <p text={errorText} className={css.text}>
        {errorText}
      </p>
    </div>
  );
};

export default Error;