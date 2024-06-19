/* eslint-disable react/prop-types */
function Toast({
  title,
  message,
  Container,
  XButton,
  ErrTitle,
  ErrDesc,
  cancelToast,
  SucTitle,
}) {
  if (title == "Success") {
    return (
      <div className={Container}>
        <button onClick={cancelToast} className={XButton}>
          X
        </button>
        <div>
          <p className={SucTitle}>{title}</p>
          <p className={ErrDesc}>{message}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={Container}>
        <button onClick={cancelToast} className={XButton}>
          X
        </button>
        <div>
          <p className={ErrTitle}>{title}</p>
          <p className={ErrDesc}>{message}</p>
        </div>
      </div>
    );
  }
}

export default Toast;
