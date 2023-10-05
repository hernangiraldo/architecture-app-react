import {CreditCardsRepository} from "../../domain/repositories/credit-cards.repository";
import {CreditCard} from "../../domain/entities/CreditCard";
import {dtoToCreditCard} from "../mappers/credit-card.mapper";
import {environment} from "../../../../env/env.dev.ts";

export class CreditCardsAdapterService extends CreditCardsRepository {
    async getAll(): Promise<CreditCard[]> {
        return fetch(`${environment.apiBaseUrl}/credit-cards`)
            .then(resp => resp.json())
            .then(dtoToCreditCard);
    }
}
