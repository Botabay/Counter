import { ChangeEvent, useState } from 'react'
import s from './Input.module.css'

type PropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    // id?:string
}
export const Input = ({ 
    // id='',
    onChange, 
    value 
}: PropsType) => {
    return (
        <input
            type="number"
            onChange={onChange}
            value={value}
            // id={id}
        />
    )
}