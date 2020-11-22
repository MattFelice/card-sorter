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
    return <input className="w-full p-2 border-b-2 border-indigo-300 focus:outline-none focus:border-blue-400"
        placeholder={props.placeholder} 
        value={props.value ? props.value[0] : ''} 
        onChange={onChangeSet(props)} 
    />;
}

export default InputAtom;