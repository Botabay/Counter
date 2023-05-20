import { Input } from './Input'
import { ChangeEvent } from 'react'
import s from './SettingField.module.css'

type PropsType = {
    text: string
    onInputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    value:number
}
export const SettingField = ({
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
            />
        </div>
    )
}