import "./navbar.css";
import Button from "../../data/components/buttons/Button";
import Avatar from "../../data/components/avatar/Avatar";

const Navbar = ({ loggedCharacter, logout }) => {
  return (
    <nav>
      {loggedCharacter && (
        <>
          <Avatar character={loggedCharacter} />
          <Button className="logout" handleClick={logout} title="Logout" />
        </>
      )}
    </nav>
  );
};

export default Navbar;
