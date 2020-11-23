import React from 'react';

interface SheetSlotProp {
    cardNumber: number;
}

export const SheetSlotAtom = (props: SheetSlotProp) => {
    return <div className='flex-1 m-2 p-4 bg-indigo-300'>{props.cardNumber}</div>
}

export default SheetSlotAtom;