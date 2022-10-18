import "./card.css";
import Button from "../buttons/Button";
import CardDescrip from "../card_description/CradDescription";
import CardImage from "../card_image/CardImage";

const Card = ({ character, addCharacter }) => {
  return (
    <div class="card">
      <CardImage character={character} />
      <CardDescrip character={character} />
      <Button className="choose-button" handleClick={() => addCharacter(character.id)} title="Choose" />
    </div>
  );
};

export default Card;
