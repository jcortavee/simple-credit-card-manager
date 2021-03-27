import { ApplicationStatus } from "./ApplicationStatus";
import { CreditCardCategory } from "./CreditCardCategory";
import { Person } from "./Person";

export class Application {
    applicationId: number;
    applicationStatus: ApplicationStatus;
    creditCardCategory: CreditCardCategory;
    person: Person;
    date: Date;
}