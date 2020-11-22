import React, { ChangeEvent } from 'react';

interface InputProps {
    placeholder?: string;
    value?: [string, React.Dispatch<React.SetStateAction<string>>];
}

const onChangeSet = (props: InputProps) => (e: ChangeEvent<HTMLInputElement>) => {
    if (props.value) return props.value[1](e.target.value);
    return e;
}

export const inputAtom = (props: InputProps) => {
    return <input 
        placeholder={props.placeholder} 
        value={props.value ? props.value[0] : ''} 
        onChange={onChangeSet(props)} 
    />;
}

export default inputAtom;