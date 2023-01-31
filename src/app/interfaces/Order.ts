import { Book } from "./Book";
import { User } from "./User";

export interface Order {
    id: number,
    book: Book,
    user: User,
    startDate: Date,
    endDate: Date,
    returnDate?: Date,
    rentalType: string,
    state: string
}