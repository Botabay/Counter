import { Input } from './Input'
import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react'

type PropsType = {
    text: string
    setErrorSt: Dispatch<SetStateAction<boolean>>
    onInputChangeHandler:(e: ChangeEvent<HTMLInputElement>) =>void
    value:number
}
export const SettingField = ({
    text,
    onInputChangeHandler,
    value
}: PropsType) => {
    return (
        <div className='Field'>
            <span>{text}</span>
            <Input
                onChange={onInputChangeHandler}
                value={value}
            />
        </div>
    )
}