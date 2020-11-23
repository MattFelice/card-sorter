import React, { useEffect, useRef } from 'react';
import SheetSlotAtom from "../atoms/sheet-slot-atom";

interface SheetProp {
    sheetRows?: number;
    sheetColumns?: number;
    currentPlacementInSheet?: number;
}

export const SheetComponent = (props: SheetProp) => {
    const sheetColumnElements = [<span></span>];

    useEffect(() => {
        let currentSheetCardNumber = 1;
        if (props.sheetColumns) {
            for(let columns = 0; columns < props.sheetColumns; columns++) {
                currentSheetCardNumber++;
                sheetColumnElements.push(SheetSlotAtom({cardNumber: currentSheetCardNumber}));
            }
        }
    }, [props]);

    return sheetColumnElements;
}