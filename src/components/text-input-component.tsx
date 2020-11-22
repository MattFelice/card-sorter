import React from 'react';
import InputAtom, {InputProps} from '../atoms/input-atom';
import LabelAtom, { LabelProps } from '../atoms/label-atom';

export interface TextInputProps {
    inputProps?: InputProps
    labelProps?: LabelProps
    showBorder?: boolean;
}

export const TextInputComponent = (props: TextInputProps) => {
    const labelElement = LabelAtom(props.labelProps);
    const border = props.showBorder ? 'thin-border' : '';
    const className = ['m-3','p-4', border];

    return <div className={className.join(' ')}>
        {labelElement} 
        <InputAtom {...props.inputProps} />
    </div>;
}