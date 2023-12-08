import { ChangeEvent } from "react";
import {
  CardFormDateInputWrapper,
  CardFormInfoInput,
  CardFormInfoItem,
  CardFormInfoWrapper,
  CardFormInput,
  CardFormLabel,
  WrapperCardForm,
} from "./style";
import { CardNumberFormat } from "../../utils/payment";
type PropType = {
  handleCardNumber: (value: string) => void;
  handleCardName: (value: string) => void;
};
export default function CardForm({
  handleCardNumber,
  handleCardName,
}: PropType) {
  return (
    <WrapperCardForm>
      <CardFormLabel>cardholder name</CardFormLabel>
      <CardFormInput
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleCardName(e.target.value);
        }}
        placeholder="e.g. Jane Appleseed"
      />
      <CardFormLabel>card number</CardFormLabel>
      <CardFormInput
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          CardNumberFormat(e.target);
          handleCardNumber(e.target.value);
        }}
        placeholder="e.g. 1234 5678 9123 0000 "
      />
      <CardFormInfoWrapper>
        <CardFormInfoItem>
          <CardFormLabel>exp.date(mm/yy)</CardFormLabel>
          <CardFormDateInputWrapper>
            <CardFormInfoInput placeholder="MM" />
            <CardFormInfoInput placeholder="YY" />
          </CardFormDateInputWrapper>
        </CardFormInfoItem>
        <CardFormInfoItem>
          <CardFormLabel>cvv</CardFormLabel>
          <CardFormInfoInput placeholder="e.g. 123" />
        </CardFormInfoItem>
      </CardFormInfoWrapper>
    </WrapperCardForm>
  );
}
