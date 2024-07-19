import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logInOut } from "../rtk/slices/authSlice";

const Header = () => {

  const dispatch = useDispatch();
  const {loggedIn} = useSelector(state => state.auth)
  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/addpost">Add Post</NavLink>
        </li>
        <li onClick={() => dispatch(logInOut(loggedIn))} className="login">{loggedIn ? "LogOut" : "login"}</li>
      </ul>
    </div>
  );
};

export default Header;
