import { Input } from './../Input/Input'
import { ChangeEvent, useState } from 'react'
import s from './SettingField.module.css'

type PropsType = {
    text: string
    onInputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    localErrorS?: boolean
}
export const SettingField = ({
    text,
    onInputChangeHandler,
    value,
    localErrorS,
}: PropsType) => {
    return (
        <div
            className={s.field
                + ' ' + (localErrorS ? s.error : '')
            }
        > {/*bad adding errorClass*/}
            <span>{text}</span>
            <Input
                onChange={onInputChangeHandler}
                value={value}
            />
        </div>
    )
}