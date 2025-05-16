import "./Navbar.css";

import HomeIcon from "../../assets/icons/Home";
import SearchIcon from "../../assets/icons/Search";
import PlusIcon from "../../assets/icons/Plus";
import HeartIcon from "../../assets/icons/Heart";
import UserIcon from "../../assets/icons/User";

export default function Navbar({}) {
  return (
    <nav className="navbar">
      <NavbarItem Icon={HomeIcon} isSelected={true} strokeOrFill="fill" />
      <NavbarItem Icon={SearchIcon} strokeOrFill="fill" />
      <NavbarItem
        Icon={PlusIcon}
        strokeOrFill="fill"
        preClasses="primary-fill-plus-icon"
      />
      <NavbarItem Icon={HeartIcon} strokeOrFill="stroke" />
      <NavbarItem Icon={UserIcon} strokeOrFill="fill" />
    </nav>
  );
}

function NavbarItem({
  link = "",
  Icon,
  isSelected = false,
  strokeOrFill = "fill",
  preClasses = "",
}) {
  return (
    <a
      // href={link}
      className={`navbar-item ${isSelected && "selected"}`}
    >
      {Icon && (
        <Icon
          classes={`${preClasses} navbar-icon ${isSelected && "selected"} ${strokeOrFill}`}
        />
      )}
    </a>
  );
}
