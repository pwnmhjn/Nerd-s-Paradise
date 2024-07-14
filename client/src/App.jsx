import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ReaderLayout from "./Megapages/ReaderLayout.jsx";
import IndexLayout from "./Megapages/IndexLayout.jsx";
import IndexAbout from "./Pages/IndexAbout.jsx";
import { Admin, Author, Book, Chapter } from "./Admin";
import { ReaderHome, ReaderAbout } from "./Pages/index.js";
import Toast from "./Custom/Toast/Toast.jsx";
import { remove } from "../features/toast/toastSlice.js";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  ErrDesc,
  ErrTitle,
  SucTitle,
  XButton,
} from "./Custom/Toast/ToastClass.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<IndexLayout />} />
      <Route path="index-about" element={<IndexAbout />} />
      <Route path="reader" element={<ReaderLayout />}>
        <Route index element={<ReaderHome />} />
        <Route path="about" element={<ReaderAbout />} />
      </Route>
      <Route path="admin" element={<Admin />}>
        <Route index element={<Book />} />
        <Route path="author" element={<Author />} />
        <Route path="chapter" element={<Chapter />} />
      </Route>
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();

  const toast = useSelector((state) => state.toastReducer.toast);
  const cancelToast = () => {
    dispatch(remove(false));
  };

  if (toast.visible === true) {
    setTimeout(() => {
      dispatch(remove(false));
    }, 3000);
  }

  return (
    <>
      {toast.visible && (
        <Toast
          title={toast.title}
          message={toast.message}
          cancelToast={cancelToast}
          Container={Container}
          XButton={XButton}
          ErrTitle={ErrTitle} // TODO toaster location should be global
          ErrDesc={ErrDesc} // FIXME change style
          SucTitle={SucTitle}
        />
      )}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<IndexLayout />} />
//     <Route path="/index-about" element={<IndexAbout />} />
//     <Route path="/reader" element={<ReaderLayout />}>
//       <Route index element={<ReaderHome />} />
//       <Route path="about" element={<ReaderAbout />} />
//     </Route>
//     <Route path="/admin" element={<Admin />}>
//       <Route index element={<Book />} />
//       <Route path="author" element={<Author />} />
//       <Route path="chapter" element={<Chapter />} />
//     </Route>
//   </Routes>
// </BrowserRouter>
