import { ChangeEvent, useState } from "react";
import {
  Button,
  CardFormDateInputWrapper,
  CardFormInfoInput,
  CardFormInfoItem,
  CardFormInfoWrapper,
  CardFormInput,
  CardFormLabel,
  ComplitedDescription,
  ComplitedTitle,
  ComplitedWrapper,
  DateInputWrapper,
  ErrorMessage,
  WrapperCardForm,
} from "./style";
import { CardNumberFormat, CvcFormat } from "../../utils/payment";
import { useForm, SubmitHandler } from "react-hook-form";
import { CardType } from "../../types/Card.type";
import completeImage from "../../images/complete.svg";
type PropType = {
  handleCardNumber: (value: string) => void;
  handleCardName: (value: string) => void;
  handleCardCvc: (value: string) => void;
  handleCardMonth: (value: string) => void;
  handleCardYear: (value: string) => void;
};
export default function CardForm({
  handleCardNumber,
  handleCardName,
  handleCardCvc,
  handleCardMonth,
  handleCardYear,
}: PropType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CardType>();
  const [isSuccessful, setIsSuccessful] = useState(false);
  const onSubmit: SubmitHandler<CardType> = () => {
    setIsSuccessful(true);
  };
  return (
    <>
      {Boolean(isSuccessful) ? (
        <ComplitedWrapper>
          <img src={completeImage} />
          <ComplitedTitle>thank you!</ComplitedTitle>
          <ComplitedDescription>
            We've added your card details
          </ComplitedDescription>
          <Button onClick={() => window.location.reload()} type="submit">
            Continue
          </Button>
        </ComplitedWrapper>
      ) : (
        <WrapperCardForm onSubmit={handleSubmit(onSubmit)}>
          <CardFormLabel>cardholder name</CardFormLabel>
          <CardFormInput
            {...register("name", {
              required: {
                value: true,
                message: "Can't be blank",
              },
              maxLength: {
                value: 21,
                message: "Maximum allowed length is 21 characters.",
              },
              minLength: {
                value: 2,
                message: "Minimum allowed length is 2 characters.",
              },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Wrong format, letters only",
              },
            })}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleCardName(e.target.value);
            }}
            placeholder="e.g. Jane Appleseed"
          />
          {Boolean(errors.name) && (
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          )}
          <CardFormLabel>card number</CardFormLabel>
          <CardFormInput
            {...register("number", {
              required: {
                value: true,
                message: "Can't be blank",
              },
              maxLength: {
                value: 19,
                message: "Maximum allowed length is 16 characters.",
              },
              minLength: {
                value: 19,
                message: "Minimum allowed length is 16 characters.",
              },
              pattern: {
                value: /^[0-9\s]+$/,
                message: "Wrong format, numbers only",
              },
            })}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              CardNumberFormat(e.target);
              handleCardNumber(e.target.value);
            }}
            placeholder="e.g. 1234 5678 9123 0000 "
          />
          {Boolean(errors.number) && (
            <ErrorMessage>{errors.number?.message}</ErrorMessage>
          )}
          <CardFormInfoWrapper>
            <CardFormInfoItem>
              <CardFormLabel>exp.date(mm/yy)</CardFormLabel>
              <CardFormDateInputWrapper>
                <DateInputWrapper>
                  {" "}
                  <CardFormInfoInput
                    {...register("expireMonth", {
                      required: {
                        value: true,
                        message: "Can't be blank",
                      },
                      maxLength: {
                        value: 2,
                        message: "Maximum allowed length is 2 characters.",
                      },
                      minLength: {
                        value: 1,
                        message: "Minimum allowed length is 1 characters.",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Wrong format, numbers only",
                      },
                      min: {
                        value: 1,
                        message: "Minimum value: 1",
                      },
                      max: {
                        value: 12,
                        message: "Maximum value: 12",
                      },
                    })}
                    maxLength={2}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      handleCardMonth(e.target.value);
                    }}
                    placeholder="MM"
                  />
                  {Boolean(errors.expireMonth) && (
                    <ErrorMessage>{errors.expireMonth?.message}</ErrorMessage>
                  )}
                </DateInputWrapper>
                <DateInputWrapper>
                  <CardFormInfoInput
                    {...register("expireYear", {
                      required: {
                        value: true,
                        message: "Can't be blank",
                      },
                      maxLength: {
                        value: 2,
                        message: "Maximum allowed length is 2 characters.",
                      },
                      minLength: {
                        value: 2,
                        message: "Minimum allowed length is 2 characters.",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Wrong format, numbers only",
                      },
                      min: {
                        value: 23,
                        message: "Minimum value: 23",
                      },
                    })}
                    maxLength={2}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      handleCardYear(e.target.value);
                    }}
                    placeholder="YY"
                  />
                  {Boolean(errors.expireYear) && (
                    <ErrorMessage>{errors.expireYear?.message}</ErrorMessage>
                  )}
                </DateInputWrapper>
              </CardFormDateInputWrapper>
            </CardFormInfoItem>
            <CardFormInfoItem>
              <CardFormLabel>cvc</CardFormLabel>
              <CardFormInfoInput
                {...register("cvc", {
                  required: {
                    value: true,
                    message: "Can't be blank",
                  },
                  maxLength: {
                    value: 4,
                    message: "Maximum allowed length is 4 characters.",
                  },
                  minLength: {
                    value: 3,
                    message: "Minimum allowed length is 3 characters.",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Wrong format, numbers only",
                  },
                })}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleCardCvc(e.target.value);
                  CvcFormat(e.target);
                }}
                placeholder="e.g. 123"
              />
              {Boolean(errors.cvc) && (
                <ErrorMessage>{errors.cvc?.message}</ErrorMessage>
              )}
            </CardFormInfoItem>
          </CardFormInfoWrapper>
          <Button type="submit">Confirm</Button>
        </WrapperCardForm>
      )}
    </>
  );
}
