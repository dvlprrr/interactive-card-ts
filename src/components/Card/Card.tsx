import cardLogo from "../../images/card-logo.svg";
import {
  CvvCode,
  FontCardDate,
  FontCardInformation,
  FontCardName,
  FrontCardNumber,
  Logo,
  WrapperBackCard,
  WrapperCard,
  WrapperFrontCard,
} from "./style";

type CardProps = {
  number: string;
  name: string;
  cvc: string;
  expireMonth: string;
  expireYear: string;
};
export default function Card({
  number: cardNumber,
  name: cardHolderName,
  cvc: cardCVC,
  expireMonth,
  expireYear,
}: CardProps) {
  return (
    <WrapperCard>
      <WrapperFrontCard>
        <Logo src={cardLogo} alt="logo" />
        <FrontCardNumber>
          {Boolean(cardNumber) ? cardNumber : "0000 0000 0000 0000"}
        </FrontCardNumber>
        <FontCardInformation>
          <FontCardName>
            {Boolean(cardHolderName) ? cardHolderName : "Jane Appleseed"}
          </FontCardName>
          <FontCardDate>
            {Boolean(expireMonth || expireYear)
              ? `${expireMonth}/${expireYear}`
              : "99/99"}
          </FontCardDate>
        </FontCardInformation>
      </WrapperFrontCard>
      <WrapperBackCard>
        <CvvCode>{Boolean(cardCVC) ? cardCVC : "000"}</CvvCode>
      </WrapperBackCard>
    </WrapperCard>
  );
}
