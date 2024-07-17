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
import { remove, SelectToast } from "../features/toast/toastSlice.js";
import { useDispatch, useSelector } from "react-redux";

import LogIn from "./Components/IndexComponents/LogIn.jsx";
import SignUp from "./Components/IndexComponents/SignUp.jsx";

function App() {
  const dispatch = useDispatch();
  const toast = useSelector(SelectToast);
  const cancelToast = () => {
    dispatch(remove());
  };

  if (toast.visible === true) {
    setTimeout(() => {
      dispatch(remove());
    }, 2000);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<IndexLayout />}>
          <Route index element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<SignUp />} />
        </Route>
        <Route path="/index-about" element={<IndexAbout />} />
        <Route path="reader" element={<ReaderLayout />}>
          <Route index element={<ReaderHome />} />
          <Route path="about" element={<ReaderAbout />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Book />} />
          <Route path="author" element={<Author />} />
          <Route path="chapter" element={<Chapter />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="relative">
      <RouterProvider router={router} />
      {toast.visible && (
        <Toast
          title={toast.title}
          message={toast.message}
          cancelToast={cancelToast}
        />
      )}
    </div>
  );
}

export default App;
