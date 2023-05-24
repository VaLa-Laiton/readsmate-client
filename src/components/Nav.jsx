import { useState, useEffect } from "react";
import NavUser from "./NavUser";
import NavNotUser from "./NavNotUser";
import { isUser } from "../functions/isUser";
import { automaticLogout } from "../functions/logout";

const Nav = () => {
  const [navbar, setNavbar] = useState();

  useEffect(() => {
    const handleNav = () => {
      if (isUser() === true) {
        setNavbar(<NavUser />);
      } else {
        setNavbar(<NavNotUser />);
      }
      automaticLogout();
    };

    handleNav();
  }, []);

  return (
    <>
      {navbar}
    </>
  );
};

export default Nav;
