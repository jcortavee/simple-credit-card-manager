import { AccountStatus } from "./AccountStatus";
import { CreditCard } from "./CreditCard";
import { Customer } from "./Customer";
import { Cutoff } from "./Cutoff";
import { Transaction } from "./Transaction";

export class Account {
    accountId: number;
    accountNumber: string;
    customer: Customer;
    accountStatus: AccountStatus;
    date: Date;
    cutoffDay: number;
    paymentDay: number;
    minimunPayment: number;
    limit: number;
    interestRate: number;
    interestRateWithoutPayment: number;
    balance: number;
    creditCards: CreditCard[];
    transactions: Transaction[];
    cutoffs: Cutoff[];
}