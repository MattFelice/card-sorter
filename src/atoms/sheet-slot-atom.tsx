import React from 'react';

interface SheetSlotProp {
    cardNumber: number;
    key: string;
}

export const SheetSlotAtom = (props: SheetSlotProp) => {
    return <div className='flex-1 m-2 p-4 bg-gray-200 rounded-md text-center text-xl font-bold' key={props.key}>{props.cardNumber}</div>
}

export default SheetSlotAtom;