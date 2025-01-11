import React from "react"

interface ButtonProps {
    customClassName?: string
    label?: string
    onClick: (e: any) => void
}

const Button: React.FC<ButtonProps> = React.memo(({ customClassName = '', label = '', onClick, ...rest }) => {
    return (
        <button className={"bg-blue-500 px-3 py-1 rounded w-20 text-white hover:bg-blue-700" + customClassName} onClick={onClick} {...rest}>{label}</button>
    )
})

export default Button
