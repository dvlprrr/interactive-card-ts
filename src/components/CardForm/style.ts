import styled from "styled-components";

export const WrapperCardForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > :first-child {
    margin-top: 0;
  }
`;
export const CardFormLabel = styled.label`
  margin-top: 20px;
  width: 65%;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
`;
export const CardFormInput = styled.input`
  box-sizing: border-box;
  font-size: 20px;
  font-family: "SpaceGrotesk", Arial, Helvetica, sans-serif;
  font-weight: 500;
  width: 65%;
  padding: 10px 15px;
  border: 2px solid hsl(270, 3%, 87%);
  transition: border-image 0.3s ease-in-out;
  &:focus {
    border-color: hsl(278, 94%, 30%);
  }
  border-radius: 8px;
  outline: none;
`;

export const CardFormInfoWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`;
export const CardFormInfoItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
export const CardFormInfoInput = styled(CardFormInput)`
  width: 100%;
`;
export const CardFormDateInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
export const Button = styled.button`
  font-family: "SpaceGrotesk", Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 15px 0;
  border: none;
  color: white;
  background-color: hsl(278, 68%, 11%);
  border-radius: 8px;
  margin-top: 40px;
  width: 65%;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  font-size: 12px;
  color: #ff0000;
`;

export const ComplitedWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ComplitedTitle = styled.h2`
  margin: 0;
  margin-top: 20px;
  font-size: 30px;
  text-transform: uppercase;
`;
export const ComplitedDescription = styled.p`
  margin: 15px 0 0;
  color: hsl(279, 6%, 55%);
`;
export const DateInputWrapper = styled.div``;
