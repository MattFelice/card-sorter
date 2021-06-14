import React, { ChangeEvent, useState } from 'react';

const onChangeSet = (props: InputProps) => (e: ChangeEvent<HTMLInputElement>) => {
    if (props.useState) {
        if (props.modelKey) {
            return props.useState[1]({
                ...props.useState[0],
                [props.modelKey]: e.target.value
            });
        }

        return props.useState[1](e.target.value);
    }
    return e;
}
export interface InputProps {
    placeholder?: string;
    useState?: [any, React.Dispatch<React.SetStateAction<any>>];
    value?: string;
    modelKey?: string;
}

export const InputAtom = (props: InputProps) => {
    return <input className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-400"
        onChange={onChangeSet(props)}
        value={props.value}
        placeholder={props.placeholder}
    />;
}

export default InputAtom;