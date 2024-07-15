import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import Toast from "../Custom/Toast/Toast";
// import {
//   Container,
//   XButton,
//   ErrTitle,
//   ErrDesc,
//   SucTitle,
// } from "../Custom/Toast/ToastClass";
// import { useSelector, useDispatch } from "react-redux";
// import { remove } from "../../features/toast/toastSlice";

//TODO clean this page
function Admin() {
  // const toast = useSelector((state) => state.toastReducer.toast);
  // const dispatch = useDispatch();
  // const cancelToast = () => {
  //   dispatch(remove(false));
  // };

  // if (toast.visible === true) {
  //   setTimeout(() => {
  //     dispatch(remove(false));
  //   }, 3000);
  // }
  return (
    <div>
      <div className=" h-24 bg-index-dark rounded-b-lg w-full grid grid-cols-3 place-content-center">
        <Link
          className="col-span-1 text-start place-content-center mx-auto h-24 text-xl text-black opacity-1"
          to="."
        >
          <button className="border-2 p-2 px-3 h-[50px] w-[100px] font-mono  text-xl hover:text-lg hover:font-bold   bg-index-lessDark  hover:bg-index-dark   border-r-index-slate700 border-b-index-slate200 border-t-index-slate700 border-l-index-slate200  shadow-2xl  hover:shadow-inner">
            Book
          </button>
        </Link>
        <Link
          className="col-span-1 text-start place-content-center mx-auto h-24 text-xl text-black opacity-1"
          to="author"
        >
          <button className="border-2 p-2 px-3 h-[50px] w-[100px] font-mono  text-xl hover:text-lg hover:font-bold   bg-index-lessDark  hover:bg-index-dark   border-r-index-slate700 border-b-index-slate200 border-t-index-slate700 border-l-index-slate200  shadow-2xl  hover:shadow-inner">
            Author
          </button>
        </Link>
        <Link
          className="col-span-1 text-start place-content-center mx-auto h-24 text-xl text-black opacity-1"
          to="chapter"
        >
          <button className="border-2 p-2 px-3 h-[50px] w-[100px] font-mono  text-xl hover:text-lg hover:font-bold   bg-index-lessDark  hover:bg-index-dark   border-r-index-slate700 border-b-index-slate200 border-t-index-slate700 border-l-index-slate200  shadow-2xl  hover:shadow-inner">
            Chapter
          </button>
        </Link>
      </div>
      <Outlet />
      {/* {toast.visible && (
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
      )} */}
    </div>
  );
}

export default Admin;
