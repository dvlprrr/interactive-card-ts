import { useState } from "react";
import Card from "./components/Card/Card";
import CardForm from "./components/CardForm/CardForm";
import type { CardType } from "./types/Card.type";
function App() {
  const [cardState, setCardState] = useState<CardType>({
    number: "",
    cvc: "",
    name: "",
    expireMonth: "",
    expireYear: "",
  });

  const handleCardNumber = (value: string) => {
    setCardState({ ...cardState, number: value });
  };
  const handleCardName = (value: string) => {
    setCardState({ ...cardState, name: value });
  };
  return (
    <div className="page">
      <Card {...cardState} />
      <CardForm
        handleCardName={handleCardName}
        handleCardNumber={handleCardNumber}
      />
    </div>
  );
}

export default App;
