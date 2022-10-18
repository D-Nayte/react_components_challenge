import Avatar from "../../data/components/avatar/Avatar";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <Avatar character={{ image: "../assets/avatar.png", name: "Created by David L. Rajcher" }} />
    </footer>
  );
};

export default Footer;
