import { ChangeEvent } from 'react'
import s from './Input.module.css'

type PropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
}
export const Input = ({
    onChange,
    value,
}: PropsType):JSX.Element => {
    return (
        <input
            type="number"
            onChange={onChange}
            value={value}
        />
    )
}