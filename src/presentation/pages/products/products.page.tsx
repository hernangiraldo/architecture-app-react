import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react";
import {
    CreditCardsAdapterService
} from "../../../modules/credit-cards/infrastructure/adapters/credit-cards-adapter.service.ts";
import {CreditCard} from "../../../modules/credit-cards/domain/entities/CreditCard.ts";
import {
    CreditCardsGetterUseCase,
    UseCase
} from "../../../modules/credit-cards/application/use-cases/credit-cards-getter-use-case.ts";
import {CreditCardsRepository} from "../../../modules/credit-cards/domain/repositories/credit-cards.repository.ts";

type ContextProviderProps = {
    children: ReactNode;
};

const creditCardsAdapter: CreditCardsRepository = new CreditCardsAdapterService();
const creditCardsGetter = new CreditCardsGetterUseCase(creditCardsAdapter);

interface ProductContextType {
    creditCardsGetter: UseCase<Promise<CreditCard[]>>
}

const ProductsCtx = createContext<ProductContextType>({
    creditCardsGetter
});

const ProductsProvider = ({children}: ContextProviderProps) => {
    return (
        <ProductsCtx.Provider value={{
            creditCardsGetter
        }}>
            {children}
        </ProductsCtx.Provider>
    );
}

const useCreditCards = () => {
    const context = useContext(ProductsCtx);
    const [creditCards, setCreditCards] = useState<CreditCard[]>([]);

    const getCreditCards = useCallback(() => {
        context.creditCardsGetter.execute()
            .then(setCreditCards);
    }, [context.creditCardsGetter]);

    useEffect(() => {
        getCreditCards();
        return () => setCreditCards([])
    }, [getCreditCards]);

    return {
        creditCards,
        getCreditCards
    }
}

export function ProductsPage() {
    const {creditCards} = useCreditCards();

    return <ProductsProvider>
        <div>
            <ul>
                {
                    creditCards.map((creditCard: CreditCard) => {
                        return <li key={creditCard.productNumber}>{creditCard.productName}</li>
                    })
                }
            </ul>
        </div>
    </ProductsProvider>
}

