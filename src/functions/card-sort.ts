import { CardSortInterface } from "../interfaces/card-sort-interface";

export const cardSort = (cardIndex: string, gridSize: [string, string] = ['3', '3'], cardSpacing: string = '4'): CardSortInterface => {
    const cardInfo = {
        cardIndex: parseInt(cardIndex, 10),
        gridSize: gridSize.map(value => parseInt(value, 10)),
        cardSpacing: parseInt(cardSpacing, 10)
    }

    const cardPlacement = cardInfo.cardSpacing > 1 ? cardInfo.cardIndex * cardInfo.cardSpacing - cardInfo.cardSpacing + 1 : cardInfo.cardIndex;
    const sheetSize = cardInfo.gridSize.reduce((accumulator, currentValue) => accumulator * currentValue);

    const currentSheetNumber = Math.ceil(cardPlacement / sheetSize);
    const lastIndexOnSheet = (currentSheetNumber * sheetSize) - sheetSize;

    let cardPlacementInSheet = cardPlacement % lastIndexOnSheet;
    console.log(cardPlacement <= sheetSize);
    if(cardPlacement <= sheetSize) cardPlacementInSheet = cardPlacement;
    else if(cardPlacementInSheet === 0) cardPlacementInSheet = lastIndexOnSheet;

    return {cardPlacement, sheetSize, currentSheetNumber, lastIndexOnSheet, cardPlacementInSheet};
}

export default cardSort;