import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Shopping } from "../../assets/shopping.svg";
import './navigation.styles.scss'


const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
         <Shopping  className = "logo"style = {{width : 40 , height : 40 , marginLeft :0}}/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
