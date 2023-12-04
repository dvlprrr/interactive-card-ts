import Payment from "payment";

export const CardNumberFormat = (elem: HTMLInputElement) => {
  return Payment.formatCardNumber(elem);
};
// console.log(Payment.fns.validateCardNumber("4242 4242 4242 4242"));

export const CvcFormat = (elem: HTMLInputElement) => {
  return Payment.formatCardCVC(elem);
};
export const DateFormat = (elem: HTMLInputElement) => {
  return Payment.formatCardExpiry(elem);
};
