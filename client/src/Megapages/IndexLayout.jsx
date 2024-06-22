import {
  InfoSection,
  SignUp,
  LogIn,
  IndexHeader,
} from "../Components/IndexComponents";
import Toast from "../Custom/Toast/Toast";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../features/toast/toastSlice";
import {
  Container,
  XButton,
  ErrTitle,
  ErrDesc,
  SucTitle,
} from "../Custom/Toast/ToastClass";

function IndexLayout() {
  const toast = useSelector((state) => state.toastReducer.toast);
  const LogInVisible = useSelector((state) => state.headerReducer.boolean);

  const dispatch = useDispatch();

  const cancelToast = () => {
    dispatch(remove(false));
  };

  if (toast.visible === true) {
    setTimeout(() => {
      dispatch(remove(false));
    }, 3000);
  }

  return (
    <div className="h-fit ">
      <IndexHeader />
      <div className=" text-center h-screen w-full rounded-lg  bg-index-lessLight m-1  grid grid-cols-12    ">
        <InfoSection />
        {LogInVisible ? <LogIn /> : <SignUp />}
      </div>

      {toast.visible && (
        <Toast
          title={toast.title}
          message={toast.message}
          cancelToast={cancelToast}
          Container={Container}
          XButton={XButton}
          ErrTitle={ErrTitle}
          ErrDesc={ErrDesc}
          SucTitle={SucTitle}
        />
      )}
    </div>
  );
}

export default IndexLayout;
