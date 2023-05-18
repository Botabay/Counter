import { Input } from './Input'
import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react'

type PropsType = {
    text: string
    setErrorSt: Dispatch<SetStateAction<boolean>>
    setCountVisibilityMode: Dispatch<SetStateAction<boolean>>
    countVisibilityMode: boolean
}
export const SettingField = ({
    text,
    setErrorSt,
    setCountVisibilityMode,
    countVisibilityMode
}: PropsType) => {
    const [value, setValue] = useState<number>(0);
    const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorSt(false);
        if (values.min < 0
            // || values.min >= values.max
        ) {
            setErrorSt(true);
        } else {
            setValues({ ...values, min: Number(e.currentTarget.value) })
            //     setErrorSt(false);
        }
        countVisibilityMode && setCountVisibilityMode(!countVisibilityMode)
    }
    const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorSt(false);
        if (values.max <= values.min) {
            setErrorSt(true);
        } else {
            setValues({ ...values, max: Number(e.currentTarget.value) })
        }
        countVisibilityMode && setCountVisibilityMode(!countVisibilityMode)
    }
    return (
        <div className='Field'>
            <span>{text}</span>
            <Input
                onChange={onMaxInputChangeHandler}
                value={value}
            />
        </div>
    )
}