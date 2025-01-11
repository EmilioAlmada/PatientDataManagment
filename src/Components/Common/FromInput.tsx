import React, { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    textArea?: boolean;
}

export const FromInput: React.FC<FormInputProps> = ({ name, label = '', onChange, textArea = false, value, ...rest }) => {
    if (textArea) {
        return (
            <div className="w-full flex flex-col">
                {label.length ? <label className="font-extralight" htmlFor={name}>{label}</label> : undefined}
                <textarea className="w-full border-1 border-black border rounded p-1" name={name} value={value} onChange={onChange} {...rest} />
            </div>
        );
    }
    return (
        <div className="w-full flex flex-col">
            {label ? <label className="font-extralight" htmlFor={name}>{label}</label> : undefined}
            <input className="border-1 border-black border rounded p-1" onChange={onChange} name={name} value={value} {...rest} />
        </div>
    );
};
