import { CardInputInterface, CardInputInterfaceNumbers } from "../interfaces/card-input-interface";
import { CardSortInterface } from "../interfaces/card-sort-interface";

export const cardSort = (cardInfo: CardInputInterface): CardSortInterface => {
    const cardInfoNumbers = Object.keys(cardInfo).reduce((accumulator: any, objectKey: string) => {
        if (typeof accumulator !== 'object') {
            accumulator = {[accumulator]: parseInt((cardInfo as any)[accumulator])};
        }

        const currentValue = (cardInfo as any)[objectKey];
        accumulator[objectKey] = parseInt(currentValue, 10);

        return accumulator;
    }) as unknown as CardInputInterfaceNumbers;

    const cardPlacement = cardInfoNumbers.cardSpacing > 1 ? cardInfoNumbers.cardNumber * cardInfoNumbers.cardSpacing - cardInfoNumbers.cardSpacing + 1 : cardInfoNumbers.cardNumber;
    const sheetSize = cardInfoNumbers.sheetRows * cardInfoNumbers.sheetColumns;

    const currentSheetNumber = Math.ceil(cardPlacement / sheetSize);
    const lastIndexOnSheet = (currentSheetNumber * sheetSize) - sheetSize;

    let cardPlacementInSheet = cardPlacement % lastIndexOnSheet;
    if(cardPlacement <= sheetSize) cardPlacementInSheet = cardPlacement;
    else if(cardPlacementInSheet === 0) cardPlacementInSheet = lastIndexOnSheet;

    return {
        cardPlacement,
        sheetSize, 
        currentSheetNumber, 
        lastIndexOnSheet, 
        cardPlacementInSheet
    };
}

export default cardSort;