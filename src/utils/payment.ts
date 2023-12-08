import Payment from "payment";

export const CardNumberFormat = (elem: HTMLInputElement) => {
  return Payment.formatCardNumber(elem);
};
export const CvcFormat = (elem: HTMLInputElement) => {
  return Payment.formatCardCVC(elem);
};
