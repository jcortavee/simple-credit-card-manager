import { Account } from "./Account";
import { CreditCard } from "./CreditCard";
import { TransactionType } from "./TransactionType";

export class Transaction {
    transactionId: number;
    account: Account;
    transactionType: TransactionType;
    date: Date;
    description: string;
    amount: number;
    creditCard: CreditCard;
}