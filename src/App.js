import { useState } from "react";
import "./App.css";
import characters from "./data/characters.json";
import Aside from "./layout/aside/Aside";
import CardContainer from "./layout/card_container/CardContainer";
import Footer from "./layout/footer/Footer";
import Navbar from "./layout/navbar/Navbar";

const App = () => {
  const [loggedCharacter, setLoggedCharacter] = useState(null);
  const [allCharacters, setAllCharacters] = useState([...characters]);
  const [chosen, setChosen] = useState([]);

  const login = (id) => {
    setAllCharacters([...characters.filter((character) => character.id !== id)]);
    setLoggedCharacter(characters.find((c) => c.id === id));
    setChosen([]);
  };

  const logout = () => {
    setAllCharacters([...characters]);
    setLoggedCharacter(null);
  };

  const addCharacter = (id) => {
    if (chosen.length === 5) {
      window.alert("Cannot choose more than 5");
      return;
    }

    setAllCharacters([
      ...characters
        .filter((character) => character.id !== id)
        .filter((character) => character.id !== loggedCharacter.id)
        .filter((character) => !chosen.includes(character.id)),
    ]);
    setChosen([...chosen, id]);
  };

  const removeCharacter = (id) => {
    const filteredChosen = chosen.filter((chosenId) => chosenId !== id);

    setChosen(filteredChosen);

    setAllCharacters([...characters.filter((character) => character.id !== loggedCharacter.id).filter((character) => !filteredChosen.includes(character.id))]);
  };

  return (
    <div className="App">
      <Navbar loggedCharacter={loggedCharacter} logout={logout} />
      <CardContainer loggedCharacter={loggedCharacter} allCharacters={allCharacters} login={login} addCharacter={addCharacter} />
      <Aside loggedCharacter={loggedCharacter} chosen={chosen} removeCharacter={removeCharacter} />
      <Footer />
    </div>
  );
};

export default App;
