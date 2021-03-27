import { Account } from "./Account";

export class Cutoff {
    cutoffId: number;
    account: Account;
    date: Date;
    amount: number;
    minimunPayment: number;
}