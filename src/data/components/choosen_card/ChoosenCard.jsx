import Avatar from "../avatar/Avatar";
import Button from "../buttons/Button";

const ChoosenCard = ({ character, removeCharacter }) => {
  return (
    <div class="chosen-card">
      <Avatar character={character} />
      <Button className="remove-button" handleClick={() => removeCharacter(character.id)} title="Remove" />
    </div>
  );
};

export default ChoosenCard;
