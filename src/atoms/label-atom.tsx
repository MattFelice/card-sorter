import React from 'react';

export interface LabelProps {
    text?: string;
}

export const LabelAtom = (data?: LabelProps) => {
    if(data && data.text) {
        return <div className='text-lg font-bold'>{data.text}</div>;
    }

    return undefined;
}

export default LabelAtom;