import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import SignupSuccess from "./pages/SignupSuccess/SignupSuccess";
import PostList from "./pages/PostList/PostList";
import PostAdd from "./pages/PostAdd/PostAdd";
import PostEdit from "./pages/PostEdit/PostEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-up-success" element={<SignupSuccess />} />
        <Route path="/post-list" element={<PostList />} />
        <Route path="/post-add" element={<PostAdd />} />
        <Route path="/post-edit/:id" element={<PostEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
