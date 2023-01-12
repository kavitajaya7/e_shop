import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Shopping } from "../../assets/shopping.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signoutUser } from "../../utils/firebase.component";
import { async } from "@firebase/util";

const Navigation = () => {
  const { CurrentUser  } = useContext(UserContext);


  const Signouthandler = async() =>{
   await signoutUser();
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Shopping
            className="logo"
            style={{ width: 40, height: 40, marginLeft: 0 }}
          />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {CurrentUser ? (
            <span className="nav-link" onClick={Signouthandler}> 
             Sign-out
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              Sign-In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
