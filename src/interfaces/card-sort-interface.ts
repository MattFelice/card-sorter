import { ReactElement } from "react";

export interface CardSortInterface {
    sheetSize: string | number,
    cardPlacement: string | number,
    cardPlacementInSheet: string | number,
    currentSheetNumber: string | number,
    lastIndexOnSheet: string | number,
    onBack: boolean,
    pageMap: {__html: string}
}
export interface CardSortNumberInterface extends CardSortInterface {
    sheetSize: number,
    cardPlacement: number,
    cardPlacementInSheet: number,
    currentSheetNumber: number,
    lastIndexOnSheet: number
}


export default CardSortInterface;