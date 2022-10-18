import characters from "../../data/characters.json";
import "./aside.css";
import ChoosenCard from "../../data/components/choosen_card/ChoosenCard";

const Aside = ({ chosen, loggedCharacter, removeCharacter }) => {
  return (
    <aside>
      {loggedCharacter && (
        <section id="chosen-container">
          {chosen.length === 0 ? (
            <div>No Character was chosen</div>
          ) : (
            <>
              {chosen.map((id) => {
                const character = characters.find((character) => character.id === id);
                return <ChoosenCard character={character} removeCharacter={removeCharacter} />;
              })}
            </>
          )}
        </section>
      )}
    </aside>
  );
};

export default Aside;
