import logo from "../../images/card-logo.svg";
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

export default function Card() {
  return (
    <WrapperCard>
      <WrapperFrontCard>
        <Logo src={logo} alt="logo" />
        <FrontCardNumber>0000 0000 0000 0000</FrontCardNumber>
        <FontCardInformation>
          <FontCardName>Jane Appleseed</FontCardName>
          <FontCardDate>00/00</FontCardDate>
        </FontCardInformation>
      </WrapperFrontCard>
      <WrapperBackCard>
        <CvvCode>000</CvvCode>
      </WrapperBackCard>
    </WrapperCard>
  );
}
