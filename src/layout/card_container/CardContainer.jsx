import "./cardContainer.css";
import characters from "../../data/characters.json";
import Button from "../../data/components/buttons/Button";
import Card from "../../data/components/card/Card";
import CardImage from "../../data/components/card_image/CardImage";

const CardContainer = ({ loggedCharacter, allCharacters, login, addCharacter }) => {
  return (
    <div id="main">
      {!loggedCharacter ? (
        <>
          <h1>Choose Your Main Character</h1>
          <section id="character-container">
            {characters.slice(0, 5).map((character) => (
              <div class="card card-login">
                <CardImage character={character} />
                <div className="card-container">
                  <h2>{character.name}</h2>
                </div>
                <Button className="choose-button" handleClick={() => login(character.id)} title="Choose" />
              </div>
            ))}
          </section>
        </>
      ) : (
        <section id="character-container">
          {allCharacters.map((character) => (
            <Card character={character} addCharacter={addCharacter} />
          ))}
        </section>
      )}
    </div>
  );
};

export default CardContainer;
