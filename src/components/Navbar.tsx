import { NavLink } from "react-router-dom";

export const menu = ["home", "about"];

type NavbarProps = {
  menu: string[];
  hide?: boolean;
};

const Navbar = ({ menu, hide }: NavbarProps) => {
  return (
    <nav>
      {hide ? null : (
        <ul>
          {menu.map((item) => (
            <li>
              <NavLink key={item} to={item}>
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
