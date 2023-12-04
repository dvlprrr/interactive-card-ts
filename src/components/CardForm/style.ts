import styled from "styled-components";

export const WrapperCardForm = styled.form`
  margin: 0 auto;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CardFormLabel = styled.label`
  margin-bottom: 5px;
  width: 60%;
  text-transform: uppercase;
`;
export const CardFormInput = styled.input`
  margin-bottom: 20px;
  font-family: "SpaceGrotesk";
  padding: 12px;
  font-size: 20px;
  border-radius: 8px;
  outline: none;
  width: 60%;
`;
export const CardFormInfoWrapper = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  width: 60%;
`;
export const CardInfoItem = styled.div`
  width: 100%;
`;
export const CardFormInfoInput = styled(CardFormInput)``;
