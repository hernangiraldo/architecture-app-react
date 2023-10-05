import { CreditCard } from "../entities/CreditCard";

export abstract class CreditCardsRepository {
  abstract getAll(): Promise<CreditCard[]>;
}
