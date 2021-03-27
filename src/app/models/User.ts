import { Person } from "./Person";
import { Role } from "./Role";

export class User {
    userId: number;
    person: Person;
    role: Role;
    username: string;
    password: string;
}