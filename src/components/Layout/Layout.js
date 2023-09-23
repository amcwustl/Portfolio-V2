import { Outlet } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
 

  return (
    <div className="App">
        <Outlet />
    </div>
  );
};

export default Layout;
