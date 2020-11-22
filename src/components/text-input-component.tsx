import React from 'react';
import InputAtom, {InputProps} from '../atoms/input-atom';
import LabelAtom, { LabelProps } from '../atoms/label-atom';

export interface TextInputProps {
    inputProps?: InputProps
    labelProps?: LabelProps
}

export const TextInputComponent = (props: TextInputProps) => {
    const labelElement = LabelAtom(props.labelProps);
    return <div>
        {labelElement} 
        <InputAtom {...props.inputProps} />
    </div>;
}