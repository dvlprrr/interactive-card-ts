import Payment from "payment";

export const CardNumberFormat = (elem: HTMLInputElement) => {
  return Payment.formatCardNumber(elem);
};

export const DateFormat = (elem: HTMLInputElement) => {
  return Payment.formatCardExpiry(elem);
};
