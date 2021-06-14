import React, { ReactElement } from "react";
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

    const onBack = currentSheetNumber % 2 == 0 ? true: false;
    let pageMap: string = '';
    let countTotal = 0;

    if (sheetSize > 1) {
        for (let row = 0; row < cardInfoNumbers.sheetRows; row++) {
            pageMap += '<div class="flex card-row justify-center items-center">';
            for (let column = 0; column < cardInfoNumbers.sheetColumns; column++) {
                countTotal++;
                const sheetIndex = countTotal;
                if ( sheetIndex >= cardPlacementInSheet && sheetIndex < cardPlacementInSheet + cardInfoNumbers.cardSpacing) {
                    pageMap += '<div class="flex-1 items-center max-w-xs py-40 rounded-md mx-3 my-1 bg-yellow-300 inline-block text-center">' + cardInfoNumbers.cardNumber + '</div>';
                }else{
                    const cardNumber = Math.ceil((currentSheetNumber * sheetSize - sheetSize + countTotal) / cardInfoNumbers.cardSpacing);
                    pageMap += '<div class="flex-1 items-center max-w-xs py-40 rounded-md mx-3 my-1 bg-blue-400 inline-block text-center">' + cardNumber + '</div>';
                }
            }
            pageMap += '</div>';
        }
    }

    return {
        cardPlacement: cardPlacement ? cardPlacement : '',
        sheetSize: sheetSize ? sheetSize : '', 
        currentSheetNumber: currentSheetNumber ? currentSheetNumber : '',
        lastIndexOnSheet: lastIndexOnSheet !== null ? lastIndexOnSheet : '', 
        cardPlacementInSheet: cardPlacementInSheet ? cardPlacementInSheet : '',
        onBack,
        pageMap: {__html: pageMap}
    };
}

export default cardSort;