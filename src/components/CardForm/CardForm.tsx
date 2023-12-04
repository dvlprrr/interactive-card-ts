import { ChangeEvent } from "react";
import { CardNumberFormat } from "../../utils/payment";
import {
  CardFormInfoInput,
  CardFormInfoWrapper,
  CardFormInput,
  CardFormLabel,
  CardInfoItem,
  WrapperCardForm,
} from "./style";
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
        placeholder="e.g. Jane Appleseed  "
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          handleCardName(event.currentTarget.value);
        }}
      />
      <CardFormLabel>card number</CardFormLabel>
      <CardFormInput
        placeholder="e.g. 1234 5678 9123 0000"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          handleCardNumber(event.currentTarget.value);
          CardNumberFormat(event.currentTarget);
        }}
      />
      <CardFormInfoWrapper>
        <CardInfoItem>
          <CardFormLabel>Exp.Date</CardFormLabel>
          <CardFormInfoInput />
        </CardInfoItem>
        <CardInfoItem>
          <CardFormLabel>(MM/YY)</CardFormLabel>
          <CardFormInfoInput />
        </CardInfoItem>
        <CardInfoItem>
          <CardFormLabel>card number</CardFormLabel>
          <CardFormInfoInput />
        </CardInfoItem>
      </CardFormInfoWrapper>
    </WrapperCardForm>
  );
}
