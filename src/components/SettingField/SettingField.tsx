import { Input } from './../Input/Input'
import { ChangeEvent } from 'react'
import s from './SettingField.module.css'

type PropsType = {
    // id?:string
    text: string
    onInputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
}
export const SettingField = ({
    // id='',
    text,
    onInputChangeHandler,
    value
}: PropsType) => {
    return (
        <div className={s.field}>
            <span>{text}</span>
            <Input
                onChange={onInputChangeHandler}
                value={value}
                // id={id}
            />
        </div>
    )
}