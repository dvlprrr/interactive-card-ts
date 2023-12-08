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
  const handleCardCvc = (value: string) => {
    setCardState({ ...cardState, cvc: value });
  };
  const handleCardMonth = (value: string) => {
    setCardState({ ...cardState, expireMonth: value });
  };
  const handleCardYear = (value: string) => {
    setCardState({ ...cardState, expireYear: value });
  };
  return (
    <div className="page">
      <Card {...cardState} />
      <CardForm
        handleCardName={handleCardName}
        handleCardNumber={handleCardNumber}
        handleCardCvc={handleCardCvc}
        handleCardMonth={handleCardMonth}
        handleCardYear={handleCardYear}
      />
    </div>
  );
}

export default App;
