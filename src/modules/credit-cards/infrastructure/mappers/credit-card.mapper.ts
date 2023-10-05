import {CreditCardRespDto} from "../dtos/credit-cards-resp.dto";
import {CreditCard} from "../../domain/entities/CreditCard";

export const dtoToCreditCard = (dto: CreditCardRespDto[]): CreditCard[] => dto.map((creditCard) => (new CreditCard(
  creditCard.name,
  creditCard.number,
  creditCard.status,
)));
