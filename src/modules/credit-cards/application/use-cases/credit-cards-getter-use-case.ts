import {CreditCardsRepository} from "../../domain/repositories/credit-cards.repository";
import {CreditCard} from "../../domain/entities/CreditCard";

export interface UseCase<T> {
  execute(): T;
}

export class CreditCardsGetterUseCase implements UseCase<Promise<CreditCard[]>> {
  constructor(private readonly creditCardsRepository: CreditCardsRepository) {}

  execute() {
    return this.creditCardsRepository.getAll();
  }

}
