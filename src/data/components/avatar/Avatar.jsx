import "./avatar.css";
import CardImage from "../card_image/CardImage";

const Avatar = ({ character }) => {
  return (
    <div class="avatar">
      <CardImage character={character} />
      <p>{character.name}</p>
    </div>
  );
};

export default Avatar;
