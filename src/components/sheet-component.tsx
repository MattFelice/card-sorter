import React, { useEffect, useState } from 'react';
import SheetSlotAtom from "../atoms/sheet-slot-atom";
import { CardInputInterface } from '../interfaces/card-input-interface';
import CardSortInterface from '../interfaces/card-sort-interface';

interface SheetProp {
    cardSorted: CardSortInterface
    cardInputs: CardInputInterface
}

export const SheetComponent = (props: SheetProp) => {
    const [sheetRows, setSheetRows] = useState([] as JSX.Element[]);

    useEffect(() => {
    }, [props.cardInputs, props.cardSorted.lastIndexOnSheet]);

    return <div>
        {sheetRows}
    </div>;
}