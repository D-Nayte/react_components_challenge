import "./CardDescription.css";

const CardDescription = ({ character }) => {
  return (
    <div className="card-container">
      <h2>{character.name}</h2>
      <p>
        <span>Sex:</span> {character.gender}
      </p>
      <p>
        <span>Status:</span> {character.status}
      </p>
      <p>
        <span>Species:</span> {character.species}
      </p>
    </div>
  );
};

export default CardDescription;
