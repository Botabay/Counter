import { Input } from './Input'
import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react'

type PropsType = {
    text: string
    setErrorSt: Dispatch<SetStateAction<boolean>>
    setCountVisibilityMode: Dispatch<SetStateAction<boolean>>
    countVisibilityMode: boolean
    onInputChangeHandler:(e: ChangeEvent<HTMLInputElement>) =>void
}
export const SettingField = ({
    text,
    setErrorSt,
    setCountVisibilityMode,
    countVisibilityMode,
    onInputChangeHandler
}: PropsType) => {
    const [value, setValue] = useState<number>(0);
    
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