import { Account } from "./Account";
import { CreditCardCategory } from "./CreditCardCategory";

export class CreditCard {
    creditCardId: number;
    account: Account;
    creditCardCategory: CreditCardCategory;
    creditCardNumber: string;
    cvc: string;
    expirationDate: Date;
    parentCreditCard: CreditCard;
}