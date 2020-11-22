import React, { ChangeEvent } from 'react';

const onChangeSet = (props: InputProps) => (e: ChangeEvent<HTMLInputElement>) => {
    if (props.value) return props.value[1](e.target.value);
    return e;
}
export interface InputProps {
    placeholder?: string;
    value?: [string, React.Dispatch<React.SetStateAction<string>>];
}

export const InputAtom = (props: InputProps) => {
    return <input 
        placeholder={props.placeholder} 
        value={props.value ? props.value[0] : ''} 
        onChange={onChangeSet(props)} 
    />;
}

export default InputAtom;