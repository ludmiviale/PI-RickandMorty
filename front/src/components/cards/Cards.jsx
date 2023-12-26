import Card from "../card/Card";
/* styles */
import "../card/card.css";

const Cards = ({ characters, onClose }) => {
  return (
    <div className="cardContainer">
      {characters.map(({ id, name, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

export default Cards;
