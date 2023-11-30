import { styled } from "styled-components";
import cardBack from "../../images/cardBack.png";
import cardFront from "../../images/cardFront.png";
export const WrapperCard = styled.div`
  height: 100vh;
  color: hsl(0, 0%, 100%);
  gap: 40px;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapperFrontCard = styled.div`
  align-self: center;
  padding: 30px;
  padding-bottom: 25px;
  border-radius: 8px;
  background-image: url(${cardFront});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const FrontCardNumber = styled.p`
  margin: 0;
  margin-top: 60px;
  font-size: 26px;
  letter-spacing: 3px;
`;
export const FontCardInformation = styled.div`
  margin-top: 25px;
  font-size: 14px;
  display: flex;
  font-weight: 400;
  justify-content: space-between;
  width: 100%;
`;
export const FontCardName = styled.p`
  margin: 0;
  letter-spacing: 1.5px;
  text-transform: upperCase;
`;
export const FontCardDate = styled.p`
  margin: 0;
`;
export const Logo = styled.img`
  align-self: start;
`;
export const WrapperBackCard = styled.div`
  background-image: url(${cardBack});
  background-repeat: no-repeat;
  background-position: center;
  align-self: end;
  border-radius: 8px;
  width: 405px;
  height: 237px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const CvvCode = styled.p`
  font-size: 16px;
  margin: 0;
  margin-right: 35px;
`;
