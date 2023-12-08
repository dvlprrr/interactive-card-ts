import styled from "styled-components";

export const WrapperCardForm = styled.form`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CardFormLabel = styled.label`
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
  margin-bottom: 20px;
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
  margin-bottom: 0;
  width: 100%;
`;
export const CardFormDateInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
