import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";

const Navbar = () => {
  const { state, dispatch } = useContext(AuthContext);
  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    window.location.reload();
  };
  console.log(window.location);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
        <span className="logo">Booking</span>
        </Link>
        <div className="navItems">
          {state.user ? (
            <div className="navUser">
              <img
                className="navImage"
                src={
                  state.user.img
                    ? state.user.img
                    : "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                }
                alt=""
              />
              <span className="navUsername">{state.user.username}</span>
              <button onClick={handleClick} className="navButton">Logout</button>
            </div>
          ) : (
            <>
              <button className="navButton">Register</button>
              <Link to="/login">
                <button className="navButton">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
